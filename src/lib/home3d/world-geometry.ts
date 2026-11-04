import { BufferGeometry, Float32BufferAttribute, Matrix4, Quaternion, Vector3 } from 'three'
import { flightPath, smooth } from './choreography'

export function pathFrame(t: number) {
  const center = flightPath.getPointAt(Math.min(1,t)), tangent = flightPath.getTangentAt(Math.min(1,t))
  if (t > 1) center.addScaledVector(tangent, (t - 1) * flightPath.getLength())
  const right = new Vector3().crossVectors(tangent, new Vector3(0,1,0)).normalize()
  const up = new Vector3().crossVectors(right, tangent).normalize()
  return { center, rotation: new Quaternion().setFromRotationMatrix(new Matrix4().makeBasis(right,up,tangent.clone().negate())) }
}
export const structureCount = (mobile: boolean) => mobile ? 20 : 30
export function structureSegment(frame: number, side: number, part: number, p: number, mobile: boolean) {
  const t = .055 + frame / (structureCount(mobile) - 1) * 1.04, basis = pathFrame(t)
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
  const rows = mobile ? 100 : 180, sides = mobile ? 48 : 80
  const positions: number[]=[],uv: number[]=[],indices:number[]=[]
  for(let i=0;i<=rows;i++) {
    const t=.55+i/rows*1.4, basis=pathFrame(t)
    for(let j=0;j<=sides;j++) {
      const a=j/sides*Math.PI*2 + t*1.5
      const c=Math.cos(a),s=Math.sin(a)
      const point=new Vector3(Math.sign(c)*Math.pow(Math.abs(c),.55)*13.8,Math.sign(s)*Math.pow(Math.abs(s),.55)*11.8,0).applyQuaternion(basis.rotation).add(basis.center)
      positions.push(...point.toArray());uv.push(j/sides,i/rows)
      if(i<rows&&j<sides){const k=i*(sides+1)+j;indices.push(k,k+1,k+sides+1,k+1,k+sides+2,k+sides+1)}
    }
  }
  const geometry=new BufferGeometry()
  geometry.setAttribute('position',new Float32BufferAttribute(positions,3));geometry.setAttribute('uv',new Float32BufferAttribute(uv,2));geometry.setIndex(indices)
  geometry.computeVertexNormals();geometry.computeBoundingSphere();return geometry
}
