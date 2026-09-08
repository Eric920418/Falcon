import type { Locale } from './config'
import type { Messages } from './translate'
// Reviewed interaction labels override machine drafts; imperative buttons must remain actions.
const labels: Record<Exclude<Locale, 'zh-tw'>, [string, string, string, string]> = {
  en: ['Send message', 'Submission failed [', 'Request submitted. We will contact you to confirm next steps; an appointment time has not yet been confirmed.', 'Select a service (optional)'],
  ja: ['メッセージを送信', '送信失敗 [', 'お問い合わせを受け付けました。今後の進め方についてご連絡します。予約日時はまだ確定していません。', 'サービスを選択（任意）'],
  ko: ['문의 보내기', '전송 실패 [', '문의가 접수되었습니다. 다음 단계를 확인하기 위해 연락드리겠습니다. 예약 시간은 아직 확정되지 않았습니다.', '서비스 선택 (선택 사항)'],
  'zh-hans': ['发送消息', '提交失败 [', '需求已提交，我们将联系确认后续安排。这不表示预约时间已确定。', '请选择服务（选填）'],
  es: ['Enviar mensaje', 'Error de envío [', 'Solicitud enviada. Te contactaremos para confirmar los próximos pasos; todavía no se ha confirmado una cita.', 'Selecciona un servicio (opcional)'],
  fr: ['Envoyer le message', 'Échec de l’envoi [', 'Demande envoyée. Nous vous contacterons pour confirmer la suite ; aucun rendez-vous n’est encore confirmé.', 'Choisir un service (facultatif)'],
  de: ['Nachricht senden', 'Senden fehlgeschlagen [', 'Anfrage gesendet. Wir melden uns zur Abstimmung der nächsten Schritte; ein Termin ist noch nicht bestätigt.', 'Dienstleistung auswählen (optional)'],
  pt: ['Enviar mensagem', 'Falha no envio [', 'Solicitação enviada. Entraremos em contato para confirmar os próximos passos; o horário da reunião ainda não foi confirmado.', 'Selecione um serviço (opcional)'],
}
export const overrides: Partial<Record<Locale, Messages>> = Object.fromEntries(Object.entries(labels).map(([locale, row]) => [locale, {
  '送出訊息': row[0],
  '送出失敗 [': row[1],
  '需求已送出，後續聯絡確認。這不代表預約時間已確定。': row[2],
  '請選擇服務（選填）': row[3],
}]))

const navigation: Record<Exclude<Locale, 'zh-tw'>, [string, string, string, string, string, string]> = {
  en: ['Web & AI', 'Cases', 'Pricing', 'About', 'Contact', 'Get in touch'],
  ja: ['Web・AI開発', '事例', '料金', '会社紹介', 'お問い合わせ', '相談する'],
  ko: ['웹·AI 개발', '사례', '가격', '소개', '문의', '상담하기'],
  'zh-hans': ['网站与 AI 开发', '案例', '价格', '关于', '联系', '立即咨询'],
  es: ['Web e IA', 'Proyectos', 'Precios', 'Nosotros', 'Contacto', 'Consultar'],
  fr: ['Web et IA', 'Projets', 'Tarifs', 'À propos', 'Contact', 'Nous contacter'],
  de: ['Web & KI', 'Projekte', 'Preise', 'Über uns', 'Kontakt', 'Anfragen'],
  pt: ['Web e IA', 'Projetos', 'Preços', 'Sobre', 'Contato', 'Fale conosco'],
}
for (const [locale, row] of Object.entries(navigation)) {
  Object.assign(overrides[locale as Locale]!, Object.fromEntries(['網站與 AI 開發', '案例', '價格', '關於', '聯絡', '立即諮詢'].map((key, index) => [key, row[index]])))
}
