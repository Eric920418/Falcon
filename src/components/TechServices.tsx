'use client'

import { motion } from 'motion/react'
import { useRef, useState } from 'react'
import { Globe, Code, Database, Brain, Smartphone } from 'lucide-react'

export function TechServices() {
  const ref = useRef(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      icon: Globe,
      title: '網站建置',
      description: '響應式網站設計與開發',
      details: ['RWD響應式設計', '品牌形象官網', '電商平台開發', 'UI/UX設計'],
      number: '01'
    },
    {
      icon: Code,
      title: '軟體開發',
      description: '客製化軟體解決方案',
      details: ['企業應用系統', 'API整合服務', '雲端解決方案', '系統維護'],
      number: '02'
    },
    {
      icon: Database,
      title: 'CMS / ERP',
      description: '企業資源管理系統',
      details: ['客戶關係管理', '資源規劃系統', '數據分析儀表板', '流程自動化'],
      number: '03'
    },
    {
      icon: Brain,
      title: 'AI 工具',
      description: '人工智慧應用整合',
      details: ['智能客服系統', '數據分析預測', '自動化流程', 'AI內容生成'],
      number: '04'
    },
    {
      icon: Smartphone,
      title: 'APP 開發',
      description: '跨平台應用程式設計',
      details: ['iOS / Android', '跨平台開發', '互動體驗設計', 'APP維護更新'],
      number: '05'
    }
  ];

  return (
    <section id="tech-services" ref={ref} className="relative py-32 px-6 bg-[#1E2A2E]">
      {/* 背景 */}
      <div className="absolute inset-0 industrial-grid opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#344349] to-transparent" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {/* 標籤 */}
          <div className="flex items-center gap-3 mb-6">
            <div className="brand-line" />
            <span className="text-[#6D8F96] text-sm tracking-widest uppercase">Technology</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#E0E5E8] leading-tight">
                技術開發
                <br />
                <span className="text-falcon-gradient">服務</span>
              </h2>
            </div>
            <p className="text-lg text-[#A8B6BC] leading-relaxed">
              從網站到系統，從AI到APP，我們提供完整的技術解決方案，
              助您實現數位轉型的每一步
            </p>
          </div>
        </motion.div>

        {/* Services Grid - 不規則排列 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isLarge = index === 0 || index === 3; // 第1和第4個較大

            return (
              <motion.div
                key={index}
                className={`group relative ${isLarge ? 'lg:row-span-2' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`falcon-card rounded-lg p-8 h-full relative overflow-hidden ${isLarge ? 'min-h-[400px]' : 'min-h-[200px]'}`}>
                  {/* 背景編號 */}
                  <span
                    className="absolute -right-4 -top-8 text-[8rem] font-bold text-[#2D3B40]/50 leading-none select-none transition-colors group-hover:text-[#344349]/50"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {service.number}
                  </span>

                  {/* 內容 */}
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Icon */}
                    <div className="w-14 h-14 bg-[#2D3B40] border border-[#344349] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#5F808B] group-hover:border-[#6D8F96] transition-all duration-300">
                      <Icon className="text-[#A8B6BC] group-hover:text-[#1E2A2E] transition-colors" size={24} />
                    </div>

                    <h3 className="text-2xl text-[#E0E5E8] mb-2 group-hover:text-[#A8B6BC] transition-colors" style={{ fontFamily: 'var(--font-display)' }}>
                      {service.title}
                    </h3>
                    <p className="text-[#6D8F96] mb-6">{service.description}</p>

                    {/* Service Details - 展開時顯示 */}
                    <motion.ul
                      className="mt-auto space-y-2"
                      initial={false}
                      animate={{
                        opacity: hoveredCard === index ? 1 : 0.5,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {service.details.map((detail, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-3 text-sm text-[#6D8F96]"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#5F808B]/50 group-hover:bg-[#5F808B] transition-colors" />
                          {detail}
                        </li>
                      ))}
                    </motion.ul>
                  </div>

                  {/* 底部裝飾線 */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r from-[#5F808B] to-[#6D8F96] transition-all duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 底部 CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p className="text-[#6D8F96] mb-6">需要客製化的技術解決方案？</p>
          <button
            className="falcon-btn-outline"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            與我們聯繫
          </button>
        </motion.div>
      </div>
    </section>
  );
}
