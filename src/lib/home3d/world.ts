import { BoxGeometry, AdditiveBlending, CanvasTexture, Color, DoubleSide, Group, InstancedMesh, Mesh, MeshBasicMaterial, MeshStandardMaterial, Object3D, PlaneGeometry, RepeatWrapping, ShaderMaterial, SRGBColorSpace, Vector2, Vector3 } from 'three'
import { Reflector } from 'three/addons/objects/Reflector.js'
import { mirrorRoom, mirrorRoomOpacity, pathFrame, structureCount, structureFirstFrame, structureSegment } from './world-geometry'
import { smooth } from './choreography'

export function createJourneyWorld(asset: Group, mobile: boolean) {
  const group = new Group(), structure = new Group(); group.add(structure)
  const beam = asset.getObjectByName('ArchitectureBeam') as Mesh, tunnel = asset.getObjectByName('BrandTunnel') as Mesh
  if (!beam?.geometry || !tunnel?.geometry) throw new Error('MODEL_INVALID: ArchitectureBeam / BrandTunnel missing')
  const count = structureCount(mobile) * 12
  const metal = new MeshStandardMaterial({ color: 0x9ea9bc, metalness: .85, roughness: .25, transparent: true })
  const glass = new MeshStandardMaterial({ color: 0x10151e, metalness: .8, roughness: .18, transparent: true })
  const light = new MeshBasicMaterial({ color: new Color(2.8,3.1,4), transparent: true })
  const trim = mobile ? new BoxGeometry(1,1,1) : beam.geometry
  const beams = new InstancedMesh(beam.geometry, metal, count), panels = new InstancedMesh(trim, glass, count), lights = new InstancedMesh(trim, light, count)
  for (const mesh of [beams,panels,lights]) { mesh.frustumCulled=false; structure.add(mesh) }
  const dummy = new Object3D(), direction = new Vector3(), axis = new Vector3(0,1,0)
  const glowMaterial = new ShaderMaterial({ transparent: true, depthWrite:false, blending:AdditiveBlending,
    uniforms:{alpha:{value:1}},
    vertexShader:'varying vec2 vUv; void main(){vUv=uv; vec4 p=modelViewMatrix*instanceMatrix*vec4(0.,0.,0.,1.); p.xy+=position.xy*1.4; gl_Position=projectionMatrix*p;}',
    fragmentShader:'uniform float alpha; varying vec2 vUv; void main(){float a=exp(-length(vUv-.5)*10.)*.3*alpha; gl_FragColor=vec4(.57,.68,1.,a);}' })
  const glows = new InstancedMesh(new PlaneGeometry(1,1),glowMaterial,structureCount(mobile)*2); glows.frustumCulled=false;structure.add(glows)
  const mirrors: Reflector[] = [], room = new Group(); group.add(room)
  const roomMaterial = new MeshStandardMaterial({ color: 0x0c111b, metalness: .4, roughness: .42 })
  const { halfWidth, halfHeight, depth, centerZ, inset } = mirrorRoom
  for (const side of [-1, 1]) {
    const wall = new Mesh(new PlaneGeometry(depth, halfHeight * 2), roomMaterial)
    wall.position.set(side * halfWidth, 0, centerZ); wall.rotation.y = -side * Math.PI / 2
    const horizontal = new Mesh(new PlaneGeometry(halfWidth * 2, depth), roomMaterial)
    horizontal.position.set(0, side * halfHeight, centerZ); horizontal.rotation.x = side * Math.PI / 2
    room.add(wall, horizontal)
  }
  for (let i=0;i<(mobile?1:2);i++) {
    const size = mobile ? 512 : 1024
    const mirror = new Reflector(new PlaneGeometry(i ? depth : halfWidth * 2, i ? halfHeight * 2 : depth),{color:0x8794ad,textureWidth:size,textureHeight:size,clipBias:.003,multisample:mobile?0:2})
    if (i) { mirror.position.set(halfWidth-inset,0,centerZ);mirror.rotation.y=-Math.PI/2 }
    else { mirror.position.set(0,-halfHeight+inset,centerZ);mirror.rotation.x=-Math.PI/2 }
    const reflectionMaterial=mirror.material as ShaderMaterial
    reflectionMaterial.uniforms.reflectionMix={value:1}
    reflectionMaterial.uniforms.roomOpacity={value:1}
    reflectionMaterial.uniforms.texel={value:new Vector2(.7/size,.7/size)}
    reflectionMaterial.fragmentShader='uniform float reflectionMix; uniform float roomOpacity; uniform vec2 texel;\n'+reflectionMaterial.fragmentShader
      .replace('vec4 base = texture2DProj( tDiffuse, vUv );', `vec2 uv = vUv.xy / vUv.w;
        vec4 base = texture2D(tDiffuse, uv) * .4;
        base += texture2D(tDiffuse, uv + vec2(texel.x,0.)) * .15;
        base += texture2D(tDiffuse, uv - vec2(texel.x,0.)) * .15;
        base += texture2D(tDiffuse, uv + vec2(0.,texel.y)) * .15;
        base += texture2D(tDiffuse, uv - vec2(0.,texel.y)) * .15;`)
      .replace('vec4( blendOverlay( base.rgb, color ), 1.0 )', 'vec4(mix(vec3(.008,.012,.02), blendOverlay(base.rgb,color), reflectionMix), roomOpacity)')
    const original = mirror.onBeforeRender
    mirror.onBeforeRender = function (...args) {
      const visibility=mirrors.map(item=>item.visible)
      mirrors.forEach(item=>{item.visible=false})
      try { original.apply(this,args) } finally { mirrors.forEach((item,index)=>{item.visible=visibility[index]}) }
    }
    room.add(mirror);mirrors.push(mirror)
  }
  const tunnelCopy=[['SEARCH','SEO / GEO','#1025a8'],['BUILD','WEBSITES & PLATFORMS','#123be0'],['DESIGN','BRAND & EXPERIENCE','#1c45e5'],['AI','SYSTEMS & AUTOMATION','#0b2fc4']]
  const tunnelTextures=tunnelCopy.map(([title,subtitle,color],side)=>{
    const canvas=document.createElement('canvas'),w=side%2?1024:672,h=side%2?672:1024
    canvas.width=mobile?w/2:w;canvas.height=mobile?h/2:h
    const context=canvas.getContext('2d')
    if(!context)throw new Error('TUNNEL_TEXTURE_ERROR: Canvas 2D context unavailable')
    context.scale(mobile?.5:1,mobile?.5:1);context.fillStyle=color;context.fillRect(0,0,w,h)
    context.fillStyle='rgba(225,235,255,.28)'
    if(side%2){context.fillRect(0,5,w,2);context.fillRect(0,h-7,w,2)}
    else{context.fillRect(5,0,2,h);context.fillRect(w-7,0,2,h)}
    context.fillStyle='#f1f4ff';context.textAlign='center';context.textBaseline='middle'
    context.font=`500 ${side%2?(mobile?128:154):(mobile?82:106)}px "Helvetica Neue", sans-serif`
    context.fillText(title,w/2,h*.47)
    context.font='400 25px "Helvetica Neue", sans-serif';context.fillText(subtitle,w/2,h*.47+95)
    context.fillStyle='rgba(225,235,255,.6)';context.font='400 17px "Helvetica Neue", sans-serif'
    context.fillText(`FALCON  /  0${side+1}`,w/2,h*.47-110)
    const texture=new CanvasTexture(canvas);texture.colorSpace=SRGBColorSpace;texture.wrapS=texture.wrapT=RepeatWrapping;texture.anisotropy=4
    return texture
  })
  const blueMaterials=tunnelTextures.map(map=>new MeshStandardMaterial({map,roughness:.68,metalness:.05,side:DoubleSide,transparent:true,emissive:0xffffff,emissiveMap:map,emissiveIntensity:.12}))
  const wallIndices=tunnel.geometry.index!.count/4;tunnel.geometry.clearGroups()
  for(let side=0;side<4;side++)tunnel.geometry.addGroup(side*wallIndices,wallIndices,side)
  const blueTunnel=new Mesh(tunnel.geometry,blueMaterials);group.add(blueTunnel)
  const horizonMaterial=new ShaderMaterial({transparent:true,depthWrite:false,uniforms:{alpha:{value:1}},
    vertexShader:'varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
    fragmentShader:'varying vec2 vUv; uniform float alpha; void main(){float y=vUv.y-.47; vec3 c=mix(vec3(.015,.035,.10),vec3(.04,.16,.72),exp(-abs(y)*12.));c+=vec3(.8,.86,1.)*exp(-abs(y)*160.);gl_FragColor=vec4(c,alpha);}'})
  const horizon=new Mesh(new PlaneGeometry(240,110),horizonMaterial);horizon.position.set(0,0,-95);group.add(horizon)
  const ornaments=Array.from({length:mobile?6:8},(_,i)=>{
    const source=asset.getObjectByName(['OrbitKnot','FoldedRibbon','PetalBloom','Slipstream'][i%4]) as Mesh
    const mesh=new Mesh(source.geometry,source.material),basis=pathFrame(.16+i*.1),angle=i*2.4
    mesh.position.copy(new Vector3(Math.cos(angle)*15.7,Math.sin(angle)*15.7,0).applyQuaternion(basis.rotation).add(basis.center));mesh.scale.setScalar(.7);mesh.quaternion.copy(basis.rotation);group.add(mesh);return mesh
  })
  let lastProgress=-1, lastTwist=-1, lastFirst=-1
  function update(p:number) {
    if(p===lastProgress)return
    lastProgress=p
    const reveal=smooth(.12,.22,p),retire=1-smooth(.64,.72,p)
    structure.visible=reveal*retire>.001;metal.opacity=glass.opacity=reveal*retire;light.opacity=reveal*retire
    glowMaterial.uniforms.alpha.value=reveal*retire
    const reflection=smooth(.15,.22,p)*(1-smooth(.39,.44,p))
    const opacity=mirrorRoomOpacity(p)
    room.visible=opacity>.001
    roomMaterial.opacity=opacity;roomMaterial.transparent=opacity<1;roomMaterial.depthWrite=opacity===1
    mirrors.forEach((mirror,i)=>{
      const material=mirror.material as ShaderMaterial
      material.uniforms.reflectionMix.value=reflection*(i?.86:.72)
      material.uniforms.roomOpacity.value=opacity
      material.transparent=opacity<1;material.depthWrite=opacity===1
    })
    const blueOpacity=smooth(.58,.68,p)
    blueMaterials.forEach(material=>{material.opacity=blueOpacity;material.transparent=blueOpacity<1});blueTunnel.visible=blueOpacity>0
    horizonMaterial.uniforms.alpha.value=1-smooth(.18,.27,p);horizon.visible=p<.27
    ornaments.forEach((mesh,i)=>{mesh.visible=p>.18&&p<.69;mesh.rotation.z=[0,.2,-.1,.15][i%4]+p*.3})
    const twist=smooth(.39,.64,p)
    const first=structureFirstFrame(p,mobile)
    if(!structure.visible || (twist===lastTwist && first===lastFirst))return
    lastTwist=twist;lastFirst=first
    let index=0,glowIndex=0
    for(let frame=first;frame<first+structureCount(mobile);frame++) for(let side=0;side<4;side++) for(let part=0;part<3;part++) {
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
  function reflectionSize(size:number) {
    mirrors.forEach(mirror=>{mirror.getRenderTarget().setSize(size,size);(mirror.material as ShaderMaterial).uniforms.texel.value.set(.7/size,.7/size)})
  }
  return {group,update,reduceReflections(){reflectionSize(mobile?256:512)},restoreReflections(){reflectionSize(mobile?512:1024)},disableGlow(){glows.visible=false},dispose(){mirrors.forEach(mirror=>mirror.dispose());tunnelTextures.forEach(texture=>texture.dispose())}}
}
