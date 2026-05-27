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
  const items = Array.isArray(data) ? data : [data]
  return (
    <>
      {items.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonForScript(item) }}
        />
      ))}
    </>
  )
}
