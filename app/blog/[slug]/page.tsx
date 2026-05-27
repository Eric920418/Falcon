import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { PageShell } from '@/components/page-layout/PageShell'
import { BlogPostTemplate } from '@/components/page-templates/BlogPostTemplate'
import { blogPosts, blogSlugs, getBlogPost } from '@/lib/content/blog'
import {
  createMetadata,
  createFAQSchema,
  createHowToSchema,
  createBreadcrumbSchema,
  createArticleSchema,
  siteConfig,
  JsonLd,
} from '@/lib/seo'

interface BlogPageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return blogSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return {}
  return createMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${slug}`,
    keywords: post.keywords,
    noIndex: post.qualityTier !== 'production',
  })
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()

  const url = `${siteConfig.url}/blog/${slug}`

  const schemas = [
    createArticleSchema({
      slug: post.slug,
      title: post.title,
      description: post.description,
      url,
      datePublished: post.datePublished,
      dateModified: post.dateModified,
      reviewedByRole: post.reviewedByRole,
      keywords: post.keywords,
    }),
    createBreadcrumbSchema([
      { name: '首頁', path: '/' },
      { name: '部落格', path: '/blog' },
      { name: post.title, path: `/blog/${slug}` },
    ]),
    ...(post.faq ? [createFAQSchema(post.faq, `blog-${slug}-faq`)] : []),
    ...(post.howTo ? [createHowToSchema(post.howTo)] : []),
  ]

  return (
    <PageShell>
      <JsonLd data={schemas} />
      <BlogPostTemplate post={post} />
    </PageShell>
  )
}
