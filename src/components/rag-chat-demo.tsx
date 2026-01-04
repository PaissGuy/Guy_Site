'use client'

import { useState, useEffect, useRef } from 'react'
import { Sparkles } from 'lucide-react'

interface Message {
  id: number
  role: 'user' | 'assistant'
  content: string
  sources?: string[]
}

const conversationMessages: Message[] = [
  // Exchange 1
  {
    id: 1,
    role: 'user',
    content: 'What is RAG and how does it work?',
  },
  {
    id: 2,
    role: 'assistant',
    content: 'RAG (Retrieval-Augmented Generation) combines AI language models with document search. When you ask a question, the system searches a knowledge base for relevant information, then uses that context to generate accurate, sourced responses.',
    sources: ['rag-architecture.md', 'vector-search-explained.md'],
  },
  // Exchange 2
  {
    id: 3,
    role: 'user',
    content: 'Why are source citations important?',
  },
  {
    id: 4,
    role: 'assistant',
    content: 'Source citations make AI responses verifiable and trustworthy. Instead of a "magic box" that just gives answers, you can see exactly where the information came from. This builds trust and lets you dive deeper into the original documentation.',
    sources: ['ai-transparency.md'],
  },
  // Exchange 3
  {
    id: 5,
    role: 'user',
    content: 'What makes this better than regular search?',
  },
  {
    id: 6,
    role: 'assistant',
    content: 'Traditional keyword search requires exact matches. RAG uses semantic understanding—it grasps what you mean, not just what you typed. It finds relevant content even when you phrase things differently, then synthesizes a natural language answer.',
    sources: ['semantic-search.md', 'ai-vs-traditional-search.md'],
  },
]

interface RagChatDemoProps {
  isActive?: boolean
}

export function RagChatDemo({ isActive = true }: RagChatDemoProps) {
  const [messageCount, setMessageCount] = useState(0)
  const [displayedMessages, setDisplayedMessages] = useState<Message[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const [mounted, setMounted] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const messagesContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    // Scroll the messages container to bottom, not the page
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight
    }
  }, [displayedMessages, isTyping])

  useEffect(() => {
    if (!mounted || !isActive) return

    const interval = setInterval(() => {
      if (messageCount < conversationMessages.length) {
        const currentMessage = conversationMessages[messageCount]

        if (currentMessage.role === 'assistant') {
          // Show typing indicator first
          setIsTyping(true)
          setTimeout(() => {
            setIsTyping(false)
            setDisplayedMessages(prev => [...prev, currentMessage])
            setMessageCount(prev => prev + 1)
          }, 800)
        } else {
          // User messages appear immediately
          setDisplayedMessages(prev => [...prev, currentMessage])
          setMessageCount(prev => prev + 1)
        }
      } else {
        // Reset demo
        setTimeout(() => {
          setMessageCount(0)
          setDisplayedMessages([])
        }, 3000)
      }
    }, 2000)

    return () => clearInterval(interval)
  }, [messageCount, mounted, isActive])

  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="relative max-w-lg w-full h-[500px] bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden flex flex-col">
      {/* Chat Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 stroke-blue-500" />
          <div>
            <h3 className="text-sm font-semibold text-slate-900">AI Knowledge Assistant</h3>
            <p className="text-xs text-slate-600">RAG-Powered Documentation Search</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs text-slate-500">Online</span>
        </div>
      </div>

      {/* Messages Container */}
      <div ref={messagesContainerRef} className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
        {displayedMessages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} message-fade-in`}
          >
            {message.role === 'user' ? (
              <div className="bg-blue-500 text-white rounded-2xl px-4 py-2.5 max-w-[85%]">
                <p className="text-sm">{message.content}</p>
              </div>
            ) : (
              <div className="max-w-[85%]">
                <div className="bg-slate-50 rounded-2xl px-4 py-2.5 border border-slate-200">
                  <p className="text-sm leading-relaxed text-slate-900">{message.content}</p>

                  {message.sources && message.sources.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-slate-200">
                      <p className="text-xs font-medium text-slate-600 mb-1">Sources:</p>
                      <div className="flex flex-wrap gap-1.5">
                        {message.sources.map((source, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full border border-blue-200"
                          >
                            {source}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start message-fade-in">
            <div className="bg-slate-50 rounded-2xl px-5 py-3.5 border border-slate-200">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area (Decorative) */}
      <div className="px-6 py-4 border-t border-slate-200">
        <div className="flex gap-2">
          <div className="flex-1 rounded-full border border-slate-300 bg-white px-4 py-2 flex items-center">
            <span className="text-sm text-slate-400">Ask a question...</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center opacity-50">
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-white">
              <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
            </svg>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
