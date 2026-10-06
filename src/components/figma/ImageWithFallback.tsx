'use client'

import Image, { type ImageProps } from 'next/image'
import { useState } from 'react'
import { useI18n } from '@/lib/i18n/client'

export function ImageWithFallback({ onError, ...props }: ImageProps) {
  const { t } = useI18n()
  const source = typeof props.src === 'string' ? props.src : 'src' in props.src ? props.src.src : props.src.default.src
  const imageSource = typeof props.src === 'string' && source.startsWith('/') && !source.startsWith('//')
    ? new URL(source, 'https://local.invalid').href.slice('https://local.invalid'.length)
    : props.src
  const [failure, setFailure] = useState<{ source: string; detail: string }>()

  if (failure?.source === source) {
    return (
      <div role="alert" data-image-error className={`${props.fill ? 'absolute inset-0' : 'w-full'} overflow-auto rounded-xl border border-red-200 bg-red-50 p-5 text-sm text-red-800 [overflow-wrap:anywhere]`} style={props.fill ? undefined : { aspectRatio: `${props.width || 16}/${props.height || 9}` }}>
        <p className="font-semibold">{t('圖片載入失敗')}</p>
        <pre className="mt-2 whitespace-pre-wrap font-mono text-xs">{failure.detail}</pre>
      </div>
    )
  }

  return <Image {...props} src={imageSource} onError={event => {
    onError?.(event)
    const requested = event.currentTarget.currentSrc || source
    const initial = `Source: ${source}\nRequest: ${requested}\nEvent: ${event.type}`
    setFailure({ source, detail: initial })
    void (async () => {
      try {
        const response = await fetch(requested)
        const detail = response.ok ? 'Image decoding failed.' : await response.text()
        setFailure({ source, detail: `${initial}\nHTTP ${response.status} ${response.statusText}\n${detail}` })
      } catch (error) {
        setFailure({ source, detail: `${initial}\n${error instanceof Error ? error.message : String(error)}` })
      }
    })()
  }} />
}
