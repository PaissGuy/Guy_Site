"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Upload, Brain, Database, Share2 } from "lucide-react"

const steps = [
  { id: 'upload', label: 'Upload', icon: Upload, color: 'from-blue-400 to-blue-500' },
  { id: 'ai', label: 'AI Process', icon: Brain, color: 'from-purple-400 to-purple-500' },
  { id: 'store', label: 'Store', icon: Database, color: 'from-green-400 to-green-500' },
  { id: 'post', label: 'Post', icon: Share2, color: 'from-pink-400 to-pink-500' },
]

export function N8nAutoposterMiniDemo() {
  const [activeStep, setActiveStep] = useState(0)
  const [completedSteps, setCompletedSteps] = useState<number[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => {
        const next = (prev + 1) % (steps.length + 1)

        // Reset when we complete the cycle
        if (next === 0) {
          setCompletedSteps([])
        } else if (prev < steps.length) {
          setCompletedSteps((completed) => [...completed, prev])
        }

        return next
      })
    }, 1500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 relative overflow-hidden">
      <div className="relative w-full h-full p-6 flex items-center justify-center">
        {/* Workflow Steps */}
        <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isActive = activeStep === index
            const isCompleted = completedSteps.includes(index)
            const isPending = !isActive && !isCompleted

            return (
              <motion.div
                key={step.id}
                className="relative"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Node Container */}
                <div
                  className={`
                    relative rounded-xl p-4 transition-all duration-500
                    ${isActive ? 'bg-white shadow-lg ring-2 ring-purple-400/50' : ''}
                    ${isCompleted ? 'bg-white/80' : ''}
                    ${isPending ? 'bg-white/40' : ''}
                  `}
                >
                  {/* Icon with gradient background */}
                  <div className="flex flex-col items-center gap-2">
                    <div
                      className={`
                        relative w-10 h-10 rounded-lg bg-gradient-to-br ${step.color}
                        flex items-center justify-center
                        transition-all duration-500
                        ${isActive ? 'scale-110 shadow-md' : 'scale-100'}
                      `}
                    >
                      <Icon className="w-5 h-5 text-white" />

                      {/* Pulsing ring when active */}
                      {isActive && (
                        <motion.div
                          className={`absolute inset-0 rounded-lg bg-gradient-to-br ${step.color} opacity-30`}
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.3, 0, 0.3],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                      )}

                      {/* Checkmark when completed */}
                      <AnimatePresence>
                        {isCompleted && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center"
                          >
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <span
                      className={`
                        text-xs font-medium transition-colors duration-300
                        ${isActive ? 'text-gray-900' : ''}
                        ${isCompleted ? 'text-gray-600' : ''}
                        ${isPending ? 'text-gray-400' : ''}
                      `}
                    >
                      {step.label}
                    </span>
                  </div>
                </div>

                {/* Connection Lines */}
                {index < steps.length - 1 && (
                  <div className="absolute top-6 -right-2 w-4 h-0.5 bg-gray-200 z-0">
                    <motion.div
                      className="h-full bg-gradient-to-r from-purple-400 to-pink-400"
                      initial={{ scaleX: 0 }}
                      animate={{
                        scaleX: completedSteps.includes(index) ? 1 : 0
                      }}
                      transition={{ duration: 0.5 }}
                      style={{ transformOrigin: 'left' }}
                    />
                  </div>
                )}
                {index === 1 && (
                  <div className="absolute -bottom-2 left-6 w-0.5 h-4 bg-gray-200 z-0">
                    <motion.div
                      className="w-full bg-gradient-to-b from-purple-400 to-green-400"
                      initial={{ scaleY: 0 }}
                      animate={{
                        scaleY: completedSteps.includes(index) ? 1 : 0
                      }}
                      transition={{ duration: 0.5 }}
                      style={{ transformOrigin: 'top' }}
                    />
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Floating n8n Logo Badge */}
        <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg px-2.5 py-1.5 shadow-sm border border-gray-200/50">
          <div className="flex items-center gap-1.5">
            <div className="flex gap-0.5">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
              <div className="w-1.5 h-1.5 rounded-full bg-pink-500" />
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            </div>
            <span className="text-xs font-semibold text-gray-700">n8n</span>
          </div>
        </div>

        {/* Status Label */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-sm"
          >
            <span className="text-xs font-medium text-gray-700">
              {activeStep === steps.length ? '✓ Posted!' : activeStep === 0 ? 'Starting...' : `${steps[activeStep]?.label}...`}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
