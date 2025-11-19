import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'

type Props = ComponentPropsWithoutRef<'h1'> & {
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'dt'
  dash?: boolean
}

export default function Heading({
  children,
  level,
  tag,
  className,
  dash = false,
  ...props
}: Props) {
  const Tag = tag

  return (
    <Tag
      className={cn(
        'mb-2 leading-none text-balance text-gray-900',
        {
          'text-4xl md:text-5xl': level === 'h1',
          'text-3xl md:text-4xl': level === 'h2',
          'text-2xl md:text-3xl': level === 'h3',
          'text-xl md:text-2xl': level === 'h4',
          'font-sans text-sm font-medium tracking-wide text-gray-600 uppercase sm:text-base':
            level === 'h5',
          'flex items-center before:mr-4 before:block before:h-px before:w-8 before:bg-gray-600':
            dash,
        },
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}
