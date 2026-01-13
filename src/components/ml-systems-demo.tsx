'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Brain, ArrowRight } from 'lucide-react'

interface Layer {
  id: string
  label: string
  description: string
  position: { x: number; y: number }
  connections: string[]
}

const layers: Layer[] = [
  {
    id: 'input',
    label: 'Input Layer',
    description: 'Text or image data ingestion',
    position: { x: 15, y: 50 },
    connections: ['embedding'],
  },
  {
    id: 'embedding',
    label: 'Embedding',
    description: 'Convert input to vector representations',
    position: { x: 35, y: 30 },
    connections: ['attention1'],
  },
  {
    id: 'attention1',
    label: 'Self-Attention',
    description: 'Multi-head attention mechanism',
    position: { x: 35, y: 70 },
    connections: ['encoder'],
  },
  {
    id: 'encoder',
    label: 'Transformer',
    description: 'Deep neural network layers',
    position: { x: 55, y: 50 },
    connections: ['decoder'],
  },
  {
    id: 'decoder',
    label: 'Decoder',
    description: 'Generate output sequence',
    position: { x: 75, y: 50 },
    connections: ['output'],
  },
  {
    id: 'output',
    label: 'Output',
    description: 'Final predictions',
    position: { x: 90, y: 50 },
    connections: [],
  },
]

interface MLSystemsDemoProps {
  isActive?: boolean
}

export function MLSystemsDemo({ isActive = true }: MLSystemsDemoProps) {
  const [activeLayer, setActiveLayer] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || !isActive) return

    const interval = setInterval(() => {
      setActiveLayer((prev) => {
        const next = (prev + 1) % (layers.length + 1)
        return next
      })
    }, 1500)

    return () => clearInterval(interval)
  }, [mounted, isActive])

  const isLayerActive = (index: number) => activeLayer === index
  const isLayerCompleted = (index: number) => activeLayer > index && activeLayer < layers.length

  return (
    <div className="h-full w-full relative flex items-center justify-center p-4">
      {/* Mobile: Vertical flow */}
      <div className="lg:hidden flex flex-col items-center gap-4 w-full max-w-sm">
        {layers.map((layer, index) => {
          const isActive = isLayerActive(index)
          const isCompleted = isLayerCompleted(index)

          return (
            <div key={layer.id} className="w-full">
              <motion.div
                animate={{
                  scale: isActive ? 1.05 : 1,
                  borderColor: isActive ? 'rgba(168, 85, 247, 0.6)' : 'rgba(255, 255, 255, 0.2)',
                }}
                transition={{ duration: 0.3 }}
                className={`
                  relative px-6 py-4 rounded-xl
                  bg-white/10 backdrop-blur-lg border
                  transition-all duration-300
                  ${isActive ? 'shadow-lg shadow-purple-500/20' : ''}
                `}
              >
                <div className="flex items-center gap-3">
                  <div className={`
                    w-10 h-10 rounded-lg flex items-center justify-center
                    transition-all duration-300
                    ${isActive ? 'bg-gradient-to-br from-blue-500 to-purple-600' : 'bg-gradient-to-br from-blue-400/50 to-purple-500/50'}
                  `}>
                    <Brain className="w-5 h-5 text-white" />
                    {isCompleted && (
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-medium text-white">{layer.label}</span>
                    <p className="text-xs text-gray-400 mt-0.5">{layer.description}</p>
                  </div>
                </div>

                {/* Pulsing indicator when active */}
                {isActive && (
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-purple-400/20 -z-10"
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.3, 0, 0.3],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                )}
              </motion.div>

              {/* Connection arrow */}
              {index < layers.length - 1 && (
                <div className="flex justify-center py-2">
                  <ArrowRight className="w-5 h-5 text-purple-400/40" />
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Desktop: Absolute positioned layout */}
      <div className="hidden lg:block absolute inset-0">
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {/* Connection lines */}
          {layers.map((layer) =>
            layer.connections.map((targetId) => {
              const target = layers.find((l) => l.id === targetId)
              if (!target) return null

              const sourceIndex = layers.findIndex((l) => l.id === layer.id)
              const targetIndex = layers.findIndex((l) => l.id === targetId)
              const isActive = activeLayer === sourceIndex || activeLayer === targetIndex
              const isCompleted = activeLayer > Math.max(sourceIndex, targetIndex)

              return (
                <motion.line
                  key={`${layer.id}-${targetId}`}
                  x1={`${layer.position.x}%`}
                  y1={`${layer.position.y}%`}
                  x2={`${target.position.x}%`}
                  y2={`${target.position.y}%`}
                  stroke={isCompleted ? 'rgba(34, 197, 94, 0.5)' : isActive ? 'rgba(168, 85, 247, 0.6)' : 'rgba(168, 85, 247, 0.3)'}
                  strokeWidth={isActive ? 2 : 1.5}
                  strokeDasharray="5,5"
                  strokeDashoffset={0}
                  animate={{
                    strokeDashoffset: isActive ? [0, -10] : 0,
                  }}
                  transition={{
                    duration: 1,
                    repeat: isActive ? Infinity : 0,
                    ease: 'linear',
                  }}
                />
              )
            })
          )}
        </svg>

        {/* Layer nodes */}
        {layers.map((layer, index) => {
          const isActive = isLayerActive(index)
          const isCompleted = isLayerCompleted(index)

          return (
            <div
              key={layer.id}
              className="absolute z-10"
              style={{
                left: `${layer.position.x}%`,
                top: `${layer.position.y}%`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <motion.div
                animate={{
                  scale: isActive ? 1.1 : 1,
                }}
                transition={{ duration: 0.3 }}
                className={`
                  relative px-5 py-3 rounded-xl
                  bg-white/10 backdrop-blur-lg border
                  transition-all duration-300
                  ${isActive ? 'border-purple-400/60 shadow-lg shadow-purple-500/20' : 'border-white/20'}
                `}
              >
                <div className="flex items-center gap-2">
                  <div className={`
                    w-8 h-8 rounded-lg flex items-center justify-center relative
                    transition-all duration-300
                    ${isActive ? 'bg-gradient-to-br from-blue-500 to-purple-600' : 'bg-gradient-to-br from-blue-400/50 to-purple-500/50'}
                  `}>
                    <Brain className="w-4 h-4 text-white" />

                    {/* Checkmark when completed */}
                    {isCompleted && (
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <span className="text-sm font-medium text-white whitespace-nowrap">{layer.label}</span>
                </div>

                {/* Tooltip on hover */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-48 p-2.5 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-20 pointer-events-none"
                    >
                      <p className="text-xs text-gray-300">{layer.description}</p>
                      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 border-l border-t border-gray-700 rotate-45" />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Pulsing ring when active */}
                {isActive && (
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-purple-400/20 -z-10"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0, 0.3],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                )}
              </motion.div>
            </div>
          )
        })}
      </div>

      {/* Model info badge */}
      <div className="absolute bottom-3 left-3 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1.5 border border-white/20">
        <div className="flex items-center gap-2">
          <Brain className="w-4 h-4 text-blue-400" />
          <span className="text-xs font-semibold text-white">Transformer (Encoder-Decoder)</span>
        </div>
      </div>

      {/* Framework badge */}
      <div className="absolute bottom-3 right-3 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 border border-white/20">
        <span className="text-xs font-medium text-white">PyTorch</span>
      </div>
    </div>
  )
}
