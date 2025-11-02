'use client'

import { motion } from 'framer-motion'
import { FileText, Layout, MessageSquare } from 'lucide-react'
import { formatDate } from '@/lib/utils'

// Mock data
const items = [
  {
    id: '1',
    type: 'board',
    title: 'Q4 Planning',
    status: '3 active tasks, 5 people',
    updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000)
  },
  {
    id: '2',
    type: 'doc',
    title: 'Marketing Campaign Brief',
    status: 'Updated by Sarah',
    updatedAt: new Date(Date.now() - 5 * 60 * 60 * 1000)
  },
  {
    id: '3',
    type: 'board',
    title: 'Sprint 12',
    status: 'In progress',
    updatedAt: new Date(Date.now() - 24 * 60 * 60 * 1000)
  },
  {
    id: '4',
    type: 'doc',
    title: 'Team Wiki',
    status: '8 people',
    updatedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000)
  },
]

export default function WorkPage() {
  return (
    <div className="p-40 space-y-40">
      {/* Filter Bar */}
      <div className="flex gap-16 text-14">
        <FilterTab active>All</FilterTab>
        <FilterTab>Recent</FilterTab>
        <FilterTab>Pinned</FilterTab>
        <FilterTab>Shared</FilterTab>
      </div>

      {/* Content Stream */}
      <div className="space-y-0">
        {items.map((item) => (
          <WorkItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}

function FilterTab({ active, children }: { active?: boolean; children: React.ReactNode }) {
  return (
    <button
      className={`text-14 transition-all duration-200 relative ${
        active ? 'text-foreground' : 'text-secondary hover:text-foreground'
      }`}
    >
      {children}
      {active && (
        <motion.div
          layoutId="activeFilter"
          className="absolute -bottom-4 left-0 right-0 h-[2px] bg-foreground"
        />
      )}
    </button>
  )
}

function WorkItem({
  type,
  title,
  status,
  updatedAt
}: {
  type: string
  title: string
  status: string
  updatedAt: Date
}) {
  const Icon = type === 'board' ? Layout : FileText

  return (
    <motion.button
      whileHover={{ y: -2, boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)' }}
      className="w-full flex items-center justify-between py-24 border-b border-divider hover:border-foreground transition-all duration-200 group"
    >
      <div className="flex items-start gap-16">
        <Icon className="w-16 h-16 mt-4 text-secondary group-hover:text-foreground transition-colors" />
        <div className="text-left">
          <h3 className="text-16 font-medium">{title}</h3>
          <p className="text-14 text-secondary">{status}</p>
        </div>
      </div>

      <div className="text-14 text-secondary flex items-center gap-16">
        <span className="capitalize">{type}</span>
        <span>·</span>
        <span>{formatDate(updatedAt)}</span>
      </div>
    </motion.button>
  )
}
