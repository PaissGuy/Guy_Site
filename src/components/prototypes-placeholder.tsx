import { Zap } from 'lucide-react'

export function PrototypesPlaceholder() {
  return (
    <div className="h-full w-full bg-gray-900 rounded-2xl border border-gray-800 shadow-lg flex items-center justify-center">
      <div className="text-center p-8">
        <Zap className="w-16 h-16 text-purple-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">
          Rapid Prototypes Demo
        </h3>
        <p className="text-gray-400">Coming soon...</p>
      </div>
    </div>
  )
}
