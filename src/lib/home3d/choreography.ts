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
  const position = flightPoint(travel), tangent = flightTangent(travel)
  const before = flightTangent(Math.max(0, travel - .025)), after = flightTangent(Math.min(1, travel + .025))
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
  const position=cameraPaths[portrait?1:0].getPointAt(bird.travel).add(flightOffset(bird.travel))
  if (portrait) position.lerp(bird.position, .35*(1-smooth(.02,.2,p)))
  const target=lookPath.getPointAt(bird.travel).add(flightOffset(bird.travel))
  return { position, target, bird, roll: bird.bank * (portrait ? .12 : .35), fov: 42 + Math.sin(smooth(.35,.78,p)*Math.PI)*5 }
}
export function journeyScrollProgress(p: number, mobile: boolean) {
  const base = mobile ? 7 : 11, extra = mobile ? 3 : 4
  return (clamp(p) * base + extra * clamp((p - .64) / .18)) / (base + extra)
}
export function journeyTimelineProgress(scroll: number, mobile: boolean) {
  const base = mobile ? 7 : 11, extra = mobile ? 3 : 4, distance = clamp(scroll) * (base + extra)
  if (distance <= .64 * base) return distance / base
  if (distance <= .82 * base + extra) return .64 + (distance - .64 * base) / (.18 * base + extra) * .18
  return (distance - extra) / base
}
const blueTravelStart = smooth(.16, .82, .64)
export function flightOffset(t: number) {
  const phase = smooth(blueTravelStart, 1, t)
  return new Vector3(4 * Math.sin(phase * Math.PI) ** 2 * Math.sin(phase * Math.PI * 2), 0, -80 * phase)
}
export const flightPoint = (t: number) => flightPath.getPointAt(clamp(t)).add(flightOffset(t))
export const flightTangent = (t: number) => flightPoint(Math.min(1,t+.0001)).sub(flightPoint(Math.max(0,t-.0001))).normalize()

export function wingBeat(time: number, glide = 0) {
  const beat = Math.sin(time * 2.6)
  return [Math.max(0, beat) * (.9 - glide * .65), Math.max(0, -beat) * (.65 - glide * .5)]
}
