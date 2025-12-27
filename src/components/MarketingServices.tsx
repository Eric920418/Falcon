'use client'

import { motion, useInView, useScroll, useTransform } from 'motion/react'
import { useRef, useMemo } from 'react'
import { Search, TrendingUp, Users, MessageSquare } from 'lucide-react'

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
    <section id="marketing-services" ref={containerRef} className="relative py-32 px-6 bg-slate-900/50 overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
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
          className="text-center mb-24"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block px-6 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full mb-6"
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <span className="text-orange-400">Digital Marketing</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-pink-500">
              數位行銷服務
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            精準策略與數據驅動，讓您的品牌在數位世界脫穎而出
          </p>
        </motion.div>

        {/* Alternating 3D Cards */}
        <div className="space-y-32">
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
                className={`flex flex-col lg:flex-row items-center gap-12 ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                {/* 3D Card */}
                <motion.div
                  className="w-full lg:w-1/2"
                  style={{ y: yOffset }}
                  whileHover={{ scale: 1.05, rotateY: isLeft ? 5 : -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="relative perspective-1000"
                    whileHover={{ z: 100 }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div 
                      className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 border border-slate-700 overflow-hidden"
                      style={{ transformStyle: 'preserve-3d', transform: 'translateZ(50px)' }}
                    >
                      {/* Gradient overlay */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0`}
                        whileHover={{ opacity: 0.1 }}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Floating icon */}
                      <motion.div
                        className={`w-24 h-24 bg-gradient-to-br ${service.gradient} rounded-3xl flex items-center justify-center mb-8 shadow-2xl relative`}
                        animate={{
                          y: [0, -10, 0],
                          rotateZ: [0, 5, 0, -5, 0]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        style={{
                          transformStyle: 'preserve-3d',
                          transform: 'translateZ(80px)'
                        }}
                      >
                        <Icon className="text-white" size={48} />
                        
                        {/* Icon glow effect */}
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl blur-xl`}
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

                      <div className="relative" style={{ transformStyle: 'preserve-3d', transform: 'translateZ(40px)' }}>
                        <h3 className="text-3xl mb-2 text-white">{service.title}</h3>
                        <p className={`text-sm mb-4 text-transparent bg-clip-text bg-gradient-to-r ${service.gradient}`}>
                          {service.subtitle}
                        </p>
                        <p className="text-slate-300 text-lg mb-6">{service.description}</p>
                      </div>

                      {/* Decorative corner */}
                      <div className={`absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl ${service.gradient} opacity-5 rounded-tl-full`} />
                    </div>

                    {/* 3D shadow */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl blur-2xl -z-10 opacity-0`}
                      whileHover={{ opacity: 0.3, scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </motion.div>

                {/* Features List */}
                <motion.div
                  className="w-full lg:w-1/2"
                  initial={{ opacity: 0, x: isLeft ? 100 : -100 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.2 + 0.3, duration: 0.8 }}
                >
                  <div className="space-y-6">
                    {service.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center gap-4 group"
                        initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.2 + 0.4 + i * 0.1 }}
                        whileHover={{ x: isLeft ? 10 : -10, scale: 1.05 }}
                      >
                        <motion.div
                          className={`w-3 h-3 rounded-full bg-gradient-to-r ${service.gradient}`}
                          whileHover={{ scale: 1.5 }}
                          animate={{
                            boxShadow: [
                              '0 0 0 0 rgba(251, 146, 60, 0.4)',
                              '0 0 0 10px rgba(251, 146, 60, 0)',
                            ]
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity
                          }}
                        />
                        <span className="text-lg text-slate-200 group-hover:text-white transition-colors">
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