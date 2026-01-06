'use client'

import { motion } from 'motion/react'
import { useRef } from 'react'

export function About() {
  const ref = useRef(null);

  const features = [
    {
      number: '01',
      title: '創新驅動',
      description: '運用最新技術和創意思維，為您的品牌注入活力，保持市場競爭優勢'
    },
    {
      number: '02',
      title: '精準策略',
      description: '深入分析市場趨勢與數據，制定最適合您企業的行銷方案'
    },
    {
      number: '03',
      title: '全方位服務',
      description: '從策劃到執行、從線上到線下，一站式滿足您的數位轉型需求'
    }
  ];

  return (
    <section id="about" ref={ref} className="relative py-32 px-6 bg-[#1E2A2E]">
      {/* 背景裝飾 */}
      <div className="absolute inset-0 industrial-grid opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#344349] to-transparent" />

      <div className="max-w-6xl mx-auto relative">
        {/* 左側大標題區 */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            {/* 區塊標籤 */}
            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="brand-line" />
              <span className="text-[#6D8F96] text-sm tracking-widest uppercase">About Us</span>
            </motion.div>

            {/* 主標題 */}
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl text-[#E0E5E8] leading-tight mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              專注於
              <br />
              <span className="text-falcon-gradient">數位創新</span>
              <br />
              的專業團隊
            </motion.h2>

            {/* 描述文字 */}
            <motion.p
              className="text-lg text-[#A8B6BC] leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              我們致力於幫助企業在數位時代中脫穎而出。從品牌形象建立到數位內容製作，
              從技術開發到行銷推廣，我們提供完整的解決方案。
            </motion.p>

            {/* 裝飾數字 */}
            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <span className="text-[10rem] font-bold text-[#2D3B40]/50 leading-none select-none" style={{ fontFamily: 'var(--font-display)' }}>
                關
              </span>
            </motion.div>
          </div>

          {/* 右側特色卡片 */}
          <div className="space-y-6 lg:pt-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group falcon-card rounded-lg p-6 relative overflow-hidden"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {/* 編號 */}
                <div className="flex items-start gap-6">
                  <span className="text-4xl font-bold text-[#5F808B]/30 group-hover:text-[#5F808B]/50 transition-colors" style={{ fontFamily: 'var(--font-display)' }}>
                    {feature.number}
                  </span>
                  <div>
                    <h3 className="text-xl text-[#E0E5E8] mb-2 group-hover:text-[#A8B6BC] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-[#6D8F96] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* 懸浮時的裝飾線 */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-[#5F808B] to-[#6D8F96] transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* 底部統計數據 */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-12 border-t border-[#344349]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {[
            { value: '50+', label: '完成專案' },
            { value: '30+', label: '合作客戶' },
            { value: '5+', label: '年經驗' },
            { value: '100%', label: '客戶滿意' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-falcon-gradient mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                {stat.value}
              </div>
              <div className="text-sm text-[#6D8F96]">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
