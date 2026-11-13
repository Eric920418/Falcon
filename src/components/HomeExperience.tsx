'use client'

import { useCallback, useRef, useState, type ReactNode } from 'react'
import { HomeLoading } from './HomeLoading'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useI18n } from '@/lib/i18n/client'
import { journeyChapters, journeyScreenCount, journeyScrollProgress, journeyTimelineProgress, smooth } from '@/lib/home3d/choreography'
import { ribbonScreenLength } from '@/lib/home3d/ribbon'
import type { HomeStage } from '@/lib/home3d/scene'
import type { Group, Mesh, Material } from 'three'

export function HomeExperience({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null)
  const initialAnchorHandled = useRef(false)
  const journeyResume = useRef<number | null>(null)
  const [failure, setFailure] = useState('')
  const [gate, setGate] = useState<'off' | 'loading' | 'ready' | 'error'>('loading')
  const [loadStatus, setLoadStatus] = useState({ phase: '01 / ASSETS', detail: 'CONNECTING' })
  const [attempt, setAttempt] = useState(0)
  const exitLoading = useCallback(() => setGate('off'), [])
  const { t } = useI18n()

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger, useGSAP)
    const root = rootRef.current!
    const media = gsap.matchMedia()
    media.add({ mobile: '(max-width: 767px)', desktop: '(min-width: 768px)', reduced: '(prefers-reduced-motion: reduce)' }, context => {
      const mobile = Boolean(context.conditions?.mobile)
      root.style.setProperty('--fh-journey-screens',String(journeyScreenCount(mobile)))
      if (context.conditions?.reduced) { root.dataset.motion = 'rest'; setGate('off'); return }
      const host = document.createElement('div'), canvas = document.createElement('canvas')
      host.className = 'fh-canvas-host'; host.setAttribute('aria-hidden', 'true'); host.hidden = true
      host.appendChild(canvas)
      let cancelled = false, stage: HomeStage | undefined, flight: gsap.core.Tween | undefined
      let lastFrame = 0, samples = 0, elapsed = 0, started = 0, qualityStep = 0
      let lastUiProgress = NaN
      let visibleJourneyProgress: number | null = null
      let sampleStart = 0, frameInterval = mobile ? 1 / 60 : 0
      let recoveryTime = 0
      const qualityLabels = mobile ? ['mobile','low-reflections','resolution-90','resolution-80','resolution-70','resolution-62'] : ['desktop','half-particles','no-particles','low-reflections','no-glow','low-resolution']
      const abort = new AbortController()
      const state = { progress: 0, hero: 0, manifesto: 0 }, pointer = { x: 0, y: 0 }
      const hero = root.querySelector<HTMLElement>('[data-home-stage="hero"]')!
      const manifesto = root.querySelector<HTMLElement>('[data-home-stage="manifesto"]')!
      const opening = root.querySelector<HTMLElement>('.fh-opening')!
      const chapterNumber = root.querySelector<HTMLElement>('.fh-chapter-number')!
      const journey = root.querySelector<HTMLElement>('.fh-journey')!
      const journeyStage = root.querySelector<HTMLElement>('[data-home-stage="journey"]')!
      const chapters = [...root.querySelectorAll<HTMLElement>('[data-chapter]')]
      const bar = root.querySelector<HTMLElement>('.fh-journey-progress span')!
      const assetUrl = `/models/falcon-wing-${mobile ? 'mobile' : 'desktop'}.glb?v=physical-flight1`
      root.dataset.motion = 'loading'
      setGate('loading'); setLoadStatus({ phase: '01 / ASSETS', detail: 'CONNECTING' })
      setFailure('')

      gsap.utils.toArray<HTMLElement>('[data-reveal]', root).forEach(element => {
        gsap.fromTo(element, { y: 35, opacity: 0.2 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: element, start: 'top 92%', once: true } })
      })
      gsap.to(state, { hero: 1, ease: 'none', scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: 0.6 } })
      gsap.to(state, { manifesto: 1, ease: 'none', scrollTrigger: { trigger: manifesto, start: 'top bottom', end: 'bottom top', scrub: .6 } })
      const montage = gsap.timeline({ scrollTrigger: { trigger: root.querySelector('.fh-montage'), start: 'top 12%', end: () => `+=${innerHeight * (mobile ? 0.5 : 0.85)}`, pin: true, scrub: 0.7, invalidateOnRefresh: true } })
      montage.fromTo(root.querySelector('.fh-montage-main'), { scale: 0.48, rotationY: -28, rotationX: 24, rotationZ: -14, yPercent: 35 }, { scale: 1.28, rotationY: 0, rotationX: 0, rotationZ: 0, yPercent: -10, ease: 'power2.inOut' }, 0)
        .fromTo(root.querySelector('.fh-montage-left'), { xPercent: 55, yPercent: 45, rotationY: 35, rotation: 14 }, { xPercent: -40, yPercent: -55, rotationY: -12, rotation: -14, ease: 'power2.inOut' }, 0)
        .fromTo(root.querySelector('.fh-montage-right'), { xPercent: -55, yPercent: 40, rotationY: -35, rotation: -14 }, { xPercent: 40, yPercent: -70, rotationY: 12, rotation: 14, ease: 'power2.inOut' }, 0)
      const ribbon = root.querySelector<SVGPathElement>(mobile ? '.fh-ribbon-mobile' : '.fh-ribbon-desktop')!
      gsap.fromTo(ribbon, { strokeDasharray: () => ribbonScreenLength(ribbon), strokeDashoffset: () => ribbonScreenLength(ribbon) }, { strokeDashoffset: 0, ease: 'none', scrollTrigger: { trigger: root.querySelector('.fh-ribbon'), start: 'top 90%', end: 'bottom 40%', scrub: 0.65, invalidateOnRefresh: true } })
      gsap.fromTo(root.querySelector('.fh-floating-feather'), { yPercent: -15, rotation: -28 }, { yPercent: 80, rotation: 48, ease: 'none', scrollTrigger: { trigger: root.querySelector('.fh-manifesto'), start: 'top bottom', end: 'bottom top', scrub: 0.6 } })
      root.querySelectorAll<SVGPathElement>('.fh-service-route').forEach(path => {
        gsap.fromTo(path, { strokeDashoffset: 1 }, { strokeDashoffset: 0, autoRound: false, ease: 'none', scrollTrigger: { trigger: path.closest('.fh-delivery-track') || path.closest('.fh-hubs-layout'), start: 'top 85%', end: 'bottom 40%', scrub: .5 } })
      })
      root.querySelectorAll<HTMLElement>('.fh-delivery-track').forEach(track => {
        gsap.fromTo(track.querySelector('.fh-service-graphic'), { y: mobile ? 8 : 22, rotation: mobile ? 0 : -4 }, { y: mobile ? -8 : -22, rotation: mobile ? 0 : 3, ease: 'none', scrollTrigger: { trigger: track, start: 'top bottom', end: 'bottom top', scrub: .6 } })
        gsap.fromTo(track.querySelectorAll('.fh-diagram-layer'), { y: 6 }, { y: -6, stagger: .08, ease: 'none', scrollTrigger: { trigger: track, start: 'top 85%', end: 'bottom 25%', scrub: .6 } })
        const orbit=track.querySelector('.fh-diagram-orbit')
        if(orbit)gsap.fromTo(orbit, { rotation: -12, svgOrigin: '210 133' }, { rotation: 12, ease: 'none', scrollTrigger: { trigger: track, start: 'top bottom', end: 'bottom top', scrub: .6 } })
        gsap.fromTo(track.querySelector('.fh-track-progress span'), { scaleY: 0 }, { scaleY: 1, ease: 'none', scrollTrigger: { trigger: track.querySelector('.fh-delivery-details'), start: 'top 70%', end: 'bottom 55%', scrub: .3 } })
        track.querySelectorAll<HTMLElement>('.fh-delivery-row').forEach(row => {
          gsap.fromTo(row, { '--read': 0 }, { '--read': 1, ease: 'none', scrollTrigger: { trigger: row, start: 'top 78%', end: 'top 46%', scrub: .3 } })
        })
      })
      root.querySelectorAll<HTMLElement>('.fh-project').forEach((project, index) => {
        gsap.fromTo(project, { y: mobile ? 25 : (index % 2 ? 90 : 20) }, { y: mobile ? -25 : (index % 2 ? -90 : -20), ease: 'none', scrollTrigger: { trigger: project, start: 'top bottom', end: 'bottom top', scrub: 0.65 } })
        gsap.fromTo(project.querySelector('.fh-project-image-inner'), { yPercent: -9, scale: 1.22 }, { yPercent: 9, scale: 1.22, ease: 'none', scrollTrigger: { trigger: project, start: 'top bottom', end: 'bottom top', scrub: 0.4 } })
        gsap.from(project.querySelector('.fh-project-meta'), { y: 16, opacity: 0, duration: 0.6, scrollTrigger: { trigger: project, start: 'top 85%', once: true } })
      })
      gsap.fromTo(root.querySelector('.fh-invitation-link'), { yPercent: 45, rotation: -3, opacity: 0.2 }, { yPercent: 0, rotation: 0, opacity: 1, ease: 'none', scrollTrigger: { trigger: root.querySelector('.fh-invitation'), start: 'top 95%', end: 'center 65%', scrub: 0.7 } })
      function stopScene(message?: string) {
        const wasReady = root.dataset.motion === 'ready'
        const contact = document.getElementById('contact')!
        const contactTop = contact.getBoundingClientRect().top
        const atContact = contactTop < window.innerHeight && contact.getBoundingClientRect().bottom > 0
        gsap.ticker.remove(draw)
        flight?.scrollTrigger?.kill(); flight?.kill()
        stage?.dispose(); stage = undefined
        if (host.parentElement) delete host.parentElement.dataset.rendered
        delete hero.dataset.rendered; delete manifesto.dataset.rendered
        host.remove()
        root.dataset.motion = 'rest'; delete root.dataset.scene; delete root.dataset.navDark; delete root.dataset.screenLight
        for (const chapter of chapters) { chapter.style.removeProperty('opacity'); chapter.style.removeProperty('visibility') }
        if (message && !cancelled) { setFailure(message); setGate(value => value === 'off' ? value : 'error') }
        if (wasReady && !cancelled) requestAnimationFrame(() => {
          if (cancelled) return
          ScrollTrigger.refresh()
          if (atContact) window.scrollBy(0, contact.getBoundingClientRect().top - contactTop)
        })
      }
      function draw(time: number) {
        if (!stage || cancelled || document.hidden) { lastFrame = 0; return }
        if (mobile !== (innerWidth < 768)) return
        if (mobile && time - lastFrame < frameInterval - .001) return
        const heroRect = hero.getBoundingClientRect(), manifestoRect = manifesto.getBoundingClientRect(), journeyRect = journey.getBoundingClientRect()
        const inHero = heroRect.bottom > 0 && heroRect.top < innerHeight
        const inManifesto = manifestoRect.bottom > 0 && manifestoRect.top < innerHeight
        const inJourney = journeyRect.top < innerHeight && journeyRect.bottom > 0
        visibleJourneyProgress = journeyRect.top <= 0 && journeyRect.bottom >= innerHeight ? state.progress : null
        if (!inHero && !inManifesto && !inJourney) { host.hidden = true; delete root.dataset.scene; delete root.dataset.navDark; lastFrame = 0; return }
        const inOpening = inHero || inManifesto
        const openingRect = inOpening ? opening.getBoundingClientRect() : null
        const visibleTop = Math.max(0,heroRect.top), visibleBottom = Math.min(innerHeight,manifestoRect.bottom)
        const mode = inOpening ? 'opening' : 'journey'
        const target = inOpening ? opening : journeyStage
        // Native scrolling keeps the canvas and its clipping edge in the same coordinate space.
        const changedStage = host.parentElement !== target
        if (changedStage) {
          if (host.parentElement) delete host.parentElement.dataset.rendered
          delete hero.dataset.rendered; delete manifesto.dataset.rendered
          target.prepend(host)
        }
        if (inOpening) {
          host.style.top = `${visibleTop - openingRect!.top}px`
          host.style.height = `${Math.max(1,visibleBottom-visibleTop)}px`
          host.style.bottom = 'auto'
        } else if (changedStage) {
          host.style.removeProperty('top'); host.style.removeProperty('height'); host.style.removeProperty('bottom')
        }
        host.hidden = false; root.dataset.scene = mode
        const screenLight = inJourney && (state.progress < .09 || state.progress > .87)
        if (root.dataset.screenLight !== String(screenLight)) root.dataset.screenLight = String(screenLight)
        const navDark = String(inJourney && !screenLight && journeyRect.top < 85 && journeyRect.bottom > 85)
        if (root.dataset.navDark !== navDark) root.dataset.navDark = navDark
        if (canvas.style.height !== `${innerHeight}px`) canvas.style.height = `${innerHeight}px`
        stage.resize(inOpening ? openingRect!.width : journeyRect.width, innerHeight)
        const delta = lastFrame ? time - lastFrame : 0
        lastFrame = time
        try {
          if (inOpening) {
            stage.renderOpening(heroRect.height, manifestoRect.top - visibleTop, manifestoRect.height, state, time - started, pointer, heroRect.top - visibleTop, Math.max(1,visibleBottom-visibleTop))
            hero.dataset.rendered = manifesto.dataset.rendered = 'true'
          } else stage.render('journey', state.progress, time - started, pointer)
          target.dataset.rendered = 'true'
        }
        catch (error) { stopScene(`${assetUrl}\n${error instanceof Error ? error.stack || error.message : String(error)}`); return }
        canvas.dataset.progress = state.progress.toFixed(4)
        canvas.dataset.scene = mode
        if (delta > 0 && delta < .25) canvas.dataset.frameMs = (delta*1000).toFixed(1)
        const p = state.progress
        if (p !== lastUiProgress) {
          lastUiProgress = p
          const bounds = journeyChapters
          journeyStage.style.setProperty('--entry-title', String(smooth(.09,.13,p)*(1-smooth(.17,.2,p))))
          journeyStage.style.setProperty('--entry-copy', String(1-smooth(.025,.09,p)))
          journeyStage.style.setProperty('--entry-shift', `${smooth(.025,.09,p)*40}px`)
          chapters.forEach((chapter, i) => {
            const visible = p >= bounds[i] && (p < bounds[i + 1] || i === 4)
            if (visible) chapterNumber.textContent = `0${i + 1} / 05`
            chapter.style.opacity = visible ? '1' : '0'
            chapter.style.visibility = visible ? 'visible' : 'hidden'
            chapter.style.setProperty('--chapter-phase', String(Math.max(0, Math.min(1, (p - bounds[i]) / (bounds[i + 1] - bounds[i])))))
          })
          bar.style.transform = `scaleX(${p})`
        }
        // Ignore tab pauses and screenshot stalls; only sustained rendering pressure changes quality.
        if (time - started > 2 && delta > 0 && delta < 1) { elapsed += delta; samples++ }
        if (samples >= 8 && time - sampleStart > 1.5) {
          if (mobile && frameInterval < 1 / 30 && samples / elapsed < 45) {
            frameInterval = 1 / 30; canvas.dataset.cadence = '30'
          }
          const fps = samples / elapsed
          if (fps < (mobile ? 24 : 20)) {
            recoveryTime = 0
            if (!stage.reduceQuality()) { stopScene('PERFORMANCE_FALLBACK: ' + t('裝置效能不足，已切換為靜態呈現。')); return }
            qualityStep++; canvas.dataset.quality = qualityLabels[qualityStep]
          } else if (mobile && qualityStep > 0 && fps > 28) {
            recoveryTime += elapsed
            if (recoveryTime >= 8 && stage.restoreQuality()) {
              qualityStep--; canvas.dataset.quality = qualityLabels[qualityStep]; recoveryTime = 0
            }
          } else recoveryTime = 0
          elapsed = 0; samples = 0; sampleStart = time
        }
      }
      function onPointer(event: PointerEvent) {
        if (event.pointerType !== 'mouse') return
        pointer.x = event.clientX / innerWidth * 2 - 1; pointer.y = event.clientY / innerHeight * 2 - 1
      }
      function onContextLost(event: Event) {
        event.preventDefault(); stopScene(`WEBGL_CONTEXT_LOST\n${assetUrl}\n${t('繪圖環境中斷，已保留完整頁面內容。')}`)
      }
      canvas.addEventListener('webglcontextlost', onContextLost)
      window.addEventListener('pointermove', onPointer, { passive: true })
      // Register the asynchronous setup back in this media context so every trigger is reverted.
      const attach = (loaded: HomeStage) => context.add(() => {
        stage = loaded
        root.dataset.motion = 'ready'
        canvas.dataset.quality = mobile ? 'mobile' : 'desktop'
        flight = gsap.to(state, { progress: 1, ease: value => journeyTimelineProgress(value, mobile), scrollTrigger: {
          trigger: journey, start: 'top top', end: 'bottom bottom', scrub: mobile ? 0.2 : 0.65,
          invalidateOnRefresh: true,
        } })
        started = gsap.ticker.time; sampleStart = started
        gsap.ticker.add(draw)
        ScrollTrigger.refresh()
        const hash = window.location.hash
        if (journeyResume.current !== null) {
          window.scrollTo(0, scrollY + journey.getBoundingClientRect().top + journeyScrollProgress(journeyResume.current, mobile) * (journey.offsetHeight - innerHeight))
          journeyResume.current = null
        } else if (!initialAnchorHandled.current && hash && ['#hero', '#cases', '#contact'].includes(hash)) document.querySelector(hash)?.scrollIntoView({ behavior: 'instant' })
        initialAnchorHandled.current = true
        draw(started)
        document.fonts.ready.then(() => { if (!cancelled) ScrollTrigger.refresh() })
      })
      async function load() {
        let asset: Group | undefined
        const timeout = setTimeout(() => abort.abort(new Error(`LOAD_TIMEOUT: 60s\n${assetUrl}`)), 60000)
        try {
          const [response, { GLTFLoader }, { createHomeStage }] = await Promise.all([
            fetch(assetUrl, { signal: abort.signal }),
            import('three/addons/loaders/GLTFLoader.js'), import('@/lib/home3d/scene'),
          ])
          if (!response.ok) throw new Error(`HTTP ${response.status} ${response.statusText}\n${await response.text()}`)
          if (!response.body) throw new Error('MODEL_RESPONSE_EMPTY')
          const reader = response.body.getReader(), chunks: Uint8Array[] = []
          let received = 0
          while (true) {
            const { done, value } = await reader.read()
            if (done) break
            chunks.push(value); received += value.byteLength
            if (!cancelled) setLoadStatus({ phase: '01 / ASSETS', detail: `${(received / 1048576).toFixed(2)} MB` })
          }
          const bytes = new Uint8Array(received)
          let offset = 0
          for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.byteLength }
          if (!cancelled) setLoadStatus({ phase: '02 / MODELS', detail: 'DECODING' })
          asset = (await new GLTFLoader().parseAsync(bytes.buffer, '/models/')).scene
          if (cancelled) {
            asset.traverse(object => { const mesh = object as Mesh; if (mesh.isMesh) { mesh.geometry.dispose(); (Array.isArray(mesh.material) ? mesh.material : [mesh.material]).forEach((m: Material) => m.dispose()) } })
            return
          }
          abort.signal.throwIfAborted()
          for (const name of ['Slipstream','OrbitKnot','PetalBloom']) {
            const mesh = asset.getObjectByName(name) as Mesh
            const materials = Array.isArray(mesh?.material) ? mesh.material : [mesh?.material]
            if (materials.some(material => !(material as Material & { map?: unknown })?.map)) throw new Error(`MODEL_TEXTURE_MISSING: ${name}\n${assetUrl}`)
          }
          stage = createHomeStage(canvas, asset, mobile)
          await stage.warmup(abort.signal, (done, total) => {
            if (!cancelled) setLoadStatus({ phase: '03 / SCENES', detail: `${done} / ${total}` })
          })
          attach(stage)
          if (stage && !cancelled) { setLoadStatus({ phase: 'READY', detail: 'LET’S FLY' }); setGate('ready') }
        } catch (error) {
          if (!cancelled) {
            if (!stage) asset?.traverse(object => { const mesh = object as Mesh; if (mesh.isMesh) { mesh.geometry.dispose(); (Array.isArray(mesh.material) ? mesh.material : [mesh.material]).forEach((m: Material) => m.dispose()) } })
            stopScene(`${assetUrl}\n${error instanceof Error ? error.stack || error.message : String(error)}`)
            setGate('error'); setLoadStatus({ phase: 'LOAD FAILED', detail: 'RETRY / CONTINUE' })
          }
        } finally { clearTimeout(timeout) }
      }
      void load()
      return () => {
        journeyResume.current = visibleJourneyProgress !== null && visibleJourneyProgress > 0 && visibleJourneyProgress < 1 ? visibleJourneyProgress : null
        cancelled = true; abort.abort(); stopScene()
        canvas.removeEventListener('webglcontextlost', onContextLost)
        window.removeEventListener('pointermove', onPointer)
        delete root.dataset.motion
      }
    }, root)
    return () => media.revert()
  }, { dependencies: [attempt], revertOnUpdate: true })

  return <div ref={rootRef} className="falcon-site falcon-home">
    <noscript><style>{'html:has(.fh-loading),body:has(.fh-loading){overflow:auto!important}.fh-loading{display:none!important}'}</style></noscript>
    <div className="fh-page-content">{children}</div>
    {gate !== 'off' && <HomeLoading ready={gate === 'ready'} error={gate === 'error' ? failure : ''} phase={loadStatus.phase} detail={loadStatus.detail} onExit={exitLoading} onRetry={() => setAttempt(value => value + 1)} />}
    {failure && gate === 'off' && <aside className="fh-render-error" role="alert"><strong>{t('3D 顯示已切換為靜態版本')}</strong><details open><summary>{t('完整錯誤資訊')}</summary><pre>{failure}</pre></details></aside>}
  </div>
}
