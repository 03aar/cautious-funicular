'use client'

import { useState, useEffect } from 'react'
import { Logo } from '@/components/ui/Logo'
import { QuestionCard } from '@/components/onboarding/QuestionCard'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'

const questions = [
  {
    id: 1,
    question: "What brings you to Oops?",
    options: [
      "Starting a new project",
      "Managing my team",
      "Organizing our company",
      "Just exploring"
    ]
  },
  {
    id: 2,
    question: "How many people are on your team?",
    options: [
      "Just me",
      "2-10",
      "11-50",
      "51+"
    ]
  },
  {
    id: 3,
    question: "What matters most?",
    options: [
      "Speed",
      "Clarity",
      "Collaboration",
      "All of it"
    ]
  }
]

export default function OnboardingPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [isComplete, setIsComplete] = useState(false)
  const router = useRouter()

  const handleSelect = (option: string) => {
    setSelectedOption(option)

    // Auto-advance after 300ms
    setTimeout(() => {
      const newAnswers = [...answers, option]
      setAnswers(newAnswers)
      setSelectedOption(null)

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
      } else {
        // Onboarding complete
        setIsComplete(true)
        setTimeout(() => {
          router.push('/app')
        }, 1500)
      }
    }, 300)
  }

  const question = questions[currentQuestion]

  if (isComplete) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center space-y-24"
        >
          <p className="text-20 text-foreground">Building your workspace...</p>
          <motion.div
            className="flex gap-8 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-8 h-8 bg-foreground rounded-full"
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Logo */}
      <div className="absolute top-40 left-40">
        <Logo />
      </div>

      {/* Question Counter */}
      <div className="absolute top-40 right-40 text-14 text-secondary">
        {currentQuestion + 1} of {questions.length}
      </div>

      {/* Question */}
      <div className="flex-1 flex items-center justify-center px-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="w-full max-w-[600px] space-y-64"
          >
            <h1 className="text-32 font-semibold text-center">
              {question.question}
            </h1>

            <div className="grid grid-cols-2 gap-16">
              {question.options.map((option) => (
                <QuestionCard
                  key={option}
                  selected={selectedOption === option}
                  onClick={() => handleSelect(option)}
                >
                  {option}
                </QuestionCard>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Skip */}
      <div className="absolute bottom-40 right-40">
        <button
          className="text-14 text-secondary hover:text-foreground transition-colors"
          onClick={() => router.push('/app')}
        >
          Skip for now
        </button>
      </div>
    </div>
  )
}
