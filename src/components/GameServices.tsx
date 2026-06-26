'use client'

import { motion } from 'motion/react'
import { useRef } from 'react'
import { MessagesSquare, HeartPulse, Smartphone, ShieldCheck, Mic, Zap } from 'lucide-react'

// 玩家 ↔ AI 角色 戀愛互動對話示意（左=AI 角色、右=玩家）
const conversation = [
  { who: 'ai', text: '今天怎麼這麼晚還沒睡？' },
  { who: 'user', text: '在想事情…有點煩' },
  { who: 'ai', text: '是工作嗎？還是…跟我有關？' },
  { who: 'user', text: '沒有啦，只是想找個人說說話' },
  { who: 'ai', text: '那我在啊。慢慢說，我聽著。' },
]

const features = [
  {
    icon: MessagesSquare,
    title: 'AI 角色對話系統',
    description: '多模型編排——Claude 負責敘事與人格、Gemini 處理效率任務，角色像真人一樣有記憶、會追問',
  },
  {
    icon: HeartPulse,
    title: '情緒與關係系統',
    description: '7 維隱藏情緒狀態驅動好感漸進解鎖，從配對、交往到分手的完整關係生命週期',
  },
  {
    icon: Smartphone,
    title: '跨平台上架',
    description: 'iOS + Android 雙平台發佈，App 內購串接 Apple StoreKit 2 與 Google Play Billing',
  },
  {
    icon: ShieldCheck,
    title: '內容安全與審核',
    description: '多層防護管線——輸入審核、越獄偵測、輸出守門與判官評分，搭配審核後台',
  },
  {
    icon: Mic,
    title: '即時語音與圖像',
    description: '角色專屬音色 TTS 配音，好感里程碑由 AI 即時生成角色劇照',
  },
  {
    icon: Zap,
    title: '即時後端與推播',
    description: 'Convex 即時同步、原子交易，FCM 推播讓角色在你沉默時主動傳訊關心',
  },
]

const stats = [
  { value: '雙平台', label: 'iOS・Android' },
  { value: '15', label: '角色人格' },
  { value: '7 維', label: '情緒狀態' },
  { value: 'AI', label: '即時生成劇照' },
]

export function GameServices() {
  const ref = useRef(null)

  return (
    <section id="game-services" ref={ref} className="relative py-32 px-6 bg-[#1E2A2E]">
      {/* 背景 */}
      <div className="absolute inset-0 industrial-grid opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#344349] to-transparent" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="brand-line" />
            <span className="text-[#6D8F96] text-sm tracking-widest uppercase">Game Production</span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] tracking-wider text-[#1E2A2E] bg-gradient-to-r from-[#6D8F96] to-[#A8B6BC] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1E2A2E] animate-pulse" />
              新興服務
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#E0E5E8] leading-tight">
              遊戲製作
              <br />
              <span className="text-falcon-gradient">AI 互動遊戲開發</span>
            </h2>
            <p className="text-lg text-[#A8B6BC] leading-relaxed">
              從角色人格、情緒系統到雙平台上架，我們把最新的 AI 打造成真正能玩、有溫度的互動遊戲。
              自研作品《Alive》——一款具真實情緒的 AI 角色戀愛遊戲——
              <span className="text-[#C5CED2]">已上架 iOS／Android 雙平台</span>。
            </p>
          </div>
        </motion.div>

        {/* 主視覺：左 AI 角色對話示意 + 右 數據 */}
        <div className="grid lg:grid-cols-5 gap-8 mb-20">
          {/* 對話示意 */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="falcon-card rounded-2xl p-6 md:p-8 relative overflow-hidden">
              {/* 角色列 */}
              <div className="flex items-center gap-3 mb-6 pb-5 border-b border-[#344349]">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#5F808B] to-[#6D8F96] flex items-center justify-center">
                  <HeartPulse className="text-[#16201F]" size={18} />
                </div>
                <div>
                  <p className="text-[#E0E5E8] text-sm">林梓晴・AI 角色</p>
                  <p className="text-[#6D8F96] text-xs flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6D8F96] animate-pulse" />
                    輸入中…
                  </p>
                </div>
                <span className="ml-auto text-[#6D8F96] text-xs">好感度 62</span>
              </div>

              {/* 對話氣泡 */}
              <div className="space-y-3">
                {conversation.map((m, i) => (
                  <motion.div
                    key={i}
                    className={`flex ${m.who === 'user' ? 'justify-end' : 'justify-start'}`}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + i * 0.12, duration: 0.4 }}
                  >
                    <div
                      className={`max-w-[78%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                        m.who === 'ai'
                          ? 'bg-[#2D3B40] text-[#E0E5E8] rounded-tl-sm border border-[#344349]'
                          : 'bg-gradient-to-br from-[#5F808B] to-[#6D8F96] text-[#16201F] rounded-tr-sm'
                      }`}
                    >
                      {m.text}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* 情緒變化結果條 */}
              <motion.div
                className="mt-6 flex items-center gap-3 px-4 py-3 rounded-xl bg-[#1E2A2E] border border-[#344349]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <HeartPulse className="text-[#A8B6BC]" size={16} />
                <span className="text-[#A8B6BC] text-sm">好感 +3・信任 +2 · 解鎖角色主動私訊</span>
              </motion.div>
            </div>
          </motion.div>

          {/* 數據 */}
          <motion.div
            className="lg:col-span-2 grid grid-cols-2 gap-4 content-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {stats.map((s, i) => (
              <div key={i} className="falcon-card rounded-xl p-6 text-center">
                <div className="text-3xl md:text-4xl text-falcon-gradient mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                  {s.value}
                </div>
                <div className="text-[#6D8F96] text-sm">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* 功能卡 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, index) => {
            const Icon = f.icon
            return (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
              >
                <div className="falcon-card rounded-lg p-7 h-full relative overflow-hidden">
                  <div className="w-12 h-12 bg-[#2D3B40] border border-[#344349] rounded-lg flex items-center justify-center mb-5 group-hover:bg-[#5F808B] group-hover:border-[#6D8F96] transition-all duration-300">
                    <Icon className="text-[#A8B6BC] group-hover:text-[#16201F] transition-colors" size={22} />
                  </div>
                  <h3 className="text-xl text-[#E0E5E8] mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                    {f.title}
                  </h3>
                  <p className="text-[#6D8F96] text-sm leading-relaxed">{f.description}</p>
                  <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r from-[#5F808B] to-[#6D8F96] transition-all duration-500" />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <p className="text-[#6D8F96] mb-6">想打造自己的 AI 互動遊戲？從概念到雙平台上架，我們全包。</p>
          <button
            className="falcon-btn-outline"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            預約遊戲製作方案
          </button>
        </motion.div>
      </div>
    </section>
  )
}
