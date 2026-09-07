'use client'

import type { ContactChannel } from '@/lib/analytics'
import { trackContactClick } from '@/lib/analytics'
import type { ServiceInterest } from '@/lib/contact-service'

interface TrackedContactLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  channel: ContactChannel
  placement: string
  service?: ServiceInterest
}

export function TrackedContactLink({
  channel,
  placement,
  service,
  onClick,
  ...props
}: TrackedContactLinkProps) {
  return (
    <a
      {...props}
      onClick={(event) => {
        trackContactClick(channel, placement, service)
        onClick?.(event)
      }}
    />
  )
}
