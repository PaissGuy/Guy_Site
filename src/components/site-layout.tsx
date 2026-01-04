import { Navbar } from './navbar'
import { Footer } from './footer'

export function SiteLayout({
  children,
  variant = 'light',
  className = ''
}: {
  children: React.ReactNode
  variant?: 'light' | 'dark'
  className?: string
}) {
  return (
    <div className={className}>
      <Navbar variant={variant} />
      <main className="pt-24">{children}</main>
      <Footer />
    </div>
  )
}
