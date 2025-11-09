import { cn } from '@/lib/utils'
import type { ComponentPropsWithoutRef } from 'react'

type Props = ComponentPropsWithoutRef<'div'> & {
  tag?: 'div' | 'section' | 'article'
}

export default function Container({ children, className, tag = 'div', ...props }: Props) {
  const Tag = tag

  return (
    <Tag className={cn('mx-auto max-w-7xl px-4', className)} {...props}>
      {children}
    </Tag>
  )
}
