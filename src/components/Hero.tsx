'use client'

import { motion } from 'motion/react'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

export function Hero() {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 背景圖片 */}
      <Image
        src="/主視覺背景_3D立體風格.png"
        alt="Hero Background"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* 暗色遮罩讓文字更清晰 */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950/80" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
   

        {/* Main Heading */}
        <motion.h1
          className="text-[40px] md:text-7xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          數位轉型的領航者
        </motion.h1>

        <motion.p
          className="text-base md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          整合行銷 × 品牌形象 × 數位內容
        </motion.p>

        <motion.p
          className="text-base md:text-lg text-slate-400 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          從網站開發到AI應用，從SEO優化到社群經營，<br />
          我們提供全方位的數位解決方案
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <motion.button
            className=" md:px-8 px-4 md:py-4 py-2 md:text-lg text-base bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white shadow-lg shadow-cyan-500/50 w-[50%] md:w-full mx-auto"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(6,182,212,0.6)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            開始合作
          </motion.button>
          <motion.button
            className="md:px-8 px-4 md:py-4 py-2 md:text-lg text-base border-2 border-cyan-500 rounded-full text-cyan-400 hover:bg-cyan-500/10 w-[50%] md:w-full mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            探索服務
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cyan-400"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={scrollToNext}
      >
        <ChevronDown size={40} />
      </motion.button>
    </section>
  );
}
