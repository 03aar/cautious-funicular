'use client'

import { useEffect, useState } from 'react'
import { Command } from 'cmdk'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, FileText, Layout, MessageSquare, User } from 'lucide-react'

interface CommandPaletteProps {
  open: boolean
  onClose: () => void
}

export function CommandPalette({ open, onClose }: CommandPaletteProps) {
  const [search, setSearch] = useState('')

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        onClose()
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [onClose])

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/60 z-50"
          />

          {/* Command Palette */}
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh]">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-[600px] mx-16"
            >
              <Command className="bg-background border border-foreground shadow-elevated">
                <div className="flex items-center border-b border-divider px-16 h-[48px]">
                  <Search className="w-16 h-16 text-secondary" />
                  <Command.Input
                    value={search}
                    onValueChange={setSearch}
                    placeholder="Search everything..."
                    className="flex-1 ml-8 bg-transparent text-14 outline-none placeholder:text-secondary"
                  />
                </div>

                <Command.List className="max-h-[400px] overflow-y-auto p-8">
                  <Command.Empty className="py-40 text-center text-14 text-secondary">
                    No results found
                  </Command.Empty>

                  <Command.Group heading="Recent" className="px-8 py-8">
                    <CommandItem icon={Layout} title="Q4 Planning Board" />
                    <CommandItem icon={FileText} title="Marketing Campaign Doc" />
                    <CommandItem icon={MessageSquare} title="Team Chat" />
                  </Command.Group>

                  <Command.Group heading="People" className="px-8 py-8">
                    <CommandItem icon={User} title="Sarah Johnson" />
                    <CommandItem icon={User} title="Mike Chen" />
                  </Command.Group>
                </Command.List>
              </Command>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}

function CommandItem({
  icon: Icon,
  title
}: {
  icon: any
  title: string
}) {
  return (
    <Command.Item className="flex items-center gap-12 px-16 py-12 text-14 rounded-none hover:bg-hover cursor-pointer transition-colors">
      <Icon className="w-16 h-16 text-secondary" />
      {title}
    </Command.Item>
  )
}
