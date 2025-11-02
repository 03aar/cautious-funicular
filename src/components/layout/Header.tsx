'use client'

import { Search, Plus } from 'lucide-react'
import { useState } from 'react'
import { getInitials } from '@/lib/utils'

export function Header() {
  const [searchFocus, setSearchFocus] = useState(false)

  // TODO: Get user from session
  const user = {
    name: 'John Doe',
    avatar: null
  }

  return (
    <div className="h-[64px] border-b border-divider bg-background flex items-center justify-between px-40">
      {/* Search */}
      <div className="flex-1 max-w-[500px]">
        <div
          className={cn(
            'relative flex items-center h-[36px] px-16 border transition-all duration-200',
            searchFocus ? 'border-foreground' : 'border-divider'
          )}
        >
          <Search className="w-16 h-16 text-secondary" />
          <input
            type="text"
            placeholder="Search everything..."
            className="flex-1 ml-8 bg-transparent text-14 outline-none placeholder:text-secondary"
            onFocus={() => setSearchFocus(true)}
            onBlur={() => setSearchFocus(false)}
          />
          <kbd className="text-12 text-secondary">⌘K</kbd>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-16">
        {/* Create Button */}
        <button className="w-[36px] h-[36px] bg-foreground text-background rounded-full flex items-center justify-center hover:bg-[#1A1A1A] transition-colors">
          <Plus className="w-16 h-16" />
        </button>

        {/* Avatar */}
        <button className="w-[36px] h-[36px] bg-foreground text-background rounded-full flex items-center justify-center text-12 font-medium">
          {getInitials(user.name)}
        </button>
      </div>
    </div>
  )
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}
