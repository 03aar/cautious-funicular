'use client'

import { useState } from 'react'
import { LaunchSequence } from '@/components/launch/LaunchSequence'
import { useRouter } from 'next/navigation'

export default function Home() {
  const [showLaunch, setShowLaunch] = useState(true)
  const router = useRouter()

  const handleLaunchComplete = () => {
    setShowLaunch(false)
    // Redirect to auth page
    router.push('/auth')
  }

  if (showLaunch) {
    return <LaunchSequence onComplete={handleLaunchComplete} />
  }

  return null
}
