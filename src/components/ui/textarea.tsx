import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'

type Props = ComponentPropsWithoutRef<'textarea'> & {
  error?: string
}

export default function Textarea({ className, error, id, ...props }: Props) {
  return (
    <textarea
      id={id}
      aria-invalid={error ? 'true' : undefined}
      aria-describedby={error ? `${id}-error` : undefined}
      className={cn(
        'w-full border border-gray-300 px-4 py-2 align-middle font-sans text-sm text-gray-500 transition-colors hover:border-gray-400 focus-visible:border-gray-400 aria-[invalid]:border-red-400 md:text-base',
        className,
      )}
      {...props}
    />
  )
}
