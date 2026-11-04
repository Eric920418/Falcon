import { BufferGeometry, Float32BufferAttribute, Group, Mesh, MeshPhysicalMaterial, Shape, Path, ExtrudeGeometry, Box3, Vector3 } from 'three'
import { mergeGeometries, mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js'
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js'
import { tunnelGeometry } from './world-geometry'
import { surfaceGeometry, surfaceNames } from './surfaces'
import { smooth } from './choreography'

// A closed, twisted airfoil: the silhouette and thickness both taper toward the tip.
export function featherGeometry(detail: 'desktop' | 'mobile') {
  const rings = detail === 'desktop' ? 56 : 24
  const sides = detail === 'desktop' ? 16 : 8
  const positions: number[] = [], indices: number[] = []
  for (let i = 0; i <= rings; i++) {
    const t = i / rings
    const envelope = Math.pow(Math.sin(Math.PI * t), 0.65)
    const width = 0.008 + 0.29 * envelope * (1 - t * 0.38)
    const thickness = 0.006 + 0.065 * envelope
    const twist = t * 0.95 - 0.3
    const cx = 0.23 * Math.sin(Math.PI * t) - 0.16 * t * t
    const cz = 0.16 * Math.sin(Math.PI * t) + 0.06 * t
    for (let j = 0; j <= sides; j++) {
      const angle = j / sides * Math.PI * 2
      const x = Math.cos(angle) * width, z = Math.sin(angle) * thickness
      positions.push(cx + x * Math.cos(twist) - z * Math.sin(twist), t, cz + x * Math.sin(twist) + z * Math.cos(twist))
      if (i < rings && j < sides) {
        const a = i * (sides + 1) + j, b = a + sides + 1
        indices.push(a, b, a + 1, b, b + 1, a + 1)
      }
    }
  }
  for (const i of [0, rings]) {
    const start = i * (sides + 1)
    for (let j = 1; j < sides - 1; j++) {
      if (i === 0) indices.push(start, start + j + 1, start + j)
      else indices.push(start, start + j, start + j + 1)
    }
  }
  const geometry = new BufferGeometry()
  geometry.setAttribute('position', new Float32BufferAttribute(positions, 3))
  geometry.setIndex(indices)
  geometry.computeVertexNormals()
  geometry.computeBoundingSphere()
  return geometry
}

function roundedPath(path: Shape | Path, w: number, h: number, r: number) {
  const x = -w / 2, y = -h / 2
  path.moveTo(x + r, y)
  path.lineTo(x + w - r, y); path.quadraticCurveTo(x + w, y, x + w, y + r)
  path.lineTo(x + w, y + h - r); path.quadraticCurveTo(x + w, y + h, x + w - r, y + h)
  path.lineTo(x + r, y + h); path.quadraticCurveTo(x, y + h, x, y + h - r)
  path.lineTo(x, y + r); path.quadraticCurveTo(x, y, x + r, y)
}

export function createSculpture(detail: 'desktop' | 'mobile', source: Group, ornaments: Group[]) {
  const root = new Group(); root.name = 'FalconSculpture'
  const wing = new Group(); wing.name = 'Wing'
  const geometry = featherGeometry('mobile')
  const silver = new MeshPhysicalMaterial({ name: 'Brushed platinum', color: 0xa3afbd, metalness: 0.7, roughness: 0.42, clearcoat: 0.08, clearcoatRoughness: 0.5 })
  const ceramic = new MeshPhysicalMaterial({ name: 'Porcelain', color: 0xf2f3f7, metalness: 0.08, roughness: 0.58, clearcoat: 0.05 })
  const blue = new MeshPhysicalMaterial({ name: 'Electric blue enamel', color: 0x2349cf, metalness: 0.25, roughness: 0.46, clearcoat: 0.15 })
  source.updateMatrixWorld(true)
  for (let i = 0; i < 6; i++) {
    const original = source.getObjectByName(`model_part${i}`) as Mesh
    if (!original?.geometry) throw new Error(`MESHY_MODEL_INVALID: model_part${i} is missing`)
    let partGeometry = original.geometry.clone().applyMatrix4(original.matrixWorld)
    partGeometry.deleteAttribute('color'); partGeometry.scale(75, 75, 75); partGeometry.translate(0, -2.3, 0)
    partGeometry = polishGeometry(partGeometry)
    // Keep the shoulder seam fixed; bending the outer wing avoids rotating Meshy's capped seams apart.
    if (i >= 4) {
      partGeometry.morphAttributes.position = []
      partGeometry.morphAttributes.normal = []
      for (const angle of [-0.8, 0.32]) {
        const target = partGeometry.clone(), vertices = target.getAttribute('position')
        for (let j = 0; j < vertices.count; j++) {
          const x = vertices.getX(j), y = vertices.getY(j), side = Math.sign(x)
          const bend = side * angle * smooth(0.8, 1.8, Math.abs(x))
          const dx = x - side * 0.65, dy = y + 0.4
          vertices.setXYZ(j, side * 0.65 + dx * Math.cos(bend) - dy * Math.sin(bend), -0.4 + dx * Math.sin(bend) + dy * Math.cos(bend), vertices.getZ(j))
        }
        target.computeVertexNormals()
        vertices.name = angle < 0 ? 'Downstroke' : 'Upstroke'
        partGeometry.morphAttributes.position.push(vertices)
        partGeometry.morphAttributes.normal.push(target.getAttribute('normal'))
      }
    }
    const part = new Mesh(partGeometry, silver)
    part.name = `FalconPart_${i}`; part.castShadow = true
    if (i >= 4) {
      const side = i === 4 ? 1 : -1
      const half = new Group(); half.name = side < 0 ? 'LeftWing' : 'RightWing'
      half.add(part); wing.add(half)
    } else wing.add(part)
  }
  const prototype = new Mesh(geometry, silver); prototype.name = 'FeatherPrototype'
  const enamel = new Mesh(geometry, blue); enamel.name = 'BluePrototype'
  const porcelain = new Mesh(geometry, ceramic); porcelain.name = 'CeramicPrototype'
  const accents = ornaments.map((ornament, i) => {
    ornament.updateMatrixWorld(true)
    const parts: BufferGeometry[] = []
    ornament.traverse(object => {
      if (!(object instanceof Mesh)) return
      const g = object.geometry.clone().applyMatrix4(object.matrixWorld).toNonIndexed()
      for (const key of Object.keys(g.attributes)) if (key !== 'position') g.deleteAttribute(key)
      parts.push(g)
    })
    if (!parts.length) throw new Error(`MESHY_ORNAMENT_INVALID: no geometry for ornament ${i}`)
    const geometry = polishGeometry(mergeGeometries(parts)!)
    parts.forEach(part => part.dispose())
    const bounds = new Box3().setFromBufferAttribute(geometry.getAttribute('position') as Float32BufferAttribute)
    const center = bounds.getCenter(new Vector3()), size = bounds.getSize(new Vector3())
    geometry.translate(-center.x, -center.y, -center.z)
    const scale = 4 / Math.max(size.x, size.y, size.z)
    geometry.scale(scale, scale, scale); geometry.computeBoundingSphere()
    const mesh = new Mesh(geometry, [blue, silver, ceramic, blue][i])
    mesh.name = ['Slipstream', 'OrbitKnot', 'FoldedRibbon', 'PetalBloom'][i]
    return mesh
  })
  const frameShape = new Shape(); roundedPath(frameShape, 10.2, 6.8, 0.45)
  const hole = new Path(); roundedPath(hole, 9.8, 6.4, 0.3); frameShape.holes.push(hole)
  const frame = new Mesh(new ExtrudeGeometry(frameShape, { depth: 0.16, bevelEnabled: true, bevelThickness: 0.045, bevelSize: 0.04, bevelSegments: 3, curveSegments: detail === 'desktop' ? 12 : 5, steps: 1 }), silver)
  frame.name = 'Portal'; frame.position.z = 1.2
  const surfaces = surfaceNames.flatMap((name, kind) => {
    if (kind !== 1) return []
    const mesh = new Mesh(surfaceGeometry(kind, detail), [silver, blue, ceramic][kind]); mesh.name = name; return mesh
  })
  const beam = new Mesh(new RoundedBoxGeometry(1,1,1,detail === 'desktop' ? 3 : 2,.12),silver); beam.name='ArchitectureBeam'
  const tunnel = new Mesh(tunnelGeometry(detail === 'mobile'),blue); tunnel.name='BrandTunnel'
  root.add(wing, frame, prototype, enamel, porcelain, ...accents, ...surfaces, beam, tunnel)
  return root
}

function polishGeometry(geometry: BufferGeometry) {
  // Weld before normal calculation: Meshy segmentation duplicates vertices along the surface.
  geometry.deleteAttribute('normal')
  const welded = mergeVertices(geometry, 0.0001), positions = welded.getAttribute('position')
  const neighbors = Array.from({ length: positions.count }, () => new Set<number>())
  const index = welded.index!
  for (let i = 0; i < index.count; i += 3) {
    const tri = [index.getX(i), index.getX(i + 1), index.getX(i + 2)]
    for (const a of tri) for (const b of tri) if (a !== b) neighbors[a].add(b)
  }
  // Two Taubin passes remove small surface chatter without shrinking the silhouette.
  for (const weight of [0.38, -0.39, 0.38, -0.39]) {
    const next = new Float32Array(positions.array)
    for (let i = 0; i < positions.count; i++) {
      const adjacent = neighbors[i]
      if (!adjacent.size) continue
      for (let axis = 0; axis < 3; axis++) {
        let sum = 0
        for (const j of adjacent) sum += positions.array[j * 3 + axis]
        next[i * 3 + axis] += (sum / adjacent.size - positions.array[i * 3 + axis]) * weight
      }
    }
    positions.array.set(next)
  }
  welded.computeVertexNormals(); welded.computeBoundingSphere(); geometry.dispose()
  return welded
}
