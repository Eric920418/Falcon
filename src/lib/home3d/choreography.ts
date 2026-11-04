import { CatmullRomCurve3, Vector3 } from 'three'

export const journeyChapters = [0, .2, .43, .64, .82, 1] as const
export const clamp = (v: number) => Math.min(1, Math.max(0, v))
export function smooth(a: number, b: number, value: number) {
  const t = clamp((value - a) / (b - a)); return t * t * (3 - 2 * t)
}
export const flightPath = new CatmullRomCurve3([
  [0, 0, 0], [0, 0, -30], [1, .4, -58], [-1, -.6, -82],
  [4, 1, -108], [-3, .5, -132], [0, 0, -160],
].map(p => new Vector3(...p)), false, 'centripetal')
flightPath.arcLengthDivisions = 1000

export function birdPose(progress: number) {
  const p = Math.min(.82, clamp(progress)), travel = smooth(.16, .82, p)
  const position = flightPath.getPointAt(travel), tangent = flightPath.getTangentAt(travel)
  const before = flightPath.getTangentAt(Math.max(0, travel - .025)), after = flightPath.getTangentAt(Math.min(1, travel + .025))
  const flying = smooth(.1, .24, p)
  return { position, tangent, travel,
    yaw: (-Math.PI - Math.atan2(tangent.x, -tangent.z)) * flying,
    pitch: -Math.asin(tangent.y) * flying,
    bank: Math.max(-.55, Math.min(.55, (after.x - before.x) * 2.5)) * flying * (1 - smooth(.76, .82, p)),
  }
}
const cameraPaths=[19,34].map(distance=>new CatmullRomCurve3(flightPath.points.map((point,i)=>point.clone().add(new Vector3(Math.sin(i/6*Math.PI*2)*1.4,1.2,distance))),false,'centripetal'))
const lookPath=new CatmullRomCurve3(flightPath.points.map(point=>point.clone().add(new Vector3(0,.6,0))),false,'centripetal')
export function journeyPose(progress: number, portrait = false) {
  const p = Math.min(.82, clamp(progress)), bird = birdPose(p)
  const position=cameraPaths[portrait?1:0].getPointAt(bird.travel)
  if (portrait) position.lerp(bird.position, .35*(1-smooth(.02,.2,p)))
  const target=lookPath.getPointAt(bird.travel)
  return { position, target, roll: bird.bank * (portrait ? .12 : .35), fov: 42 + Math.sin(smooth(.35,.78,p)*Math.PI)*5 }
}
export function wingBeat(time: number, glide = 0) {
  const beat = Math.sin(time * 2.6)
  return [Math.max(0, beat) * (.9 - glide * .65), Math.max(0, -beat) * (.65 - glide * .5)]
}
