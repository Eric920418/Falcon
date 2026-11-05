import { createServer } from 'node:http'
import { readFile, writeFile } from 'node:fs/promises'
import { mkdirSync } from 'node:fs'
import { createRequire } from 'node:module'
import { dirname, resolve } from 'node:path'
import assert from 'node:assert/strict'

// Local authoring tool only; the website downloads the rendered movie, never this GLB.
const threeRoot = resolve(dirname(createRequire(import.meta.url).resolve('three')), '..')
const frames = '/tmp/falcon-loading-frames'
mkdirSync(frames, { recursive: true })
const html = `<!doctype html><meta charset="utf-8"><title>Meshy Loading — render</title>
<style>body{margin:0;background:#ecedf3;font:16px sans-serif;color:#14161d}canvas{width:min(80vh,90vw);height:min(80vh,90vw);display:block;margin:auto}footer{padding:20px;text-align:center}button{padding:12px}pre{white-space:pre-wrap;overflow-wrap:anywhere}</style>
<script type="importmap">{"imports":{"three":"/three/build/three.module.js","three/addons/":"/three/examples/jsm/"}}</script>
<canvas></canvas><footer><button disabled>輸出 180 幀</button><p role="status">Loading model</p><pre role="alert"></pre></footer>
<script type="module">
import * as T from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
const status=document.querySelector('[role=status]'), button=document.querySelector('button');
function fail(error){document.querySelector('[role=alert]').textContent=error.stack||String(error);}
try {
 const renderer=new T.WebGLRenderer({canvas:document.querySelector('canvas'),antialias:true,preserveDrawingBuffer:true});
 renderer.setSize(960,960,false);renderer.setPixelRatio(1);renderer.setClearColor('#ecedf3');renderer.toneMapping=T.ACESFilmicToneMapping;renderer.toneMappingExposure=1.25;
 const scene=new T.Scene(),camera=new T.PerspectiveCamera(34,1,.1,100);
 const room=new RoomEnvironment(),pmrem=new T.PMREMGenerator(renderer),env=pmrem.fromScene(room,.03);scene.environment=env.texture;
 const model=(await new GLTFLoader().loadAsync('/model.glb')).scene;
 const bounds=new T.Box3().setFromObject(model),size=bounds.getSize(new T.Vector3()),center=bounds.getCenter(new T.Vector3());
 model.position.sub(center);const pivot=new T.Group();pivot.add(model);pivot.scale.setScalar(4.7/Math.max(size.x,size.y,size.z));scene.add(pivot);
 camera.position.set(0,.1,9);camera.lookAt(0,0,0);
 const key=new T.DirectionalLight('#ffffff',3);key.position.set(-3,5,5);scene.add(key);
 const fill=new T.DirectionalLight('#c3d3ff',1.5);fill.position.set(4,1,-2);scene.add(fill);
 function draw(frame){const phase=frame/180*Math.PI*2;pivot.rotation.set(.06*Math.sin(phase),Math.PI-.28+Math.sin(phase)*.36,-.12+Math.cos(phase)*.07);pivot.position.y=.08*Math.sin(phase);renderer.render(scene,camera);}
 draw(0);status.textContent='Ready — Meshy source model';button.disabled=false;
 button.onclick=async()=>{
  button.disabled=true;
  try {for(let i=0;i<180;i++){draw(i);const blob=await new Promise(resolve=>renderer.domElement.toBlob(resolve,'image/png'));const r=await fetch('/frame/'+i,{method:'POST',body:blob});if(!r.ok)throw new Error(await r.text());status.textContent=(i+1)+' / 180';await new Promise(requestAnimationFrame);}status.textContent='COMPLETE — 180 frames';}
  catch(error){fail(error);}finally{button.disabled=false;}
 };
 addEventListener('pagehide',()=>{env.dispose();room.dispose();pmrem.dispose();model.traverse(o=>{if(o.isMesh){o.geometry.dispose();for(const m of [].concat(o.material)){for(const v of Object.values(m))if(v?.isTexture)v.dispose();m.dispose();}}});renderer.dispose();});
}catch(error){fail(error);}
</script>`
const server = createServer(async (req, res) => {
  try {
    const url = new URL(req.url!, 'http://127.0.0.1')
    if (req.method === 'POST' && /^\/frame\/\d{1,3}$/.test(url.pathname)) {
      const index = Number(url.pathname.split('/').pop()); assert(index < 180)
      let bytes = 0; const chunks: Buffer[] = []
      for await (const chunk of req) { bytes += chunk.length; assert(bytes < 10000000); chunks.push(chunk) }
      await writeFile(`${frames}/${String(index).padStart(3,'0')}.png`, Buffer.concat(chunks)); res.end('OK'); return
    }
    assert.equal(req.method, 'GET')
    if (url.pathname === '/') { res.setHeader('Content-Type','text/html'); res.end(html); return }
    if (url.pathname === '/model.glb') { res.setHeader('Content-Type','model/gltf-binary'); res.end(await readFile('assets/home3d/meshy-loading-source.glb')); return }
    assert(url.pathname.startsWith('/three/'))
    const file=resolve(threeRoot,url.pathname.slice(7)); assert(file.startsWith(threeRoot+'/'))
    res.setHeader('Content-Type','text/javascript');res.end(await readFile(file))
  } catch(error) { res.statusCode=500;res.end(error instanceof Error ? error.stack : String(error)) }
})
server.listen(0,'127.0.0.1',()=>console.log(`Render: http://127.0.0.1:${(server.address() as {port:number}).port}`))
