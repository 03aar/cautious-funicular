import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  fullWidth?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', fullWidth, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'h-[48px] px-24 text-16 font-medium',
          'transition-all duration-200 ease-out',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          fullWidth && 'w-full',
          variant === 'primary' && [
            'bg-foreground text-background',
            'hover:bg-[#1A1A1A]',
            'active:scale-[0.98]'
          ],
          variant === 'secondary' && [
            'bg-background text-foreground border border-foreground',
            'hover:bg-hover',
            'active:scale-[0.98]'
          ],
          variant === 'ghost' && [
            'bg-transparent text-foreground',
            'hover:bg-hover',
          ],
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
