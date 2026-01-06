'use client'

import { motion } from 'motion/react'
import { useRef } from 'react'
import { Video, Sparkles, Layers } from 'lucide-react'

export function ContentServices() {
  const ref = useRef(null);

  const services = [
    {
      icon: Video,
      title: '影音製作',
      subtitle: 'Video Production',
      description: '從腳本到後製，打造高質感影音內容',
      features: [
        { name: '短影音製作', detail: 'TikTok, Reels, Shorts' },
        { name: '形象影片', detail: '品牌故事、企業介紹' },
        { name: '產品宣傳', detail: '商品展示、使用教學' },
        { name: '活動紀錄', detail: '直播、剪輯、後製' }
      ],
      number: '01'
    },
    {
      icon: Sparkles,
      title: '整合活動企劃',
      subtitle: 'Event Planning',
      description: '創造令人難忘的品牌體驗',
      features: [
        { name: '活動策劃', detail: '概念發想、流程設計' },
        { name: '執行管理', detail: '現場統籌、人員調度' },
        { name: '線上線下整合', detail: 'O2O活動設計' },
        { name: '效益評估', detail: '數據追蹤、成效分析' }
      ],
      number: '02'
    },
    {
      icon: Layers,
      title: '互動體驗設計',
      subtitle: 'Interactive Experience',
      description: '創新互動科技，提升使用者參與度',
      features: [
        { name: '互動裝置', detail: 'AR/VR體驗設計' },
        { name: 'UI/UX設計', detail: '介面優化、體驗設計' },
        { name: '遊戲化設計', detail: '提升互動參與度' },
        { name: '創意互動', detail: '客製化互動方案' }
      ],
      number: '03'
    }
  ];

  return (
    <section id="content-services" ref={ref} className="relative py-32 px-6 bg-[#1E2A2E]">
      {/* 背景 */}
      <div className="absolute inset-0 industrial-grid opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#344349] to-transparent" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {/* 標籤 */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="brand-line" />
            <span className="text-[#6D8F96] text-sm tracking-widest uppercase">Content Creation</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#E0E5E8] mb-6">
            內容創作<span className="text-falcon-gradient">服務</span>
          </h2>
          <p className="text-lg text-[#A8B6BC] max-w-2xl mx-auto">
            用創意和技術，打造引人入勝的品牌內容與體驗
          </p>
        </motion.div>

        {/* Services - 大卡片展示 */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
              >
                <div className="falcon-card rounded-lg h-full relative overflow-hidden">
                  {/* 頂部裝飾區 */}
                  <div className="relative h-32 bg-gradient-to-br from-[#2D3B40]/50 to-[#1E2A2E]/50 flex items-center justify-center border-b border-[#344349]">
                    {/* 背景編號 */}
                    <span
                      className="absolute -right-4 -top-4 text-[8rem] font-bold text-[#344349]/30 leading-none select-none"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {service.number}
                    </span>

                    {/* Icon */}
                    <div className="relative z-10 w-16 h-16 bg-[#2D3B40] border border-[#344349] rounded-xl flex items-center justify-center group-hover:bg-[#5F808B] group-hover:border-[#6D8F96] transition-all duration-300">
                      <Icon className="text-[#A8B6BC] group-hover:text-[#1E2A2E] transition-colors" size={28} />
                    </div>
                  </div>

                  {/* 內容區 */}
                  <div className="p-8">
                    <h3 className="text-2xl text-[#E0E5E8] mb-1 group-hover:text-[#A8B6BC] transition-colors" style={{ fontFamily: 'var(--font-display)' }}>
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#5F808B]/70 mb-4 tracking-wide">
                      {service.subtitle}
                    </p>
                    <p className="text-[#6D8F96] mb-8">{service.description}</p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      {service.features.map((feature, i) => (
                        <div
                          key={i}
                          className="group/item"
                        >
                          <div className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#5F808B]/50 mt-1.5 group-hover/item:bg-[#5F808B] transition-colors" />
                            <div>
                              <p className="text-sm text-[#C5CED2]">{feature.name}</p>
                              <p className="text-xs text-[#6D8F96]">{feature.detail}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 底部裝飾線 */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r from-[#5F808B] to-[#6D8F96] transition-all duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
