import { cn } from '@/lib/utils'
import type { ComponentPropsWithoutRef } from 'react'

export default function Text({ children, className, ...props }: ComponentPropsWithoutRef<'p'>) {
  return (
    <p className={cn('text-lg leading-relaxed sm:text-xl', className)} {...props}>
      {children}
    </p>
  )
}
