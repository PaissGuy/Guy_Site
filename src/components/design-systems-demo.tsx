'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Figma, Code, BookOpen, Workflow } from 'lucide-react'

interface Node {
  id: string
  label: string
  icon: React.ComponentType<{ className?: string }>
  position: { x: number; y: number }
  tooltip: string
  connections: string[]
}

const nodes: Node[] = [
  {
    id: 'figma',
    label: 'Figma',
    icon: Figma,
    position: { x: 50, y: 15 },
    tooltip: 'Source of truth for design tokens, components, and styles',
    connections: ['claude'],
  },
  {
    id: 'claude',
    label: 'Claude Code',
    icon: Code,
    position: { x: 50, y: 50 },
    tooltip: 'Generates and syncs components based on design specs via Figma MCP',
    connections: ['figma', 'storybook', 'components'],
  },
  {
    id: 'storybook',
    label: 'Storybook',
    icon: BookOpen,
    position: { x: 25, y: 75 },
    tooltip: 'Living documentation and component validation',
    connections: ['claude'],
  },
  {
    id: 'components',
    label: 'Components',
    icon: Code,
    position: { x: 75, y: 75 },
    tooltip: 'Production-ready React components synced with design system',
    connections: ['claude'],
  },
]

interface DesignSystemsDemoProps {
  isActive?: boolean
}

export function DesignSystemsDemo({ isActive = true }: DesignSystemsDemoProps) {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)

  return (
    <div className="h-full w-full relative flex items-center justify-center p-4">
      {/* Mobile: Simple vertical flow */}
      <div className="lg:hidden flex flex-col items-center gap-4 w-full max-w-sm">
        {nodes.map((node, index) => {
          const Icon = node.icon
          const isHovered = hoveredNode === node.id

          return (
            <div key={node.id} className="w-full">
              <motion.div
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                whileTap={{ scale: 0.98 }}
                className={`
                  relative px-6 py-4 rounded-xl
                  bg-white/10 backdrop-blur-lg border
                  transition-all duration-300
                  ${
                    isHovered
                      ? 'border-purple-400/60 shadow-lg shadow-purple-500/20'
                      : 'border-white/20'
                  }
                `}
              >
                <div className="space-y-3">
                  {/* Visual graphic for each node */}
                  {node.id === 'figma' && (
                    <div className="flex gap-1.5 mb-2">
                      <div className="w-8 h-8 rounded bg-gradient-to-br from-purple-500 to-pink-500 opacity-80" />
                      <div className="w-8 h-8 rounded bg-gradient-to-br from-blue-500 to-purple-500 opacity-80" />
                      <div className="w-8 h-8 rounded bg-gradient-to-br from-pink-500 to-orange-500 opacity-80" />
                    </div>
                  )}
                  {node.id === 'claude' && (
                    <div className="flex gap-1 mb-2">
                      <div className="flex-1 h-2 rounded-full bg-purple-400/40" />
                      <div className="flex-1 h-2 rounded-full bg-purple-400/60" />
                      <div className="flex-1 h-2 rounded-full bg-purple-400/80" />
                      <div className="flex-1 h-2 rounded-full bg-purple-400" />
                    </div>
                  )}
                  {node.id === 'storybook' && (
                    <div className="grid grid-cols-2 gap-1.5 w-20 mb-2">
                      <div className="h-6 rounded bg-pink-500/30 border border-pink-500/50" />
                      <div className="h-6 rounded bg-blue-500/30 border border-blue-500/50" />
                      <div className="h-6 rounded bg-green-500/30 border border-green-500/50" />
                      <div className="h-6 rounded bg-purple-500/30 border border-purple-500/50" />
                    </div>
                  )}
                  {node.id === 'components' && (
                    <div className="space-y-1 mb-2">
                      <div className="h-1.5 w-16 rounded-full bg-blue-400/60" />
                      <div className="h-1.5 w-20 rounded-full bg-green-400/60" />
                      <div className="h-1.5 w-12 rounded-full bg-purple-400/60" />
                    </div>
                  )}

                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-purple-400" />
                    <div>
                      <span className="text-sm font-medium text-white">{node.label}</span>
                      <p className="text-xs text-gray-400 mt-1">{node.tooltip}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Connection arrow (except for last item) */}
              {index < nodes.length - 1 && (
                <div className="flex justify-center py-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5v14m0 0l-4-4m4 4l4-4" stroke="rgba(168, 85, 247, 0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Desktop: Original absolute positioned layout */}
      <div className="hidden lg:block absolute inset-0">
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {/* Connection lines - always animated */}
          {nodes.map((node) =>
            node.connections.map((targetId) => {
              const target = nodes.find((n) => n.id === targetId)
              if (!target) return null

              return (
                <motion.line
                  key={`${node.id}-${targetId}`}
                  x1={`${node.position.x}%`}
                  y1={`${node.position.y}%`}
                  x2={`${target.position.x}%`}
                  y2={`${target.position.y}%`}
                  stroke="rgba(168, 85, 247, 0.4)"
                  strokeWidth={1.5}
                  strokeDasharray="5,5"
                  strokeDashoffset={0}
                  animate={{
                    strokeDashoffset: [0, -10],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              )
            })
          )}
        </svg>

        {/* Nodes */}
        {nodes.map((node) => {
          const Icon = node.icon
          const isHovered = hoveredNode === node.id

          return (
            <div
              key={node.id}
              className="absolute z-10"
              style={{
                left: `${node.position.x}%`,
                top: `${node.position.y}%`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <motion.div
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                whileHover={{ scale: 1.05 }}
                style={{ transformOrigin: 'center center' }}
                className={`
                  relative px-6 py-4 rounded-xl
                  bg-white/10 backdrop-blur-lg border
                  transition-all duration-300
                  ${
                    isHovered
                      ? 'border-purple-400/60 shadow-lg shadow-purple-500/20'
                      : 'border-white/20'
                  }
                `}
              >
                <div className="space-y-3">
                  {/* Visual graphic for each node */}
                  {node.id === 'figma' && (
                    <div className="flex gap-1.5 mb-2">
                      <div className="w-8 h-8 rounded bg-gradient-to-br from-purple-500 to-pink-500 opacity-80" />
                      <div className="w-8 h-8 rounded bg-gradient-to-br from-blue-500 to-purple-500 opacity-80" />
                      <div className="w-8 h-8 rounded bg-gradient-to-br from-pink-500 to-orange-500 opacity-80" />
                    </div>
                  )}
                  {node.id === 'claude' && (
                    <div className="flex gap-1 mb-2">
                      <div className="flex-1 h-2 rounded-full bg-purple-400/40" />
                      <div className="flex-1 h-2 rounded-full bg-purple-400/60" />
                      <div className="flex-1 h-2 rounded-full bg-purple-400/80" />
                      <div className="flex-1 h-2 rounded-full bg-purple-400" />
                    </div>
                  )}
                  {node.id === 'storybook' && (
                    <div className="grid grid-cols-2 gap-1.5 w-20 mb-2">
                      <div className="h-6 rounded bg-pink-500/30 border border-pink-500/50" />
                      <div className="h-6 rounded bg-blue-500/30 border border-blue-500/50" />
                      <div className="h-6 rounded bg-green-500/30 border border-green-500/50" />
                      <div className="h-6 rounded bg-purple-500/30 border border-purple-500/50" />
                    </div>
                  )}
                  {node.id === 'components' && (
                    <div className="space-y-1 mb-2">
                      <div className="h-1.5 w-16 rounded-full bg-blue-400/60" />
                      <div className="h-1.5 w-20 rounded-full bg-green-400/60" />
                      <div className="h-1.5 w-12 rounded-full bg-purple-400/60" />
                    </div>
                  )}

                  <div className="flex items-center gap-3">
                    <Icon className={`w-5 h-5 ${isHovered ? 'text-purple-400' : 'text-white'}`} />
                    <span className="text-sm font-medium text-white whitespace-nowrap">{node.label}</span>
                  </div>
                </div>

                {/* Tooltip on hover */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-64 p-3 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-20 pointer-events-none"
                    >
                      <p className="text-xs text-gray-300">{node.tooltip}</p>
                      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 border-l border-t border-gray-700 rotate-45" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
