import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'

export default function Select({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<'select'>) {
  return (
    <select
      className={cn(
        'h-12 w-full rounded-sm border border-neutral-300 px-4 font-sans transition-colors hover:border-neutral-400 focus-visible:border-neutral-400',
        className,
      )}
      {...props}
    >
      {children}
    </select>
  )
}
