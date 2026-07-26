'use client'

import { useRef, useState } from 'react'
import { Mail, Phone, Send, MessageCircle } from 'lucide-react'
import { siteConfig } from '@/lib/seo/site-config'
import { trackEvent } from '@/lib/analytics'
import { TrackedContactLink } from './TrackedContactLink'

export function Contact() {
  const ref = useRef(null);
  const phoneNumber = '0958801559';
  const phoneHref = 'tel:+886958801559';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [errorCode, setErrorCode] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');
    setErrorCode('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const rawBody = await response.text();
      let data: { message?: string; error?: string; code?: string } = {};
      try {
        data = rawBody ? JSON.parse(rawBody) : {};
      } catch {
        data = {
          error: rawBody || `伺服器回傳無法解析的內容（HTTP ${response.status}）`,
          code: 'INVALID_RESPONSE',
        };
      }

      if (!response.ok) {
        const submitError = new Error(data.error || `發送失敗（HTTP ${response.status}）`) as Error & { code?: string };
        submitError.code = data.code || `HTTP_${response.status}`;
        throw submitError;
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
      trackEvent('generate_lead', { method: 'contact_form' });

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      const code =
        error && typeof error === 'object' && 'code' in error && typeof error.code === 'string'
          ? error.code
          : 'CONTACT_FORM_FAILED';
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : '發送失敗，請稍後再試');
      setErrorCode(code);
      trackEvent('form_error', { form_name: 'contact', error_code: code });
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
      content: siteConfig.email,
      link: `mailto:${siteConfig.email}`,
      channel: 'email' as const,
    },
    {
      icon: Phone,
      title: "電話",
      content: phoneNumber,
      link: phoneHref,
      channel: 'phone' as const,
    },
    {
      icon: MessageCircle,
      title: "LINE 官方帳號",
      content: "加入好友諮詢",
      link: "https://lin.ee/7IjIYw2",
      channel: 'line' as const,
    },
  ];

  return (
    <section id="contact" ref={ref} className="relative py-32 px-6 bg-stone-950">
      {/* 背景 */}
      <div className="absolute inset-0 industrial-grid opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stone-800 to-transparent" />

      <div className="max-w-6xl mx-auto relative">
        {/* 標籤 */}
        <div className="flex items-center gap-3 mb-6">
          <div className="brand-line" />
          <span className="text-amber-500 text-sm tracking-widest uppercase">Contact</span>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl text-stone-100 mb-4">
            聯絡<span className="text-falcon-gradient">我們</span>
          </h2>
          <p className="text-lg text-stone-400 max-w-xl">
            準備好開始您的數位轉型之旅了嗎？讓我們一起討論如何幫助您的品牌成長
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
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
                        <TrackedContactLink
                          href={info.link}
                          channel={info.channel}
                          placement="contact_section"
                          target={info.channel === 'line' ? '_blank' : undefined}
                          rel={info.channel === 'line' ? 'noopener noreferrer' : undefined}
                          className="text-stone-200 hover:text-amber-500 transition-colors"
                        >
                          {info.content}
                        </TrackedContactLink>
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
                <p>採預約制，以電話、Email、LINE 或表單安排線上／到場討論。</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
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
                <div role="alert" className="p-4 bg-red-900/30 border border-red-800/50 rounded-lg text-red-300">
                  <p className="font-medium">送出失敗 [{errorCode}]</p>
                  <p className="mt-1 break-words">{errorMessage}</p>
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
          </div>
        </div>
      </div>
    </section>
  );
}
