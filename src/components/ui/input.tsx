import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'

export default function Input({
  type = 'text',
  className,
  ...props
}: ComponentPropsWithoutRef<'input'>) {
  return (
    <input
      type={type}
      className={cn(
        'h-10 w-full border border-gray-300 px-4 font-sans text-sm transition-colors hover:border-gray-400 focus-visible:border-gray-400 md:h-12 md:text-base',
        className,
      )}
      {...props}
    />
  )
}
