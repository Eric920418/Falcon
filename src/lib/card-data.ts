import { resumeData } from './resume-data'
import { siteConfig } from './seo/site-config'

/**
 * 電子名片資料 — 單一來源。
 * 個人資訊取自 resume-data.ts，公司資訊取自 site-config.ts，
 * 兩邊改一處即同步，避免資料漂移。
 */
export const cardProfile = {
  // 個人
  nameZh: resumeData.name.zh, // 蔡翊廉
  nameEn: resumeData.name.en, // Eric Tsai
  title: resumeData.title.zh, // 全端工程師 · 數位產品創業者
  summary: resumeData.summary.zh,

  // 公司
  org: siteConfig.name, // 隼訊數位行銷
  orgEn: siteConfig.alternateNames[0], // Falcon Information

  // 聯絡（個人 + 公司都放）
  personalEmail: resumeData.contact.email, // 26416387.re@gmail.com
  companyEmail: siteConfig.email, // contact@falconinformation.com
  phone: resumeData.contact.phone, // +886 958-801-559
  github: resumeData.contact.github, // https://github.com/Eric920418
  website: siteConfig.url, // https://www.falconinformation.com
  line: siteConfig.lineUrl, // 公司 LINE 官方帳號 https://lin.ee/7IjIYw2
  personalLineId: 'eric0979369822', // 個人 LINE ID
  personalLineUrl: 'https://line.me/ti/p/~eric0979369822', // 個人 LINE 加好友
  instagram: siteConfig.socialLinks[0],
  location: resumeData.contact.location.zh, // 台灣桃園
  address: siteConfig.address, // 公司地址（vCard 用）

  // 名片本身的分享網址（QR / vCard URL 用）
  cardUrl: `${siteConfig.url}/card`,
} as const

export type CardProfile = typeof cardProfile

/** 電話正規化為純撥號字串（去掉空白與破折號），給 tel: 與 vCard 用 */
export function telHref(phone: string): string {
  return phone.replace(/[\s-]/g, '')
}
