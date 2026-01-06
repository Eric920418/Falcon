'use client'

import { motion } from 'motion/react'
import { useRef } from 'react'
import { Heart, Megaphone, Handshake, Star } from 'lucide-react'

export function Philosophy() {
  const ref = useRef(null);

  const values = [
    {
      icon: Heart,
      title: '關懷弱勢',
      description: '我們相信每個品牌都值得被聽見，不論規模大小'
    },
    {
      icon: Megaphone,
      title: '平等機會',
      description: '提供專業服務，讓小品牌也能在市場上發聲'
    },
    {
      icon: Handshake,
      title: '共同成長',
      description: '與客戶建立長期夥伴關係，一起成就更好的未來'
    },
    {
      icon: Star,
      title: '創造價值',
      description: '用心服務每一位客戶，創造真實的商業價值'
    }
  ];

  return (
    <section id="philosophy" ref={ref} className="relative py-32 px-6 bg-[#2D3B40]/50">
      {/* 背景 */}
      <div className="absolute inset-0 diagonal-lines" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#344349] to-transparent" />

      <div className="max-w-6xl mx-auto relative">
        {/* 標籤 */}
        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="brand-line" />
          <span className="text-[#6D8F96] text-sm tracking-widest uppercase">Philosophy</span>
        </motion.div>

        <motion.h2
          className="text-4xl md:text-5xl text-[#E0E5E8] mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          核心<span className="text-falcon-gradient">理念</span>
        </motion.h2>

        {/* Main Philosophy Statement */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="falcon-card rounded-lg p-10 md:p-16 relative overflow-hidden">
            {/* 裝飾大字 */}
            <span
              className="absolute -left-8 -top-8 text-[12rem] font-bold text-[#344349]/20 leading-none select-none"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              理
            </span>

            <div className="relative z-10">
              {/* 引號 */}
              <span className="text-6xl text-[#5F808B]/30 leading-none" style={{ fontFamily: 'var(--font-display)' }}>"</span>

              <p className="text-2xl md:text-3xl text-[#C5CED2] leading-relaxed my-6 max-w-3xl" style={{ fontFamily: 'var(--font-display)' }}>
                讓弱勢角色也能有被市場聽見的機會
              </p>

              <p className="text-lg text-[#A8B6BC] leading-relaxed max-w-3xl">
                我們成立的初衷，不僅是提供專業的整合行銷服務，更是希望打破資源壁壘，
                讓每個有夢想、有故事的品牌，都能獲得應有的關注與成長機會。
              </p>

              <p className="text-lg mt-6 text-falcon-gradient max-w-3xl">
                我們相信，真正的價值不在於預算的多寡，而在於品牌背後的熱情與堅持。
              </p>

              <span className="text-6xl text-[#5F808B]/30 leading-none block text-right mt-4" style={{ fontFamily: 'var(--font-display)' }}>"</span>
            </div>
          </div>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="falcon-card rounded-lg p-6 h-full text-center relative overflow-hidden">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-[#2D3B40] border border-[#344349] rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-[#5F808B] group-hover:border-[#6D8F96] transition-all duration-300">
                    <Icon className="text-[#A8B6BC] group-hover:text-[#1E2A2E] transition-colors" size={24} />
                  </div>

                  <h3 className="text-lg mb-2 text-[#E0E5E8] group-hover:text-[#A8B6BC] transition-colors" style={{ fontFamily: 'var(--font-display)' }}>
                    {value.title}
                  </h3>
                  <p className="text-[#6D8F96] text-sm leading-relaxed">
                    {value.description}
                  </p>

                  {/* 底部裝飾線 */}
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-[#5F808B] to-[#6D8F96] transition-all duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
