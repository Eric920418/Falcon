'use client'

import { motion, useInView, useMotionValue, useTransform, useSpring } from 'motion/react'
import { useRef, useState } from 'react'
import { Video, Sparkles, Layers } from 'lucide-react'

export function ContentServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeCard, setActiveCard] = useState<number | null>(null);

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
      color: 'from-green-400 to-emerald-500',
      accentColor: 'emerald'
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
      color: 'from-purple-400 to-pink-500',
      accentColor: 'purple'
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
      color: 'from-cyan-400 to-blue-500',
      accentColor: 'cyan'
    }
  ];

  return (
    <section id="content-services" ref={ref} className="relative py-32 px-6">
      {/* Floating 3D Grid Background */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(6, 182, 212, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(6, 182, 212, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '80px 80px']
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block px-6 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-6"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <span className="text-purple-400">Content Creation</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
              內容創作服務
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            用創意和技術，打造引人入勝的品牌內容與體驗
          </p>
        </motion.div>

        {/* 3D Carousel Cards */}
        <div className="relative h-[700px] flex items-center justify-center" style={{ perspective: '2000px', WebkitPerspective: '2000px' } as React.CSSProperties}>
          <div className="relative w-full max-w-5xl">
            {services.map((service, index) => {
              const Icon = service.icon;
              const angle = (index - 1) * 30; // Spread cards in 3D space
              const isActive = activeCard === index;

              return (
                <FloatingCard3D
                  key={index}
                  index={index}
                  total={services.length}
                  isInView={isInView}
                  isActive={isActive}
                  onActivate={() => setActiveCard(index)}
                  angle={angle}
                >
                  <div className="relative h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl border border-slate-700 overflow-hidden">
                    {/* Animated gradient overlay */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0`}
                      animate={{
                        opacity: isActive ? 0.15 : 0.05
                      }}
                      transition={{ duration: 0.5 }}
                    />

                    {/* Content */}
                    <div className="relative z-10 p-10 h-full flex flex-col">
                      {/* Icon */}
                      <motion.div
                        className="flex items-center gap-6 mb-8"
                        animate={{
                          scale: isActive ? 1 : 0.9
                        }}
                      >
                        <motion.div
                          className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-2xl`}
                          animate={{
                            rotateY: isActive ? [0, 360] : 0,
                            scale: isActive ? [1, 1.1, 1] : 1
                          }}
                          transition={{
                            rotateY: { duration: 1, ease: "easeInOut" },
                            scale: { duration: 0.5 }
                          }}
                        >
                          <Icon className="text-white" size={40} />
                        </motion.div>

                        <div>
                          <h3 className="text-3xl text-white mb-1">{service.title}</h3>
                          <p className={`text-sm text-transparent bg-clip-text bg-gradient-to-r ${service.color}`}>
                            {service.subtitle}
                          </p>
                        </div>
                      </motion.div>

                      <p className="text-lg text-slate-300 mb-8">
                        {service.description}
                      </p>

                      {/* Features Grid */}
                      <motion.div
                        className="grid grid-cols-2 gap-4 flex-1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isActive ? 1 : 0.6 }}
                        transition={{ duration: 0.3 }}
                      >
                        {service.features.map((feature, i) => (
                          <motion.div
                            key={i}
                            className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.1 + i * 0.1 }}
                            whileHover={{ 
                              scale: 1.05,
                              borderColor: `rgba(6, 182, 212, 0.5)`,
                              backgroundColor: 'rgba(15, 23, 42, 0.8)'
                            }}
                          >
                            <div className="flex items-start gap-2 mb-2">
                              <motion.div
                                className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mt-1.5`}
                                animate={{
                                  scale: [1, 1.5, 1],
                                  opacity: [0.5, 1, 0.5]
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: i * 0.2
                                }}
                              />
                              <div>
                                <h4 className="text-white mb-1">{feature.name}</h4>
                                <p className="text-xs text-slate-400">{feature.detail}</p>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>

                      {/* Interaction hint */}
                      <motion.div
                        className="mt-6 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isActive ? 0 : 0.5 }}
                      >
                        <p className="text-sm text-slate-500">點擊查看詳細內容</p>
                      </motion.div>
                    </div>

                    {/* Corner decorations */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${service.color} opacity-10 rounded-bl-full`} />
                    <div className={`absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr ${service.color} opacity-10 rounded-tr-full`} />
                  </div>
                </FloatingCard3D>
              );
            })}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {services.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveCard(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                activeCard === index 
                  ? 'bg-cyan-400 w-12' 
                  : 'bg-slate-600 hover:bg-slate-500'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// 3D Floating Card Component
function FloatingCard3D({
  children,
  index,
  total,
  isInView,
  isActive,
  onActivate,
  angle
}: {
  children: React.ReactNode;
  index: number;
  total: number;
  isInView: boolean;
  isActive: boolean;
  onActivate: () => void;
  angle: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !isActive) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) / rect.width);
    mouseY.set((e.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className="absolute inset-0 flex items-center justify-center cursor-pointer"
      initial={{ opacity: 0, scale: 0.5, z: -200 }}
      animate={isInView ? {
        opacity: 1,
        scale: isActive ? 1 : 0.85,
        z: isActive ? 100 : index * -50,
        x: isActive ? 0 : Math.sin(angle * Math.PI / 180) * 200,
        y: isActive ? 0 : Math.cos(angle * Math.PI / 180) * 50,
        rotateY: isActive ? 0 : angle,
        filter: isActive ? 'blur(0px)' : 'blur(2px)'
      } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        type: "spring",
        stiffness: 100
      }}
      style={{
        transformStyle: 'preserve-3d',
        WebkitTransformStyle: 'preserve-3d',
        rotateX: isActive ? rotateX : 0,
        rotateY: isActive ? rotateY : angle,
        zIndex: isActive ? 10 : total - index
      } as React.CSSProperties}
      onClick={onActivate}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={!isActive ? { scale: 0.9, z: 50 } : {}}
    >
      <div
        className="w-full max-w-2xl"
        style={{
          transformStyle: 'preserve-3d',
          WebkitTransformStyle: 'preserve-3d',
        } as React.CSSProperties}
      >
        {children}

        {/* Enhanced 3D Shadow */}
        <motion.div
          className="absolute inset-0 bg-cyan-500/30 rounded-3xl blur-3xl -z-10"
          animate={{
            opacity: isActive ? 0.6 : 0.2,
            scale: isActive ? 1.1 : 0.9
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
}