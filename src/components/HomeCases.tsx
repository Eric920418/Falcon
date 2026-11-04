import { Fragment } from 'react'
import { HomeAiVoice } from './HomeAiVoice'
import { getAllCaseStudies } from '@/lib/content/case-studies'
import { getI18n } from '@/lib/i18n/server'
import { ImageWithFallback as Image } from '@/components/figma/ImageWithFallback'
import Link from '@/lib/i18n/link'
import { ArrowUpRight } from 'lucide-react'
import { getProject, projectCount } from '@/lib/content/projects'

export const homeProjectSlugs = ['nova-startup-operating-platform', 'climatix-ghg-inventory', 'clasp-collaboration-app', 'automation-expo-ai-explorer', 'roll-on-corporate-website', 'gogocha-ai-dispatch', 'neuron-2026-exhibition', 'escrowa-game-escrow'] as const

export function HomeCases() {
  const { t } = getI18n()
  return <section id="cases" className="fh-work fh-section">
    <div className="fh-section-heading"><h2 className="fh-display" data-reveal>{t('作品，會說話。')}</h2><p>{t('不同領域，同樣投入。每一件都是從真實問題出發的作品。')}</p></div>
    <div className="fh-work-grid">
      {homeProjectSlugs.map(slug => {
        const project = getProject(slug)!
        return <Fragment key={slug}><article className="fh-project" data-project={slug}>
          <Link href={`/case-studies/${slug}`} className="fh-project-link">
            <div className="fh-project-image"><div className="fh-project-image-inner"><Image src={project.image} alt={t(project.title)} fill loading="lazy" sizes="(min-width: 768px) 46vw, 92vw" className={project.imageContain ? 'object-contain' : 'object-cover'} /></div><span className="fh-project-arrow"><ArrowUpRight size={25} aria-hidden="true" /></span></div>
            <div className="fh-project-meta"><p>{t(project.category)}</p><h3>{t(project.title)}</h3></div>
          </Link>
        </article>{slug === 'gogocha-ai-dispatch' && <HomeAiVoice />}</Fragment>
      })}
    </div>
    <div className="fh-work-all"><Link href="/case-studies" className="fh-round-link">{t('查看完整 {0} 項作品', { 0: projectCount })}<ArrowUpRight size={20} aria-hidden="true" /></Link></div>
    <HomeEvidence />
  </section>
}

export function HomeEvidence() {
  const { t } = getI18n()
  return <section id="evidence" className="fh-content">
    <div>
      <p className="mb-3 text-sm uppercase tracking-widest text-[var(--site-accent)]">{t('Evidence')}</p>
      <h2 className="mb-10">{t('案例先講證據，再講限制')}</h2>
      <div className="divide-y divide-[var(--site-border)]">
        {getAllCaseStudies().map(study => <article key={study.slug} className="grid gap-6 py-8 md:grid-cols-[1fr_1.3fr] md:gap-16">
          <div><p className="mb-3 text-sm text-[var(--site-muted)]">{t(study.location)}</p><h3 className="text-2xl">{t(study.title)}</h3></div>
          <div><p className="leading-relaxed text-[var(--site-muted)]">{t(study.summary)}</p><Link href={`/case-studies/${study.slug}`} className="fh-text-link">{t('查看證據')}<ArrowUpRight size={18} aria-hidden="true" /></Link></div>
        </article>)}
      </div>
    </div>
  </section>
}
