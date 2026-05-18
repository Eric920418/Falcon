import type { Metadata } from 'next'
import { siteConfig } from './site-config'

export interface MetadataInput {
  title: string
  description: string
  path: string
  keywords?: string[]
  ogImage?: string
  noIndex?: boolean
}

export function createMetadata(input: MetadataInput): Metadata {
  const url = `${siteConfig.url}${input.path}`
  const fullTitle = input.title.includes(siteConfig.name)
    ? input.title
    : `${input.title} | ${siteConfig.name}`

  return {
    title: input.title,
    description: input.description,
    keywords: input.keywords ?? (siteConfig.keywords as unknown as string[]),
    alternates: {
      canonical: url,
      languages: {
        'zh-TW': url,
        'zh-Hant': url,
        'x-default': url,
      },
    },
    robots: input.noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
    openGraph: {
      type: 'website',
      locale: 'zh_TW',
      url,
      siteName: siteConfig.name,
      title: fullTitle,
      description: input.description,
      ...(input.ogImage ? { images: [{ url: input.ogImage }] } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: input.description,
      ...(input.ogImage ? { images: [input.ogImage] } : {}),
    },
  }
}
