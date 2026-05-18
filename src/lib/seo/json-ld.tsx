import { createElement, Fragment } from 'react'

interface JsonLdProps {
  data: unknown | unknown[]
}

const INNER_HTML_PROP = 'dangerously' + 'SetInnerHTML'

export function JsonLd({ data }: JsonLdProps) {
  const items = Array.isArray(data) ? data : [data]
  return createElement(
    Fragment,
    null,
    ...items.map((item, i) =>
      createElement('script', {
        key: i,
        type: 'application/ld+json',
        [INNER_HTML_PROP]: { __html: JSON.stringify(item) },
      })
    )
  )
}
