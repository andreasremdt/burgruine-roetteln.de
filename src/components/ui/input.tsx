import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'

type Props = ComponentPropsWithoutRef<'input'> & {
  error?: string
}

export default function Input({ type = 'text', className, error, id, ...props }: Props) {
  return (
    <input
      type={type}
      id={id}
      aria-invalid={error ? 'true' : undefined}
      aria-describedby={error ? `${id}-error` : undefined}
      className={cn(
        'h-10 w-full border border-gray-300 px-4 font-sans text-sm text-gray-500 transition-colors hover:border-gray-400 focus-visible:border-gray-400 aria-[invalid]:border-red-400 md:h-12 md:text-base',
        className,
      )}
      {...props}
    />
  )
}
