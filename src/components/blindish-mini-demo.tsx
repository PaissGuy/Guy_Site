"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Caveat } from "next/font/google"

const caveat = Caveat({ subsets: ["latin"] })

// Simplified messages for the demo
const messages = [
  "Hey! Your food adventures caught my eye 😊",
  "Hi! Just found this amazing Thai place - their pad see ew is incredible!",
  "Love Thai food! Your profile's getting clearer..."
]

export function BlindishMiniDemo() {
  const [messageCount, setMessageCount] = useState(0)
  const [displayedMessages, setDisplayedMessages] = useState<string[]>([])
  
  // Calculate blur level based on message count
  const blurLevel = Math.max(0, 15 - (messageCount * 5)) // 15px to 0px blur
  
  // Auto-cycling demo
  useEffect(() => {
    const interval = setInterval(() => {
      if (messageCount < messages.length) {
        setMessageCount(prev => prev + 1)
        setDisplayedMessages(prev => [...prev, messages[messageCount]])
      } else {
        // Reset demo
        setMessageCount(0)
        setDisplayedMessages([])
      }
    }, 2000)

    return () => clearInterval(interval)
  }, [messageCount])

  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-pink-50 to-orange-50 relative overflow-hidden grayscale brightness-[0.98] contrast-[0.96] group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100 transition-all duration-200">
      {/* Mini Phone Frame */}
      <div className="relative bg-gray-800 rounded-2xl p-1 shadow-xl scale-75">
        {/* Phone buttons */}
        <div className="absolute -left-1 top-4 w-0.5 h-4 bg-gray-600 rounded-l"></div>
        <div className="absolute -left-1 top-10 w-0.5 h-6 bg-gray-600 rounded-l"></div>
        <div className="absolute -right-1 top-8 w-0.5 h-8 bg-gray-600 rounded-r"></div>
        
        {/* Screen */}
        <div className="w-40 h-64 bg-white rounded-xl overflow-hidden relative">
          <div className="h-full flex flex-col items-center justify-center p-3">
            {/* Profile Image with Dynamic Blur */}
            <div className="relative w-20 h-20 mb-2">
              <div 
                className="w-full h-full rounded-full overflow-hidden border-2 border-pink-200 relative"
                style={{
                  background: 'linear-gradient(135deg, #FF8BA7 0%, #FFAA8B 100%)',
                  padding: '2px'
                }}
              >
                <div
                  className="w-full h-full relative rounded-full overflow-hidden"
                  style={{
                    filter: `blur(${blurLevel}px)`,
                    transition: 'filter 0.5s ease-out',
                  }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop"
                    alt="Profile"
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
              </div>
            </div>

            {/* Profile Name */}
            <div className="text-center mb-1">
              <span className="text-sm font-bold text-gray-800">Alyssa</span>
            </div>

            {/* Interest Badge */}
            <div className="mb-2">
              <span className="text-xs bg-pink-100 text-pink-700 px-2 py-0.5 rounded-full border border-pink-200">
                Foodie
              </span>
            </div>

            {/* Messages Area */}
            <div className="flex-1 w-full">
              {displayedMessages.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center">
                  <div className={`${caveat.className} text-pink-500 text-xs text-center`}>
                    Chat to reveal!
                  </div>
                </div>
              ) : (
                <div className="space-y-1">
                  {displayedMessages.map((message, index) => (
                    <div
                      key={index}
                      className={`p-2 rounded-lg text-xs ${
                        index % 2 === 0 
                          ? 'bg-pink-100 ml-auto max-w-[85%] rounded-br-none' 
                          : 'bg-gray-100 mr-auto max-w-[85%] rounded-bl-none'
                      }`}
                      style={{
                        animation: 'fadeIn 0.3s ease-out forwards',
                      }}
                    >
                      {message}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Button */}
            <div className="w-full mt-1">
              <div className="bg-gradient-to-r from-pink-400 to-orange-400 text-white text-xs py-1.5 px-3 rounded-full text-center font-medium">
                {messageCount === 0 ? "Send Message" : messageCount === messages.length ? "Start Love Story" : "Send Another"}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Label */}
      <div className="absolute bottom-2 right-2 bg-white/80 backdrop-blur-sm rounded-full px-2 py-1 text-xs text-gray-600 font-medium">
        Live Demo
      </div>
    </div>
  )
}