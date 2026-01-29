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
    'inline-flex items-center px-4 h-10 md:h-12 uppercase font-sans text-xs tracking-wider font-medium transition-colors cursor-pointer disabled:cursor-not-allowed disabled:opacity-50',
    {
      'bg-kornblau-400 text-white hover:bg-gray-900 focus-visible:bg-gray-900 disabled:hover:bg-kornblau-400 disabled:focus-visible:bg-kornblau-400':
        variant === 'primary',
      'bg-white text-gray-900 hover:bg-gray-100 focus-visible:bg-gray-100 disabled:hover:bg-white disabled:focus-visible:bg-white':
        variant === 'secondary',
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
