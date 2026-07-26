import { organizationSchema } from './schemas/organization'
import { websiteSchema } from './schemas/website'

interface JsonLdProps {
  data: unknown | unknown[]
}

// JSON.stringify 不會 escape <、>、&、U+2028、U+2029；
// 直接塞進 <script> 會導致 HTML parser 提前關閉標籤 (XSS)
// 或在瀏覽器執行時拋 SyntaxError (U+2028/2029 被當成換行)
function safeJsonForScript(value: unknown): string {
  return JSON.stringify(value)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

export function JsonLd({ data }: JsonLdProps) {
  const items = [
    organizationSchema,
    websiteSchema,
    ...(Array.isArray(data) ? data : [data]),
  ]
  const ids = new Set<string>()
  const graph = {
    '@context': 'https://schema.org',
    '@graph': items
      .map((item) => {
        if (!item || typeof item !== 'object') return item
        const { '@context': _context, ...node } = item as Record<string, unknown>
        return node
      })
      .filter((item) => {
        if (!item || typeof item !== 'object') return true
        const id = (item as Record<string, unknown>)['@id']
        if (typeof id !== 'string') return true
        if (ids.has(id)) return false
        ids.add(id)
        return true
      }),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonForScript(graph) }}
    />
  )
}
