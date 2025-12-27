'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { Zap, Target, Users } from 'lucide-react'

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: Zap,
      title: '創新驅動',
      description: '運用最新技術和創意思維，為您的品牌注入活力'
    },
    {
      icon: Target,
      title: '精準策略',
      description: '深入分析市場趨勢，制定最適合的行銷方案'
    },
    {
      icon: Users,
      title: '全方位服務',
      description: '從策劃到執行，一站式滿足您的數位需求'
    }
  ];

  return (
    <section id="about" ref={ref} className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            關於我們
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            我們是一個專注於整合行銷服務的專業團隊，致力於幫助企業在數位時代中脫穎而出。
            從品牌形象建立到數位內容製作，我們提供完整的解決方案。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                <motion.div
                  className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 h-full"
                  whileHover={{ 
                    y: -10,
                    borderColor: 'rgba(6,182,212,0.5)',
                    boxShadow: '0 20px 40px rgba(6,182,212,0.2)'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="text-white" size={32} />
                  </motion.div>
                  <h3 className="text-2xl mb-4 text-white">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                </motion.div>

                {/* Animated background effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl -z-10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
