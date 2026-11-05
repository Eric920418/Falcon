import {
  ACESFilmicToneMapping, AmbientLight, Color, DirectionalLight, Fog,
  Group, InstancedMesh, MathUtils, Mesh, MeshPhysicalMaterial, MeshStandardMaterial,
  MeshBasicMaterial, PerspectiveCamera, PlaneGeometry, PMREMGenerator, Scene,
  SRGBColorSpace, Vector3, Points, Plane, ShaderMaterial, WebGLRenderer, WebGLRenderTarget, type BufferGeometry, type Material,
} from 'three'
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js'
import { birdPose, journeyPose, smooth, wingBeat } from './choreography'

import { flightScale, wingEnvelope } from './surfaces'
import { createFlightParticles } from './particles'
import { createJourneyWorld } from './world'
import { portalWorldMatrix } from './portal'

export type HomeStage = ReturnType<typeof createHomeStage>
export function createHomeStage(canvas: HTMLCanvasElement, asset: Group, mobile: boolean) {
  const sculpture = asset.getObjectByName('Wing') as Group
  const originalFrame = asset.getObjectByName('Portal') as Mesh
  const slipstream = asset.getObjectByName('Slipstream') as Mesh
  const knot = asset.getObjectByName('OrbitKnot') as Mesh, folded = asset.getObjectByName('FoldedRibbon') as Mesh, petal = asset.getObjectByName('PetalBloom') as Mesh
  if (!sculpture || !originalFrame || !slipstream?.geometry || !knot?.geometry || !folded?.geometry || !petal?.geometry) throw new Error('MODEL_INVALID: Wing, Portal, Slipstream, OrbitKnot, FoldedRibbon or PetalBloom is missing')
  let deformableWings = 0
  sculpture.traverse(object => { if (object instanceof Mesh && object.morphTargetInfluences?.length === 2) deformableWings++ })
  if (deformableWings !== 2) throw new Error('MODEL_INVALID: two deformable wings are required')
  const renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' })
  renderer.debug.onShaderError = (gl, program, vertex, fragment) => {
    throw new Error(`SHADER_ERROR\n${gl.getProgramInfoLog(program)}\n${gl.getShaderInfoLog(vertex)}\n${gl.getShaderInfoLog(fragment)}`)
  }
  renderer.localClippingEnabled = true
  renderer.outputColorSpace = SRGBColorSpace
  renderer.toneMapping = ACESFilmicToneMapping
  const scene = new Scene(), camera = new PerspectiveCamera(38, 1, 0.08, 200)
  const pmrem = new PMREMGenerator(renderer), room = new RoomEnvironment()
  room.dispose(); room.clear(); room.background = new Color(0x727c8e)
  for (const [x, y, z, w, h] of [[-5, 6, 4, 7, 10], [7, 2, 2, 4, 9], [0, 7, -4, 10, 4]]) {
    const softbox = new Mesh(new PlaneGeometry(w, h), new MeshBasicMaterial({ color: new Color(2.5, 2.6, 2.8) }))
    softbox.position.set(x, y, z); softbox.lookAt(0, 0, 0); room.add(softbox)
  }
  const environment = pmrem.fromScene(room, 0.04)
  scene.environment = environment.texture; scene.environmentIntensity = 1
  room.dispose(); pmrem.dispose()
  const key = new DirectionalLight(0xeef3ff, 2); key.position.set(-6, 9, 8)
  const rim = new DirectionalLight(0x9dbbff, 2); rim.position.set(6, 2, -5)
  scene.add(key, rim, new AmbientLight(0xffffff, 0.55))
  const silver = (asset.getObjectByName('FeatherPrototype') as Mesh).material as MeshPhysicalMaterial
  const blue = (asset.getObjectByName('BluePrototype') as Mesh).material as MeshPhysicalMaterial
  const ceramic = (asset.getObjectByName('CeramicPrototype') as Mesh).material as MeshPhysicalMaterial
  const studio = new Group(), journey = new Group(); scene.add(studio, journey)
  const heroWing = sculpture.clone(true); studio.add(heroWing)
  const loose: Mesh[] = []
  for (let i = 0; i < 4; i++) {
    const loop = new Mesh([petal, knot, folded, slipstream][i].geometry, [blue, silver, ceramic, blue][i])
    loose.push(loop); studio.add(loop)
  }
  const radius = wingEnvelope(sculpture)
  const world = createJourneyWorld(asset,mobile); journey.add(world.group)
  const manifesto = new Group(); scene.add(manifesto)
  const sculptureAccent = new Mesh(folded.geometry, ceramic)
  manifesto.add(sculptureAccent)
  const particles = createFlightParticles(mobile); scene.add(particles.group)
  const journeyWing = sculpture.clone(true); journey.add(journeyWing)
  const screenScene = new Scene(), screenCamera = new PerspectiveCamera(42, 1, 0.05, 1000)
  const screenTarget = new WebGLRenderTarget(1, 1), screenGroup = new Group()
  const screenMaterial = new MeshBasicMaterial({ map: screenTarget.texture })
  const projectiveMaterial = new ShaderMaterial({ uniforms: { image: { value: screenTarget.texture } },
    vertexShader: 'varying vec4 projected; void main(){projected=projectionMatrix*modelViewMatrix*vec4(position,1.);gl_Position=projected;}',
    fragmentShader: 'uniform sampler2D image; varying vec4 projected; void main(){gl_FragColor=texture2D(image,projected.xy/projected.w*.5+.5); #include <tonemapping_fragment>\n#include <colorspace_fragment> }'.replace('; #include', ';\n#include').replace('> }','>\n}') })
  const screen = new Mesh<PlaneGeometry, Material>(new PlaneGeometry(9.8, 6.4), screenMaterial)
  const borderMaterial = new MeshStandardMaterial({ color: 0x272b32, metalness: 0.8, roughness: 0.18, transparent: true })
  const screenFrame = new Mesh(originalFrame.geometry, borderMaterial); screenFrame.position.z = -0.08
  screenGroup.add(screenFrame, screen); screenScene.add(screenGroup, new AmbientLight(0xffffff, .55))
  const screenKey = new DirectionalLight(0xeef3ff, 2); screenKey.position.set(-6, 9, 8); screenScene.add(screenKey)
  const screenRim=new DirectionalLight(0x9dbbff,2);screenRim.position.set(6,2,-5);screenScene.add(screenRim)
  screenScene.environment = environment.texture
  const frontPlane=new Plane(),backPlane=new Plane()
  const screenWing = sculpture.clone(true); screenWing.matrixAutoUpdate=false; screenScene.add(screenWing)
  screenWing.traverse(object=>{ if(object instanceof Mesh) { const material=(object.material as MeshPhysicalMaterial).clone();material.clippingPlanes=[frontPlane];object.material=material } })
  const wings = new Map<Group, Mesh[]>()
  for (const wing of [heroWing, journeyWing, screenWing]) {
    const meshes: Mesh[] = []
    wing.traverse(object => { if (object instanceof Mesh && object.morphTargetInfluences) meshes.push(object) })
    wings.set(wing, meshes)
  }
  function flap(wing: Group, time: number, glide = 0) {
    const weights = wingBeat(time, glide)
    for (const mesh of wings.get(wing)!) {
      mesh.morphTargetInfluences![0] = weights[0]; mesh.morphTargetInfluences![1] = weights[1]
    }
  }
  const paper = new Color(0xf1f2f7), night = new Color(0x080e1e), cobalt = new Color(0x2044da)
  const bg = new Color(); scene.background = bg; scene.fog = new Fog(bg, 16, 85)
  const sight = new Vector3()
  let currentWidth = 0, currentHeight = 0, quality = 1
  function resize(width: number, height: number) {
    if (width === currentWidth && height === currentHeight) return
    currentWidth = width; currentHeight = height
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, mobile ? 1.25 : 1.6) * quality)
    renderer.setSize(width, height, false); camera.aspect = width / height; camera.updateProjectionMatrix()
    screenCamera.aspect = camera.aspect; screenCamera.updateProjectionMatrix()
    screenTarget.setSize(Math.min(Math.round(width * quality), 1600), Math.min(Math.round(height * quality), 1200))
    screen.scale.y = screenFrame.scale.y = (9.8 / camera.aspect) / 6.4
  }
  function render(mode: 'hero' | 'manifesto' | 'journey', progress: number, time = 0, pointer = { x: 0, y: 0 }, viewport?: { top: number; height: number; clipHeight?: number }) {
    const viewHeight = viewport?.height ?? currentHeight
    const bottom = viewport ? currentHeight - viewport.top - viewHeight : 0
    renderer.setViewport(0, bottom, currentWidth, viewHeight)
    const clipTop = Math.max(0,viewport?.top ?? 0), clipBottom = Math.min(viewport?.clipHeight ?? currentHeight,(viewport?.top ?? 0)+viewHeight)
    renderer.setScissor(0, currentHeight-clipBottom, currentWidth, Math.max(0,clipBottom-clipTop))
    renderer.setScissorTest(Boolean(viewport))
    camera.aspect = currentWidth / viewHeight
    const portrait = mobile || camera.aspect < 0.85, p = MathUtils.clamp(progress, 0, 1)
    studio.visible = mode === 'hero'; journey.visible = mode === 'journey'; manifesto.visible = mode === 'manifesto'
    journey.matrix.identity();journey.matrixAutoUpdate=false
    const particleParent = mode === 'journey' ? journey : scene
    if (particles.group.parent !== particleParent) particleParent.add(particles.group)
    renderer.toneMappingExposure = 1.05
    if (mode === 'hero') {
      camera.fov = 38; camera.updateProjectionMatrix()
      bg.copy(paper); (scene.fog as Fog).far = 100
      camera.position.set(2.6 + pointer.x * 0.7 - p * 4, 3.2 + pointer.y * 0.4 + p * 2.5, MathUtils.lerp(20, 11.5, smooth(0.85, 2.5, camera.aspect)) - p * 2)
      camera.lookAt(0, portrait ? 0.3 : 0.7, 0)
      heroWing.scale.setScalar(portrait ? Math.min(1.1, camera.position.length() * Math.tan(MathUtils.degToRad(19)) * camera.aspect * .68 / radius) : 1.4)
      heroWing.rotation.set(0.08 + p * 0.1, -0.28 + Math.sin(time * 0.4) * 0.13 + p * 0.7, -0.13 + Math.sin(time * 0.6) * 0.1 - p * 0.25)
      heroWing.position.set(0, (portrait ? 0.55 : 0) + Math.sin(time * 2.6 - 0.6) * 0.14, 0)
      flap(heroWing, time)
      for (let i = 0; i < loose.length; i++) {
        loose[i].visible = !portrait || i < 2
        loose[i].position.set(portrait ? (i === 0 ? 3.1 : -3.6) : [6.4, -6.4, -5.6, 6][i], portrait ? (i === 0 ? 3.1 : -2.3) : [2.3, -1.8, 2.8, -2.4][i], [1, -3, 2, -6][i])
        loose[i].scale.setScalar(portrait ? 0.55 : [1.05, 1.05, 0.85, 0.85][i])
        loose[i].rotation.set(i * 0.7 + time * 0.08, i + time * 0.1 + p * 0.5, i * 0.8 + p * 0.4)
      }
    } else if (mode === 'manifesto') {
      camera.fov = 38; camera.updateProjectionMatrix()
      bg.copy(paper); (scene.fog as Fog).far = 100
      camera.position.set(0, 0, portrait ? 28 : 22); camera.lookAt(0, 0, 0)
      sculptureAccent.position.set(portrait ? -2.8 : -6.8, 2.1 - p * 2, 1)
      sculptureAccent.scale.setScalar(portrait ? .65 : .9)
      sculptureAccent.rotation.set(p * .5, time * .12, -.4 + p)
    } else {
      const pose = journeyPose(p, portrait)
      camera.position.copy(pose.position); camera.lookAt(pose.target); camera.rotateZ(pose.roll)
      camera.fov = pose.fov; camera.updateProjectionMatrix();camera.updateMatrixWorld()
      bg.copy(night).lerp(cobalt,smooth(.59,.69,p)); (scene.fog as Fog).far = 125
      const bird = pose.bird
      sight.copy(bird.position).sub(camera.position)
      const birdDistance = sight.length()
      world.update(Math.min(p,.82))
      journeyWing.position.copy(bird.position)

      journeyWing.rotation.set(bird.pitch, bird.yaw, bird.bank, 'YXZ')
      journeyWing.scale.setScalar(flightScale(p, radius, birdDistance, camera.fov, camera.aspect, portrait))
      flap(journeyWing, time, smooth(0.38, 0.47, p) * (1 - smooth(0.6, 0.77, p)))
    }
    particles.update(mode, p, time, journeyWing.position, journeyWing.rotation.y, journeyWing.scale.x, renderer.getPixelRatio(), viewHeight)
    ;(scene.fog as Fog).color.copy(bg)
    if (mode === 'journey' && (p < .2 || p >= .82)) {
      const aspect=currentWidth/currentHeight
      screenCamera.fov=camera.fov;screenCamera.aspect=aspect;screenCamera.position.set(0,0,20);screenCamera.lookAt(0,0,0);screenCamera.updateProjectionMatrix();screenCamera.updateMatrixWorld()
      const fullWidth=40*Math.tan(MathUtils.degToRad(camera.fov/2))*aspect, fullHeight=fullWidth/aspect, fullScale=fullWidth/9.8
      screenScene.background=paper;screenWing.visible=false;screenGroup.position.set(0,0,0);screenGroup.rotation.set(0,0,0)
      borderMaterial.opacity=1
      if (p < .2) {
        const zoom=smooth(.025,.2,p), initialAspect=portrait?1.3:1.5
        const screenAspect=MathUtils.lerp(initialAspect,aspect,zoom)
        screenGroup.scale.setScalar(fullScale*MathUtils.lerp(portrait?.86:.50,1,zoom))
        screenGroup.position.set(portrait?0:-fullWidth*.18*(1-zoom),portrait?-fullHeight*.1*(1-zoom):0,0)
        screenGroup.rotation.set(.035*(1-zoom),.12*(1-zoom),-.025*(1-zoom))
        screen.scale.y=screenFrame.scale.y=(9.8/screenAspect)/6.4
        camera.aspect=screenAspect;camera.updateProjectionMatrix();screen.material=screenMaterial
        renderer.setRenderTarget(screenTarget);renderer.render(scene,camera);renderer.setRenderTarget(null)
      } else {
        const retreat=smooth(.82,.94,p),escape=smooth(.89,1,p)
        screenGroup.scale.setScalar(fullScale*MathUtils.lerp(1,.48,retreat))
        screenGroup.position.set(0,0,-retreat*1.5);screenGroup.rotation.set(.06*retreat,.14*retreat,.025*retreat)
        screen.scale.y=screenFrame.scale.y=(9.8/aspect)/6.4;screenGroup.updateMatrixWorld()
        const planeDistance=journeyWing.position.clone().applyMatrix4(camera.matrixWorldInverse).z*-1-8
        journey.matrix.copy(portalWorldMatrix(screenGroup.matrixWorld,camera,fullScale,planeDistance))
        // Both halves share this pose; a physical plane clips them instead of cross-fading two birds.
        journeyWing.position.addScaledVector(new Vector3(0,0,1).applyQuaternion(camera.quaternion),escape*13)
        journeyWing.scale.multiplyScalar(MathUtils.lerp(1,portrait?1.5:2.3,escape));
        journeyWing.rotateY(escape*Math.PI*.88);journeyWing.updateMatrix();journey.updateMatrixWorld(true)
        frontPlane.set(new Vector3(0,0,1),0).applyMatrix4(screenGroup.matrixWorld)
        backPlane.copy(frontPlane).negate()
        screenWing.matrix.multiplyMatrices(journey.matrixWorld,journeyWing.matrix);screenWing.visible=true
        flap(screenWing,time)
        renderer.clippingPlanes=[backPlane]
        renderer.setRenderTarget(screenTarget)
        try {renderer.render(scene,screenCamera)} finally {renderer.clippingPlanes=[];renderer.setRenderTarget(null)}
        screen.material=projectiveMaterial
      }
      renderer.render(screenScene,screenCamera)
    } else renderer.render(scene, camera)
  }
  function renderOpening(heroHeight: number, manifestoTop: number, manifestoHeight: number, progress: { hero: number; manifesto: number }, time: number, pointer: { x: number; y: number }, heroTop = 0, visibleHeight = currentHeight) {
    // Both sections can be visible together; never replace either live pose with its poster.
    renderer.setScissorTest(false)
    renderer.setClearColor(paper, 0)
    renderer.clear()
    if (heroTop < visibleHeight && heroTop + heroHeight > 0) render('hero', progress.hero, time, pointer, { top: heroTop, height: heroHeight, clipHeight: visibleHeight })
    if (manifestoTop < visibleHeight && manifestoTop + manifestoHeight > 0) render('manifesto', progress.manifesto, time, pointer, { top: manifestoTop, height: manifestoHeight, clipHeight: visibleHeight })
    renderer.setScissorTest(false)
  }
  let reduction = 0
  function reduceQuality() {
    reduction++
    if (reduction <= 2) particles.reduce(reduction)
    else if (reduction === 3) world.reduceReflections()
    else if (reduction === 4) world.disableGlow()
    else if (reduction === 5) { quality = .65; const w = currentWidth, h = currentHeight; currentWidth = 0; resize(w, h) }
    return reduction < 6
  }
  function dispose() {
    const geometries = new Set<BufferGeometry>(), materials = new Set<Material>()
    for (const root of [asset, scene, screenScene]) root.traverse(object => {
      if (object instanceof InstancedMesh) object.dispose()
      if (object instanceof Mesh || object instanceof Points) {
        geometries.add(object.geometry)
        for (const material of Array.isArray(object.material) ? object.material : [object.material]) materials.add(material)
      }
    })
    geometries.forEach(geometry => geometry.dispose()); materials.forEach(material => material.dispose())
    world.dispose();screenMaterial.dispose();projectiveMaterial.dispose();screenTarget.dispose(); environment.dispose(); renderer.dispose()
  }
  async function warmup(signal: AbortSignal, onProgress: (done: number, total: number) => void) {
    const shots: Array<['hero' | 'manifesto' | 'journey', number]> = [['hero',0],['manifesto',0],...([0,.2,.32,.5,.7,.88,.96,1].map(p=>['journey',p] as ['journey',number]))]
    resize(window.innerWidth, window.innerHeight)
    for (let i=0; i<shots.length; i++) {
      signal.throwIfAborted()
      render(shots[i][0], shots[i][1], 0, { x: 0, y: 0 })
      onProgress(i+1, shots.length)
      await new Promise<void>(resolve => requestAnimationFrame(()=>resolve()))
    }
    signal.throwIfAborted()
  }
  return { resize, render, renderOpening, warmup, reduceQuality, dispose, renderer }
}
