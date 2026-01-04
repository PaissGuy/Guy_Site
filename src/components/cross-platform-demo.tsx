'use client'

import { useState, useEffect } from 'react'
import { Smartphone, Tablet, Monitor } from 'lucide-react'

const devices = [
  { name: 'Mobile', icon: Smartphone, width: 'w-[200px]', scale: 0.7 },
  { name: 'Tablet', icon: Tablet, width: 'w-[280px]', scale: 0.85 },
  { name: 'Desktop', icon: Monitor, width: 'w-full', scale: 1 },
]

export function CrossPlatformDemo() {
  const [selectedDevice, setSelectedDevice] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedDevice((prev) => (prev + 1) % devices.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const handleDeviceChange = (index: number) => {
    setSelectedDevice(index)
  }

  const currentDevice = devices[selectedDevice]

  return (
    <div className="h-full w-full flex flex-col items-center justify-center gap-6">
      {/* Preview Area */}
      <div className="flex-1 flex items-center justify-center">
        <div className={`transition-all duration-500 ease-in-out ${currentDevice.width}`}>
          {/* Device Frame */}
          <div className="bg-white rounded-xl border-2 border-slate-300 shadow-xl overflow-hidden">
            {/* Mock App Bar */}
            <div className="bg-slate-900 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-500 rounded-lg"></div>
                <span className="text-white font-semibold text-sm">Dashboard</span>
              </div>
              {selectedDevice === 2 && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-slate-700 rounded-lg"></div>
                  <div className="w-8 h-8 bg-slate-700 rounded-lg"></div>
                </div>
              )}
            </div>

            {/* Mock Content */}
            <div className="p-4 space-y-3">
              {/* Stats Grid - Responsive */}
              <div className={`grid gap-3 ${selectedDevice === 2 ? 'grid-cols-3' : selectedDevice === 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-3 text-white">
                  <div className="text-xs opacity-80">Revenue</div>
                  <div className="text-lg font-bold mt-1">$12.5k</div>
                </div>
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-3 text-white">
                  <div className="text-xs opacity-80">Users</div>
                  <div className="text-lg font-bold mt-1">1,234</div>
                </div>
                {selectedDevice !== 0 && (
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-3 text-white">
                    <div className="text-xs opacity-80">Orders</div>
                    <div className="text-lg font-bold mt-1">856</div>
                  </div>
                )}
              </div>

              {/* Content Cards */}
              <div className={selectedDevice === 2 ? 'grid grid-cols-2 gap-3' : 'space-y-3'}>
                <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-full"></div>
                    <div className="flex-1">
                      <div className="h-3 bg-slate-200 rounded w-3/4"></div>
                      <div className="h-2 bg-slate-100 rounded w-1/2 mt-1"></div>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-2 bg-slate-200 rounded"></div>
                    <div className="h-2 bg-slate-200 rounded w-5/6"></div>
                  </div>
                </div>

                {selectedDevice !== 0 && (
                  <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 bg-green-100 rounded-full"></div>
                      <div className="flex-1">
                        <div className="h-3 bg-slate-200 rounded w-3/4"></div>
                        <div className="h-2 bg-slate-100 rounded w-1/2 mt-1"></div>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <div className="h-2 bg-slate-200 rounded"></div>
                      <div className="h-2 bg-slate-200 rounded w-5/6"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Nav - Mobile Only */}
            {selectedDevice === 0 && (
              <div className="border-t border-slate-200 bg-white px-4 py-2 flex justify-around">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`w-8 h-8 rounded-lg ${i === 1 ? 'bg-blue-500' : 'bg-slate-200'}`}></div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Device Selector - Below device */}
      <div className="flex gap-2">
        {devices.map((device, index) => {
          const Icon = device.icon
          return (
            <button
              key={device.name}
              onClick={() => handleDeviceChange(index)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedDevice === index
                  ? 'bg-white/20 text-white border border-white/30'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
              }`}
            >
              <Icon className="w-4 h-4" />
              {device.name}
            </button>
          )
        })}
      </div>
    </div>
  )
}
