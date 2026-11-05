import assert from 'node:assert/strict'
import { createServer } from 'node:http'
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { dirname, resolve, extname } from 'node:path'
import { createRequire } from 'node:module'
import puppeteer from 'puppeteer-core'
import sharp from 'sharp'
import ts from 'typescript'
import { NodeIO, type Mesh as GltfMesh, type Primitive } from '@gltf-transform/core'
import { Box3, Matrix4, Vector3, BufferGeometry, Float32BufferAttribute } from 'three'
import { ALL_EXTENSIONS } from '@gltf-transform/extensions'
import { weld, simplify, prune, copyToDocument, transformPrimitive, unpartition } from '@gltf-transform/functions'
import { MeshoptSimplifier } from 'meshoptimizer'
import { tunnelGeometry } from '../src/lib/home3d/world-geometry'

const require = createRequire(import.meta.url)
const threeRoot = resolve(dirname(require.resolve('three')), '..')
const sourceRoot = resolve('src/lib/home3d')
const output = resolve('public/models')
function cleanSculptureNormals(primitive: Primitive, smoothingPasses: number) {
  const attribute=primitive.getAttribute('POSITION')!,values=new Float32Array(attribute.getArray()!),indices=primitive.getIndices()!.getArray()!
  const keys=new Map<string,number>(),groups:number[]=[],points:Vector3[]=[],neighbors:Set<number>[]=[]
  for(let i=0;i<values.length;i+=3) {
    const key=[values[i],values[i+1],values[i+2]].map(v=>Math.round(v*100000)).join(',')
    let id=keys.get(key)
    if(id===undefined){id=points.length;keys.set(key,id);points.push(new Vector3(values[i],values[i+1],values[i+2]));neighbors.push(new Set())}
    groups.push(id)
  }
  if(smoothingPasses) {
    for(let i=0;i<indices.length;i+=3) for(let j=0;j<3;j++) {
      const a=groups[indices[i+j]],b=groups[indices[i+(j+1)%3]];neighbors[a].add(b);neighbors[b].add(a)
    }
    for(const weight of Array.from({length:smoothingPasses},(_,i)=>i%2?-.46:.45)) {
      const next=points.map((point,i)=>{
        if(!neighbors[i].size)return point.clone()
        const average=new Vector3();for(const adjacent of neighbors[i])average.add(points[adjacent])
        return point.clone().lerp(average.divideScalar(neighbors[i].size),weight)
      });next.forEach((point,i)=>points[i].copy(point))
    }
    groups.forEach((id,i)=>points[id].toArray(values,i*3))
  }
  const geometry=new BufferGeometry();geometry.setAttribute('position',new Float32BufferAttribute(values,3));geometry.setIndex(Array.from(indices));geometry.computeVertexNormals()
  const normals=geometry.getAttribute('normal'),averages=points.map(()=>new Vector3())
  groups.forEach((id,i)=>averages[id].add(new Vector3().fromBufferAttribute(normals,i)))
  averages.forEach(normal=>normal.normalize())
  const clean=new Float32Array(values.length);groups.forEach((id,i)=>averages[id].toArray(clean,i*3))
  attribute.setArray(values);primitive.getAttribute('NORMAL')!.setArray(clean);primitive.setAttribute('TANGENT',null);geometry.dispose()
}
async function updateOrnaments() {
    await MeshoptSimplifier.ready
    const sources=[['Slipstream','search'],['OrbitKnot','core'],['FoldedRibbon','growth'],['PetalBloom','cursor']]
    for(const detail of ['desktop','mobile']) {
      const io=new NodeIO().registerExtensions(ALL_EXTENSIONS),path=`${output}/falcon-wing-${detail}.glb`,document=await io.read(path)
      for(const [slot,name] of sources) {
        const source=await io.read(`assets/home3d/meshy-${name}-source.glb`)
        const meshes=source.getRoot().listMeshes()
        assert.equal(meshes.length,1,`${name}: expected one coherent sculptural mesh`)
        const mesh=meshes[0],node=source.getRoot().listNodes().find(n=>n.getMesh()===mesh)!
        const bounds=new Box3()
        for(const primitive of mesh.listPrimitives()) {
          transformPrimitive(primitive,node.getWorldMatrix())
          const position=primitive.getAttribute('POSITION')!
          bounds.expandByPoint(new Vector3().fromArray(position.getMin([])))
          bounds.expandByPoint(new Vector3().fromArray(position.getMax([])))
        }
        const center=bounds.getCenter(new Vector3()),size=bounds.getSize(new Vector3()),scale=4/Math.max(size.x,size.y,size.z)
        const matrix=new Matrix4().makeScale(scale,scale,scale).multiply(name==='cursor'?new Matrix4().makeRotationZ(-Math.PI/4).multiply(new Matrix4().makeRotationX(Math.PI/2)):new Matrix4().makeRotationY(Math.PI)).multiply(new Matrix4().makeTranslation(-center.x,-center.y,-center.z))
        for(const primitive of mesh.listPrimitives()) transformPrimitive(primitive,matrix.elements)
        const triangles=mesh.listPrimitives().reduce((n,p)=>n+p.getIndices()!.getCount()/3,0),budget=name==='core'?(detail==='mobile'?5000:8000):(detail==='mobile'?1600:4500)
        await source.transform(weld(),simplify({simplifier:MeshoptSimplifier,ratio:Math.min(1,budget/triangles),error:detail==='mobile'?.008:.004}),prune())
        for(const primitive of mesh.listPrimitives())cleanSculptureNormals(primitive,name==='core'||name==='growth'?30:name==='cursor'?0:12)
        for(const texture of source.getRoot().listTextures()) {
          const image=texture.getImage();if(!image)continue
          const normal=source.getRoot().listMaterials().some(m=>m.getNormalTexture()===texture)
          const length=normal?(detail==='mobile'?128:192):(detail==='mobile'?512:1024)
          let resized=sharp(image).resize(length,length,{fit:'inside',withoutEnlargement:true})
          if(source.getRoot().listMaterials().some(m=>m.getBaseColorTexture()===texture)) {
            const {data,info}=await resized.removeAlpha().raw().toBuffer({resolveWithObject:true})
            // Remove baked studio shading while retaining Meshy's blue inlay mask.
            for(let i=0;i<data.length;i+=info.channels) {
              const saturation=(data[i+2]-Math.max(data[i],data[i+1]))/(data[i+2]+1)
              const blue=name==='growth'?0:saturation>.09?1:0
              for(let c=0;c<3;c++)data[i+c]=Math.round([193,204,221][c]*(1-blue)+[24,53,198][c]*blue)
            }
            resized=sharp(data,{raw:{width:info.width,height:info.height,channels:info.channels}})
          }
          const bytes=await resized.png({compressionLevel:9,palette:true,colours:8}).toBuffer()
          texture.setImage(bytes).setMimeType('image/png')
        }
        const material=mesh.listPrimitives()[0].getMaterial()!
        material.setName(`Falcon_${name}`).setNormalTexture(null).setMetallicRoughnessTexture(null).setMetallicFactor(.85).setRoughnessFactor(name==='growth'?.42:.34)
        const copied=copyToDocument(document,source,[mesh]).get(mesh) as GltfMesh
        const target=document.getRoot().listNodes().find(n=>n.getName()===slot)!
        target.setMesh(copied).setExtras({meaning:name,source:'Meshy'})
        console.log(`${detail} ${name}: ${copied.listPrimitives().reduce((n,p)=>n+p.getIndices()!.getCount()/3,0)} triangles`)
      }
      const wall=document.getRoot().listNodes().find(n=>n.getName()==='BrandTunnel')!.getMesh()!.listPrimitives()[0]
      if(!wall.getAttribute('TEXCOORD_0')) {
        const reference=tunnelGeometry(detail==='mobile')
        wall.setAttribute('TEXCOORD_0',document.createAccessor().setType('VEC2').setArray(new Float32Array(reference.getAttribute('uv').array)).setBuffer(document.getRoot().listBuffers()[0]))
        reference.dispose()
      }
      await document.transform(prune({keepAttributes:true}),unpartition())
      const bytes=await io.writeBinary(document)
      assert(bytes.length<(detail==='mobile'?1600000:3600000),`${detail}: model budget exceeded (${bytes.length})`)
      await writeFile(path,bytes);console.log(`${detail}: ${bytes.length} bytes`)
    }
}
async function main() {
  await mkdir(output, { recursive: true })
  const preview=process.argv.includes('--preview')
  if(process.argv.includes('--tunnel-only')) {
    for(const detail of ['desktop','mobile']) {
      const io=new NodeIO().registerExtensions(ALL_EXTENSIONS),path=`${output}/falcon-wing-${detail}.glb`,document=await io.read(path)
      const primitive=document.getRoot().listNodes().find(node=>node.getName()==='BrandTunnel')?.getMesh()?.listPrimitives()[0]
      assert(primitive,'BrandTunnel is missing')
      const geometry=tunnelGeometry(detail==='mobile')
      for(const [semantic,name] of [['POSITION','position'],['NORMAL','normal'],['TEXCOORD_0','uv']])primitive.getAttribute(semantic)!.setArray(new Float32Array(geometry.getAttribute(name).array))
      primitive.getIndices()!.setArray(new Uint16Array(geometry.index!.array))
      await io.write(path,document);geometry.dispose();console.log(`Updated ${detail} square tunnel`)
    }
    return
  }
  if(process.argv.includes('--ornaments-only')) { await updateOrnaments(); return }
  await MeshoptSimplifier.ready
  const prepared = new Map<string, Uint8Array>()
  for (const detail of preview ? [] : ['desktop', 'mobile'] as const) {
    const io = new NodeIO(), document = await io.read('assets/home3d/meshy-falcon-source.glb')
    assert.equal(document.getRoot().listMeshes().length, 6, 'Expected six Meshy parts')
    for (const mesh of document.getRoot().listMeshes()) for (const primitive of mesh.listPrimitives()) primitive.setAttribute('COLOR_0', null)
    await document.transform(weld(), simplify({ simplifier: MeshoptSimplifier, ratio: detail === 'desktop' ? 0.095 : 0.032, error: detail === 'desktop' ? 0.001 : 0.003 }), prune())
    prepared.set(`/source-${detail}.glb`, await io.writeBinary(document))
    for (const name of ['slipstream', 'knot', 'rotor', 'petal']) {
      const ornament = await io.read(`assets/home3d/meshy-${name}-source.glb`)
      for (const mesh of ornament.getRoot().listMeshes()) for (const primitive of mesh.listPrimitives()) {
        for (const semantic of primitive.listSemantics()) if (semantic !== 'POSITION') primitive.setAttribute(semantic, null)
        primitive.setMaterial(null)
      }
      await ornament.transform(weld(), simplify({ simplifier: MeshoptSimplifier, ratio: detail === 'desktop' ? 0.04 : 0.016, error: 0.002 }), prune())
      prepared.set(`/${name}-${detail}.glb`, await io.writeBinary(ornament))
    }
  }
  const server = createServer(async (req, res) => {
    res.setHeader('Cache-Control','no-store')
    try {
      const url = new URL(req.url!, 'http://localhost')
      if(preview && req.method==='POST' && url.pathname==='/export-object') {
        const name=url.searchParams.get('name')!
        assert(['PetalBloom','OrbitKnot','Slipstream','FoldedRibbon'].includes(name),'Unknown ornament')
        const chunks:Buffer[]=[];let size=0
        for await(const chunk of req){size+=chunk.length;assert(size<4000000,'Image exceeds preview budget');chunks.push(chunk)}
        const png=Buffer.concat(chunks);assert.equal(png.subarray(0,8).toString('hex'),'89504e470d0a1a0a','Expected PNG')
        await writeFile(`/tmp/falcon-ornament-${name}.png`,png);res.end('Export complete');return
      }
      const source = prepared.get(url.pathname)
      if (source) { res.setHeader('Content-Type', 'model/gltf-binary'); res.end(source); return }
      if (url.pathname === '/') {
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end('<!doctype html><style>body{margin:0}canvas{display:block;width:100vw;height:100vh}</style><script type="importmap">{"imports":{"three":"/three/build/three.module.js","three/addons/":"/three/examples/jsm/"}}</script><canvas id="stage"></canvas>'+ (preview ? `<script type="module">
          import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
          import {createHomeStage} from '/scene';
          import * as T from 'three';
          import {RoomEnvironment} from 'three/addons/environments/RoomEnvironment.js';
          try {
            const params=new URLSearchParams(location.search),mobile=params.get('mobile')==='1';
            if(params.has('dpr'))Object.defineProperty(window,'devicePixelRatio',{value:Math.max(1,Math.min(3,Number(params.get('dpr'))||1))});
            const model=await new GLTFLoader().loadAsync('/models/falcon-wing-'+(mobile?'mobile':'desktop')+'.glb');
            if(params.get('object')) {
              const renderer=new T.WebGLRenderer({canvas:document.querySelector('canvas'),alpha:true,antialias:true});renderer.setSize(innerWidth,innerHeight);renderer.setClearColor(0,0);renderer.toneMapping=T.ACESFilmicToneMapping;
              const scene=new T.Scene(),camera=new T.PerspectiveCamera(38,innerWidth/innerHeight,.1,100),room=new RoomEnvironment(),pmrem=new T.PMREMGenerator(renderer);
              scene.environment=pmrem.fromScene(room,.04).texture;const mesh=model.scene.getObjectByName(params.get('object')).clone();mesh.rotation.set(.08,-.25,0);scene.add(mesh);
              camera.position.set(0,0,8);camera.lookAt(0,0,0);scene.add(new T.AmbientLight(0xffffff,.8));const key=new T.DirectionalLight(0xffffff,2);key.position.set(-4,6,5);scene.add(key);renderer.render(scene,camera);
              const button=document.createElement('button');button.textContent='Export transparent PNG';button.style.cssText='position:fixed;bottom:12px;left:12px;padding:12px';button.onclick=async()=>{try{renderer.render(scene,camera);const blob=await new Promise(resolve=>renderer.domElement.toBlob(resolve));if(!blob)throw Error('Canvas PNG export failed');const response=await fetch('/export-object?name='+params.get('object'),{method:'POST',body:blob});if(!response.ok)throw Error(await response.text());button.textContent=await response.text();}catch(error){button.textContent=String(error);}};document.body.appendChild(button);document.body.dataset.ready='true';
            } else {
            const stage=createHomeStage(document.querySelector('canvas'),model.scene,mobile);
            stage.resize(innerWidth,innerHeight);
            for(let i=0;i<Math.min(5,Math.max(0,Number(params.get('quality'))||0));i++)stage.reduceQuality();
            const mode=['hero','manifesto'].includes(params.get('scene'))?params.get('scene'):'journey';
            const progress=mode==='hero'?0:mode==='manifesto'?.35:({gallery:.73,corridor:.315,tunnel:.5,entry:.02,finale:1}[params.get('scene')]??.73);
            const time=Number(params.get('time')||0);
            const render=()=>{stage.resize(innerWidth,innerHeight);stage.render(mode,progress,time);};
            if(params.has('quality')){const button=document.createElement('button');button.textContent='Restore quality';button.style.cssText='position:fixed;bottom:12px;left:12px;padding:12px;z-index:2';button.onclick=()=>{stage.restoreQuality();render();};document.body.appendChild(button);}
            render();addEventListener('resize',render);document.body.dataset.ready='true';
            }
          }catch(error){document.body.textContent=error.stack??String(error);}
        </script>` : ''))
        return
      }
      if(/^\/models\/falcon-wing-(desktop|mobile)\.glb$/.test(url.pathname)) {
        res.setHeader('Content-Type','model/gltf-binary');res.end(await readFile(resolve('public',url.pathname.slice(1))));return
      }
      const isThree = url.pathname.startsWith('/three/')
      const root = isThree ? threeRoot : sourceRoot
      const name = isThree ? url.pathname.slice(7) : `${url.pathname.slice(1).replace(/\.js$/, '')}.ts`
      const path = resolve(root, name)
      assert(path.startsWith(root + '/'), 'Path outside asset root')
      let content = await readFile(path, 'utf8')
      if (extname(path) === '.ts') content = ts.transpileModule(content, { compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext } }).outputText
      res.setHeader('Content-Type', 'text/javascript'); res.end(content)
    } catch (error) { res.statusCode = 500; res.end(String(error)) }
  })
  await new Promise<void>(resolve => server.listen(0, '127.0.0.1', resolve))
  const port = (server.address() as { port: number }).port
  if(preview){console.log(`Model preview: http://127.0.0.1:${port}/?scene=gallery`);return}
  const browser = await puppeteer.launch({ executablePath: process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true })
  try {
    const page = await browser.newPage()
    page.on('pageerror', error => { throw error })
    await page.setViewport({ width: 1600, height: 1000, deviceScaleFactor: 1 })
    await page.goto(`http://127.0.0.1:${port}`, { waitUntil: 'networkidle0' })
    for (const detail of ['desktop', 'mobile']) {
      const bytes = await page.evaluate(`(async () => {
        const {createSculpture} = await import('/model');
        const {GLTFExporter} = await import('three/addons/exporters/GLTFExporter.js');
        const {GLTFLoader} = await import('three/addons/loaders/GLTFLoader.js');
        const source = (await new GLTFLoader().loadAsync('/source-${detail}.glb')).scene;
        const ornaments = await Promise.all(['slipstream','knot','rotor','petal'].map(async name => (await new GLTFLoader().loadAsync('/' + name + '-${detail}.glb')).scene));
        const model = createSculpture('${detail}', source, ornaments);
        if ('${detail}' === 'desktop') window.homeModel = model;
        const buffer = await new GLTFExporter().parseAsync(model, {binary: true});
        return Array.from(new Uint8Array(buffer));
      })()`)
      const buffer = Buffer.from(bytes as number[])
      assert.equal(buffer.toString('utf8', 0, 4), 'glTF')
      assert(buffer.length < (detail === 'desktop' ? 3_600_000 : 1_600_000), 'Model exceeds near-surface geometry budget')
      await writeFile(`${output}/falcon-wing-${detail}.glb`, buffer)
      console.log(`${detail}: ${buffer.length} bytes`)
    }
    await updateOrnaments()
    await page.evaluate(`(async () => {
      const {createHomeStage} = await import('/scene');
      const {GLTFLoader} = await import('three/addons/loaders/GLTFLoader.js');
      const approved = await new GLTFLoader().loadAsync('/models/falcon-wing-desktop.glb');
      window.homeModel = approved.scene;
      window.stage = createHomeStage(document.querySelector('canvas'), approved.scene, false);
      window.stage.resize(innerWidth, innerHeight);
    })()`)
    for (const [name, mode, progress] of [
      ['hero', 'hero', 0], ['manifesto', 'manifesto', 0.35], ['entry', 'journey', 0.02], ['corridor', 'journey', 0.28],
      ['tunnel', 'journey', 0.5], ['gallery', 'journey', 0.73], ['finale', 'journey', 1],
    ] as const) {
      await page.evaluate(`window.stage.render('${mode}', ${progress}, 0)`)
      const screenshot = await page.screenshot()
      await sharp(screenshot).webp({ quality: 88 }).toFile(`${output}/falcon-${name}.webp`)
      console.log(`Poster: ${name}`)
    }
    await page.evaluate('window.stage.dispose()')
    await page.setViewport({ width: 780, height: 608, deviceScaleFactor: 1 })
    await page.evaluate(`(async()=>{const {createHomeStage}=await import('/scene');const {GLTFLoader}=await import('three/addons/loaders/GLTFLoader.js');const model=await new GLTFLoader().loadAsync('/models/falcon-wing-mobile.glb');window.stage=createHomeStage(document.querySelector('canvas'),model.scene,true);window.stage.resize(innerWidth,innerHeight);window.stage.render('hero',0,0)})()`)

    await sharp(await page.screenshot()).webp({ quality: 88 }).toFile(`${output}/falcon-hero-mobile.webp`)
    await page.evaluate('window.stage.dispose()')
    await page.setViewport({ width: 640, height: 760, deviceScaleFactor: 1 })
    await page.evaluate(`(async () => {
      const T = await import('three');
      const {RoomEnvironment} = await import('three/addons/environments/RoomEnvironment.js');
      document.querySelector('canvas').remove(); document.body.style.background = 'transparent';
      const renderer = new T.WebGLRenderer({alpha: true, antialias: true});
      renderer.setSize(innerWidth, innerHeight); renderer.toneMapping = T.ACESFilmicToneMapping;
      document.body.appendChild(renderer.domElement);
      const scene = new T.Scene(), camera = new T.PerspectiveCamera(35, innerWidth / innerHeight, .1, 100);
      const room = new RoomEnvironment(), pmrem = new T.PMREMGenerator(renderer), environment = pmrem.fromScene(room, .04);
      scene.environment = environment.texture;
      const source = window.homeModel.getObjectByName('FoldedRibbon');
      const blade = new T.Mesh(source.geometry, source.material); blade.scale.setScalar(1.7);
      blade.position.y = 0; blade.rotation.set(.1, .45, -.3); scene.add(blade);
      camera.position.set(0, 0, 14); camera.lookAt(0, 0, 0); renderer.render(scene, camera);
      window.cleanupFeather = () => { environment.dispose(); room.dispose(); pmrem.dispose(); renderer.dispose(); };
    })()`)
    await sharp(await page.screenshot({ omitBackground: true })).webp({ quality: 90 }).toFile(`${output}/falcon-growth.webp`)
    await page.evaluate('window.cleanupFeather()')
    const readme = await readFile('README.md', 'utf8')
    await writeFile('README.md', readme.replace(/模型資產重生時間：[^\n]*/, `模型資產重生時間：${new Date().toISOString()}`))
  } finally { await browser.close(); await new Promise<void>(resolve => server.close(() => resolve())) }
}
main().catch(error => { console.error(error); process.exitCode = 1 })
