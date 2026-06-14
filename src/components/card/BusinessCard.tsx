'use client'

import { useState, type ReactNode } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import {
  Phone,
  Mail,
  Globe,
  Github,
  MapPin,
  MessageCircle,
  Instagram,
  UserPlus,
  ImageDown,
} from 'lucide-react'
import { cardProfile, telHref } from '@/lib/card-data'
import { downloadVCard } from '@/lib/vcard'

type ContactRowProps = {
  icon: ReactNode
  label: string
  value: string
  href: string
  external?: boolean
}

function ContactRow({ icon, label, value, href, external }: ContactRowProps) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="group flex items-center gap-3 py-2.5 falcon-focus rounded-md transition-colors"
    >
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border transition-colors"
        style={{
          borderColor: 'rgba(95, 128, 139, 0.3)',
          background: 'rgba(95, 128, 139, 0.12)',
          color: 'var(--falcon-highlight)',
        }}
      >
        {icon}
      </span>
      <span className="flex min-w-0 flex-col">
        <span className="text-[0.7rem] uppercase tracking-[0.12em] text-stone-500">
          {label}
        </span>
        <span className="truncate text-sm text-stone-200 transition-colors group-hover:text-white">
          {value}
        </span>
      </span>
    </a>
  )
}

export function BusinessCard({ className = '' }: { className?: string }) {
  const [error, setError] = useState<string | null>(null)

  function handleSaveContact() {
    setError(null)
    try {
      downloadVCard()
    } catch (e) {
      // 遵專案規範：錯誤完整顯示於前端，不靜默吞錯
      setError(e instanceof Error ? `${e.name}: ${e.message}` : String(e))
    }
  }

  const imageFormats: { key: string; label: string }[] = [
    { key: 'portrait', label: '直式' },
    { key: 'landscape', label: '橫式' },
    { key: 'print', label: '印刷' },
  ]

  return (
    <article
      className={`falcon-card w-full max-w-[720px] overflow-hidden rounded-lg ${className}`}
      aria-label={`${cardProfile.nameZh} 電子名片`}
    >
      {/* 頂部鋼藍灰飾線 */}
      <div
        style={{
          height: '3px',
          background:
            'linear-gradient(90deg, var(--falcon-steel), var(--falcon-slate), var(--falcon-highlight))',
        }}
      />

      <div className="p-7 sm:p-9">
        {/* 標頭：個人 */}
        <header className="flex items-start gap-4">
          {/* 中文姓氏字標 */}
          <div
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md text-2xl font-semibold text-white"
            style={{
              fontFamily: 'var(--font-display)',
              background: 'linear-gradient(135deg, var(--falcon-steel), var(--falcon-deep))',
            }}
            aria-hidden
          >
            {cardProfile.nameZh.slice(0, 1)}
          </div>

          <div className="min-w-0">
            <h1
              className="text-2xl font-semibold leading-tight text-white sm:text-3xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {cardProfile.nameZh}
              <span className="ml-2 align-middle text-sm font-normal tracking-wide text-stone-400">
                {cardProfile.nameEn}
              </span>
            </h1>
            <p className="mt-1 text-sm text-stone-300">{cardProfile.title}</p>
            <p className="mt-0.5 text-sm" style={{ color: 'var(--falcon-highlight)' }}>
              {cardProfile.org}
            </p>
          </div>
        </header>

        <div className="brand-line mt-5" />

        {/* 主體：聯絡資訊 + QR */}
        <div className="mt-5 grid gap-6 md:grid-cols-[1fr_auto]">
          <div className="grid gap-x-6 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
            <ContactRow
              icon={<Phone size={16} />}
              label="手機"
              value={cardProfile.phone}
              href={`tel:${telHref(cardProfile.phone)}`}
            />
            <ContactRow
              icon={<Mail size={16} />}
              label="個人信箱"
              value={cardProfile.personalEmail}
              href={`mailto:${cardProfile.personalEmail}`}
            />
            <ContactRow
              icon={<Mail size={16} />}
              label="公司信箱"
              value={cardProfile.companyEmail}
              href={`mailto:${cardProfile.companyEmail}`}
            />
            <ContactRow
              icon={<Globe size={16} />}
              label="官方網站"
              value={cardProfile.website.replace(/^https?:\/\//, '')}
              href={cardProfile.website}
              external
            />
            {cardProfile.github && (
              <ContactRow
                icon={<Github size={16} />}
                label="GitHub"
                value={cardProfile.github.replace(/^https?:\/\//, '')}
                href={cardProfile.github}
                external
              />
            )}
            <ContactRow
              icon={<MapPin size={16} />}
              label="所在地"
              value={cardProfile.location}
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                `${cardProfile.address.addressRegion}${cardProfile.address.addressLocality}${cardProfile.address.streetAddress}`,
              )}`}
              external
            />
          </div>

          {/* QR：掃描開啟此名片 */}
          <div className="flex flex-col items-center justify-start gap-2 md:border-l md:border-white/5 md:pl-6">
            <div className="rounded-md bg-white p-2.5">
              <QRCodeSVG
                value={cardProfile.cardUrl}
                size={104}
                level="M"
                bgColor="#ffffff"
                fgColor="#2D3B40"
              />
            </div>
            <span className="text-[0.7rem] tracking-wide text-stone-500">掃描存名片</span>
          </div>
        </div>

        <div className="falcon-divider my-6" />

        {/* 行動按鈕 */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={handleSaveContact}
            className="falcon-btn-primary inline-flex items-center gap-2 rounded-md text-sm"
          >
            <UserPlus size={16} />
            儲存聯絡人
          </button>
          <a
            href={cardProfile.personalLineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="falcon-btn-outline inline-flex items-center gap-2 rounded-md text-sm"
          >
            <MessageCircle size={16} />
            加 LINE
          </a>
          <a
            href={cardProfile.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm text-stone-400 transition-colors hover:text-white falcon-focus"
          >
            <Instagram size={16} />
            Instagram
          </a>
        </div>

        {/* 下載名片圖 */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 text-[0.7rem] uppercase tracking-[0.12em] text-stone-500">
            <ImageDown size={14} />
            下載名片圖
          </span>
          {imageFormats.map((f) => (
            <a
              key={f.key}
              href={`/api/card-image/${f.key}`}
              download
              className="rounded-md border px-3 py-1 text-xs text-stone-300 transition-colors hover:text-white falcon-focus"
              style={{ borderColor: 'rgba(168, 182, 188, 0.2)' }}
            >
              {f.label}
            </a>
          ))}
        </div>

        {/* 錯誤完整顯示 */}
        {error && (
          <p
            role="alert"
            className="mt-4 rounded-md border px-3 py-2 text-sm"
            style={{
              borderColor: 'rgba(220, 38, 38, 0.4)',
              background: 'rgba(220, 38, 38, 0.1)',
              color: '#fca5a5',
            }}
          >
            無法產生聯絡人檔：{error}
          </p>
        )}
      </div>
    </article>
  )
}
