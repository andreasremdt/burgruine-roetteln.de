import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'

export default function Textarea({ className, ...props }: ComponentPropsWithoutRef<'textarea'>) {
  return (
    <textarea
      className={cn(
        'w-full border border-gray-300 px-4 py-2 font-sans transition-colors hover:border-gray-400 focus-visible:border-gray-400',
        className,
      )}
      {...props}
    />
  )
}
