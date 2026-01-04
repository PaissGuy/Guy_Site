'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import { clsx } from 'clsx'
import { Link } from './link'
import { Logo } from './logo'
import { PlusGrid, PlusGridItem, PlusGridRow } from './plus-grid'
import { Container } from './container'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: 'https://www.linkedin.com/in/guy-paiss/', label: 'LINKEDIN', target: '_blank'},
  { href: '/contact', label: 'Contact' },
]

function isExternalLink(href: string) {
  return href.startsWith('http://') || href.startsWith('https://')
}

function DesktopNav({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  const textClass = variant === 'light'
    ? 'text-accent-100 hover:text-accent-50 hover:bg-accent-50/10'
    : 'text-accent-100 hover:text-accent-50 hover:bg-accent-50/10'

  useEffect(() => {
    setMounted(true)
  }, [])

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <nav className="relative hidden lg:flex">
      {links.map(({ href, label }) => {
        const active = mounted && !isExternalLink(href) && isActive(href)

        return (
          <PlusGridItem key={href} className="relative flex">
            {isExternalLink(href) ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={clsx(
                  'flex items-center px-4 py-3 text-xs font-semilight tracking-widest uppercase bg-blend-multiply data-hover:bg-black/2.5 transition-colors',
                  textClass
                )}
              >
                {label}
              </a>
            ) : (
              <Link
                href={href}
                className={clsx(
                  'flex items-center px-4 py-3 text-xs font-semilight tracking-widest uppercase bg-blend-multiply data-hover:bg-black/2.5 transition-colors',
                  active ? 'text-accent-300' : textClass
                )}
              >
                {label}
              </Link>
            )}
          </PlusGridItem>
        )
      })}
    </nav>
  )
}

function MobileNavButton() {
  return (
    <PlusGridItem className="relative flex lg:hidden">
      <DisclosureButton
        className="flex size-12 items-center justify-center self-center rounded-full data-hover:bg-black/5"
        aria-label="Open main menu"
      >
        <Bars3Icon className="size-6 text-gray-500" />
      </DisclosureButton>
    </PlusGridItem>
  )
}

function MobileNav() {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <DisclosurePanel className="lg:hidden bg-gray-900/95 backdrop-blur-sm">
      <div className="flex flex-col gap-6 py-4 px-6">
        {links.map(({ href, label }, linkIndex) => {
          const active = mounted && !isExternalLink(href) && isActive(href)

          return (
            <motion.div
              initial={{ opacity: 0, rotateX: -90 }}
              animate={{ opacity: 1, rotateX: 0 }}
              transition={{
                duration: 0.15,
                ease: 'easeInOut',
                rotateX: { duration: 0.3, delay: linkIndex * 0.1 },
              }}
              key={href}
            >
              {isExternalLink(href) ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semilight tracking-widest uppercase transition-colors text-accent-100 hover:text-accent-200"
                >
                  {label}
                </a>
              ) : (
                <Link
                  href={href}
                  className={clsx(
                    'text-xs font-semilight tracking-widest uppercase transition-colors hover:text-accent-200',
                    active ? 'text-accent-300' : 'text-accent-100'
                  )}
                >
                  {label}
                </Link>
              )}
            </motion.div>
          )
        })}
      </div>
      <div className="absolute left-1/2 w-screen -translate-x-1/2">
        <div className="absolute inset-x-0 top-0 border-t border-black/5" />
        <div className="absolute inset-x-0 top-2 border-t border-black/5" />
      </div>
    </DisclosurePanel>
  )
}

export function Navbar({
  banner,
  variant = 'light'
}: {
  banner?: React.ReactNode
  variant?: 'light' | 'dark'
}) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Disclosure
      as={motion.header}
      className="fixed inset-x-0 z-50"
      initial={false}
      animate={{
        top: mounted ? (isScrolled ? '0rem' : '3rem') : '3rem',
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <PlusGrid className="bg-white/95 backdrop-blur-sm">
        <PlusGridRow className="relative">
          <Container>
            <div className="flex justify-between">
              <div className="relative flex gap-6">
                <PlusGridItem className="py-3">
                  <Link href="/" title="Home">
                    <Logo className="h-9" variant={variant} />
                  </Link>
                </PlusGridItem>
                {banner && (
                  <div className="relative hidden items-center py-3 lg:flex">
                    {banner}
                  </div>
                )}
              </div>
              <DesktopNav variant={variant} />
              <MobileNavButton />
            </div>
          </Container>
        </PlusGridRow>
      </PlusGrid>
      <MobileNav />
    </Disclosure>
  )
}