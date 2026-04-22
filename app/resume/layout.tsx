import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resume',
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  alternates: {},
}

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
