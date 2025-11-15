import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'

type Props = ComponentPropsWithoutRef<'h1'> & {
  level: 'h1' | 'h2' | 'h3' | 'h4'
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
}

export default function Heading({ children, level, tag, className, ...props }: Props) {
  const Tag = tag

  return (
    <Tag
      className={cn(
        'leading-none text-balance text-gray-900',
        {
          'mb-4 text-4xl md:text-5xl': level === 'h1',
          'mb-4 text-3xl md:text-4xl': level === 'h2',
          'mb-4 text-2xl md:text-3xl': level === 'h3',
          'mb-4 text-xl md:text-2xl': level === 'h4',
        },
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}
