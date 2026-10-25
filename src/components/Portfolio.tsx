'use client'
import { useI18n } from '@/lib/i18n/client'


import { motion } from 'motion/react'
import { useState } from 'react'
import { ExternalLink, ArrowRight } from 'lucide-react'
import { ImageWithFallback as Image } from '@/components/figma/ImageWithFallback'
import Link from '@/lib/i18n/link'
import type { PortfolioCard } from '@/lib/content/projects'

const categories = ['全部', '電商平台', '企業官網', '形象網站', 'App 開發', 'AI 應用', '遊戲製作', 'Bot / 自動化', '學術系統', '其他']

export function Portfolio({ projects, showHeader = true }: { projects: PortfolioCard[]; showHeader?: boolean }) {
  const { t } = useI18n()

  const [selectedCategory, setSelectedCategory] = useState('全部')

  const filteredProjects = selectedCategory === '全部'
    ? projects
    : projects.filter(p => p.category === selectedCategory || (selectedCategory === '其他' && !categories.slice(1, -1).includes(p.category)))

  return (
    <section id="portfolio" className="relative py-32 px-6 bg-[var(--site-soft)]">
      {/* 背景 */}
      <div className="absolute inset-0 diagonal-lines" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--site-tint)] to-transparent" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        {showHeader && (
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
          {/* 標籤 */}
          <div className="flex items-center gap-3 mb-6">
            <div className="brand-line" />
            <span className="text-[var(--site-accent)] text-sm tracking-widest uppercase">{t("Portfolio")}</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl text-[var(--site-text)] mb-4">
                <span className="text-falcon-gradient">{t("完整作品紀錄")}</span>
              </h2>
              <p className="text-lg text-[var(--site-muted)] max-w-xl">
                {t("{0} 項作品皆有獨立介紹。依類型探索功能、實作方式與相關服務。", { 0: projects.length })}</p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  style={{ minHeight: 44 }}
                  className={`px-4 py-2 text-sm transition-all ${
                    selectedCategory === category
                      ? 'bg-[var(--site-accent)] text-white'
                      : 'bg-[var(--site-soft)] text-[var(--site-muted)] hover:text-[var(--site-text)] hover:bg-[var(--site-soft)]'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {t(category)}
                </button>
              ))}
            </div>
          </div>
          </motion.div>
        )}

        {!showHeader && (
          <div className="flex flex-wrap gap-2 mb-12" aria-label={t("案例分類")}>
            {categories.map((category) => (
              <button
                key={category}
                style={{ minHeight: 44 }}
                className={`px-4 py-2 text-sm transition-all ${
                  selectedCategory === category
                    ? 'bg-[var(--site-accent)] text-white'
                    : 'bg-[var(--site-soft)] text-[var(--site-muted)] hover:text-[var(--site-text)] hover:bg-[var(--site-soft)]'
                }`}
                onClick={() => setSelectedCategory(category)}
                aria-pressed={selectedCategory === category}
              >
                {t(category)}
              </button>
            ))}
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group"
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              <div className="falcon-card rounded-lg overflow-hidden h-full flex flex-col">
                {/* Project Image */}
                <div className="relative aspect-[16/10] bg-[var(--site-soft)] overflow-hidden">
                  <Link href={`/case-studies/${project.slug}`} aria-label={t("查看{0}專案介紹", { 0: t(project.title) })} className="absolute inset-0">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={t(project.title)}
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className={`${project.imageContain ? 'object-contain p-4' : 'object-cover'} group-hover:scale-105 transition-transform duration-500`}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-5xl font-bold text-[var(--site-muted)]" style={{ fontFamily: 'var(--font-display)' }}>
                        {t(project.title.charAt(0))}
                      </span>
                    </div>
                  )}
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--site-soft)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  </Link>
                  {/* Category Badge */}
                  <div className="absolute top-3 right-3 falcon-badge">
                    {t(project.category)}
                  </div>
                  {project.hasEvidence && (
                    <div className="absolute top-3 left-3 bg-[var(--site-accent)] text-white px-2 py-1 text-xs font-medium rounded">
                      {t("可驗證證據")}</div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg text-[var(--site-text)] group-hover:text-[var(--site-muted)] transition-colors" style={{ fontFamily: 'var(--font-display)' }}>
                      <Link href={`/case-studies/${project.slug}`}>{t(project.title)}</Link>
                    </h3>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={t("開啟{0}外部網站", { 0: t(project.title) })}
                        className="inline-flex min-h-11 min-w-11 items-center justify-center text-[var(--site-accent)] hover:text-[var(--site-muted)] transition-colors ml-2 flex-shrink-0"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>

                  <p className="text-[var(--site-accent)] text-sm mb-4 line-clamp-3 leading-relaxed">
                    {t(project.description)}
                  </p>

                  <Link href={`/case-studies/${project.slug}`} className="inline-flex items-center gap-2 text-sm text-[var(--site-accent)] mt-auto pt-4 border-t border-[var(--site-border)]">
                    {t("查看專案介紹")}<ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
