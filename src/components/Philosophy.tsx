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
    <section id="philosophy" ref={ref} className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            核心理念
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-8"></div>
        </motion.div>

        {/* Main Philosophy Statement */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            {/* Decorative elements */}
            <motion.div
              className="absolute -left-4 -top-4 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -right-4 -bottom-4 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-12 shadow-2xl">
              <motion.div
                className="text-6xl mb-8 text-cyan-400 opacity-20"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 0.2, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                "
              </motion.div>
              
              <p className="text-2xl md:text-3xl text-slate-200 leading-relaxed mb-8 text-center">
                讓弱勢角色也能有被市場聽見的機會
              </p>
              
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed text-center max-w-3xl mx-auto">
                我們成立的初衷，不僅是提供專業的整合行銷服務，更是希望打破資源壁壘，
                讓每個有夢想、有故事的品牌，都能獲得應有的關注與成長機會。
                <span className="block mt-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  我們相信，真正的價值不在於預算的多寡，而在於品牌背後的熱情與堅持。
                </span>
              </p>

              <motion.div
                className="text-6xl mt-8 text-cyan-400 opacity-20 text-right"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 0.2, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                "
              </motion.div>
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
                <motion.div
                  className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 h-full text-center"
                  whileHover={{ 
                    y: -10,
                    borderColor: 'rgba(6,182,212,0.5)',
                    boxShadow: '0 20px 40px rgba(6,182,212,0.15)'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4"
                    whileHover={{ 
                      rotate: [0, -15, 15, -15, 0],
                      scale: 1.1 
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="text-white" size={28} />
                  </motion.div>
                  <h3 className="text-xl mb-3 text-white group-hover:text-cyan-400 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
