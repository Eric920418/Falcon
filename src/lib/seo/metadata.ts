import { getI18n } from '@/lib/i18n/server'
import { languageInfo } from '@/lib/i18n/config'
import { absoluteLocaleUrl, languageAlternates } from '@/lib/i18n/seo'
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

const defaultOgImage = `${siteConfig.url}/opengraph-image`

export function createMetadata(input: MetadataInput): Metadata {
  const { t, locale } = getI18n()
  const url = absoluteLocaleUrl(input.path, locale)
  const title = t(input.title)
  const description = t(input.description)
  const brand = locale === 'zh-tw' ? siteConfig.name : 'Falcon Information'
  const image = locale === 'zh-tw' ? input.ogImage ?? defaultOgImage : `${siteConfig.url}/brand-og`
  const fullTitle = title.includes(brand)
    ? title
    : `${title} | ${brand}`

  return {
    title: { absolute: fullTitle },
    description,
    alternates: {
      canonical: url,
      languages: languageAlternates(input.path),
    },
    robots: input.noIndex
      ? { index: false, follow: true }
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
      locale: languageInfo[locale].og,
      url,
      siteName: brand,
      title: fullTitle,
      description,
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
  }
}
