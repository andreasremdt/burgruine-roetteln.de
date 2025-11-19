import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'

export default function Label({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<'label'>) {
  return (
    <label
      className={cn(
        'mb-2 block font-sans text-xs font-medium text-gray-900 uppercase sm:text-sm',
        className,
      )}
      {...props}
    >
      {children}
    </label>
  )
}
