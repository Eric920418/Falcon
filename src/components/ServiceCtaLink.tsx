'use client'

import Link from 'next/link'
import { trackEvent } from '@/lib/analytics'

interface ServiceCtaLinkProps {
  href: string
  placement: string
  className?: string
  children: React.ReactNode
}

export function ServiceCtaLink({
  href,
  placement,
  className,
  children,
}: ServiceCtaLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => {
        trackEvent('service_cta_click', {
          service: 'ai_voice',
          placement,
        })
      }}
    >
      {children}
    </Link>
  )
}
