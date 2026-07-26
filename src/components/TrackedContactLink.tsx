'use client'

import type { ContactChannel } from '@/lib/analytics'
import { trackContactClick } from '@/lib/analytics'

interface TrackedContactLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  channel: ContactChannel
  placement: string
}

export function TrackedContactLink({
  channel,
  placement,
  onClick,
  ...props
}: TrackedContactLinkProps) {
  return (
    <a
      {...props}
      onClick={(event) => {
        trackContactClick(channel, placement)
        onClick?.(event)
      }}
    />
  )
}
