import { getIndexableServices } from '@/lib/content/services'
import { primaryPriceDefinitions } from '@/lib/content/price-catalog'
import { getAllCaseStudies } from '@/lib/content/case-studies'
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

  const body = `# ${siteConfig.name}
> ${siteConfig.description}

## 主要服務
${services}

## 公開案例
${cases}

## 公開起價
${prices}

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
