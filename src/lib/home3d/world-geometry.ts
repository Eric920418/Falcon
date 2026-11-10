import { BufferGeometry, Float32BufferAttribute, Matrix4, Quaternion, Vector3 } from 'three'
import { flightPoint, flightTangent, flightLength, originalFlightLength, flightDistanceAt, flightParameterAtDistance, smooth } from './choreography'

export function pathFrame(t: number) {
  const center = flightPoint(Math.min(1,t)), tangent = flightTangent(Math.min(1,t))
  if (t > 1) center.addScaledVector(tangent, (t - 1) * flightLength)
  const right = new Vector3().crossVectors(tangent, new Vector3(0,1,0)).normalize()
  const up = new Vector3().crossVectors(right, tangent).normalize()
  return { center, rotation: new Quaternion().setFromRotationMatrix(new Matrix4().makeBasis(right,up,tangent.clone().negate())) }
}
export const structureCount = (mobile: boolean) => mobile ? 20 : 30
export const mirrorRoom = { halfWidth: 16, halfHeight: 13, depth: Math.abs(flightPoint(1).z)+100, centerZ: flightPoint(1).z/2, inset: .04 }
export const mirrorRoomOpacity = (p: number) => smooth(.12,.22,p) * (1-smooth(.39,.46,p))
const structureSpacing = (mobile:boolean) => originalFlightLength*1.04/(structureCount(mobile)-1)
export function structureFirstFrame(p:number,mobile:boolean) {
  return Math.max(0,Math.floor((flightDistanceAt(smooth(.16,.82,Math.min(.82,p)))-originalFlightLength*.055)/structureSpacing(mobile))-3)
}
const structureBases = new Map<number, Array<{t:number;basis:ReturnType<typeof pathFrame>}>>()
function structureBasis(frame: number, mobile: boolean) {
  const count = structureCount(mobile)
  let bases = structureBases.get(count)
  if (!bases) {
    const spacing=structureSpacing(mobile)
    bases = Array.from({length:Math.ceil(flightLength/spacing)+count+1},(_,i)=>{
      const t=flightParameterAtDistance(originalFlightLength*.055+i*spacing)
      return {t,basis:pathFrame(t)}
    })
    structureBases.set(count,bases)
  }
  return bases[frame]
}
export function structureSegment(frame: number, side: number, part: number, p: number, mobile: boolean) {
  const {t,basis} = structureBasis(frame, mobile)
  const twist = smooth(.39,.64,p) * smooth(.22,.62,t)
  const corners = [[-13,-11],[13,-11],[13,11],[-13,11],[-13,-11]]
  const point = (fraction: number) => {
    const a = corners[side], b = corners[side+1]
    const rect = new Vector3(a[0]+(b[0]-a[0])*fraction,a[1]+(b[1]-a[1])*fraction,0)
    const angle = (-.775 + (side + fraction) * .5) * Math.PI
    const circle = new Vector3(Math.cos(angle)*14,Math.sin(angle)*14,0)
    rect.lerp(circle,twist)
    rect.applyAxisAngle(new Vector3(0,0,1),twist*(t*7 + Math.sin(t*12)*.25))
    return rect.applyQuaternion(basis.rotation).add(basis.center)
  }
  return { start: point(part/3), end: point((part+.92)/3), twist }
}
export function tunnelGeometry(mobile: boolean) {
  const rows = mobile ? 200 : 360, half = 13.8
  const positions: number[]=[],uv: number[]=[],indices:number[]=[]
  const distances=[flightDistanceAt(.55)]
  for(let i=1;i<=rows;i++) distances.push(distances[i-1]+pathFrame(.55+i/rows*1.4).center.distanceTo(pathFrame(.55+(i-1)/rows*1.4).center))
  const corners=[[-half,-half],[half,-half],[half,half],[-half,half],[-half,-half]]
  // Each wall owns its UVs and normals; lettering never wraps across a corner.
  for(let side=0;side<4;side++) for(let i=0;i<=rows;i++) {
    const t=.55+i/rows*1.4, basis=pathFrame(t), along=distances[i]/42
    for(let j=0;j<2;j++) {
      const corner=corners[side+j]
      positions.push(...new Vector3(corner[0],corner[1],0).applyQuaternion(basis.rotation).add(basis.center).toArray())
      uv.push(...[[j,along],[-along,j],[1-j,-along],[along,1-j]][side])
      if(i<rows&&j===0){const k=side*(rows+1)*2+i*2;indices.push(k,k+1,k+2,k+1,k+3,k+2)}
    }
  }
  const geometry=new BufferGeometry()
  geometry.setAttribute('position',new Float32BufferAttribute(positions,3));geometry.setAttribute('uv',new Float32BufferAttribute(uv,2));geometry.setIndex(indices)
  geometry.computeVertexNormals();geometry.computeBoundingSphere();return geometry
}
