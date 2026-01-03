'use client'

import { motion, useInView, useScroll, useTransform } from 'motion/react'
import { useRef, useMemo } from 'react'
import { Search, TrendingUp, Users, MessageSquare, Bot, Sparkles } from 'lucide-react'

// 確定性偽隨機生成器（避免 hydration mismatch）
const seededRandom = (seed: number) => {
  const x = Math.sin(seed * 9999) * 10000;
  return x - Math.floor(x);
};

export function MarketingServices() {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // 預先計算固定位置，確保伺服器和客戶端一致（固定小數位數避免 hydration mismatch）
  const bgParticles = useMemo(() =>
    [...Array(30)].map((_, i) => ({
      left: Math.round(seededRandom(i * 5 + 100) * 10000) / 100,
      top: Math.round(seededRandom(i * 5 + 101) * 10000) / 100,
      duration: Math.round((3 + seededRandom(i * 5 + 102) * 2) * 100) / 100,
      delay: Math.round(seededRandom(i * 5 + 103) * 2 * 100) / 100,
    })), []
  );
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const services = [
    {
      icon: Search,
      title: 'SEO 優化',
      subtitle: 'Search Engine Optimization',
      description: '提升網站在搜尋引擎的排名',
      features: ['關鍵字策略', 'SEO技術優化', '內容優化', '數據追蹤分析'],
      gradient: 'from-orange-400 via-red-400 to-pink-500',
      position: 'left'
    },
    {
      icon: Sparkles,
      title: 'GEO 生成式引擎優化',
      subtitle: 'Generative Engine Optimization',
      description: '讓 AI 引擎優先引用您的品牌內容',
      features: ['ChatGPT/Gemini 曝光優化', 'AI 引用策略', 'LLM 內容結構化', '品牌權威建立'],
      gradient: 'from-violet-400 via-purple-400 to-fuchsia-500',
      position: 'right'
    },
    {
      icon: Bot,
      title: 'AEO 答案引擎優化',
      subtitle: 'Answer Engine Optimization',
      description: '成為 AI 搜尋的首選答案來源',
      features: ['Google AI 優化', '結構化答案佈局', 'E-E-A-T 權威提升', '語意搜尋優化'],
      gradient: 'from-cyan-400 via-blue-400 to-indigo-500',
      position: 'left'
    },
    {
      icon: TrendingUp,
      title: '數位廣告投放',
      subtitle: 'Digital Advertising',
      description: '精準觸及目標受眾',
      features: ['Google Ads', 'Facebook/IG廣告', '關鍵字廣告', 'ROI優化'],
      gradient: 'from-amber-400 via-orange-400 to-red-500',
      position: 'right'
    },
    {
      icon: Users,
      title: '社群經營',
      subtitle: 'Social Media Management',
      description: '建立品牌社群影響力',
      features: ['內容策略規劃', '社群互動管理', 'KOL合作', '粉絲經營'],
      gradient: 'from-green-400 via-emerald-400 to-teal-500',
      position: 'left'
    },
    {
      icon: MessageSquare,
      title: '口碑行銷',
      subtitle: 'Reputation Management',
      description: '打造正面品牌形象',
      features: ['輿情監測', '評論管理', '危機處理', '品牌聲譽維護'],
      gradient: 'from-blue-400 via-cyan-400 to-teal-500',
      position: 'right'
    }
  ];

  return (
    <section id="marketing-services" ref={containerRef} className="relative py-16 md:py-24 lg:py-32 px-4 md:px-6 bg-slate-900/50 overflow-hidden">
      {/* Animated background particles - hidden on mobile for performance */}
      <div className="absolute inset-0 hidden md:block">
        {bgParticles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange-500/30 rounded-full"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16 lg:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block px-4 md:px-6 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full mb-4 md:mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
          >
            <span className="text-orange-400 text-sm md:text-base">Digital Marketing</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-pink-500">
              數位行銷服務
            </span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto px-2">
            精準策略與數據驅動，讓您的品牌在數位世界脫穎而出
          </p>
        </motion.div>

        {/* Alternating 3D Cards */}
        <div className="space-y-12 md:space-y-20 lg:space-y-32">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isLeft = service.position === 'left';
            const yOffset = useTransform(
              scrollYProgress,
              [0, 1],
              [100 * (index + 1), -100 * (index + 1)]
            );

            return (
              <motion.div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-12 ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
              >
                {/* 3D Card */}
                <motion.div
                  className="w-full lg:w-1/2"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="relative"
                    style={{
                      perspective: '1000px',
                      WebkitPerspective: '1000px',
                    } as React.CSSProperties}
                  >
                    <div
                      className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 border border-slate-700 overflow-hidden"
                    >
                      {/* Gradient overlay */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0`}
                        whileHover={{ opacity: 0.1 }}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Floating icon */}
                      <motion.div
                        className={`w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gradient-to-br ${service.gradient} rounded-2xl md:rounded-3xl flex items-center justify-center mb-4 md:mb-6 lg:mb-8 shadow-2xl relative`}
                        animate={{
                          y: [0, -6, 0],
                          rotateZ: [0, 3, 0, -3, 0]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <Icon className="text-white w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />

                        {/* Icon glow effect - hidden on mobile for performance */}
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl md:rounded-3xl blur-xl hidden md:block`}
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 0.8, 0.5]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity
                          }}
                        />
                      </motion.div>

                      <div className="relative">
                        <h3 className="text-xl md:text-2xl lg:text-3xl mb-1 md:mb-2 text-white">{service.title}</h3>
                        <p className={`text-xs md:text-sm mb-2 md:mb-4 text-transparent bg-clip-text bg-gradient-to-r ${service.gradient}`}>
                          {service.subtitle}
                        </p>
                        <p className="text-slate-300 text-sm md:text-base lg:text-lg">{service.description}</p>
                      </div>

                      {/* Decorative corner */}
                      <div className={`absolute bottom-0 right-0 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-gradient-to-tl ${service.gradient} opacity-5 rounded-tl-full`} />
                    </div>

                    {/* 3D shadow - hidden on mobile */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl md:rounded-3xl blur-2xl -z-10 opacity-0 hidden md:block`}
                      whileHover={{ opacity: 0.3, scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </motion.div>

                {/* Features List */}
                <motion.div
                  className="w-full lg:w-1/2 mt-4 lg:mt-0"
                  initial={{ opacity: 0, x: isLeft ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                >
                  <div className="grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-1 lg:space-y-4 lg:gap-0">
                    {service.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center gap-2 md:gap-3 lg:gap-4 group"
                        initial={{ opacity: 0, x: isLeft ? 10 : -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.03 }}
                        whileHover={{ x: isLeft ? 5 : -5 }}
                      >
                        <motion.div
                          className={`w-2 h-2 md:w-3 md:h-3 rounded-full bg-gradient-to-r ${service.gradient} flex-shrink-0`}
                          whileHover={{ scale: 1.5 }}
                        />
                        <span className="text-sm md:text-base lg:text-lg text-slate-200 group-hover:text-white transition-colors">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}