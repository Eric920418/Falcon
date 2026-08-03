import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { siteConfig } from '@/lib/seo/site-config'
import { getServiceInterestLabel, isServiceInterest } from '@/lib/contact-service'

function escapeHtml(value: unknown): string {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, message, serviceInterest } = body

    // 驗證必填欄位
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: '請填寫姓名、Email 與訊息內容。', code: 'REQUIRED_FIELDS_MISSING' },
        { status: 400 }
      )
    }

    if (serviceInterest && !isServiceInterest(serviceInterest)) {
      return NextResponse.json(
        { error: '服務類別格式不正確，請重新選擇後再送出。', code: 'INVALID_SERVICE_INTEREST' },
        { status: 400 }
      )
    }

    // 驗證環境變數（廠商中立：Zoho / 任何 SMTP 供應商皆適用）
    if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.error('缺少 SMTP 設定：請設定 SMTP_USER 與 SMTP_PASSWORD')
      return NextResponse.json(
        {
          error: '郵件服務未正確設定（缺少 SMTP_USER / SMTP_PASSWORD），請改用電話、Email 或 LINE 聯繫。',
          code: 'SMTP_NOT_CONFIGURED',
        },
        { status: 500 }
      )
    }

    // 建立 SMTP transporter（預設 Zoho；host/port 可由環境變數覆寫）
    const smtpPort = Number(process.env.SMTP_PORT) || 465
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.zoho.com',
      port: smtpPort,
      secure: smtpPort === 465, // 465 用 SSL，587 用 STARTTLS
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    // 郵件內容
    // from 必須是已驗證的寄件信箱（Zoho 會拒絕非本帳號的 from）
    // to 取自 siteConfig 公司信箱，單一來源、避免硬編碼漂移
    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safeCompany = escapeHtml(company || '未提供')
    const safeServiceInterest = escapeHtml(getServiceInterestLabel(serviceInterest))
    const safeMessage = escapeHtml(message)
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_RECIPIENT || siteConfig.email,
      subject: `[網站聯絡表單][${getServiceInterestLabel(serviceInterest)}] 來自 ${String(name).replace(/[\r\n]/g, ' ')} 的新訊息`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0891b2; border-bottom: 2px solid #0891b2; padding-bottom: 10px;">
            網站聯絡表單通知
          </h2>

          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>姓名：</strong> ${safeName}</p>
            <p><strong>Email：</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
            <p><strong>公司：</strong> ${safeCompany}</p>
            <p><strong>服務需求：</strong> ${safeServiceInterest}</p>
          </div>

          <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px;">
            <h3 style="margin-top: 0; color: #334155;">訊息內容：</h3>
            <p style="white-space: pre-wrap; color: #475569;">${safeMessage}</p>
          </div>

          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e2e8f0;">
          <p style="color: #94a3b8; font-size: 12px;">
            此郵件由網站聯絡表單自動發送
          </p>
        </div>
      `,
      replyTo: email,
    }

    // 發送郵件
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: '訊息已成功送出！', code: 'CONTACT_SENT' },
      { status: 200 }
    )
  } catch (error) {
    console.error('郵件發送失敗:', error)
    return NextResponse.json(
      {
        error: `郵件發送失敗：${error instanceof Error ? error.message : '未知錯誤'}`,
        code: 'SMTP_SEND_FAILED',
      },
      { status: 500 }
    )
  }
}
