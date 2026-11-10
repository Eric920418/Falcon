import { CatmullRomCurve3, Vector3 } from 'three'

export const journeyChapters = [0, .2, .43, .64, .82, 1] as const
const corridorStretch = 1 + 1 / .62, blueStretch = 1.5
const scrollProfiles = [false,true].map(mobile => {
  const base=mobile?7:11, extra=mobile?3:4, stops=[0]
  for(let i=0;i<5;i++) stops.push(stops[i]+(journeyChapters[i+1]-journeyChapters[i])*base*[1,corridorStretch,corridorStretch,blueStretch,1][i]+(i===3?extra*blueStretch:0))
  return {screens:stops[5],stops:stops.map(value=>value/stops[5])}
})
export const journeyScreenCount = (mobile:boolean) => scrollProfiles[Number(mobile)].screens+1
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
  const behind=flightDistanceAt(bird.travel)-(portrait?34:19)
  const follow=behind<0?flightPoint(0).addScaledVector(flightTangent(0),behind):flightPoint(flightParameterAtDistance(behind))
  follow.y+=1.2
  position.lerp(follow,smooth(.2,.28,p))
  if (portrait) position.lerp(bird.position, .35*(1-smooth(.02,.2,p)))
  const target=lookPath.getPointAt(bird.travel).add(flightOffset(bird.travel))
  return { position, target, bird, roll: bird.bank * (portrait ? .12 : .35), fov: 42 + Math.sin(smooth(.35,.78,p)*Math.PI)*5 }
}
export function journeyScrollProgress(p: number, mobile: boolean) {
  return mapJourney(p,journeyChapters,scrollProfiles[Number(mobile)].stops)
}
export function journeyTimelineProgress(scroll: number, mobile: boolean) {
  return mapJourney(scroll,scrollProfiles[Number(mobile)].stops,journeyChapters)
}
function mapJourney(value:number,from:readonly number[],to:readonly number[]) {
  const p=clamp(value)
  for(let i=0;i<5;i++) if(p<=from[i+1]) return to[i]+(p-from[i])/(from[i+1]-from[i])*(to[i+1]-to[i])
  return 1
}
const corridorTravelStart = smooth(.16,.82,.2)
const blueTravelStart = smooth(.16, .82, .64)
function originalFlightOffset(t: number) {
  const phase = smooth(blueTravelStart, 1, t)
  return new Vector3(4 * Math.sin(phase * Math.PI) ** 2 * Math.sin(phase * Math.PI * 2), 0, -80 * phase)
}
export const originalFlightPoint = (t:number) => flightPath.getPointAt(clamp(t)).add(originalFlightOffset(t))
const corridorStart=originalFlightPoint(corridorTravelStart),blueStart=originalFlightPoint(blueTravelStart)
export function flightOffset(t:number) {
  const offset=originalFlightOffset(t)
  if(t>corridorTravelStart) offset.addScaledVector(originalFlightPoint(Math.min(t,blueTravelStart)).sub(corridorStart),corridorStretch-1)
  if(t>blueTravelStart) offset.addScaledVector(originalFlightPoint(t).sub(blueStart),blueStretch-1)
  return offset
}
export const flightPoint = (t: number) => flightPath.getPointAt(clamp(t)).add(flightOffset(t))
export const flightTangent = (t: number) => flightPoint(Math.min(1,t+.0001)).sub(flightPoint(Math.max(0,t-.0001))).normalize()
const flightDistances=[0]
export let originalFlightLength=0
for(let i=1;i<=1000;i++) {
  flightDistances.push(flightDistances[i-1]+flightPoint(i/1000).distanceTo(flightPoint((i-1)/1000)))
  originalFlightLength+=originalFlightPoint(i/1000).distanceTo(originalFlightPoint((i-1)/1000))
}
export const flightLength=flightDistances[1000]
export function flightDistanceAt(t:number) {
  const index=clamp(t)*1000,low=Math.floor(index),high=Math.min(1000,low+1)
  return flightDistances[low]+(flightDistances[high]-flightDistances[low])*(index-low)
}
export function flightParameterAtDistance(distance:number) {
  if(distance>=flightLength)return 1+(distance-flightLength)/flightLength
  let low=0,high=1000
  while(high-low>1){const mid=(low+high)>>1;if(flightDistances[mid]<distance)low=mid;else high=mid}
  return (low+(distance-flightDistances[low])/(flightDistances[high]-flightDistances[low]))/1000
}

export function wingBeat(time: number, glide = 0) {
  const beat = Math.sin(time * 2.6)
  return [Math.max(0, beat) * (.9 - glide * .65), Math.max(0, -beat) * (.65 - glide * .5)]
}
