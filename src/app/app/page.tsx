'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FileText, Layout, Users } from 'lucide-react'

export default function HomePage() {
  const [input, setInput] = useState('')

  const handleCreateWorkspace = (value: string) => {
    // TODO: AI interprets intent and creates workspace
    console.log('Creating workspace:', value)
  }

  return (
    <div className="h-full flex items-center justify-center px-40">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-[600px] space-y-64"
      >
        {/* Greeting */}
        <div className="text-center space-y-24">
          <h1 className="text-32 font-semibold">Oops</h1>
          <p className="text-20 text-foreground">
            What would you like to work on?
          </p>
        </div>

        {/* Input */}
        <div className="space-y-16">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && input) {
                handleCreateWorkspace(input)
              }
            }}
            placeholder=""
            className="w-full h-[48px] bg-transparent border-b border-foreground text-16 outline-none placeholder:text-secondary"
          />

          <p className="text-12 text-secondary text-center">
            Try: "Launch plan" or "Team wiki" or just start typing
          </p>
        </div>

        {/* Quick Actions */}
        <div className="pt-40 grid grid-cols-3 gap-16">
          <QuickAction
            icon={FileText}
            label="Create a document"
            onClick={() => {}}
          />
          <QuickAction
            icon={Layout}
            label="Start a project"
            onClick={() => {}}
          />
          <QuickAction
            icon={Users}
            label="Invite teammates"
            onClick={() => {}}
          />
        </div>
      </motion.div>
    </div>
  )
}

function QuickAction({
  icon: Icon,
  label,
  onClick
}: {
  icon: any
  label: string
  onClick: () => void
}) {
  return (
    <motion.button
      whileHover={{ y: -2, boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)' }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="flex flex-col items-center justify-center h-[180px] border border-divider hover:border-foreground transition-all duration-200 gap-16"
    >
      <Icon className="w-32 h-32" />
      <span className="text-14 font-medium text-center px-16">{label}</span>
    </motion.button>
  )
}
