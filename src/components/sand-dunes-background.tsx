"use client"

import type { ReactNode } from 'react'

// Dark Sage Background Component
export function SandDunesBackground({ className, children }: { className?: string; children?: ReactNode }) {
  return (
    <div className={className} style={{
      background: 'linear-gradient(135deg, #2D3A2B 0%, #3D4D3B 25%, #4A5D48 50%, #3D4D3B 75%, #2D3A2B 100%)'
    }}>
      {/* Radial gradient overlays - sage green theme */}
      <div className="absolute inset-0 rounded-4xl" style={{
        background: `
          radial-gradient(ellipse at 30% 20%, rgba(181, 196, 179, 0.15) 0%, transparent 30%),
          radial-gradient(ellipse at 70% 80%, rgba(143, 163, 139, 0.25) 0%, transparent 30%),
          radial-gradient(ellipse at 20% 70%, rgba(107, 130, 104, 0.2) 0%, transparent 30%)
        `
      }} />

      {/* Animated dune layers with dark sage green colors */}
      <div className="absolute inset-0 rounded-4xl overflow-hidden">
        <div
          className="sand-float-1 absolute bottom-[-30%] left-[-10%] w-[190%] h-[60%] rounded-full"
          style={{
            background: 'linear-gradient(45deg, rgba(45, 58, 43, 0.7) 0%, rgba(74, 93, 72, 0.5) 100%)',
            filter: 'blur(20px)',
            boxShadow: '0 0 80px rgba(45, 58, 43, 0.3)'
          }}
        />
        <div
          className="sand-float-2 absolute bottom-[-25%] right-[-15%] w-[190%] h-[60%] rounded-full"
          style={{
            background: 'linear-gradient(-45deg, rgba(107, 130, 104, 0.4) 0%, rgba(90, 112, 87, 0.5) 100%)',
            filter: 'blur(20px)',
            boxShadow: '0 0 70px rgba(107, 130, 104, 0.2)'
          }}
        />
        <div
          className="sand-float-3 absolute bottom-[-35%] left-[20%] w-[190%] h-[60%] rounded-full"
          style={{
            background: 'linear-gradient(60deg, rgba(61, 77, 59, 0.5) 0%, rgba(74, 93, 72, 0.6) 100%)',
            filter: 'blur(20px)',
            boxShadow: '0 0 90px rgba(61, 77, 59, 0.25)'
          }}
        />
        <div
          className="sand-float-4 absolute top-[10%] left-[-20%] w-[140%] h-[40%] rounded-full"
          style={{
            background: 'linear-gradient(120deg, rgba(143, 163, 139, 0.2) 0%, rgba(181, 196, 179, 0.15) 100%)',
            filter: 'blur(20px)',
            boxShadow: '0 0 100px rgba(143, 163, 139, 0.1)'
          }}
        />
        <div
          className="sand-float-5 absolute top-[20%] right-[-25%] w-[100%] h-[35%] rounded-full"
          style={{
            background: 'linear-gradient(-60deg, rgba(90, 112, 87, 0.35) 0%, rgba(74, 93, 72, 0.25) 100%)',
            filter: 'blur(20px)',
            boxShadow: '0 0 75px rgba(90, 112, 87, 0.15)'
          }}
        />
      </div>

      {/* Children content - rendered above background layers */}
      {children && (
        <div className="relative z-10">
          {children}
        </div>
      )}
    </div>
  )
}
