import { SitePageHeader } from './SitePageHeader'
import { SitePageFooter } from './SitePageFooter'

interface PageShellProps {
  children: React.ReactNode
}

export function PageShell({ children }: PageShellProps) {
  return (
    <div className="bg-stone-950 text-stone-100 min-h-screen flex flex-col">
      <SitePageHeader />
      <main className="flex-1">{children}</main>
      <SitePageFooter />
    </div>
  )
}
