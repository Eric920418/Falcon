export const serviceInterestOptions = [
  { value: '', label: '請選擇服務（選填）' },
  { value: 'ai_voice', label: '企業 AI 語音客服／電話自動化' },
  { value: 'ai_tools', label: 'AI 工具與流程自動化' },
  { value: 'web_development', label: '網站與系統開發' },
  { value: 'seo_geo', label: 'SEO／GEO 搜尋成長' },
] as const

export type ServiceInterest = Exclude<(typeof serviceInterestOptions)[number]['value'], ''>

export function isServiceInterest(value: unknown): value is ServiceInterest {
  return serviceInterestOptions.some((option) => option.value !== '' && option.value === value)
}

export function getServiceInterestLabel(value: unknown): string {
  return serviceInterestOptions.find((option) => option.value === value)?.label ?? '未指定'
}
