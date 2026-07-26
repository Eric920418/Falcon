import { getIndexableServices } from '@/lib/content/services'
import { primaryPriceDefinitions } from '@/lib/content/price-catalog'
import { getAllCaseStudies } from '@/lib/content/case-studies'
import { primaryAuthor } from '@/lib/content/authors'
import { siteConfig } from '@/lib/seo'

export const dynamic = 'force-static'

export function GET() {
  const serviceSections = getIndexableServices()
    .map((service) => {
      const sections = service.sections
        .map((section) => `### ${section.heading}\n${section.body}${section.items?.length ? `\n${section.items.map((item) => `- ${item}`).join('\n')}` : ''}`)
        .join('\n\n')
      return `## ${service.h1}\nURL: ${siteConfig.url}/services/${service.slug}\n${service.intro}\n\n${sections}`
    })
    .join('\n\n')

  const caseSections = getAllCaseStudies()
    .map((caseStudy) => {
      const metrics = caseStudy.metrics
        .map((metric) => `- ${metric.label}: ${metric.value} — ${metric.context}`)
        .join('\n')
      return `## ${caseStudy.title}
URL: ${siteConfig.url}/case-studies/${caseStudy.slug}
地區: ${caseStudy.location}
摘要: ${caseStudy.summary}
限制: ${caseStudy.disclosure}
公開量測:
${metrics}`
    })
    .join('\n\n')

  const prices = primaryPriceDefinitions
    .map((price) => `- ${price.name}: NT$ ${price.from.toLocaleString('en-US')} / ${price.unit}起。${price.scope}`)
    .join('\n')

  const body = `# ${siteConfig.name}完整內容摘要

> ${siteConfig.description}
> 本摘要由網站 TypeScript 內容來源即時產生。Google 官方文件說明 Google Search 不使用 llms.txt 作為排名或 AI 搜尋資格訊號。

# 服務

${serviceSections}

# 公開案例

${caseSections}

# 價格

${prices}

# 作者與責任

- 姓名: ${primaryAuthor.name}（${primaryAuthor.nameEn}）
- 職稱: ${primaryAuthor.jobTitle}
- 關於: ${siteConfig.url}${primaryAuthor.url}
- GitHub: ${primaryAuthor.sameAs[0]}

# 聯絡

- Email: ${siteConfig.email}
- 電話: ${siteConfig.telephone}
- LINE: ${siteConfig.lineUrl}
`

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  })
}
