'use client'

import { PhoneFrame } from './phone-frame'

interface RapidPrototypesDemoProps {
  isActive?: boolean
}

export function RapidPrototypesDemo({ isActive = true }: RapidPrototypesDemoProps) {
  return (
    <div className="h-full w-full flex items-center justify-center p-4">
      <div className="w-full max-w-xs">
        <PhoneFrame>
          <div className="absolute inset-0 overflow-hidden">
            {/* Live Prototype iframe with scaling */}
            <iframe
              src="https://v0-s4-global-blue-sizzle.vercel.app/"
              className="border-0"
              title="Live Prototype"
              style={{
                transform: 'scale(0.74)',
                transformOrigin: 'top left',
                width: '138%',
                height: '138%',
              }}
            />
          </div>
        </PhoneFrame>
      </div>
    </div>
  )
}
