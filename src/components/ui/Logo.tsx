import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function Logo({ className, size = 'sm' }: LogoProps) {
  const sizeClasses = {
    sm: 'text-[28px]',
    md: 'text-[48px]',
    lg: 'text-[120px]'
  }

  return (
    <div className={cn('font-semibold tracking-tight', sizeClasses[size], className)}>
      Oops
    </div>
  )
}
