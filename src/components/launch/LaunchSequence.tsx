'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function LaunchSequence({ onComplete }: { onComplete: () => void }) {
  const [stage, setStage] = useState<'logo' | 'wordmark' | 'complete'>('logo')

  useEffect(() => {
    // Logo emergence (0-2s)
    const logoTimer = setTimeout(() => {
      setStage('wordmark')
    }, 2000)

    // Wordmark reveal and hold (2-3.5s)
    const wordmarkTimer = setTimeout(() => {
      setStage('complete')
    }, 3500)

    // Transition to product (3.5-4s)
    const completeTimer = setTimeout(() => {
      onComplete()
    }, 4000)

    return () => {
      clearTimeout(logoTimer)
      clearTimeout(wordmarkTimer)
      clearTimeout(completeTimer)
    }
  }, [onComplete])

  return (
    <div className="fixed inset-0 z-50 bg-foreground flex items-center justify-center">
      <AnimatePresence mode="wait">
        {stage === 'logo' && (
          <motion.div
            key="logo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-col items-center"
          >
            {/* First O */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1],
                delay: 0.2
              }}
            >
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  stroke="white"
                  strokeWidth="4"
                  fill="none"
                />
              </svg>
            </motion.div>
          </motion.div>
        )}

        {stage === 'wordmark' && (
          <motion.div
            key="wordmark"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-col items-center"
          >
            <motion.div
              className="text-background text-[120px] font-semibold tracking-tight"
              initial={{ filter: 'blur(4px)' }}
              animate={{ filter: 'blur(0px)' }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Oops
            </motion.div>

            {/* Subtle pulse effect */}
            <motion.div
              className="absolute"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.1, 0] }}
              transition={{
                duration: 1,
                ease: 'easeInOut',
                delay: 0.4
              }}
            >
              <div className="w-[400px] h-[400px] bg-background rounded-full blur-[100px]" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
