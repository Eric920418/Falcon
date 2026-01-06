'use client'

import { motion } from 'motion/react'
import { useRef } from 'react'
import { Search, TrendingUp, Users, MessageSquare, Bot, Sparkles } from 'lucide-react'

export function MarketingServices() {
  const ref = useRef(null);

  const services = [
    {
      icon: Search,
      title: 'SEO 優化',
      subtitle: 'Search Engine Optimization',
      description: '提升網站在搜尋引擎的排名',
      features: ['關鍵字策略', 'SEO技術優化', '內容優化', '數據追蹤分析'],
      number: '01'
    },
    {
      icon: Sparkles,
      title: 'GEO 生成式引擎優化',
      subtitle: 'Generative Engine Optimization',
      description: '讓 AI 引擎優先引用您的品牌內容',
      features: ['ChatGPT/Gemini 曝光優化', 'AI 引用策略', 'LLM 內容結構化', '品牌權威建立'],
      number: '02'
    },
    {
      icon: Bot,
      title: 'AEO 答案引擎優化',
      subtitle: 'Answer Engine Optimization',
      description: '成為 AI 搜尋的首選答案來源',
      features: ['Google AI 優化', '結構化答案佈局', 'E-E-A-T 權威提升', '語意搜尋優化'],
      number: '03'
    },
    {
      icon: TrendingUp,
      title: '數位廣告投放',
      subtitle: 'Digital Advertising',
      description: '精準觸及目標受眾',
      features: ['Google Ads', 'Facebook/IG廣告', '關鍵字廣告', 'ROI優化'],
      number: '04'
    },
    {
      icon: Users,
      title: '社群經營',
      subtitle: 'Social Media Management',
      description: '建立品牌社群影響力',
      features: ['內容策略規劃', '社群互動管理', 'KOL合作', '粉絲經營'],
      number: '05'
    },
    {
      icon: MessageSquare,
      title: '口碑行銷',
      subtitle: 'Reputation Management',
      description: '打造正面品牌形象',
      features: ['輿情監測', '評論管理', '危機處理', '品牌聲譽維護'],
      number: '06'
    }
  ];

  return (
    <section id="marketing-services" ref={ref} className="relative py-32 px-6 bg-[#2D3B40]/50">
      {/* 背景 */}
      <div className="absolute inset-0 diagonal-lines" />
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
            <span className="text-[#6D8F96] text-sm tracking-widest uppercase">Marketing</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#E0E5E8] leading-tight">
                數位行銷
                <br />
                <span className="text-falcon-gradient">服務</span>
              </h2>
            </div>
            <p className="text-lg text-[#A8B6BC] leading-relaxed">
              精準策略與數據驅動，讓您的品牌在數位世界脫穎而出，
              觸及更多潛在客戶
            </p>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
              >
                <div className="falcon-card rounded-lg p-8 h-full relative overflow-hidden">
                  {/* 背景編號 */}
                  <span
                    className="absolute -right-2 -top-6 text-[6rem] font-bold text-[#2D3B40]/50 leading-none select-none transition-colors group-hover:text-[#344349]/50"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {service.number}
                  </span>

                  {/* 內容 */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-[#2D3B40] border border-[#344349] rounded-lg flex items-center justify-center mb-5 group-hover:bg-[#5F808B] group-hover:border-[#6D8F96] transition-all duration-300">
                      <Icon className="text-[#A8B6BC] group-hover:text-[#1E2A2E] transition-colors" size={22} />
                    </div>

                    <h3 className="text-xl text-[#E0E5E8] mb-1 group-hover:text-[#A8B6BC] transition-colors" style={{ fontFamily: 'var(--font-display)' }}>
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#5F808B]/70 mb-3 tracking-wide">
                      {service.subtitle}
                    </p>
                    <p className="text-[#6D8F96] text-sm mb-5">{service.description}</p>

                    {/* Features */}
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-sm text-[#6D8F96]"
                        >
                          <span className="w-1 h-1 rounded-full bg-[#5F808B]/50 group-hover:bg-[#5F808B] transition-colors" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

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
