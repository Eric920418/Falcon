import { getI18n } from '@/lib/i18n/server'
import { ImageWithFallback as Image } from '@/components/figma/ImageWithFallback'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import Link from '@/lib/i18n/link'

const chapters = [
  { title: '換個視角，看見可能。', text: '從一片羽翼，展開一個世界。', poster: 'entry' },
  { title: '穿越想像的邊界。', text: '設計與工程，在這裡相遇。', poster: 'corridor' },
  { title: '讓每個細節，彼此連結。', text: '把複雜拆開，再組成流暢的體驗。', poster: 'tunnel' },
  { title: '為下一次突破，展翼。', text: '從網站到 AI，為你的品牌開啟新的空間。', poster: 'gallery' },
  { title: '下一件作品，一起完成。', text: '帶著你的想法來，我們一起讓它發生。', poster: 'finale' },
]
export function HomeJourney() {
  const { t } = getI18n()
  return <>
    <section className="fh-journey-intro fh-section"><h2 className="fh-display" data-reveal>{t('不止於螢幕。')}<br />{t('走進可能。')}</h2><p className="fh-statement">{t('好的數位體驗，讓人願意多停留一步。現在，換個角度看隼訊。')}</p></section>
    <section className="fh-journey" id="journey" aria-label={t('隼翼的空間旅程')}>
      <div className="fh-journey-stage" data-home-stage="journey">
        <div className="fh-portal-intro"><span>FALCON — 01 / 05</span><h3>{t('換個視角，看見可能。')}</h3><p>{t('好的數位體驗，讓人願意多停留一步。現在，換個角度看隼訊。')}</p><p>{t('從一片羽翼，展開一個世界。')}</p></div>
        <div className="fh-journey-copy">
          {chapters.map((chapter, i) => <div key={chapter.poster} className="fh-chapter" data-chapter={i}>
            <div className="fh-chapter-poster"><Image src={`/models/falcon-${chapter.poster}.webp?v=physical-flight1`} alt={t(chapter.title)} fill unoptimized sizes="100vw" className="object-cover" /></div>
            <div className="fh-chapter-text"><h2>{t(chapter.title)}</h2><p>{t(chapter.text)}</p></div>
          </div>)}
        </div>
        <div className="fh-journey-controls">
        <span className="fh-chapter-number" aria-hidden="true">01 / 05</span>
        <div className="fh-journey-progress" aria-hidden="true"><span /></div>
        <a className="fh-skip" href="#contact">{t('跳過動畫')}<ArrowDown size={16} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
    <section className="fh-invitation fh-section">
      <p>{t('下一個想法，從這裡開始。')}</p>
      <Link href="/#contact" className="fh-invitation-link"><span>{t('一起做點')}<br />{t('不一樣的。')}</span><ArrowUpRight aria-hidden="true" /></Link>
    </section>
  </>
}
