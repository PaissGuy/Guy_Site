'use client'

import { Fragment, useState, useRef, useEffect } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { useDebouncedCallback } from 'use-debounce'
import { clsx } from 'clsx'
import { Sparkles, Workflow, Zap, Eye, Brain } from 'lucide-react'
import { ComputerVisionDemo } from './computer-vision-demo'
import { MLSystemsDemo } from './ml-systems-demo'
import { GPUPerformanceDemo } from './gpu-performance-demo'
import { RagChatDemo } from './rag-chat-demo'
import { AIAgentsDemo } from './ai-agents-demo'

interface Capability {
  name: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  demo: React.ComponentType<{ isActive?: boolean }>
}

const capabilities: Capability[] = [
  {
    name: 'Computer Vision & Image Processing',
    description: 'Real-time algorithms for denoising, motion correction, and image enhancement',
    icon: Eye,
    demo: ComputerVisionDemo,
  },
  {
    name: 'Machine Learning & AI Systems',
    description: 'Transformer models and deep learning pipelines for complex AI tasks',
    icon: Brain,
    demo: MLSystemsDemo,
  },
  {
    name: 'GPU-Accelerated Processing',
    description: 'CUDA-optimized algorithms achieving 15x+ performance improvements',
    icon: Zap,
    demo: GPUPerformanceDemo,
  },
  {
    name: 'AI-Powered Assistants',
    description: 'RAG-powered search with source citations and knowledge retrieval',
    icon: Sparkles,
    demo: RagChatDemo,
  },
  {
    name: 'AI Agents Integration',
    description: 'Workflow automation orchestrating AI tools and integrations',
    icon: Workflow,
    demo: AIAgentsDemo,
  },
]

function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>()
  useEffect(() => {
    ref.current = value
  }, [value])
  return ref.current
}

export function CapabilitiesShowcase() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [changeCount, setChangeCount] = useState(0)
  const [mounted, setMounted] = useState(false)
  const prevIndex = usePrevious(selectedIndex)
  const isForwards = prevIndex === undefined ? true : selectedIndex > prevIndex

  useEffect(() => {
    setMounted(true)
  }, [])

  const onChange = useDebouncedCallback(
    (newIndex: number) => {
      setSelectedIndex(newIndex)
      setChangeCount((count) => count + 1)
    },
    100,
    { leading: true }
  )

  return (
    <>
      {/* Mobile: Horizontal Tab Navigation */}
      <div className="lg:hidden">
        <TabGroup selectedIndex={selectedIndex} onChange={onChange}>
          {/* Tab Buttons */}
          <TabList className="flex gap-2 px-4 py-2 mb-8 overflow-x-auto">
            {capabilities.map((capability) => (
              <Tab
                key={capability.name}
                className={({ selected }) =>
                  clsx(
                    'flex-shrink-0 px-4 py-3 rounded-lg text-sm font-medium transition-all',
                    'focus:outline-none',
                    selected
                      ? 'bg-gray-800 text-white ring-2 ring-white/20'
                      : 'bg-gray-900/50 text-gray-400 hover:text-gray-300'
                  )
                }
              >
                {capability.name === 'Computer Vision & Image Processing' && 'Computer Vision'}
                {capability.name === 'Machine Learning & AI Systems' && 'ML Systems'}
                {capability.name === 'GPU-Accelerated Processing' && 'GPU Performance'}
                {capability.name === 'AI-Powered Assistants' && 'AI Assistants'}
                {capability.name === 'AI Agents Integration' && 'AI Agents'}
              </Tab>
            ))}
          </TabList>

          {/* Selected Capability Description */}
          <div className="px-4 mb-6">
            <AnimatePresence mode="wait">
              {capabilities.map((capability, index) =>
                selectedIndex === index ? (
                  <motion.div
                    key={capability.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-start gap-3"
                  >
                    <capability.icon className="w-6 h-6 text-accent-200 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {capability.name}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {capability.description}
                      </p>
                    </div>
                  </motion.div>
                ) : null
              )}
            </AnimatePresence>
          </div>

          {/* Tab Panels */}
          <TabPanels>
            <AnimatePresence mode="wait" custom={{ isForwards: mounted ? isForwards : true, changeCount }}>
              {capabilities.map((capability, index) =>
                selectedIndex === index ? (
                  <TabPanel
                    static
                    key={capability.name + changeCount}
                    as={motion.div}
                    initial={{ opacity: 0, x: isForwards ? 20 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: isForwards ? -20 : 20 }}
                    transition={{ duration: 0.35 }}
                    className="min-h-[400px]"
                  >
                    <capability.demo isActive={selectedIndex === index} />
                  </TabPanel>
                ) : null
              )}
            </AnimatePresence>
          </TabPanels>
        </TabGroup>
      </div>

      {/* Desktop: Interactive Tabs */}
      <TabGroup
        selectedIndex={selectedIndex}
        onChange={onChange}
        vertical
        className="hidden lg:grid grid-cols-12 gap-8 lg:gap-16"
      >
        {/* Left side: Capability list */}
        <TabList className="lg:col-span-5 space-y-4">
          {capabilities.map((capability, index) => (
            <Tab key={capability.name} as={Fragment}>
              {({ selected }) => (
                <button className="relative w-full rounded-2xl transition-colors hover:bg-white/5 focus:outline-none">
                  {/* Active background indicator */}
                  {selected && (
                    <motion.div
                      layoutId="activeBackground"
                      className="absolute inset-0 bg-gray-800"
                      initial={{ borderRadius: 16 }}
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}

                  <div className="relative z-10 p-8 text-left">
                    <capability.icon className={`w-8 h-8 ${selected ? 'text-accent-200' : 'text-gray-400'}`} />
                    <h3 className={`mt-6 text-lg font-semibold ${selected ? 'text-white' : 'text-gray-300'}`}>
                      {capability.name}
                    </h3>
                    <p className={`mt-2 text-sm ${selected ? 'text-gray-400' : 'text-gray-500'}`}>
                      {capability.description}
                    </p>
                  </div>
                </button>
              )}
            </Tab>
          ))}
        </TabList>

        {/* Right side: Demo display - full height */}
        <div className="lg:col-span-7 flex flex-col">
          <TabPanels as={Fragment}>
            <AnimatePresence
              initial={false}
              custom={{ isForwards: mounted ? isForwards : true, changeCount }}
              mode="wait"
            >
              {capabilities.map((capability, index) =>
                selectedIndex === index ? (
                  <TabPanel
                    static
                    key={capability.name + changeCount}
                    as={motion.div}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex-1"
                  >
                    <div className="h-full">
                      <capability.demo isActive={selectedIndex === index} />
                    </div>
                  </TabPanel>
                ) : null
              )}
            </AnimatePresence>
          </TabPanels>
        </div>
      </TabGroup>
    </>
  )
}
