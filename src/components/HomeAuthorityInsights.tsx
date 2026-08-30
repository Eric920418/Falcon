import Link from 'next/link'
import { ArrowRight, Github } from 'lucide-react'
import { primaryAuthor } from '@/lib/content/authors'
import { blogPosts } from '@/lib/content/blog'

const featuredPostSlugs = [
  'website-pricing-2026',
  'geo-complete-guide-2026',
  'ai-voice-agent-poc-acceptance-checklist',
]

function formatDate(value: string) {
  return new Intl.DateTimeFormat('zh-TW', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    timeZone: 'Asia/Taipei',
  }).format(new Date(value))
}

export function HomeAuthorityInsights() {
  const featuredPosts = featuredPostSlugs.map((slug) => blogPosts[slug])

  return (
    <section className="bg-[#1E2A2E] px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-amber-500">Named responsibility</p>
          <h2 className="text-3xl leading-tight text-[#E0E5E8] md:text-5xl">誰負責，不用猜</h2>

          <div className="mt-10 border-l border-amber-600 pl-6 md:pl-8">
            <p className="text-2xl text-[#E0E5E8]">{primaryAuthor.name}</p>
            <p className="mt-1 text-sm text-[#7A8A91]">{primaryAuthor.nameEn}</p>
            <p className="mt-5 text-[#C5CED2]">{primaryAuthor.jobTitle}</p>
            <p className="mt-4 max-w-md leading-relaxed text-[#A8B6BC]">{primaryAuthor.description}</p>
          </div>

          <div className="mt-8 flex flex-wrap gap-5 text-sm">
            <Link href="/about" className="inline-flex items-center gap-2 text-amber-500 hover:underline">
              查看負責人與方法 <ArrowRight size={15} aria-hidden="true" />
            </Link>
            <a
              href={primaryAuthor.sameAs[0]}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#A8B6BC] hover:text-amber-500"
            >
              <Github size={16} aria-hidden="true" /> GitHub 公開資料
            </a>
          </div>
        </div>

        <div>
          <div className="flex items-end justify-between gap-5 border-b border-[#344349] pb-5">
            <div>
              <p className="mb-2 text-sm text-[#7A8A91]">Selected field notes</p>
              <h3 className="text-2xl text-[#E0E5E8] md:text-3xl">先看我們怎麼判斷，再決定要不要合作</h3>
            </div>
            <Link href="/blog" className="hidden shrink-0 text-sm text-amber-500 hover:underline sm:block">
              全部文章
            </Link>
          </div>

          <div className="divide-y divide-[#344349]">
            {featuredPosts.map((post, index) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group grid gap-3 py-7 sm:grid-cols-[3rem_1fr_auto] sm:items-start sm:gap-5"
              >
                <span className="font-mono text-xs text-amber-500">0{index + 1}</span>
                <span>
                  <span className="block text-xl text-[#E0E5E8] transition-colors group-hover:text-amber-500">
                    {post.title}
                  </span>
                  <span className="mt-2 block text-sm leading-relaxed text-[#A8B6BC]">{post.description}</span>
                </span>
                <span className="text-xs text-[#7A8A91]">
                  {formatDate(post.dateModified ?? post.datePublished)}
                </span>
              </Link>
            ))}
          </div>

          <Link href="/blog" className="mt-6 inline-flex items-center gap-2 text-sm text-amber-500 hover:underline sm:hidden">
            查看全部文章 <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
