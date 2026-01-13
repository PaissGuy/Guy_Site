'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Workflow, Zap, Database, Brain } from 'lucide-react'

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
    id: 'n8n',
    label: 'n8n',
    icon: Workflow,
    position: { x: 50, y: 50 },
    tooltip: 'Central workflow automation orchestrator connecting all tools',
    connections: ['zapier', 'airtable', 'mindpal'],
  },
  {
    id: 'zapier',
    label: 'Zapier',
    icon: Zap,
    position: { x: 20, y: 20 },
    tooltip: 'Trigger automations and connect to 5000+ apps',
    connections: ['n8n'],
  },
  {
    id: 'airtable',
    label: 'Airtable',
    icon: Database,
    position: { x: 80, y: 20 },
    tooltip: 'Flexible database for storing and managing workflow data',
    connections: ['n8n'],
  },
  {
    id: 'mindpal',
    label: 'Mindpal',
    icon: Brain,
    position: { x: 50, y: 80 },
    tooltip: 'AI-powered knowledge assistant for intelligent automation',
    connections: ['n8n'],
  },
]

interface AIAgentsDemoProps {
  isActive?: boolean
}

export function AIAgentsDemo({ isActive = true }: AIAgentsDemoProps) {
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
                  {node.id === 'n8n' && (
                    <div className="flex flex-col gap-1.5 mb-2">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-purple-500" />
                        <div className="w-3 h-3 rounded-full bg-pink-500" />
                        <div className="w-3 h-3 rounded-full bg-blue-500" />
                      </div>
                      <div className="flex gap-0.5">
                        <div className="flex-1 h-1 bg-purple-400/60" />
                        <div className="flex-1 h-1 bg-pink-400/60" />
                        <div className="flex-1 h-1 bg-blue-400/60" />
                      </div>
                    </div>
                  )}
                  {node.id === 'zapier' && (
                    <div className="relative w-12 h-12 mb-2">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 opacity-20 rounded" />
                      <div className="absolute top-1 left-3 w-6 h-10">
                        <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[16px] border-t-orange-500/80" />
                        <div className="ml-3 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[16px] border-t-orange-500/80" />
                      </div>
                    </div>
                  )}
                  {node.id === 'airtable' && (
                    <div className="space-y-1 mb-2">
                      <div className="h-2 w-20 rounded bg-gradient-to-r from-red-400 to-orange-400 opacity-70" />
                      <div className="h-2 w-20 rounded bg-gradient-to-r from-yellow-400 to-green-400 opacity-70" />
                      <div className="h-2 w-20 rounded bg-gradient-to-r from-blue-400 to-purple-400 opacity-70" />
                    </div>
                  )}
                  {node.id === 'mindpal' && (
                    <div className="flex gap-2 mb-2">
                      <div className="flex flex-col gap-1">
                        <div className="w-2 h-2 rounded-full bg-blue-400/60" />
                        <div className="w-2 h-2 rounded-full bg-purple-400/60" />
                        <div className="w-2 h-2 rounded-full bg-pink-400/60" />
                      </div>
                      <div className="flex flex-col gap-0.5 justify-center">
                        <div className="w-8 h-0.5 rounded-full bg-gradient-to-r from-blue-400/40 to-purple-400/60" />
                        <div className="w-8 h-0.5 rounded-full bg-gradient-to-r from-purple-400/40 to-pink-400/60" />
                        <div className="w-8 h-0.5 rounded-full bg-gradient-to-r from-pink-400/40 to-blue-400/60" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="w-2 h-2 rounded-full bg-purple-400/60" />
                        <div className="w-2 h-2 rounded-full bg-pink-400/60" />
                        <div className="w-2 h-2 rounded-full bg-blue-400/60" />
                      </div>
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
                  {node.id === 'n8n' && (
                    <div className="flex flex-col gap-1.5 mb-2">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-purple-500" />
                        <div className="w-3 h-3 rounded-full bg-pink-500" />
                        <div className="w-3 h-3 rounded-full bg-blue-500" />
                      </div>
                      <div className="flex gap-0.5">
                        <div className="flex-1 h-1 bg-purple-400/60" />
                        <div className="flex-1 h-1 bg-pink-400/60" />
                        <div className="flex-1 h-1 bg-blue-400/60" />
                      </div>
                    </div>
                  )}
                  {node.id === 'zapier' && (
                    <div className="relative w-12 h-12 mb-2">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 opacity-20 rounded" />
                      <div className="absolute top-1 left-3 w-6 h-10">
                        <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[16px] border-t-orange-500/80" />
                        <div className="ml-3 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[16px] border-t-orange-500/80" />
                      </div>
                    </div>
                  )}
                  {node.id === 'airtable' && (
                    <div className="space-y-1 mb-2">
                      <div className="h-2 w-20 rounded bg-gradient-to-r from-red-400 to-orange-400 opacity-70" />
                      <div className="h-2 w-20 rounded bg-gradient-to-r from-yellow-400 to-green-400 opacity-70" />
                      <div className="h-2 w-20 rounded bg-gradient-to-r from-blue-400 to-purple-400 opacity-70" />
                    </div>
                  )}
                  {node.id === 'mindpal' && (
                    <div className="flex gap-2 mb-2">
                      <div className="flex flex-col gap-1">
                        <div className="w-2 h-2 rounded-full bg-blue-400/60" />
                        <div className="w-2 h-2 rounded-full bg-purple-400/60" />
                        <div className="w-2 h-2 rounded-full bg-pink-400/60" />
                      </div>
                      <div className="flex flex-col gap-0.5 justify-center">
                        <div className="w-8 h-0.5 rounded-full bg-gradient-to-r from-blue-400/40 to-purple-400/60" />
                        <div className="w-8 h-0.5 rounded-full bg-gradient-to-r from-purple-400/40 to-pink-400/60" />
                        <div className="w-8 h-0.5 rounded-full bg-gradient-to-r from-pink-400/40 to-blue-400/60" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="w-2 h-2 rounded-full bg-purple-400/60" />
                        <div className="w-2 h-2 rounded-full bg-pink-400/60" />
                        <div className="w-2 h-2 rounded-full bg-blue-400/60" />
                      </div>
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
