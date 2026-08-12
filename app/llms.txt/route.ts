import { getIndexableServices } from '@/lib/content/services'
import { primaryPriceDefinitions } from '@/lib/content/price-catalog'
import { getAllCaseStudies } from '@/lib/content/case-studies'
import { getAllBlogPosts } from '@/lib/content/blog'
import { pricingPages, comparePages } from '@/lib/content/pricing'
import { getAllLocalPages, isIndexableLocalPage } from '@/lib/content/local'
import { primaryAuthor } from '@/lib/content/authors'
import { siteConfig } from '@/lib/seo'

export const dynamic = 'force-static'

export function GET() {
  const services = getIndexableServices()
    .map((service) => `- [${service.h1}](${siteConfig.url}/services/${service.slug}): ${service.description}`)
    .join('\n')
  const cases = getAllCaseStudies()
    .map((caseStudy) => `- [${caseStudy.title}](${siteConfig.url}/case-studies/${caseStudy.slug}): ${caseStudy.summary}`)
    .join('\n')
  const prices = primaryPriceDefinitions
    .map((price) => `- ${price.name}: NT$ ${price.from.toLocaleString('en-US')} / ${price.unit}起`)
    .join('\n')
  const posts = getAllBlogPosts()
    .filter((post) => post.qualityTier === 'production')
    .map((post) => `- [${post.title}](${siteConfig.url}/blog/${post.slug}): ${post.description}`)
    .join('\n')
  const compares = Object.values(comparePages)
    .filter((page) => page.qualityTier === 'production')
    .map((page) => `- [${page.title}](${siteConfig.url}/compare/${page.slug}): ${page.description}`)
    .join('\n')
  const pricingDetails = Object.values(pricingPages)
    .filter((page) => page.qualityTier === 'production')
    .map((page) => `- [${page.title}](${siteConfig.url}/pricing/${page.slug}): ${page.description}`)
    .join('\n')
  const locals = getAllLocalPages()
    .filter((page) => isIndexableLocalPage(page))
    .map((page) => `- [${page.title}](${siteConfig.url}/local/${page.slug}): ${page.description}`)
    .join('\n')

  const body = `# ${siteConfig.name}
> ${siteConfig.description}

## 主要服務
- [服務項目總覽](${siteConfig.url}/services): 五項服務的完整清單與公開起價
${services}

## 公開案例
${cases}

## 公開起價
${prices}

## 價格頁
${pricingDetails}

## 比較頁
${compares}

## 內容文章
${posts}

## 服務地區
${locals}

## 實名負責人
- [${primaryAuthor.name}（${primaryAuthor.nameEn}）](${siteConfig.url}${primaryAuthor.url}): ${primaryAuthor.jobTitle}

## 聯絡
- Email: ${siteConfig.email}
- 電話: ${siteConfig.telephone}
- 網站: ${siteConfig.url}

注意：本檔案是網站內容摘要，不是 Google 排名或 AI 引用保證；完整證據與限制以各 HTML 頁面為準。
`

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  })
}
