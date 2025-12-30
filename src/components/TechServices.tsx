'use client'

import { motion, useInView, useMotionValue, useTransform } from 'motion/react'
import { useRef, useState } from 'react'
import { Globe, Code, Database, Brain, Smartphone } from 'lucide-react'

export function TechServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      icon: Globe,
      title: '網站建置',
      description: '響應式網站設計與開發',
      details: ['RWD響應式設計', '品牌形象官網', '電商平台開發', 'UI/UX設計'],
      color: 'from-cyan-400 to-blue-500',
      bgColor: 'bg-cyan-500/10'
    },
    {
      icon: Code,
      title: '軟體開發',
      description: '客製化軟體解決方案',
      details: ['企業應用系統', 'API整合服務', '雲端解決方案', '系統維護'],
      color: 'from-blue-400 to-indigo-500',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: Database,
      title: 'CMS / ERP',
      description: '企業資源管理系統',
      details: ['客戶關係管理', '資源規劃系統', '數據分析儀表板', '流程自動化'],
      color: 'from-indigo-400 to-purple-500',
      bgColor: 'bg-indigo-500/10'
    },
    {
      icon: Brain,
      title: 'AI 工具',
      description: '人工智慧應用整合',
      details: ['智能客服系統', '數據分析預測', '自動化流程', 'AI內容生成'],
      color: 'from-purple-400 to-pink-500',
      bgColor: 'bg-purple-500/10'
    },
    {
      icon: Smartphone,
      title: 'APP 開發',
      description: '跨平台應用程式設計',
      details: ['iOS / Android', '跨平台開發', '互動體驗設計', 'APP維護更新'],
      color: 'from-pink-400 to-rose-500',
      bgColor: 'bg-pink-500/10'
    }
  ];

  return (
    <section id="tech-services" ref={ref} className="relative py-32 px-6">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block px-6 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
          >
            <span className="text-cyan-400">Technology Development</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">
              技術開發服務
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            從網站到系統，從AI到APP，提供完整的技術解決方案
          </p>
        </motion.div>

        {/* 3D Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: '1000px', WebkitPerspective: '1000px' }}>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card3D 
                key={index}
                index={index}
                isInView={isInView}
                isHovered={hoveredCard === index}
                onHover={() => setHoveredCard(index)}
                onLeave={() => setHoveredCard(null)}
              >
                <div className={`relative h-full ${service.bgColor} backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 overflow-hidden`}>
                  {/* Animated gradient background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0`}
                    animate={{
                      opacity: hoveredCard === index ? 0.1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  <div className="relative z-10">
                    {/* Icon with 3D effect */}
                    <motion.div
                      className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-2xl`}
                      animate={{
                        rotateY: hoveredCard === index ? [0, 360] : 0,
                        scale: hoveredCard === index ? 1.1 : 1
                      }}
                      transition={{
                        rotateY: { duration: 0.6 },
                        scale: { duration: 0.3 }
                      }}
                    >
                      <Icon className="text-white" size={36} />
                    </motion.div>

                    <h3 className="text-2xl mb-3 text-white">{service.title}</h3>
                    <p className="text-slate-400 mb-6">{service.description}</p>

                    {/* Service Details */}
                    <motion.ul
                      className="space-y-2"
                      style={{
                        overflow: 'hidden',
                        maxHeight: hoveredCard === index ? '200px' : '0px',
                      }}
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: hoveredCard === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {service.details.map((detail, i) => (
                        <motion.li
                          key={i}
                          className="flex items-center gap-2 text-slate-300 text-sm"
                          initial={{ x: -20, opacity: 0 }}
                          animate={{
                            x: hoveredCard === index ? 0 : -20,
                            opacity: hoveredCard === index ? 1 : 0
                          }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`} />
                          {detail}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>

                  {/* Corner decoration */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-5 rounded-bl-full`} />
                </div>
              </Card3D>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// 3D Card Component with real depth effect
function Card3D({ 
  children, 
  index, 
  isInView,
  isHovered,
  onHover,
  onLeave 
}: { 
  children: React.ReactNode; 
  index: number;
  isInView: boolean;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) / rect.width);
    mouseY.set((e.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    onLeave();
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative h-full"
      initial={{ opacity: 0, y: 100, rotateX: -20 }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0,
        rotateX: 0
      } : {}}
      transition={{ 
        delay: index * 0.15, 
        duration: 0.8,
        type: "spring",
        stiffness: 100
      }}
      style={{
        transformStyle: 'preserve-3d',
        WebkitTransformStyle: 'preserve-3d',
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
      } as React.CSSProperties}
      onMouseMove={handleMouseMove}
      onMouseEnter={onHover}
      onMouseLeave={handleMouseLeave}
      whileHover={{ 
        z: 50,
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
    >
      <motion.div
        style={{
          transformStyle: 'preserve-3d',
          WebkitTransformStyle: 'preserve-3d',
        } as React.CSSProperties}
      >
        {children}
      </motion.div>

      {/* 3D Shadow */}
      <motion.div
        className="absolute inset-0 bg-cyan-500/20 rounded-3xl blur-2xl -z-10"
        animate={{
          opacity: isHovered ? 0.6 : 0,
          scale: isHovered ? 1.1 : 0.9,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}