import { cardProfile, telHref, type CardProfile } from './card-data'

/**
 * 依 RFC 6350 (vCard 4.0) 產生 .vcf 字串。
 * 純函式、無瀏覽器 API，server 與 client 皆可用。
 *
 * 多值欄位（雙 email、多個 URL）以多行表示，這是 vCard 對「兩者都放」的標準做法，
 * iOS / Android / Outlook 通訊錄皆能匯入。
 */
export function buildVCard(profile: CardProfile = cardProfile): string {
  const { address } = profile
  const lines = [
    'BEGIN:VCARD',
    'VERSION:4.0',
    // N: 姓;名;;; — 中文姓名拆姓「蔡」與名「翊廉」
    `N:${profile.nameZh.slice(0, 1)};${profile.nameZh.slice(1)};;;`,
    `FN:${profile.nameZh} (${profile.nameEn})`,
    `ORG:${profile.org}`,
    `TITLE:${profile.title}`,
    `TEL;TYPE=cell,voice;VALUE=uri:tel:${telHref(profile.phone)}`,
    `EMAIL;TYPE=work:${profile.personalEmail}`,
    `EMAIL;TYPE=work:${profile.companyEmail}`,
    `URL:${profile.website}`,
    profile.github ? `URL:${profile.github}` : null,
    `URL:${profile.personalLineUrl}`,
    // ADR: ;;街道;城市;區域;郵遞區號;國家
    `ADR;TYPE=work:;;${address.streetAddress};${address.addressLocality};${address.addressRegion};${address.postalCode};台灣`,
    `NOTE:${profile.org}｜${profile.title}｜LINE ID: ${profile.personalLineId}`,
    'END:VCARD',
  ].filter(Boolean) as string[]

  // vCard 規範要求 CRLF 換行
  return lines.join('\r\n')
}

/** 觸發 .vcf 下載（client 端）。失敗時拋出，由呼叫端在前端完整顯示錯誤。 */
export function downloadVCard(profile: CardProfile = cardProfile): void {
  const vcard = buildVCard(profile)
  const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  try {
    const a = document.createElement('a')
    a.href = url
    a.download = `${profile.nameEn.replace(/\s+/g, '_')}_${profile.orgEn.replace(/\s+/g, '_')}.vcf`
    document.body.appendChild(a)
    a.click()
    a.remove()
  } finally {
    // 延遲釋放，確保下載已啟動
    setTimeout(() => URL.revokeObjectURL(url), 1000)
  }
}
