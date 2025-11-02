'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Logo } from '@/components/ui/Logo'
import {
  Home,
  FileText,
  MessageSquare,
  User,
  Settings
} from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/app', icon: Home },
  { name: 'All Work', href: '/app/work', icon: FileText },
  { name: 'Chat', href: '/app/chat', icon: MessageSquare },
  { name: 'You', href: '/app/you', icon: User },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-[240px] h-screen border-r border-divider bg-background flex flex-col">
      {/* Logo */}
      <div className="h-[64px] px-16 flex items-center">
        <Logo />
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-16 py-24 space-y-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon

          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'flex items-center gap-8 h-[36px] px-16 text-14 font-medium',
                'transition-all duration-200 rounded-none relative',
                isActive
                  ? 'text-foreground'
                  : 'text-secondary hover:bg-hover hover:text-foreground'
              )}
            >
              {isActive && (
                <div className="absolute left-0 w-[2px] h-full bg-foreground" />
              )}
              <Icon className="w-16 h-16" />
              {item.name}
            </Link>
          )
        })}
      </nav>

      {/* Bottom Section */}
      <div className="p-16 border-t border-divider">
        <Link
          href="/app/settings"
          className={cn(
            'flex items-center gap-8 h-[36px] px-16 text-14 font-medium',
            'text-secondary hover:bg-hover hover:text-foreground',
            'transition-all duration-200'
          )}
        >
          <Settings className="w-16 h-16" />
          Settings
        </Link>
      </div>
    </div>
  )
}
