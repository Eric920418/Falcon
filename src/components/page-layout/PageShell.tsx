import { SitePageHeader } from './SitePageHeader'
import { SitePageFooter } from './SitePageFooter'

interface PageShellProps {
  children: React.ReactNode
}

export function PageShell({ children }: PageShellProps) {
  return (
    <div className="falcon-site bg-[var(--site-bg)] text-[var(--site-text)] min-h-screen flex flex-col">
      <SitePageHeader />
      <main className="flex-1">{children}</main>
      <SitePageFooter />
    </div>
  )
}
