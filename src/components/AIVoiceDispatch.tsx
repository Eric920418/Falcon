'use client'

import { motion } from 'motion/react'
import { useRef } from 'react'
import { Mic, MapPin, Zap, Network, PhoneCall, ShieldCheck } from 'lucide-react'

// AI 對話示意（左=AI、右=客人）
const conversation = [
  { who: 'ai', text: '您好，大豐計程車，請問從哪裡上車？' },
  { who: 'user', text: '呃…我在自強路那邊' },
  { who: 'ai', text: '自強路哪一段呢？方便說個附近的地標嗎？' },
  { who: 'user', text: '靠近遠東百貨' },
  { who: 'ai', text: '好的，自強路近遠百。請問要到哪裡？' },
  { who: 'user', text: '花蓮火車站' },
  { who: 'ai', text: '已經幫您派車囉，車號 888，約 5 分鐘到，謝謝您！' },
]

const features = [
  {
    icon: Mic,
    title: '24h AI 真人對話',
    description: '全天候 AI 語音客服，像真人一樣自然應答、不漏接',
  },
  {
    icon: MapPin,
    title: '在地口音辨識',
    description: '聽懂台灣口語、台語腔與在地地標，聽不清會主動追問',
  },
  {
    icon: Zap,
    title: '智慧即時派單',
    description: '自動媒合最近司機、分層派遣，通話中秒級建單',
  },
  {
    icon: Network,
    title: '全通路整合',
    description: '電話、App、LINE 同一條派單管線，司機端統一接單',
  },
  {
    icon: PhoneCall,
    title: '電信級串接',
    description: 'SIP Trunk 中繼、市話代表號、多線同時進線',
  },
  {
    icon: ShieldCheck,
    title: '全程留痕可稽核',
    description: '通話錄音、語音轉文字、訂單可追蹤管理',
  },
]

const stats = [
  { value: '24h', label: '不打烊接聽' },
  { value: '即時', label: '語音雙向對話' },
  { value: '3 通路', label: '電話・App・LINE' },
  { value: '0', label: '漏接訂單' },
]

export function AIVoiceDispatch() {
  const ref = useRef(null)

  return (
    <section id="ai-voice" ref={ref} className="relative py-32 px-6 bg-[#16201F]">
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
            <span className="text-[#6D8F96] text-sm tracking-widest uppercase">AI Voice Agent</span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] tracking-wider text-[#1E2A2E] bg-gradient-to-r from-[#6D8F96] to-[#A8B6BC] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1E2A2E] animate-pulse" />
              新興服務
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#E0E5E8] leading-tight">
              AI 語音客服
              <br />
              <span className="text-falcon-gradient">智慧派單系統</span>
            </h2>
            <p className="text-lg text-[#A8B6BC] leading-relaxed">
              24 小時 AI 接聽電話、即時對話聽懂在地需求、自動派工。
              我們把最新的即時語音 AI 打造成真正能營運的客服與派單系統——
              <span className="text-[#C5CED2]">已實際導入運行中</span>。
            </p>
          </div>
        </motion.div>

        {/* 主視覺：左 AI 對話示意 + 右 數據 */}
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
              {/* 通話列 */}
              <div className="flex items-center gap-3 mb-6 pb-5 border-b border-[#344349]">
                <div className="w-10 h-10 rounded-full bg-[#2D3B40] border border-[#344349] flex items-center justify-center">
                  <PhoneCall className="text-[#6D8F96]" size={18} />
                </div>
                <div>
                  <p className="text-[#E0E5E8] text-sm">來電中・AI 語音客服</p>
                  <p className="text-[#6D8F96] text-xs flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6D8F96] animate-pulse" />
                    即時對話
                  </p>
                </div>
                <span className="ml-auto text-[#6D8F96] text-xs tabular-nums">00:18</span>
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

              {/* 派車結果條 */}
              <motion.div
                className="mt-6 flex items-center gap-3 px-4 py-3 rounded-xl bg-[#1E2A2E] border border-[#344349]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <Zap className="text-[#A8B6BC]" size={16} />
                <span className="text-[#A8B6BC] text-sm">已自動建單派車 · 車號 888 · ETA 5 分鐘</span>
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
          <p className="text-[#6D8F96] mb-6">想讓你的電話客服 24 小時不打烊、還能自動派工建單？</p>
          <button
            className="falcon-btn-outline"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            預約 AI 語音方案
          </button>
        </motion.div>
      </div>
    </section>
  )
}
