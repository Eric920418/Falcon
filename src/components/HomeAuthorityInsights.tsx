import { PageVisual } from '@/components/PageVisual'

import { getI18n } from '@/lib/i18n/server'
import Link from '@/lib/i18n/link'
import { ArrowRight, Github } from 'lucide-react'
import { primaryAuthor } from '@/lib/content/authors'
import { blogPosts } from '@/lib/content/blog'

const featuredPostSlugs = [
  'website-pricing-2026',
  'geo-complete-guide-2026',
  'ai-voice-agent-poc-acceptance-checklist',
]

function formatDate(value: string) {
  return new Intl.DateTimeFormat(getI18n().locale === 'zh-hans' ? 'zh-CN' : getI18n().locale, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    timeZone: 'Asia/Taipei',
  }).format(new Date(value))
}

export function HomeAuthorityInsights() {
  const { t, locale } = getI18n()

  const featuredPosts = featuredPostSlugs.map((slug) => blogPosts[slug])

  return (
    <section className="bg-[var(--site-soft)] px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[var(--site-accent)]">{t("Named responsibility")}</p>
          <h2 className="text-3xl leading-tight text-[var(--site-text)] md:text-5xl">{t("誰負責，不用猜")}</h2>

          <div className="mt-10 border-l border-[var(--site-accent)] pl-6 md:pl-8">
            <p className="text-2xl text-[var(--site-text)]">{t(primaryAuthor.name)}</p>
            <p className="mt-1 text-sm text-[var(--site-muted)]">{t(primaryAuthor.nameEn)}</p>
            <p className="mt-5 text-[var(--site-text)]">{t(primaryAuthor.jobTitle)}</p>
            <p className="mt-4 max-w-md leading-relaxed text-[var(--site-muted)]">{t(primaryAuthor.description)}</p>
          </div>

          <div className="mt-8 flex flex-wrap gap-5 text-sm">
            <Link href="/about" className="inline-flex items-center gap-2 text-[var(--site-accent)] hover:underline">
              {t("查看負責人與方法")}<ArrowRight size={15} aria-hidden="true" />
            </Link>
            <a
              href={primaryAuthor.sameAs[0]}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[var(--site-muted)] hover:text-[var(--site-accent)]"
            >
              <Github size={16} aria-hidden="true" /> {t("GitHub 公開資料")}</a>
          </div>
        </div>

        <div>
          <div className="flex items-end justify-between gap-5 border-b border-[var(--site-border)] pb-5">
            <div>
              <p className="mb-2 text-sm text-[var(--site-muted)]">{t("Selected field notes")}</p>
              <h3 className="text-2xl text-[var(--site-text)] md:text-3xl">{t("先看我們怎麼判斷，再決定要不要合作")}</h3>
            </div>
            <Link href="/blog" className="hidden shrink-0 text-sm text-[var(--site-accent)] hover:underline sm:block">
              {t("全部文章")}</Link>
          </div>

          <div className="divide-y divide-[var(--site-border)]">
            {featuredPosts.map((post, index) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group grid gap-3 py-7 sm:grid-cols-[8rem_1fr_auto] sm:items-start sm:gap-5"
              >
                <span>
                  <PageVisual path={`/blog/${post.slug}`} sizes="128px" className="mb-3" />
                  <span className="font-mono text-xs text-[var(--site-accent)]">{t("0")}{index + 1}</span>
                </span>
                <span>
                  <span className="block text-xl text-[var(--site-text)] transition-colors group-hover:text-[var(--site-accent)]">
                    {t(post.title)}
                  </span>
                  <span className="mt-2 block text-sm leading-relaxed text-[var(--site-muted)]">{t(post.description)}</span>
                </span>
                <span className="text-xs text-[var(--site-muted)]">
                  {t(formatDate(post.dateModified ?? post.datePublished))}
                </span>
              </Link>
            ))}
          </div>

          <Link href="/blog" className="mt-6 inline-flex items-center gap-2 text-sm text-[var(--site-accent)] hover:underline sm:hidden">
            {t("查看全部文章")}<ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
