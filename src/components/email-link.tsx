'use client'

import { Mail, ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function EmailLink() {
  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const user = 'Paissguy'
    const domain = 'gmail.com'
    window.location.href = `mailto:${user}@${domain}`
  }

  return (
    <Button asChild size="lg" className="w-full justify-start">
      <a
        href="#"
        onClick={handleEmailClick}
        className="flex items-center gap-3"
      >
        <Mail className="w-5 h-5" />
        <span>
          Paissguy<span style={{display: 'none'}}>nospam</span>@<span style={{display: 'none'}}>nospam</span>gmail.com
        </span>
        <ArrowUpRight className="w-4 h-4 ml-auto" />
      </a>
    </Button>
  )
}