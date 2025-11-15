import { cn } from '@/lib/utils'
import Link from 'next/link'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'

type BaseProps = {
  variant?: 'primary' | 'secondary'
  children: ReactNode
  className?: string
}

type ButtonProps = BaseProps &
  ComponentPropsWithoutRef<'button'> & {
    href?: never
  }

type LinkProps = BaseProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, 'href'> & {
    href: string
    type?: never
  }

type Props = ButtonProps | LinkProps

export default function Button({
  children,
  className,
  type = 'button',
  variant = 'primary',
  href,
  ...props
}: Props) {
  const baseClasses = cn(
    'inline-flex items-center px-4 h-12 uppercase font-sans text-sm font-medium transition-colors rounded-sm"',
    {
      'bg-kornblau-400 text-white hover:bg-gray-700 focus-visible:bg-gray-700':
        variant === 'primary',
      'bg-white text-gray-900 hover:bg-gray-100 focus-visible:bg-gray-100': variant === 'secondary',
    },
    className,
  )

  if (href) {
    return (
      <Link
        prefetch={href ? href.startsWith('/') : undefined}
        href={href}
        className={baseClasses}
        {...(props as Omit<ComponentPropsWithoutRef<typeof Link>, 'href'>)}
      >
        {children}
      </Link>
    )
  }

  return (
    <button className={baseClasses} type={type} {...(props as ComponentPropsWithoutRef<'button'>)}>
      {children}
    </button>
  )
}
