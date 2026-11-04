import { BufferGeometry, Float32BufferAttribute, Group, Mesh, Vector3 } from 'three'
import { smooth } from './choreography'

export const surfaceNames = ['ArchBand', 'TwistedRibbon', 'WingSurface'] as const
export const surfaceSegments = { desktop: [144, 48], mobile: [112, 32] } as const

// Rounded airfoil sections swept along open arcs; there are no decimated near-camera edges.
export function surfacePoint(kind: number, u: number, v: number, target = new Vector3()) {
  const angle = (-0.2 + u * [1.22, 1.05, 0.86][kind]) * Math.PI
  const taper = Math.sin(Math.PI * u)
  const radius = 8.6 + Math.sin(u * Math.PI * 2 + kind) * 0.55
  const width = 0.035 + Math.max(0, taper) * [1.05, 1.3, 1.65][kind]
  const twist = [0.25, 2.8, -1.3][kind] * (u - 0.5)
  const cross = v * Math.PI * 2
  const x = Math.cos(cross) * width, z = Math.sin(cross) * (0.035 + taper * 0.1)
  const radial = radius + x * Math.cos(twist) - z * Math.sin(twist)
  return target.set(Math.cos(angle) * radial, Math.sin(angle) * radial, Math.sin(u * Math.PI * 2) * 1.1 + x * Math.sin(twist) + z * Math.cos(twist))
}
export function surfaceGeometry(kind: number, detail: 'desktop' | 'mobile') {
  const [rows, sides] = surfaceSegments[detail], positions: number[] = [], indices: number[] = []
  const point = new Vector3()
  for (let i = 0; i <= rows; i++) for (let j = 0; j < sides; j++) {
    surfacePoint(kind, i / rows, j / sides, point); positions.push(...point.toArray())
    if (i < rows) {
      const a = i * sides + j, b = i * sides + (j + 1) % sides
      indices.push(a, a + sides, b, b, a + sides, b + sides)
    }
  }
  for (const row of [0, rows]) for (let j = 1; j < sides - 1; j++) {
    const a = row * sides
    indices.push(a, a + (row ? j : j + 1), a + (row ? j + 1 : j))
  }
  const geometry = new BufferGeometry()
  geometry.setAttribute('position', new Float32BufferAttribute(positions, 3)); geometry.setIndex(indices)
  geometry.computeVertexNormals(); geometry.computeBoundingSphere()
  return geometry
}

export function wingEnvelope(wing: Group) {
  let radius = 0
  wing.traverse(object => {
    if (!(object instanceof Mesh)) return
    const base = object.geometry.getAttribute('position')
    for (const attribute of [base, ...(object.geometry.morphAttributes.position || [])]) for (let i = 0; i < attribute.count; i++) {
      const point = new Vector3().fromBufferAttribute(attribute, i)
      if (attribute !== base && object.geometry.morphTargetsRelative) point.add(new Vector3().fromBufferAttribute(base, i))
      radius = Math.max(radius, point.length())
    }
  })
  return radius
}
export function flightScale(progress: number, radius: number, distance: number, fov: number, aspect: number, portrait: boolean) {
  const scale = 0.9 - smooth(0.02, 0.2, progress) * 0.25
  // A sphere contains every wing pose and bank angle, so the phone framing does not depend on flap phase.
  const halfWidth = distance * Math.tan(fov * Math.PI / 360) * aspect
  return portrait ? Math.min(scale, halfWidth * 0.64 / radius) : scale
}
