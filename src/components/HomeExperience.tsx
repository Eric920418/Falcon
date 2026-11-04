'use client'

import { useRef, useState, type ReactNode } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useI18n } from '@/lib/i18n/client'
import { journeyChapters, smooth } from '@/lib/home3d/choreography'
import { ribbonScreenLength } from '@/lib/home3d/ribbon'
import type { HomeStage } from '@/lib/home3d/scene'
import type { Group, Mesh, Material } from 'three'

export function HomeExperience({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null)
  const initialAnchorHandled = useRef(false)
  const journeyResume = useRef<number | null>(null)
  const [failure, setFailure] = useState('')
  const { t } = useI18n()

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger, useGSAP)
    const root = rootRef.current!
    const media = gsap.matchMedia()
    media.add({ mobile: '(max-width: 767px)', desktop: '(min-width: 768px)', reduced: '(prefers-reduced-motion: reduce)' }, context => {
      const mobile = Boolean(context.conditions?.mobile)
      if (context.conditions?.reduced) { root.dataset.motion = 'rest'; return }
      const host = document.createElement('div'), canvas = document.createElement('canvas')
      host.className = 'fh-canvas-host'; host.setAttribute('aria-hidden', 'true'); host.hidden = true
      host.appendChild(canvas)
      let cancelled = false, stage: HomeStage | undefined, flight: gsap.core.Tween | undefined
      let lastFrame = 0, samples = 0, elapsed = 0, started = 0, qualityStep = 0
      let sampleStart = 0
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
      const assetUrl = `/models/falcon-wing-${mobile ? 'mobile' : 'desktop'}.glb`
      root.dataset.motion = 'loading'
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
        if (message && !cancelled) setFailure(message)
        if (wasReady && !cancelled) requestAnimationFrame(() => {
          if (cancelled) return
          ScrollTrigger.refresh()
          if (atContact) window.scrollBy(0, contact.getBoundingClientRect().top - contactTop)
        })
      }
      function draw(time: number) {
        if (!stage || cancelled || document.hidden) { lastFrame = 0; return }
        const heroRect = hero.getBoundingClientRect(), manifestoRect = manifesto.getBoundingClientRect(), journeyRect = journey.getBoundingClientRect()
        const inHero = heroRect.bottom > 0 && heroRect.top < innerHeight
        const inManifesto = manifestoRect.bottom > 0 && manifestoRect.top < innerHeight
        const inJourney = journeyRect.top < innerHeight && journeyRect.bottom > 0
        if (!inHero && !inManifesto && !inJourney) { host.hidden = true; delete root.dataset.scene; delete root.dataset.navDark; lastFrame = 0; return }
        const inOpening = inHero || inManifesto
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
          host.style.top = `${heroRect.top - opening.getBoundingClientRect().top}px`
          host.style.height = `${manifestoRect.bottom - heroRect.top}px`
          host.style.bottom = 'auto'
        } else {
          host.style.removeProperty('top'); host.style.removeProperty('height'); host.style.removeProperty('bottom')
        }
        host.hidden = false; root.dataset.scene = mode
        const screenLight = inJourney && (state.progress < .09 || state.progress > .87)
        root.dataset.screenLight = String(screenLight)
        root.dataset.navDark = String(inJourney && !screenLight && journeyRect.top < 85 && journeyRect.bottom > 85)
        if (mobile && !changedStage && time - lastFrame < 1 / 32) return
        stage.resize(host.clientWidth, host.clientHeight)
        const delta = lastFrame ? time - lastFrame : 0
        lastFrame = time
        try {
          if (inOpening) {
            stage.renderOpening(heroRect.height, manifestoRect.top - heroRect.top, manifestoRect.height, state, time - started, pointer)
            hero.dataset.rendered = manifesto.dataset.rendered = 'true'
          } else stage.render('journey', state.progress, time - started, pointer)
          target.dataset.rendered = 'true'
        }
        catch (error) { stopScene(`${assetUrl}\n${error instanceof Error ? error.stack || error.message : String(error)}`); return }
        canvas.dataset.progress = state.progress.toFixed(4)
        canvas.dataset.scene = mode
        if (delta > 0 && delta < .25) canvas.dataset.frameMs = (delta*1000).toFixed(1)
        const p = state.progress
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
        // Ignore tab pauses and screenshot stalls; only sustained rendering pressure changes quality.
        if (time - started > 5 && delta > 0 && delta < 0.25) { elapsed += delta; samples++ }
        if (samples >= 120 && time - sampleStart > 5) {
          if (samples / elapsed < 20) {
            if (!stage.reduceQuality()) { stopScene('PERFORMANCE_FALLBACK: ' + t('裝置效能不足，已切換為靜態呈現。')); return }
            qualityStep++; canvas.dataset.quality = ['half-particles', 'no-particles', 'low-reflections', 'no-glow', 'low-resolution'][qualityStep - 1]
          }
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
        flight = gsap.to(state, { progress: 1, ease: 'none', scrollTrigger: {
          trigger: journey, start: 'top top', end: 'bottom bottom', scrub: mobile ? 0.2 : 0.65,
          invalidateOnRefresh: true,
        } })
        started = gsap.ticker.time; sampleStart = started
        gsap.ticker.add(draw)
        ScrollTrigger.refresh()
        const hash = window.location.hash
        if (journeyResume.current !== null) {
          window.scrollTo(0, scrollY + journey.getBoundingClientRect().top + journeyResume.current * (journey.offsetHeight - innerHeight))
          journeyResume.current = null
        } else if (!initialAnchorHandled.current && hash && ['#hero', '#cases', '#contact'].includes(hash)) document.querySelector(hash)?.scrollIntoView({ behavior: 'instant' })
        initialAnchorHandled.current = true
        draw(started)
        document.fonts.ready.then(() => { if (!cancelled) ScrollTrigger.refresh() })
      })
      async function load() {
        let asset: Group | undefined
        try {
          const [response, { GLTFLoader }, { createHomeStage }] = await Promise.all([
            fetch(assetUrl, { signal: abort.signal }),
            import('three/addons/loaders/GLTFLoader.js'), import('@/lib/home3d/scene'),
          ])
          if (!response.ok) throw new Error(`HTTP ${response.status} ${response.statusText}\n${await response.text()}`)
          asset = (await new GLTFLoader().parseAsync(await response.arrayBuffer(), '/models/')).scene
          if (cancelled) {
            asset.traverse(object => { const mesh = object as Mesh; if (mesh.isMesh) { mesh.geometry.dispose(); (Array.isArray(mesh.material) ? mesh.material : [mesh.material]).forEach((m: Material) => m.dispose()) } })
            return
          }
          attach(createHomeStage(canvas, asset, mobile))
        } catch (error) {
          if (!cancelled) {
            asset?.traverse(object => { const mesh = object as Mesh; if (mesh.isMesh) { mesh.geometry.dispose(); (Array.isArray(mesh.material) ? mesh.material : [mesh.material]).forEach((m: Material) => m.dispose()) } })
            stopScene(`${assetUrl}\n${error instanceof Error ? error.stack || error.message : String(error)}`)
          }
        }
      }
      void load()
      return () => {
        const rect = journey.getBoundingClientRect()
        if (root.dataset.motion === 'ready' && rect.top < 0 && rect.bottom > innerHeight) journeyResume.current = state.progress
        cancelled = true; abort.abort(); stopScene()
        canvas.removeEventListener('webglcontextlost', onContextLost)
        window.removeEventListener('pointermove', onPointer)
        delete root.dataset.motion
      }
    }, root)
    return () => media.revert()
  })

  return <div ref={rootRef} className="falcon-site falcon-home">
    {children}
    {failure && <aside className="fh-render-error" role="alert"><strong>{t('3D 顯示已切換為靜態版本')}</strong><details open><summary>{t('完整錯誤資訊')}</summary><pre>{failure}</pre></details></aside>}
  </div>
}
