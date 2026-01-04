import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, message } = body

    // 驗證必填欄位
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: '請填寫所有必填欄位' },
        { status: 400 }
      )
    }

    // 驗證環境變數
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error('缺少 Gmail SMTP 設定')
      return NextResponse.json(
        { error: '郵件服務未正確設定，請聯繫管理員' },
        { status: 500 }
      )
    }

    // 建立 SMTP transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    // 郵件內容
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: '26416387.re@gmail.com',
      subject: `[網站聯絡表單] 來自 ${name} 的新訊息`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0891b2; border-bottom: 2px solid #0891b2; padding-bottom: 10px;">
            網站聯絡表單通知
          </h2>

          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>姓名：</strong> ${name}</p>
            <p><strong>Email：</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>公司：</strong> ${company || '未提供'}</p>
          </div>

          <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px;">
            <h3 style="margin-top: 0; color: #334155;">訊息內容：</h3>
            <p style="white-space: pre-wrap; color: #475569;">${message}</p>
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
      { message: '訊息已成功送出！' },
      { status: 200 }
    )
  } catch (error) {
    console.error('郵件發送失敗:', error)
    return NextResponse.json(
      { error: `郵件發送失敗: ${error instanceof Error ? error.message : '未知錯誤'}` },
      { status: 500 }
    )
  }
}
