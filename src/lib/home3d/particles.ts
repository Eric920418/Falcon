import { BufferGeometry, Float32BufferAttribute, Group, Points, ShaderMaterial, Vector3 } from 'three'
import { flightPoint, smooth } from './choreography'

export function particleSeeds(count: number) {
  let seed = 7139
  const values = new Float32Array(count * 3)
  for (let i = 0; i < values.length; i++) { seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; values[i] = seed / 4294967296 }
  return values
}
export function createFlightParticles(mobile: boolean) {
  const group = new Group(), counts = mobile ? [280, 96] : [1200, 256]
  const fields = counts.map((count, trail) => {
    const seeds = particleSeeds(count), positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const point = flightPoint(seeds[i * 3 + 1])
      const angle = seeds[i * 3] * Math.PI * 2, radius = 5.5 + seeds[i * 3 + 2] * 8
      point.x += Math.cos(angle) * radius; point.y += Math.sin(angle) * radius
      positions.set(point.toArray(), i * 3)
    }
    const geometry = new BufferGeometry()
    geometry.setAttribute('position', new Float32BufferAttribute(positions, 3))
    geometry.setAttribute('seed', new Float32BufferAttribute(seeds, 3))
    const material = new ShaderMaterial({ transparent: true, depthWrite: false,
      uniforms: { time: { value: 0 }, mode: { value: 0 }, alpha: { value: 0 }, beat: { value: 0 }, resolution: { value: 900 }, ratio: { value: 1 } },
      vertexShader: `attribute vec3 seed; uniform float time, mode, beat, ratio; varying float strength;
      void main() {
        vec3 p = position;
        ${trail ? `float age = fract(seed.y + time * .24);
        p = vec3((seed.x < .5 ? -1. : 1.) * (3.5 - age * .8), -beat * 1.7 + sin(age * 8. + seed.z * 6.) * .15, -age * 10.);
        strength = (1. - age) * .6;` : `if (mode < 1.5) {
          float angle = seed.x * 6.283 + time * .035;
          float r = 6. + seed.z * 4.;
          p = vec3(cos(angle) * r, sin(angle) * r * .6, (seed.y - .5) * 7.);
        }
        p += vec3(sin(time * .3 + seed.x * 50.), cos(time * .25 + seed.y * 30.), 0.) * .13;
        strength = .18 + seed.z * .32;`}
        vec4 mv = modelViewMatrix * vec4(p, 1.);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = clamp((1. + seed.z * 1.5) * 22. / max(10., -mv.z), 1., 3.) * ratio;
      }`,
      fragmentShader: `uniform float alpha, resolution; varying float strength;
      void main() {
        float circle = 1. - smoothstep(.15, .5, length(gl_PointCoord - .5));
        float y = gl_FragCoord.y / resolution;
        float safe = smoothstep(.22, .36, y) * (1. - smoothstep(.86, .94, y));
        gl_FragColor = vec4(mix(vec3(.20,.40,.83), vec3(.68,.79,.94), strength), circle * strength * alpha * safe);
      }`,
    })
    const points = new Points(geometry, material); points.frustumCulled = false; group.add(points)
    return points
  })
  function update(mode: 'hero' | 'manifesto' | 'journey', progress: number, time: number, position: Vector3, yaw: number, scale: number, ratio: number, height: number) {
    fields.forEach((points, index) => {
      const uniforms = points.material.uniforms
      uniforms.time.value = time; uniforms.mode.value = mode === 'journey' ? 2 : mode === 'manifesto' ? 1 : 0
      uniforms.alpha.value = (mode === 'journey' ? 1 - smooth(.76, .9, progress) : .5)
      uniforms.beat.value = Math.max(0, Math.sin(time * 2.6))
      uniforms.resolution.value = height * ratio; uniforms.ratio.value = ratio
      if (index) { points.visible = mode === 'journey'; points.position.copy(position); points.rotation.y = yaw; points.scale.setScalar(scale) }
    })
  }
  function reduce(level: number) { fields.forEach((points, i) => points.geometry.setDrawRange(0, level === 1 ? counts[i] / 2 : 0)) }
  return { group, update, reduce }
}
