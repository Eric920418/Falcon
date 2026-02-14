'use client'

import { motion } from 'motion/react'
import { useRef, useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

function LineIcon({ size = 20, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
    </svg>
  )
}

function FacebookIcon({ size = 20, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

export function Contact() {
  const ref = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || '發送失敗');
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : '發送失敗，請稍後再試');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "",
      link: "",
    },
    {
      icon: Phone,
      title: "電話",
      content: "",
      link: "",
    },
    {
      icon: LineIcon,
      title: "LINE 官方帳號",
      content: "加入好友諮詢",
      link: "",
    },
    {
      icon: FacebookIcon,
      title: "Facebook",
      content: "追蹤我們的粉專",
      link: "",
    },
    {
      icon: MapPin,
      title: "地址",
      content: "桃園市桃園區民權路6號5樓之4",
      link: null,
    },
  ];

  return (
    <section id="contact" ref={ref} className="relative py-32 px-6 bg-stone-950">
      {/* 背景 */}
      <div className="absolute inset-0 industrial-grid opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stone-800 to-transparent" />

      <div className="max-w-6xl mx-auto relative">
        {/* 標籤 */}
        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="brand-line" />
          <span className="text-amber-500 text-sm tracking-widest uppercase">Contact</span>
        </motion.div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-stone-100 mb-4">
            聯絡<span className="text-falcon-gradient">我們</span>
          </h2>
          <p className="text-lg text-stone-400 max-w-xl">
            準備好開始您的數位轉型之旅了嗎？讓我們一起討論如何幫助您的品牌成長
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h3 className="text-xl mb-8 text-stone-100" style={{ fontFamily: 'var(--font-display)' }}>取得聯繫</h3>

            <div className="space-y-6 mb-10">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 bg-stone-800 border border-stone-700 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-amber-600 group-hover:border-amber-500 transition-all duration-300">
                      <Icon className="text-stone-400 group-hover:text-stone-950 transition-colors" size={20} />
                    </div>
                    <div>
                      <p className="text-stone-500 text-sm mb-1">{info.title}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-stone-200 hover:text-amber-500 transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-stone-200">{info.content}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="falcon-card rounded-lg p-8">
              <h4 className="text-lg mb-4 text-falcon-gradient" style={{ fontFamily: 'var(--font-display)' }}>
                營業時間
              </h4>
              <div className="space-y-2 text-stone-400">
                <p>24小時營業，全年無休</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-stone-400 text-sm mb-2">
                  姓名 *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-stone-900/50 border border-stone-800 rounded-lg text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-600 transition-colors"
                  placeholder="請輸入您的姓名"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-stone-400 text-sm mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-stone-900/50 border border-stone-800 rounded-lg text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-600 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-stone-400 text-sm mb-2">
                  公司名稱
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-stone-900/50 border border-stone-800 rounded-lg text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-600 transition-colors"
                  placeholder="您的公司名稱（選填）"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-stone-400 text-sm mb-2">
                  訊息內容 *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-stone-900/50 border border-stone-800 rounded-lg text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-600 transition-colors resize-none"
                  placeholder="請告訴我們您的需求..."
                />
              </div>

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-900/30 border border-red-800/50 rounded-lg text-red-400">
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                className={`w-full py-4 rounded-lg flex items-center justify-center gap-2 transition-all ${submitStatus === 'success'
                  ? 'bg-green-700 text-white'
                  : submitStatus === 'error'
                    ? 'bg-red-700 text-white'
                    : 'falcon-btn-primary'
                  }`}
                disabled={isSubmitting || submitStatus === 'success'}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-current rounded-full border-t-transparent animate-spin" />
                    發送中...
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <span>✓</span>
                    已送出！我們會盡快回覆您
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    送出訊息
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
