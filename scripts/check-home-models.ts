import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { Vector3, Mesh, Group, Matrix4, PerspectiveCamera, Line3 } from 'three'
import { particleSeeds } from '../src/lib/home3d/particles'
import { ribbonScreenLength } from '../src/lib/home3d/ribbon'
import { flightScale, surfacePoint, surfaceSegments, wingEnvelope } from '../src/lib/home3d/surfaces'
import { structureCount, structureSegment } from '../src/lib/home3d/world-geometry'
import { portalWorldMatrix } from '../src/lib/home3d/portal'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { birdPose, journeyPose, journeyChapters, wingBeat } from '../src/lib/home3d/choreography'

async function checkModels() {
for (const quality of ['desktop', 'mobile'] as const) {
  const bytes = readFileSync(`public/models/falcon-wing-${quality}.glb`)
  assert.equal(bytes.toString('utf8', 0, 4), 'glTF')
  assert.equal(bytes.readUInt32LE(4), 2)
  assert.equal(bytes.readUInt32LE(8), bytes.length)
  const jsonSize = bytes.readUInt32LE(12)
  const gltf = JSON.parse(bytes.toString('utf8', 20, 20 + jsonSize))
  for (const name of ['Wing', 'LeftWing', 'RightWing', 'Portal', 'FeatherPrototype', 'BluePrototype', 'CeramicPrototype', 'Slipstream', 'OrbitKnot', 'FoldedRibbon', 'PetalBloom', 'TwistedRibbon', 'ArchitectureBeam', 'BrandTunnel']) assert(gltf.nodes.some((node: { name: string }) => node.name === name), name)
  assert.equal(gltf.nodes.filter((node: { name?: string }) => node.name?.startsWith('FalconPart_')).length, 6)
  assert(bytes.length <= (quality === 'mobile' ? 1_600_000 : 3_600_000), `${quality}: asset budget`)
  const sculpture = (await new GLTFLoader().parseAsync(bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength), '')).scene
  let triangles = 0
  sculpture.traverse(object => {
    if (!(object instanceof Mesh)) return
    const position = object.geometry.getAttribute('position')
    const normal = object.geometry.getAttribute('normal')
    triangles += (object.geometry.index?.count || position.count) / 3
    for (const value of [...position.array, ...normal.array]) assert(Number.isFinite(value))
    if (object.name.startsWith('FalconPart_')) assert.equal(object.material, (sculpture.getObjectByName('FalconPart_0') as Mesh).material, 'Head and wings must share the same metal')
    if (object.name === 'FalconPart_4' || object.name === 'FalconPart_5') {
      assert.equal(object.morphTargetInfluences?.length, 2, 'Both wings must support down/up stroke')
      let movingTips = 0, anchoredRoots = 0
      for (const target of object.geometry.morphAttributes.position) {
        for (let i = 0; i < target.count; i++) {
          const delta = new Vector3().fromBufferAttribute(target, i)
          if (!object.geometry.morphTargetsRelative) delta.sub(new Vector3().fromBufferAttribute(position, i))
          assert(delta.toArray().every(Number.isFinite))
          if (Math.abs(position.getX(i)) < 0.8) { assert(delta.length() < 0.00001, 'Shoulder must stay attached'); anchoredRoots++ }
          if (Math.abs(position.getX(i)) > 3.5 && delta.length() > 0.3) movingTips++
        }
      }
      assert(anchoredRoots > 10 && movingTips > 10, 'Wing must move visibly while its root stays fixed')
    }
    if (object.geometry.index) for (const index of object.geometry.index.array) assert(index < position.count)
    else assert.equal(position.count % 3, 0)
  })
  assert(triangles < (quality === 'mobile' ? 52_000 : 125_000), `${quality}: triangle budget ${triangles}`)
  const radius = wingEnvelope(sculpture.getObjectByName('Wing') as Group)
  let minClearance=Infinity,minCameraClearance=Infinity,maxSpan=0
  const closest=new Vector3(),line=new Line3()
  for (const [width,height] of quality==='mobile'?[[390,844],[360,800],[844,390]]:[[1440,900],[768,1024]]) {
    const portrait=quality==='mobile'||width/height<.85
    for(let i=0;i<=2000;i++) {
      const p=i/2000,camera=journeyPose(p,portrait),bird=birdPose(p)
      const scale=flightScale(p,radius,camera.position.distanceTo(bird.position),camera.fov,width/height,portrait)
      const projected=radius*scale/(camera.position.distanceTo(bird.position)*Math.tan(camera.fov*Math.PI/360)*width/height)
      if(portrait){assert(projected<=.641,'Phone wing sphere exceeds safe width');maxSpan=Math.max(maxSpan,projected)}
      for(let frame=0;frame<structureCount(quality==='mobile');frame++)for(let side=0;side<4;side++)for(let part=0;part<3;part++) {
        const segment=structureSegment(frame,side,part,p,quality==='mobile')
        line.set(segment.start,segment.end)
        line.closestPointToPoint(bird.position,true,closest)
        const clearance=(closest.distanceTo(bird.position)-.8)/(radius*scale)
        minClearance=Math.min(minClearance,clearance)
        assert(clearance>=1.2,`Wing safety margin: ${clearance} at ${p}`)
        line.closestPointToPoint(camera.position,true,closest)
        minCameraClearance=Math.min(minCameraClearance,closest.distanceTo(camera.position)-.8)
      }
      if(i%100===0) {
        const a=structureSegment(8,2,1,p,quality==='mobile');structureSegment(8,2,1,1-p,quality==='mobile')
        assert.deepEqual(structureSegment(8,2,1,p,quality==='mobile'),a,'World structure reverse/seek')
      }
    }
  }
  assert(minCameraClearance>2,'Lens cannot intersect architectural structure')
  let maxPixelError=0
  const [rows,sides]=surfaceSegments[quality],viewport=quality==='desktop'?1440:844
  for(let i=0;i<rows;i++)for(let j=0;j<sides;j++) {
    const actual=surfacePoint(1,(i+.5)/rows,(j+.5)/sides)
    const linear=surfacePoint(1,i/rows,(j+1)/sides).add(surfacePoint(1,(i+1)/rows,j/sides)).multiplyScalar(.5)
    maxPixelError=Math.max(maxPixelError,actual.distanceTo(linear)/7*viewport*.8)
  }
  assert(maxPixelError<1,'Preserved ribbon LOD bound')
  console.log(`${quality}: 2001 samples per viewport, clearance ${minClearance.toFixed(2)}x, lens ${minCameraClearance.toFixed(2)}, phone width ${(maxSpan*100).toFixed(1)}%, ribbon LOD ${maxPixelError.toFixed(3)} CSS px`)
  console.log(`${quality}: ${bytes.length} bytes, ${triangles} triangles, six Meshy parts`)
}
}
for (const portrait of [false, true]) {
  let previousPosition: Vector3 | undefined, previousDirection: Vector3 | undefined
  for (let i = 0; i <= 2000; i++) {
    const { position, target, roll } = journeyPose(i / 2000, portrait)
    assert([...position.toArray(), ...target.toArray(), roll].every(Number.isFinite))
    const direction = target.clone().sub(position).normalize()
    assert(target.distanceTo(position) > 0.05, 'Look target cannot coincide with camera')
    if (previousPosition) assert(position.distanceTo(previousPosition) < 0.3, 'Camera must not jump')
    if (previousDirection) assert(direction.dot(previousDirection) > 0.99, 'Camera must not flip')
    previousPosition = position.clone(); previousDirection = direction
  }
  for (const progress of [...journeyChapters, 0.12, 0.7, 0.81, 0.91]) {
    const first = journeyPose(progress, portrait).position.toArray()
    journeyPose(1 - progress, portrait)
    assert.deepEqual(journeyPose(progress, portrait).position.toArray(), first, 'Reverse and seek are deterministic')
  }
}
for(const aspect of [1440/900,768/1024,390/844,360/800]) {
  const pose=journeyPose(.82,aspect<.85),bird=birdPose(.82)
  const camera=new PerspectiveCamera(pose.fov,aspect,.08,200)
  camera.position.copy(pose.position);camera.lookAt(pose.target);camera.updateMatrixWorld()
  const outer=new PerspectiveCamera(pose.fov,aspect,.05,1000);outer.position.z=20;outer.updateMatrixWorld()
  const fullScale=40*Math.tan(pose.fov*Math.PI/360)*aspect/9.8
  const distance=-bird.position.clone().applyMatrix4(camera.matrixWorldInverse).z-8
  const transform=portalWorldMatrix(new Matrix4().makeScale(fullScale,fullScale,fullScale),camera,fullScale,distance)
  for(const point of [bird.position,bird.position.clone().add(new Vector3(3,2,-8)),pose.target]) {
    const a=point.clone().project(camera),b=point.clone().applyMatrix4(transform).project(outer)
    assert(Math.hypot(a.x-b.x,a.y-b.y)<1e-10,'Full-screen portal must preserve projection')
  }
}
let lastBird: Vector3 | undefined
for (let i = 0; i <= 2000; i++) {
  const p = i / 2000, bird = birdPose(p)
  assert([...bird.position.toArray(), bird.yaw, bird.pitch, bird.bank].every(Number.isFinite))
  if (lastBird) assert(bird.position.distanceTo(lastBird) < 0.3, 'Bird must not teleport')
  lastBird = bird.position.clone()
  const first = bird.position.toArray(); birdPose(1 - p)
  assert.deepEqual(birdPose(p).position.toArray(), first)
}
for (let i = 0; i < 100; i++) {
  const time = i / 10, weights = wingBeat(time)
  assert(weights.every(weight => Number.isFinite(weight) && weight >= 0 && weight <= 1))
  assert.deepEqual(weights, wingBeat(time + 2 * Math.PI / 2.6).map((value, index) => Math.abs(value - weights[index]) < 1e-12 ? weights[index] : value))
}
function ribbonFixture(length: number, pointAt: (distance: number) => number[], sx: number, sy: number) {
  return {
    getTotalLength: () => length,
    getScreenCTM: () => ({ a: sx, d: sy }),
    getPointAtLength: (distance: number) => ({ matrixTransform: (matrix: { a: number; d: number }) => {
      const [x, y] = pointAt(distance); return { x: x * matrix.a, y: y * matrix.d }
    } }),
  } as unknown as SVGPathElement
}
for (const [sx, sy] of [[1, 1], [.28, 1], [1.03, 1.22]]) {
  const diagonal = ribbonFixture(500, distance => [distance * .6, distance * .8], sx, sy)
  assert(Math.abs(ribbonScreenLength(diagonal) - Math.hypot(300 * sx, 400 * sy)) < 1e-8, 'Non-scaling ribbon dashes must follow transformed arc length')
}
const circumference = 2 * Math.PI * 200
const circle = ribbonFixture(circumference, distance => [200 * Math.cos(distance / 200), 200 * Math.sin(distance / 200)], 1, 1)
assert(Math.abs(ribbonScreenLength(circle) - circumference) < .05, 'Curved ribbon arc sampling stays within .05 CSS px on a 400px circle')
assert.deepEqual(particleSeeds(1200), particleSeeds(1200), 'Particle layout is reproducible')
assert(particleSeeds(280).every(v => v >= 0 && v < 1))
checkModels().then(() => console.log('PASS: real GLB load, Meshy part and geometry budgets, finite geometry, continuous camera and look direction, deterministic reverse/seek')).catch(error => { console.error(error); process.exitCode = 1 })
