'use client'
import NextLink from 'next/link'
import { useI18n } from './client'
import { localizedPath } from './config'
export default function Link({ href, ...props }: React.ComponentProps<typeof NextLink>) {
  const { locale } = useI18n()
  const target = typeof href === 'string' ? localizedPath(href, locale) : { ...href, pathname: href.pathname ? localizedPath(href.pathname, locale) : href.pathname }
  return <NextLink {...props} href={target} />
}
