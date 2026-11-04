'use client'
import { useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight, Plus } from 'lucide-react'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { useI18n } from '@/lib/i18n/client'
import Link from '@/lib/i18n/link'
import { Dialog, DialogContent, DialogTitle, DialogTrigger, DialogDescription } from '@/components/ui/dialog'

export function Navigation() {
  const { t } = useI18n()
  const [open, setOpen] = useState(false)
  return <nav className="fh-nav" aria-label={t('主要導覽')}>
    <Link href="/#hero" className="fh-brand" aria-label={t('隼訊數位行銷')}><Image src="/logo.png" alt="" width={40} height={40} priority /><span>{t('隼訊數位行銷')}<small>FALCON INFORMATION</small></span></Link>
    <div className="fh-nav-actions">
      <LanguageSwitcher />
      <Link href="/#contact" className="fh-nav-contact">{t('聊聊你的想法')}<span className="fh-nav-contact-arrow"><ArrowUpRight size={19} aria-hidden="true" /></span></Link>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild><button id="home-menu-toggle" aria-controls="home-menu-panel" className="fh-menu-trigger" aria-label={t('開啟導覽選單')}><span>{t('選單')}</span><Plus size={20} aria-hidden="true" /></button></DialogTrigger>
        <DialogContent className="fh-menu" id="home-menu-panel">
          <DialogTitle className="sr-only">{t('主要導覽')}</DialogTitle>
          <DialogDescription className="sr-only">{t('探索作品、服務與合作方式。')}</DialogDescription>
          <div className="fh-menu-links">
            {[
              ['作品', '/case-studies'], ['所有服務項目', '/services'], ['公開起價', '/pricing'], ['認識隼訊', '/about'], ['聯絡', '/#contact'],
            ].map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{t(label)}<ArrowUpRight aria-hidden="true" /></Link>)}
          </div>
          <p className="fh-menu-signature">Falcon Information</p>
        </DialogContent>
      </Dialog>
    </div>
  </nav>
}
