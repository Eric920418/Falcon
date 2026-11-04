import { AdditiveBlending, CanvasTexture, Color, DoubleSide, Group, InstancedMesh, Mesh, MeshBasicMaterial, MeshStandardMaterial, Object3D, PlaneGeometry, RepeatWrapping, ShaderMaterial, SRGBColorSpace, Vector3 } from 'three'
import { Reflector } from 'three/addons/objects/Reflector.js'
import { pathFrame, structureCount, structureSegment } from './world-geometry'
import { smooth } from './choreography'

export function createJourneyWorld(asset: Group, mobile: boolean) {
  const group = new Group(), structure = new Group(); group.add(structure)
  const beam = asset.getObjectByName('ArchitectureBeam') as Mesh, tunnel = asset.getObjectByName('BrandTunnel') as Mesh
  if (!beam?.geometry || !tunnel?.geometry) throw new Error('MODEL_INVALID: ArchitectureBeam / BrandTunnel missing')
  const count = structureCount(mobile) * 12
  const metal = new MeshStandardMaterial({ color: 0x9ea9bc, metalness: .85, roughness: .25, transparent: true })
  const glass = new MeshStandardMaterial({ color: 0x10151e, metalness: .8, roughness: .18, transparent: true })
  const light = new MeshBasicMaterial({ color: new Color(2.8,3.1,4), transparent: true })
  const beams = new InstancedMesh(beam.geometry, metal, count), panels = new InstancedMesh(beam.geometry, glass, count), lights = new InstancedMesh(beam.geometry, light, count)
  for (const mesh of [beams,panels,lights]) { mesh.frustumCulled=false; structure.add(mesh) }
  const dummy = new Object3D(), direction = new Vector3(), axis = new Vector3(0,1,0)
  const glowMaterial = new ShaderMaterial({ transparent: true, depthWrite:false, blending:AdditiveBlending,
    uniforms:{alpha:{value:1}},
    vertexShader:'varying vec2 vUv; void main(){vUv=uv; vec4 p=modelViewMatrix*instanceMatrix*vec4(0.,0.,0.,1.); p.xy+=position.xy*1.4; gl_Position=projectionMatrix*p;}',
    fragmentShader:'uniform float alpha; varying vec2 vUv; void main(){float a=exp(-length(vUv-.5)*10.)*.3*alpha; gl_FragColor=vec4(.57,.68,1.,a);}' })
  const glows = new InstancedMesh(new PlaneGeometry(1,1),glowMaterial,structureCount(mobile)*2); glows.frustumCulled=false;structure.add(glows)
  const mirrors: Reflector[] = []
  for (let i=0;i<(mobile?1:2);i++) {
    const mirror = new Reflector(new PlaneGeometry(i?26:(mobile?26:40),i?90:22),{color:0xa2acc1,textureWidth:mobile?512:1024,textureHeight:mobile?256:512,clipBias:.003,multisample:0})
    if (i) { mirror.position.set(0,-11.05,-39);mirror.rotation.x=-Math.PI/2 }
    else { mirror.position.set(mobile?0:10,0,mobile?-68:-65);mirror.rotation.y=mobile?.08:-Math.PI/4 }
    const reflectionMaterial=mirror.material as ShaderMaterial
    reflectionMaterial.transparent=true;reflectionMaterial.depthWrite=false
    reflectionMaterial.uniforms.alpha={value:1}
    reflectionMaterial.fragmentShader='uniform float alpha;\n'+reflectionMaterial.fragmentShader.replace('color ), 1.0','color ), alpha')
    const original = mirror.onBeforeRender
    mirror.onBeforeRender = function (...args) {
      const visibility=mirrors.map(item=>item.visible)
      mirrors.forEach(item=>{item.visible=false})
      try { original.apply(this,args) } finally { mirrors.forEach((item,index)=>{item.visible=visibility[index]}) }
    }
    group.add(mirror);mirrors.push(mirror)
  }
  // Static black glass closes the room beyond the two bounded reflection passes.
  const ceiling=new Mesh(new PlaneGeometry(26,90),glass);ceiling.rotation.x=Math.PI/2;ceiling.position.set(0,11.08,-39)
  const wall=new Mesh(new PlaneGeometry(90,22),glass);wall.rotation.y=Math.PI/2;wall.position.set(-13.08,0,-39);structure.add(ceiling,wall)
  const textureCanvas=document.createElement('canvas');textureCanvas.width=mobile?512:1024;textureCanvas.height=textureCanvas.width
  const context=textureCanvas.getContext('2d')!
  context.fillStyle='#163fe3';context.fillRect(0,0,textureCanvas.width,textureCanvas.height)
  const unit=textureCanvas.width/1024;context.scale(unit,unit);context.fillStyle='#f1f4ff';context.font='500 128px Arial, sans-serif'
  context.fillText('FALCON',70,220);context.fillText('FALCON',380,770)
  context.save();context.translate(210,440);context.rotate(-.3)
  for(let i=0;i<5;i++){context.beginPath();context.moveTo(i*40,-i*12);context.bezierCurveTo(130+i*40,-140,210+i*40,-160,260+i*38,-130);context.quadraticCurveTo(120+i*35,-20,i*40,90-i*12);context.fill()}
  context.restore()
  const texture=new CanvasTexture(textureCanvas);texture.colorSpace=SRGBColorSpace;texture.wrapS=texture.wrapT=RepeatWrapping;texture.repeat.set(2,5);texture.anisotropy=4
  const blueMaterial=new MeshStandardMaterial({map:texture,roughness:.5,metalness:.15,side:DoubleSide,transparent:true,emissive:0xffffff,emissiveMap:texture,emissiveIntensity:.2})
  const blueTunnel=new Mesh(tunnel.geometry,blueMaterial);group.add(blueTunnel)
  const horizonMaterial=new ShaderMaterial({transparent:true,depthWrite:false,uniforms:{alpha:{value:1}},
    vertexShader:'varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
    fragmentShader:'varying vec2 vUv; uniform float alpha; void main(){float y=vUv.y-.47; vec3 c=mix(vec3(.015,.035,.10),vec3(.04,.16,.72),exp(-abs(y)*12.));c+=vec3(.8,.86,1.)*exp(-abs(y)*160.);gl_FragColor=vec4(c,alpha);}'})
  const horizon=new Mesh(new PlaneGeometry(240,110),horizonMaterial);horizon.position.set(0,0,-95);group.add(horizon)
  const ornaments=Array.from({length:mobile?6:8},(_,i)=>{
    const source=asset.getObjectByName(['OrbitKnot','FoldedRibbon','PetalBloom'][i%3]) as Mesh
    const mesh=new Mesh(source.geometry,source.material),basis=pathFrame(.16+i*.1),angle=i*2.4
    mesh.position.copy(new Vector3(Math.cos(angle)*15.7,Math.sin(angle)*15.7,0).applyQuaternion(basis.rotation).add(basis.center));mesh.scale.setScalar(.7);mesh.quaternion.copy(basis.rotation);group.add(mesh);return mesh
  })
  let lastProgress=-1
  function update(p:number) {
    if(p===lastProgress)return
    lastProgress=p
    const reveal=smooth(.12,.22,p),retire=1-smooth(.64,.72,p)
    structure.visible=reveal*retire>.001;metal.opacity=glass.opacity=reveal*retire;light.opacity=reveal*retire
    glowMaterial.uniforms.alpha.value=reveal*retire
    mirrors.forEach(mirror=>{mirror.visible=p>=.15&&p<.44;(mirror.material as ShaderMaterial).uniforms.alpha.value=smooth(.15,.22,p)*(1-smooth(.39,.44,p))})
    blueMaterial.opacity=smooth(.58,.68,p);blueTunnel.visible=blueMaterial.opacity>0
    horizonMaterial.uniforms.alpha.value=1-smooth(.18,.27,p);horizon.visible=p<.27
    ornaments.forEach((mesh,i)=>{mesh.visible=p>.18&&p<.69;mesh.rotation.z=i*.8+p*.3})
    if(!structure.visible)return
    let index=0,glowIndex=0
    for(let frame=0;frame<structureCount(mobile);frame++) for(let side=0;side<4;side++) for(let part=0;part<3;part++) {
      const segment=structureSegment(frame,side,part,p,mobile)
      direction.copy(segment.end).sub(segment.start)
      dummy.position.copy(segment.start).add(segment.end).multiplyScalar(.5);dummy.quaternion.setFromUnitVectors(axis,direction.clone().normalize())
      dummy.scale.set(.2+(frame%3)*.13,direction.length(),.65);dummy.updateMatrix();beams.setMatrixAt(index,dummy.matrix)
      dummy.scale.set(.37,direction.length()*(.48+(frame%4)*.12),.8);dummy.updateMatrix();panels.setMatrixAt(index,dummy.matrix)
      dummy.position.z+=.46;dummy.scale.set(.055,direction.length()*(part===1?.82:.28),.055);dummy.updateMatrix();lights.setMatrixAt(index,dummy.matrix)
      if(side%2===0&&part===1){glows.setMatrixAt(glowIndex++,dummy.matrix)}
      index++
    }
    for(const mesh of [beams,panels,lights,glows])mesh.instanceMatrix.needsUpdate=true
  }
  return {group,update,reduceReflections(){mirrors.forEach(mirror=>mirror.getRenderTarget().setSize(mobile?256:512,mobile?128:256))},disableGlow(){glows.visible=false},dispose(){mirrors.forEach(mirror=>mirror.dispose());texture.dispose()}}
}
