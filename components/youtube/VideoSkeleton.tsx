'use client'

export default function VideoSkeleton() {
  return (
    <div className="glass-effect rounded-xl overflow-hidden animate-pulse">
      <div className="h-48 bg-gray-700/50"></div>
      <div className="p-6">
        <div className="h-5 bg-gray-700/50 rounded mb-3"></div>
        <div className="h-4 bg-gray-700/50 rounded w-2/3"></div>
      </div>
    </div>
  )
}
