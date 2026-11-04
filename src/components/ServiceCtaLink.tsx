'use client'

import Link from '@/lib/i18n/link'
import { unlocalizedPath } from '@/lib/i18n/config'
import { trackEvent } from '@/lib/analytics'
import { serviceInterestEvent } from '@/lib/contact-service'

interface ServiceCtaLinkProps {
  href: string
  placement: string
  action?: 'view_service' | 'request_demo'
  className?: string
  children: React.ReactNode
}

export function ServiceCtaLink({
  href,
  placement,
  action = 'request_demo',
  className,
  children,
}: ServiceCtaLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      data-cta-placement={placement}
      data-cta-action={action}
      onClick={(event) => {
        trackEvent('service_cta_click', {
          service: 'ai_voice',
          action,
          placement,
        })
        if (unlocalizedPath(href) === '/?service=ai_voice#contact' && !event.defaultPrevented &&
          !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey && event.button === 0) {
          window.dispatchEvent(new CustomEvent(serviceInterestEvent, { detail: 'ai_voice' }))
          const contact = document.querySelector('.falcon-home #contact')
          if (contact && unlocalizedPath(window.location.pathname) === '/') {
            // Next's automatic anchor scroll can skip a page with a tall sticky WebGL stage.
            event.preventDefault()
            window.history.pushState(null, '', event.currentTarget.href)
            contact.scrollIntoView({ behavior: 'instant', block: 'start' })
          }
        }
      }}
    >
      {children}
    </Link>
  )
}
