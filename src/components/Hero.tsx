'use client'

import { motion } from 'motion/react'
import { ChevronDown, ArrowRight } from 'lucide-react'
import Image from 'next/image'

export function Hero() {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1E2A2E]">
      {/* 背景圖片 */}
      <Image
        src="/主視覺背景_3D立體風格.png"
        alt="Hero Background"
        fill
        priority
        className="object-cover opacity-40"
        sizes="100vw"
      />

      {/* 工業感網格背景 */}
      <div className="absolute inset-0 industrial-grid opacity-30" />

      {/* 斜線紋理 */}
      <div className="absolute inset-0 diagonal-lines" />

      {/* 鋼藍灰光暈 */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#5F808B]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 left-1/5 w-[400px] h-[400px] bg-[#6D8F96]/8 rounded-full blur-[100px]" />

      {/* 遮罩 */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E2A2E]/50 via-[#1E2A2E]/30 to-[#1E2A2E]/70" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* 上方裝飾線 */}
        <motion.div
          className="flex items-center gap-4 mb-8"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="brand-line" />
          <span className="text-[#6D8F96] text-sm tracking-[0.2em] uppercase font-medium">
            Digital Marketing Agency
          </span>
        </motion.div>

        {/* 主標題 - 不對稱排版 */}
        <div className="mb-8">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl text-[#E0E5E8] leading-[1.1] tracking-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            數位轉型的
          </motion.h1>
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight mt-2"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
          >
            <span className="text-falcon-gradient">領航者</span>
          </motion.h1>
        </div>

        {/* 副標題 */}
        <motion.p
          className="text-lg md:text-xl text-[#A8B6BC] mb-4 max-w-xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          整合行銷 · 品牌形象 · 數位內容
        </motion.p>

        <motion.p
          className="text-base text-[#6D8F96] mb-12 max-w-lg leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.6 }}
        >
          從網站開發到AI應用，從SEO優化到社群經營，
          我們提供全方位的數位解決方案
        </motion.p>

        {/* CTA 按鈕 */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <button
            className="falcon-btn-primary inline-flex items-center gap-2 group"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            開始合作
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button
            className="falcon-btn-outline"
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
          >
            探索作品
          </button>
        </motion.div>

        {/* 信任徽章 - 簡化設計 */}
        <motion.div
          className="flex flex-wrap gap-6 mt-16 pt-8 border-t border-[#344349]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-[#2D3B40] border border-[#344349] flex items-center justify-center">
              <span className="text-[#A8B6BC] text-lg">∞</span>
            </div>
            <div>
              <p className="text-[#C5CED2] text-sm font-medium">永久售後服務</p>
              <p className="text-[#5F808B] text-xs">終身技術支援</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-[#2D3B40] border border-[#344349] flex items-center justify-center">
              <span className="text-[#A8B6BC] text-lg">⚡</span>
            </div>
            <div>
              <p className="text-[#C5CED2] text-sm font-medium">快速交件</p>
              <p className="text-[#5F808B] text-xs">效率優先</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-[#2D3B40] border border-[#344349] flex items-center justify-center">
              <span className="text-[#A8B6BC] text-lg">✓</span>
            </div>
            <div>
              <p className="text-[#C5CED2] text-sm font-medium">品質保證</p>
              <p className="text-[#5F808B] text-xs">嚴格把關</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 右側裝飾數字 */}
      <motion.div
        className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <div className="text-[12rem] font-bold text-[#2D3B40]/60 leading-none select-none" style={{ fontFamily: 'var(--font-display)' }}>
          隼
        </div>
      </motion.div>

      {/* 捲動提示 */}
      <motion.button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#5F808B] hover:text-[#A8B6BC] transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.5, duration: 0.5 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
        onClick={scrollToNext}
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
}
