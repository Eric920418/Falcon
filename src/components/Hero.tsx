'use client'

import { motion } from 'motion/react'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { useMemo } from 'react'

// 確定性偽隨機生成器（避免 hydration mismatch）
const seededRandom = (seed: number) => {
  const x = Math.sin(seed * 9999) * 10000;
  return x - Math.floor(x);
};

export function Hero() {
  // 預先計算固定位置，確保伺服器和客戶端一致（固定小數位數避免 hydration mismatch）
  const particles = useMemo(() =>
    [...Array(15)].map((_, i) => ({
      left: Math.round((10 + seededRandom(i * 2) * 80) * 100) / 100,
      top: Math.round((10 + seededRandom(i * 2 + 1) * 80) * 100) / 100,
      duration: Math.round((2 + seededRandom(i * 3) * 3) * 100) / 100,
      delay: Math.round(seededRandom(i * 4) * 2 * 100) / 100,
    })), []
  );

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-background relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 光暈效果層 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="hero-glow" />
        <div className="hero-glow" />
        <div className="hero-glow" />
      </div>

      {/* 流動波浪層 */}
      <div className="hero-wave-layer">
        <div className="hero-wave" />
        <div className="hero-wave" />
      </div>

      {/* 浮動氣泡層 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="hero-bubble" />
        <div className="hero-bubble" />
        <div className="hero-bubble" />
        <div className="hero-bubble" />
      </div>

      {/* 動態光點 */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/60 rounded-full"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Logo */}
        <motion.div
          className="mb-12 flex justify-center"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 1.2
          }}
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Image
              src="/logo.png"
              alt="Company Logo"
              width={256}
              height={256}
              className="object-contain drop-shadow-2xl"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="text-5xl md:text-7xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          數位轉型的領航者
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          整合行銷 × 品牌形象 × 數位內容
        </motion.p>

        <motion.p
          className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto"
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
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white shadow-lg shadow-cyan-500/50"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(6,182,212,0.6)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            開始合作
          </motion.button>
          <motion.button
            className="px-8 py-4 border-2 border-cyan-500 rounded-full text-cyan-400 hover:bg-cyan-500/10"
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
