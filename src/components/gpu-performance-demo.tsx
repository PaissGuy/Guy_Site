'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cpu, Zap } from 'lucide-react'

interface Algorithm {
  name: string
  description: string
  cpu: number  // milliseconds
  gpu: number  // milliseconds
  speedup: number
}

const algorithms: Algorithm[] = [
  {
    name: 'Image Stitching',
    description: 'Poisson reconstruction algorithm',
    cpu: 5000,
    gpu: 327,
    speedup: 15.3,
  },
  {
    name: 'Motion Correction',
    description: 'Homography estimation & warping',
    cpu: 3200,
    gpu: 185,
    speedup: 17.3,
  },
  {
    name: 'Denoising (SBNUC)',
    description: 'Scene-based non-uniformity correction',
    cpu: 1800,
    gpu: 95,
    speedup: 18.9,
  },
]

interface GPUPerformanceDemoProps {
  isActive?: boolean
}

export function GPUPerformanceDemo({ isActive = true }: GPUPerformanceDemoProps) {
  const [currentAlgo, setCurrentAlgo] = useState(0)
  const [cpuProgress, setCpuProgress] = useState(0)
  const [gpuProgress, setGpuProgress] = useState(0)
  const [showSpeedup, setShowSpeedup] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || !isActive) return

    const algo = algorithms[currentAlgo]

    // Reset for new algorithm
    setCpuProgress(0)
    setGpuProgress(0)
    setShowSpeedup(false)

    // Scaled animation times (shorter for demo purposes)
    const GPU_ANIM_TIME = 600  // 0.6s for GPU
    const CPU_ANIM_TIME = 3000 // 3s for CPU
    const PAUSE_TIME = 1200    // 1.2s pause to show results
    const CYCLE_TIME = GPU_ANIM_TIME + CPU_ANIM_TIME + PAUSE_TIME

    // Animate GPU bar (fast)
    const gpuInterval = setInterval(() => {
      setGpuProgress((prev) => {
        if (prev >= 100) return 100
        return Math.min(100, prev + (100 / (GPU_ANIM_TIME / 50)))
      })
    }, 50)

    // Animate CPU bar (slow, starts at same time)
    const cpuInterval = setInterval(() => {
      setCpuProgress((prev) => {
        if (prev >= 100) return 100
        return Math.min(100, prev + (100 / (CPU_ANIM_TIME / 50)))
      })
    }, 50)

    // Show speedup after GPU completes
    const speedupTimeout = setTimeout(() => {
      setShowSpeedup(true)
    }, GPU_ANIM_TIME + 200)

    // Cycle to next algorithm
    const cycleTimeout = setTimeout(() => {
      setCurrentAlgo((prev) => (prev + 1) % algorithms.length)
    }, CYCLE_TIME)

    return () => {
      clearInterval(gpuInterval)
      clearInterval(cpuInterval)
      clearTimeout(speedupTimeout)
      clearTimeout(cycleTimeout)
    }
  }, [currentAlgo, mounted, isActive])

  const algo = algorithms[currentAlgo]

  return (
    <div className="h-full w-full flex items-center justify-center p-4">
      <div className="flex flex-col items-center justify-center w-full max-w-2xl gap-8">
        {/* Algorithm name */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentAlgo}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <h3 className="text-lg lg:text-xl font-semibold text-white">{algo.name}</h3>
            <p className="text-sm text-gray-400 mt-1">{algo.description}</p>
          </motion.div>
        </AnimatePresence>

        {/* Performance bars */}
        <div className="w-full space-y-6">
          {/* CPU Bar */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <Cpu className="w-5 h-5 text-gray-400" />
                <span className="font-medium text-gray-300">CPU Processing</span>
              </div>
              <span className="text-gray-400 tabular-nums">{algo.cpu}ms</span>
            </div>
            <div className="relative h-10 bg-gray-800/50 rounded-lg overflow-hidden border border-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-gray-500 to-gray-600 flex items-center justify-end pr-3"
                initial={{ width: '0%' }}
                animate={{ width: `${cpuProgress}%` }}
                transition={{ duration: 0.05, ease: 'linear' }}
              >
                {cpuProgress > 10 && (
                  <span className="text-xs font-medium text-white">
                    {cpuProgress === 100 ? '✓' : `${Math.round(cpuProgress)}%`}
                  </span>
                )}
              </motion.div>
            </div>
          </div>

          {/* GPU Bar */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-blue-400" />
                <span className="font-medium text-white">GPU Processing (CUDA)</span>
              </div>
              <span className="text-blue-400 tabular-nums font-semibold">{algo.gpu}ms</span>
            </div>
            <div className="relative h-10 bg-gray-800/50 rounded-lg overflow-hidden border border-blue-400/30">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-end pr-3 shadow-lg shadow-blue-500/20"
                initial={{ width: '0%' }}
                animate={{ width: `${gpuProgress}%` }}
                transition={{ duration: 0.05, ease: 'linear' }}
              >
                {gpuProgress > 10 && (
                  <span className="text-xs font-medium text-white">
                    {gpuProgress === 100 ? '✓' : `${Math.round(gpuProgress)}%`}
                  </span>
                )}
              </motion.div>
              {/* Glow effect when running */}
              {gpuProgress > 0 && gpuProgress < 100 && (
                <motion.div
                  className="absolute inset-0 bg-blue-400/20"
                  animate={{
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              )}
            </div>
          </div>
        </div>

        {/* Speedup badge */}
        <AnimatePresence>
          {showSpeedup && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-3 rounded-full shadow-lg shadow-green-500/30"
            >
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-white" />
                <span className="text-xl font-bold text-white tabular-nums">
                  {algo.speedup}× faster
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Technology badges */}
        <div className="flex flex-wrap gap-2 justify-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-full px-3 py-1 border border-white/10">
            <span className="text-xs font-medium text-gray-300">CUDA</span>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-full px-3 py-1 border border-white/10">
            <span className="text-xs font-medium text-gray-300">Cupy</span>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-full px-3 py-1 border border-white/10">
            <span className="text-xs font-medium text-gray-300">GPU Acceleration</span>
          </div>
        </div>
      </div>
    </div>
  )
}
