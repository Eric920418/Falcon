'use client'

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
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <div className="bg-stone-950 text-stone-100 overflow-x-hidden">
      {/* Progress Bar - 使用品牌色 */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] falcon-progress origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative">
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
      <footer className="relative border-t border-stone-800 py-12 px-6 bg-stone-950">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-stone-400 text-sm">
                &copy; 2025 隼訊數位行銷
              </p>
              <p className="text-stone-600 text-xs mt-1">
                讓每個品牌都能被聽見
              </p>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="https://www.instagram.com/falcon.information"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-500 hover:text-amber-500 transition-colors text-sm"
              >
                Instagram
              </a>
              <a
                href="https://www.threads.net/@falcon.information"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-500 hover:text-amber-500 transition-colors text-sm"
              >
                Threads
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
