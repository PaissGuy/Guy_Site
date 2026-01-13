'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Filter {
  name: string
  description: string
  className: string
}

const filters: Filter[] = [
  {
    name: 'Denoising',
    description: 'SBNUC algorithm for IR imaging',
    className: 'brightness-110 contrast-105',
  },
  {
    name: 'Edge Detection',
    description: 'Sobel filter for feature extraction',
    className: 'brightness-120 contrast-200 grayscale',
  },
  {
    name: 'Motion Correction',
    description: 'Optical flow stabilization',
    className: 'brightness-105 saturate-110',
  },
  {
    name: 'Image Stitching',
    description: 'Poisson reconstruction',
    className: 'brightness-105 contrast-110 saturate-120',
  },
]

interface ComputerVisionDemoProps {
  isActive?: boolean
}

export function ComputerVisionDemo({ isActive = true }: ComputerVisionDemoProps) {
  const [currentFilter, setCurrentFilter] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || !isActive) return

    const interval = setInterval(() => {
      setCurrentFilter((prev) => (prev + 1) % filters.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [mounted, isActive])

  return (
    <div className="h-full w-full flex items-center justify-center relative p-4">
      {/* Desktop: Side-by-side before/after */}
      <div className="hidden lg:grid lg:grid-cols-2 gap-6 w-full max-w-3xl">
        {/* Before (Original) */}
        <div className="flex flex-col gap-3">
          <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-900/50 border border-white/10">
            <img
              src="/images/drone.jpg"
              alt="Original"
              className="w-full h-full object-cover blur-sm grayscale opacity-70"
            />
          </div>
          <div className="text-center">
            <span className="text-sm font-medium text-gray-400">Original</span>
            <p className="text-xs text-gray-500 mt-1">Noisy, unprocessed input</p>
          </div>
        </div>

        {/* After (Processed) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentFilter}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-3"
          >
            <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-900/50 border border-purple-400/30 shadow-lg shadow-purple-500/10">
              <img
                src="/images/drone.jpg"
                alt="Processed"
                className={`w-full h-full object-cover transition-all duration-500 ${filters[currentFilter].className}`}
              />
              {/* Processing indicator */}
              <div className="absolute top-2 right-2 bg-green-500/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                <span className="text-xs font-medium text-white">Processing</span>
              </div>
            </div>
            <div className="text-center">
              <span className="text-sm font-medium text-white">{filters[currentFilter].name}</span>
              <p className="text-xs text-gray-400 mt-1">{filters[currentFilter].description}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Mobile: Stacked vertical */}
      <div className="lg:hidden flex flex-col gap-4 w-full max-w-sm">
        {/* Filter name at top */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentFilter}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <span className="text-base font-semibold text-white">{filters[currentFilter].name}</span>
            <p className="text-xs text-gray-400 mt-1">{filters[currentFilter].description}</p>
          </motion.div>
        </AnimatePresence>

        {/* Before */}
        <div className="flex flex-col gap-2">
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Before</span>
          <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-900/50 border border-white/10">
            <img
              src="/images/drone.jpg"
              alt="Original"
              className="w-full h-full object-cover blur-sm grayscale opacity-70"
            />
          </div>
        </div>

        {/* After */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentFilter}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-2"
          >
            <span className="text-xs font-medium text-purple-400 uppercase tracking-wide">After</span>
            <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-900/50 border border-purple-400/30">
              <img
                src="/images/drone.jpg"
                alt="Processed"
                className={`w-full h-full object-cover ${filters[currentFilter].className}`}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* FPS Badge - Desktop only */}
      <div className="hidden lg:block absolute bottom-4 right-4 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1.5 border border-white/20">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-xs font-semibold text-white">GPU: 60 FPS</span>
        </div>
      </div>

      {/* Algorithm count indicator - Mobile only */}
      <div className="lg:hidden absolute bottom-3 right-3 bg-white/10 backdrop-blur-sm rounded-full px-2.5 py-1 border border-white/20">
        <span className="text-xs font-medium text-white">
          {currentFilter + 1}/{filters.length}
        </span>
      </div>
    </div>
  )
}
