import { getI18n } from '@/lib/i18n/server'
import { visualAssets } from '@/lib/content/visual-assets'
import { ImageWithFallback } from '@/components/figma/ImageWithFallback'

export function PageVisual({ path, priority = false, className = '', sizes = '(min-width: 1024px) 46vw, 100vw' }: { path: string; priority?: boolean; className?: string; sizes?: string }) {
  const asset = visualAssets[path]
  const { t } = getI18n()
  if (!asset) return null
  return (
    <figure data-visual-asset data-visual-src={asset.src} className={`visual-frame ${className}`}>
      <ImageWithFallback src={asset.src} alt={t('概念插圖：{0}', { 0: t(asset.title) })} width={asset.width} height={asset.height} preload={priority} loading={priority ? undefined : 'lazy'} sizes={sizes} className="block h-auto w-full" />
    </figure>
  )
}
