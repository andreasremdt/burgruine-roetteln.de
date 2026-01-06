import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'

export default function Select({ className, ...props }: ComponentPropsWithoutRef<'select'>) {
  return (
    <select
      className={cn(
        'h-10 w-full border border-gray-300 px-4 font-sans text-sm text-gray-500 transition-colors hover:border-gray-400 focus-visible:border-gray-400 md:h-12 md:text-base',
        className,
      )}
      {...props}
    />
  )
}
