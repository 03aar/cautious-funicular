import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface QuestionCardProps {
  children: React.ReactNode
  selected?: boolean
  onClick?: () => void
}

export function QuestionCard({ children, selected, onClick }: QuestionCardProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'w-full min-h-[120px] px-24 py-24 border transition-all duration-200',
        'flex items-center justify-center text-16 font-medium',
        selected
          ? 'bg-foreground text-background border-foreground'
          : 'bg-background text-foreground border-divider hover:border-foreground'
      )}
    >
      {children}
    </motion.button>
  )
}
