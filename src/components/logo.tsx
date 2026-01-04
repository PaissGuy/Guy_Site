'use client'

import { clsx } from 'clsx'
import { motion } from 'framer-motion'

export function Logo({ className, variant = 'light' }: {
  className?: string
  variant?: 'light' | 'dark'
}) {
  const gradientClass = variant === 'light'
    ? 'logo-light-gradient'
    : 'logo-light-gradient'

  return (
    <div className={clsx(className, 'flex items-center gap-3')}>
      <div className="flex items-stretch gap-0 lg:gap-2">
        <div className={clsx(
          'text-2xl font-light font-megrim tracking-normal lg:tracking-wide hero-text-gradient mr-[-8px] lg:mr-0',
          gradientClass
        )}>
          Guy Paiss
        </div>

        <div className="self-stretch border-r border-white/80" />
      </div>

      <div className={clsx(
        'text-xs font-semilight tracking-widest uppercase hero-text-gradient',
        gradientClass
      )}>
        Software Developer
      </div>  

                    {/* Badges 
                    <div className="hidden items-center gap-2 lg:flex">
      
       <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium text-blue-950 ring-1 ring-inset ring-blue-950/30 bg-blend-multiply bg-gradient-to-r from-blue-100/30 to-indigo-100/30">
          AI-Powered Engineer
        </div>
        <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium text-zinc-950 ring-1 ring-inset ring-zinc-900/30 bg-blend-multiply bg-gradient-to-r from-zinc-100/30 to-slate-100/30">
          Product Designer
        </div>
      </div>*/}
    </div>
  )
}