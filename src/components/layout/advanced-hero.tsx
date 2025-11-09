import type { ComponentPropsWithoutRef } from 'react'
import Container from '../ui/container'
import { cn } from '@/lib/utils'

type Props = ComponentPropsWithoutRef<'section'> & {
  title: string
  subtitle?: string | null
  description?: string | null
}

export default function AdvancedHero({ title, subtitle, description, className, ...props }: Props) {
  return (
    <section
      className={cn('bg-primary-50 -mt-24 pt-48 pb-24 md:-mt-32 md:pt-64 md:pb-32', className)}
      {...props}
    >
      <Container className="grid grid-cols-5">
        <div className="col-span-5 md:col-span-2">
          <h1 className="mb-2 text-5xl text-neutral-900">{title}</h1>
          {subtitle ? (
            <p className="mb-4 font-sans font-medium text-neutral-600 uppercase md:mb-0">
              {subtitle}
            </p>
          ) : null}
        </div>

        {description ? (
          <p className="col-span-5 text-xl md:col-span-3 md:text-3xl">{description}</p>
        ) : null}
      </Container>
    </section>
  )
}
