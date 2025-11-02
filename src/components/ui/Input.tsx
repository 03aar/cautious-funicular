import { cn } from '@/lib/utils'
import { InputHTMLAttributes, forwardRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          'w-full h-[48px] bg-transparent border-0 border-b-[1px] border-foreground',
          'px-0 text-16 text-foreground placeholder:text-secondary',
          'transition-all duration-200 ease-out',
          'focus:border-b-[2px] focus:outline-none',
          error && 'border-red-500',
          className
        )}
        {...props}
      />
    )
  }
)

Input.displayName = 'Input'
