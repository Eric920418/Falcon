import SiteRoot, { baseMetadata } from '@/components/SiteRoot'
export const metadata = baseMetadata
export default function ToolsLayout({ children }: { children: React.ReactNode }) {
  return <SiteRoot>{children}</SiteRoot>
}
