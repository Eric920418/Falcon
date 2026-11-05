import assert from 'node:assert/strict'
import { createServer } from 'node:http'
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { dirname, resolve, extname } from 'node:path'
import { createRequire } from 'node:module'
import puppeteer from 'puppeteer-core'
import sharp from 'sharp'
import ts from 'typescript'
import { NodeIO } from '@gltf-transform/core'
import { ALL_EXTENSIONS } from '@gltf-transform/extensions'
import { weld, simplify, prune } from '@gltf-transform/functions'
import { MeshoptSimplifier } from 'meshoptimizer'
import { tunnelGeometry } from '../src/lib/home3d/world-geometry'

const require = createRequire(import.meta.url)
const threeRoot = resolve(dirname(require.resolve('three')), '..')
const sourceRoot = resolve('src/lib/home3d')
const output = resolve('public/models')
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
    try {
      const url = new URL(req.url!, 'http://localhost')
      const source = prepared.get(url.pathname)
      if (source) { res.setHeader('Content-Type', 'model/gltf-binary'); res.end(source); return }
      if (url.pathname === '/') {
        res.setHeader('Content-Type', 'text/html')
        res.end('<!doctype html><style>body{margin:0}canvas{display:block;width:100vw;height:100vh}</style><script type="importmap">{"imports":{"three":"/three/build/three.module.js","three/addons/":"/three/examples/jsm/"}}</script><canvas id="stage"></canvas>'+ (preview ? `<script type="module">
          import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
          import {createHomeStage} from '/scene';
          try {
            const params=new URLSearchParams(location.search),mobile=params.get('mobile')==='1';
            const model=await new GLTFLoader().loadAsync('/models/falcon-wing-'+(mobile?'mobile':'desktop')+'.glb');
            const stage=createHomeStage(document.querySelector('canvas'),model.scene,mobile);
            const mode=params.get('scene')==='hero'?'hero':'journey';
            const progress=mode==='hero'?0:({gallery:.73,corridor:.315,finale:1}[params.get('scene')]??.73);
            const time=Number(params.get('time')||0);
            const render=()=>{stage.resize(innerWidth,innerHeight);stage.render(mode,progress,time);};
            render();addEventListener('resize',render);document.body.dataset.ready='true';
          }catch(error){document.body.textContent=error.stack??String(error);}
        </script>` : ''))
        return
      }
      if(preview && /^\/models\/falcon-wing-(desktop|mobile)\.glb$/.test(url.pathname)) {
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
    await page.evaluate(`(async () => {
      const {createHomeStage} = await import('/scene');
      window.stage = createHomeStage(document.querySelector('canvas'), window.homeModel, false);
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
    await page.setViewport({ width: 780, height: 1100, deviceScaleFactor: 1 })
    await page.evaluate('window.stage.resize(innerWidth,innerHeight); window.stage.render("hero",0,0)')
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
    await sharp(await page.screenshot({ omitBackground: true })).webp({ quality: 90 }).toFile(`${output}/falcon-rotor.webp`)
    await page.evaluate('window.cleanupFeather()')
    const readme = await readFile('README.md', 'utf8')
    await writeFile('README.md', readme.replace(/模型資產重生時間：[^\n]*/, `模型資產重生時間：${new Date().toISOString()}`))
  } finally { await browser.close(); await new Promise<void>(resolve => server.close(() => resolve())) }
}
main().catch(error => { console.error(error); process.exitCode = 1 })
