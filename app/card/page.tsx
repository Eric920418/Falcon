import type { Metadata } from 'next'
import { PageShell } from '@/components/page-layout/PageShell'
import { BusinessCard } from '@/components/card/BusinessCard'
import { createMetadata } from '@/lib/seo/metadata'
import { cardProfile } from '@/lib/card-data'

export const metadata: Metadata = createMetadata({
  title: `${cardProfile.nameZh}（${cardProfile.nameEn}）電子名片`,
  description: `${cardProfile.nameZh} · ${cardProfile.title}｜${cardProfile.org}。掃描或點擊即可儲存聯絡人、加 LINE、查看作品與聯絡方式。`,
  path: '/card',
})

export default function CardPage() {
  return (
    <PageShell>
      <section className="mx-auto flex max-w-3xl flex-col items-center px-4 py-14 sm:py-20">
        <p className="mb-6 text-xs uppercase tracking-[0.3em] text-stone-500">
          Digital Business Card · 電子名片
        </p>
        <BusinessCard />
      </section>
    </PageShell>
  )
}
