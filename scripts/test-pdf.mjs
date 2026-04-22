import { renderToFile, Font } from '@react-pdf/renderer'
import React from 'react'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

Font.register({
  family: 'NotoSansTC',
  fonts: [
    { src: resolve(root, 'public/fonts/NotoSansTC-Regular.woff'), fontWeight: 400 },
    { src: resolve(root, 'public/fonts/NotoSansTC-Bold.woff'), fontWeight: 700 },
  ],
})

const { Document, Page, Text, View, StyleSheet } = await import('@react-pdf/renderer')

const styles = StyleSheet.create({
  page: { fontFamily: 'NotoSansTC', padding: 40, fontSize: 12 },
  // 刻意不重複 fontFamily，測試繼承
  title: { fontSize: 20, fontWeight: 700, marginBottom: 8 },
  body: { marginTop: 4 },
})

const doc = React.createElement(
  Document,
  null,
  React.createElement(
    Page,
    { size: 'A4', style: styles.page },
    React.createElement(
      View,
      null,
      React.createElement(Text, { style: styles.title }, '中文字型測試'),
      React.createElement(Text, { style: styles.body }, '繁體中文 Traditional Chinese 测试 test 123'),
      React.createElement(Text, { style: styles.body }, '履歷版面的字型若正常，此行應顯示中文而非空方框。'),
    ),
  ),
)

const out = resolve(root, '/tmp/resume-font-test.pdf')
await renderToFile(doc, out)
console.log('PDF written to:', out)
