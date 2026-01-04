'use client'

import { Fragment, useState, useRef, useEffect } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { useDebouncedCallback } from 'use-debounce'
import { clsx } from 'clsx'
import { Sparkles, Layout, Zap } from 'lucide-react'
import { RagChatDemo } from './rag-chat-demo'
import { DesignSystemsDemo } from './design-systems-demo'
import { RapidPrototypesDemo } from './rapid-prototypes-demo'

interface Capability {
  name: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  demo: React.ComponentType<{ isActive?: boolean }>
}

const capabilities: Capability[] = [
  {
    name: 'AI-Powered Assistants',
    description: 'RAG-powered search with source citations',
    icon: Sparkles,
    demo: RagChatDemo,
  },
  {
    name: 'Design Systems',
    description: 'LLM friendly design systems',
    icon: Layout,
    demo: DesignSystemsDemo,
  },
  {
    name: 'Rapid Prototyping (in code!)',
    description: 'Figure out what to build with coded prototypes',
    icon: Zap,
    demo: RapidPrototypesDemo,
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
                {capability.name === 'AI-Powered Assistants' && 'AI Assistants'}
                {capability.name === 'Design Systems' && 'Design Systems'}
                {capability.name === 'Rapid Prototyping (in code!)' && 'Prototyping'}
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
