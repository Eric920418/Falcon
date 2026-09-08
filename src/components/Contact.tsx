'use client'
import { contactMessages } from '@/lib/i18n/contact-messages'
import { languageUi } from '@/lib/i18n/language-ui'
import { useI18n } from '@/lib/i18n/client'


import { useEffect, useRef, useState } from 'react'
import { Mail, Phone, Send, MessageCircle } from 'lucide-react'
import { siteConfig } from '@/lib/seo/site-config'
import { trackEvent } from '@/lib/analytics'
import { TrackedContactLink } from './TrackedContactLink'
import { isServiceInterest, serviceInterestEvent, serviceInterestOptions } from '@/lib/contact-service'

const safeErrorCodes = new Set([
  'REQUIRED_FIELDS_MISSING', 'INVALID_SERVICE_INTEREST', 'SMTP_NOT_CONFIGURED',
  'SMTP_SEND_FAILED', 'INVALID_LOCALE', 'INVALID_RESPONSE', 'HTTP_ERROR', 'CONTACT_FORM_FAILED',
])

export function Contact() {
  const { t, locale } = useI18n()
  const messages = contactMessages(locale)

  const submitLock = useRef(false);
  const phoneNumber = locale === 'zh-tw' ? '0958801559' : '+886 958 801 559';
  const phoneHref = 'tel:+886958801559';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    serviceInterest: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [errorCode, setErrorCode] = useState('');

  useEffect(() => {
    const selectService = (service: unknown) => {
      if (isServiceInterest(service)) {
        setFormData((current) => ({ ...current, serviceInterest: service }))
      }
    }
    selectService(new URLSearchParams(window.location.search).get('service'))
    const onServiceInterest = (event: Event) => selectService((event as CustomEvent<unknown>).detail)
    window.addEventListener(serviceInterestEvent, onServiceInterest)
    return () => window.removeEventListener(serviceInterestEvent, onServiceInterest)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitLock.current || submitStatus === 'success') return;
    submitLock.current = true;
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
        body: JSON.stringify({ ...formData, locale }),
      });

      const rawBody = await response.text();
      let parsed: unknown;
      try {
        parsed = JSON.parse(rawBody);
      } catch {
        parsed = null;
      }
      const data = parsed && typeof parsed === 'object' && !Array.isArray(parsed)
        ? parsed as Record<string, unknown> : null;
      if (!response.ok || !data || data.code !== 'CONTACT_SENT') {
        const detail = typeof data?.error === 'string'
          ? [data.error, typeof data.detail === 'string' ? data.detail : ''].filter(Boolean).join('\n') : rawBody;
        const submitError = new Error(
          `${response.ok ? messages.confirmation : messages.failed} (HTTP ${response.status})${detail ? `：${detail}` : `：${messages.empty}`}`
        ) as Error & { code?: string };
        submitError.code = response.ok || !data ? 'INVALID_RESPONSE'
          : typeof data.code === 'string' && data.code !== 'CONTACT_SENT' ? data.code : 'HTTP_ERROR';
        throw submitError;
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', serviceInterest: '', message: '' });
      trackEvent('generate_lead', {
        method: 'contact_form',
        service: formData.serviceInterest || 'unspecified',
      });

    } catch (error) {
      const code =
        error && typeof error === 'object' && 'code' in error && typeof error.code === 'string'
          ? error.code
          : 'CONTACT_FORM_FAILED';
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : messages.retry);
      setErrorCode(code);
      trackEvent('form_error', {
        form_name: 'contact',
        error_code: safeErrorCodes.has(code) ? code : 'CONTACT_FORM_FAILED',
        service: formData.serviceInterest || 'unspecified',
      });
    } finally {
      submitLock.current = false;
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (e.target.name === 'serviceInterest' && e.target.value !== '' && !isServiceInterest(e.target.value)) return;
    if (submitStatus === 'success') setSubmitStatus('idle');
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
    <section id="contact" className="relative py-32 px-6 bg-stone-950">
      {/* 背景 */}
      <div className="absolute inset-0 industrial-grid opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stone-800 to-transparent" />

      <div className="max-w-6xl mx-auto relative">
        {/* 標籤 */}
        <div className="flex items-center gap-3 mb-6">
          <div className="brand-line" />
          <span className="text-amber-500 text-sm tracking-widest uppercase">{t("Contact")}</span>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl text-stone-100 mb-4">
            <span className="text-falcon-gradient">{t("聯絡我們")}</span>
          </h2>
          <p className="text-lg text-stone-400 max-w-xl">
            {t("準備好開始您的數位轉型之旅了嗎？讓我們一起討論如何幫助您的品牌成長")}</p>
        </div>

        <p className="mb-8 text-sm leading-relaxed text-stone-400">{languageUi(locale).inquiry}</p>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl mb-8 text-stone-100" style={{ fontFamily: 'var(--font-display)' }}>{t("取得聯繫")}</h3>

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
                      <p className="text-stone-500 text-sm mb-1">{t(info.title)}</p>
                      {info.link ? (
                        <TrackedContactLink
                          href={info.link}
                          channel={info.channel}
                          placement="contact_section"
                          service={isServiceInterest(formData.serviceInterest) ? formData.serviceInterest : undefined}
                          target={info.channel === 'line' ? '_blank' : undefined}
                          rel={info.channel === 'line' ? 'noopener noreferrer' : undefined}
                          className="text-stone-200 hover:text-amber-500 transition-colors"
                        >
                          {t(info.content)}
                        </TrackedContactLink>
                      ) : (
                        <p className="text-stone-200">{t(info.content)}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="falcon-card rounded-lg p-8">
              <h4 className="text-lg mb-4 text-falcon-gradient" style={{ fontFamily: 'var(--font-display)' }}>
                {t("營業時間")}</h4>
              <div className="space-y-2 text-stone-400">
                <p>{t("採預約制，以電話、Email、LINE 或表單安排線上／到場討論。")}</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onInvalid={(event) => {
              const field = event.target as HTMLInputElement | HTMLTextAreaElement
              field.setCustomValidity(field.validity.typeMismatch ? messages.email : messages.required)
            }} onInput={(event) => (event.target as HTMLInputElement | HTMLTextAreaElement).setCustomValidity('')} data-contact-dirty={Object.values(formData).some(value => value !== '')} onSubmit={handleSubmit} className="space-y-6">
              <fieldset disabled={isSubmitting} className="min-w-0 space-y-6">
              <div>
                <label htmlFor="name" className="block text-stone-400 text-sm mb-2">
                  {t("姓名 *")}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-stone-900/50 border border-stone-800 rounded-lg text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-600 transition-colors"
                  placeholder={t("請輸入您的姓名")}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-stone-400 text-sm mb-2">
                  {t("Email *")}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-stone-900/50 border border-stone-800 rounded-lg text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-600 transition-colors"
                  placeholder={t("your@email.com")}
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-stone-400 text-sm mb-2">
                  {t("公司名稱")}</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  autoComplete="organization"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-stone-900/50 border border-stone-800 rounded-lg text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-600 transition-colors"
                  placeholder={t("您的公司名稱（選填）")}
                />
              </div>

              <div>
                <label htmlFor="serviceInterest" className="block text-stone-400 text-sm mb-2">
                  {t("想討論的服務")}</label>
                <select
                  id="serviceInterest"
                  name="serviceInterest"
                  value={formData.serviceInterest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-stone-900/50 border border-stone-800 rounded-lg text-stone-100 focus:outline-none focus:border-amber-600 transition-colors"
                >
                  {serviceInterestOptions.map((option) => (
                    <option key={option.value || 'unspecified'} value={option.value} className="bg-stone-900">
                      {t(option.label)}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-stone-400 text-sm mb-2">
                  {t("訊息內容 *")}</label>
                <textarea
                  id="message"
                  name="message"
                  aria-describedby={formData.serviceInterest === 'ai_voice' ? 'ai-voice-form-help' : undefined}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-stone-900/50 border border-stone-800 rounded-lg text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-600 transition-colors resize-none"
                  placeholder={t("請告訴我們您的需求...")}
                />
                {formData.serviceInterest === 'ai_voice' && (
                  <div id="ai-voice-form-help" className="mt-3 space-y-2 text-sm leading-relaxed text-stone-400">
                    <p>{t("可以先說明：目前如何接聽？通話後需要做什麼？最需要避免什麼錯誤？")}</p>
                    <p>{t("送出的是流程 Demo 需求，時間與展示範圍將另行確認；請勿提供私人錄音、客戶個資或系統密碼。")}</p>
                  </div>
                )}
              </div>

              {submitStatus === 'error' && (
                <div role="alert" className="p-4 bg-red-900/30 border border-red-800/50 rounded-lg text-red-300 [overflow-wrap:anywhere]">
                  <p className="font-medium">{t("送出失敗 [")}{t(errorCode)}{t("]")}</p>
                  <p className="mt-1 whitespace-pre-wrap">{errorMessage}</p>
                </div>
              )}
              <div role="status" aria-live="polite" aria-atomic="true" className="text-sm text-emerald-300">
                {t(submitStatus === 'success' && '需求已送出，後續聯絡確認。這不代表預約時間已確定。')}
              </div>

              <p className="text-sm leading-relaxed text-stone-400">
                {languageUi(locale).privacyNotice}{' '}
                <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-amber-400 underline underline-offset-4">{languageUi(locale).privacy}</a>
              </p>
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
                    {t("發送中...")}</>
                ) : submitStatus === 'success' ? (
                  <>
                    <span>{t("✓")}</span>
                    {t("需求已送出")}</>
                ) : (
                  <>
                    <Send size={18} />
                    {t("送出訊息")}</>
                )}
              </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
