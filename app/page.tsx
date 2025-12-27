'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'motion/react'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Portfolio } from '@/components/Portfolio'
import { TechServices } from '@/components/TechServices'
import { MarketingServices } from '@/components/MarketingServices'
import { ContentServices } from '@/components/ContentServices'
import { Philosophy } from '@/components/Philosophy'
import { Contact } from '@/components/Contact'
import { Navigation } from '@/components/Navigation'

export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="bg-slate-950 text-white overflow-x-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <Navigation />

      {/* Background Gradient Effect */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute w-[1200px] h-[1200px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(6,182,212,0.3) 0%, rgba(59,130,246,0.2) 50%, transparent 70%)',
            left: `${mousePosition.x * 100}%`,
            top: `${mousePosition.y * 100}%`,
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Portfolio />
        <TechServices />
        <MarketingServices />
        <ContentServices />
        <Philosophy />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-800 py-8 text-center text-slate-400">
        <p>&copy; 2025 整合行銷服務平台 | 讓每個品牌都能被聽見</p>
      </footer>
    </div>
  )
}
