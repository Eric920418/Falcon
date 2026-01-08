'use client'

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

      {/* 鋼藍灰光暈 - 移动端隐藏以提升性能 */}
      <div className="hidden md:block absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#5F808B]/15 rounded-full blur-[60px]" />
      <div className="hidden md:block absolute bottom-1/3 left-1/5 w-[400px] h-[400px] bg-[#6D8F96]/12 rounded-full blur-[50px]" />

      {/* 遮罩 */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E2A2E]/50 via-[#1E2A2E]/30 to-[#1E2A2E]/70" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* 上方裝飾線 - CSS 动画 */}
        <div className="flex items-center gap-4 mb-8 animate-fade-in-left">
          <div className="brand-line" />
          <span className="text-[#6D8F96] text-sm tracking-[0.2em] uppercase font-medium">
            Digital Marketing Agency
          </span>
        </div>

        {/* 主標題 */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-[#E0E5E8] leading-[1.1] tracking-tight animate-fade-in-up animation-delay-100">
            數位轉型的
          </h1>
          <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight mt-2 animate-fade-in-up animation-delay-200">
            <span className="text-falcon-gradient">領航者</span>
          </h1>
        </div>

        {/* 副標題 */}
        <p className="text-lg md:text-xl text-[#A8B6BC] mb-4 max-w-xl leading-relaxed animate-fade-in-up animation-delay-300">
          整合行銷 · 品牌形象 · 數位內容
        </p>

        <p className="text-base text-[#6D8F96] mb-12 max-w-lg leading-relaxed animate-fade-in animation-delay-400">
          從網站開發到AI應用，從SEO優化到社群經營，
          我們提供全方位的數位解決方案
        </p>

        {/* CTA 按鈕 */}
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-500">
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
        </div>

        {/* 信任徽章 */}
        <div className="flex flex-wrap gap-6 mt-16 pt-8 border-t border-[#344349] animate-fade-in-up animation-delay-600">
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
        </div>
      </div>

      {/* 右側裝飾數字 - 仅桌面显示 */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block animate-fade-in-right animation-delay-700">
        <div className="text-[12rem] font-bold text-[#2D3B40]/60 leading-none select-none" style={{ fontFamily: 'var(--font-display)' }}>
          隼
        </div>
      </div>

      {/* 捲動提示 */}
      <button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#5F808B] hover:text-[#A8B6BC] transition-colors animate-bounce-gentle animation-delay-800"
        onClick={scrollToNext}
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
