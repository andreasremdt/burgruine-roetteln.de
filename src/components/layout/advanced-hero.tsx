import type { ComponentPropsWithoutRef } from 'react'
import { getHeader } from '@/lib/fetchers'
import { cn } from '@/lib/utils'
import Container from '../ui/container'
import ImageKitImage from '../imagekit-image'

type Props = ComponentPropsWithoutRef<'section'> & {
  title: string
  subtitle?: string | null
  description?: string | null
}

export default async function AdvancedHero({
  title,
  subtitle,
  description,
  className,
  ...props
}: Props) {
  const header = await getHeader()

  return (
    <section className={cn('bg-gray-50', className)} {...props}>
      <div className="relative -mt-24 h-[75vh] max-h-96 before:absolute before:inset-0 before:z-10 before:bg-linear-to-b before:from-black/60 before:to-black/40 before:to-40% md:-mt-32">
        <ImageKitImage
          image={header.image}
          width={1920}
          height={400}
          loading="eager"
          role="presentation"
          className="h-full w-full object-cover"
        />
      </div>

      <Container className="grid grid-cols-5 py-20 md:py-32">
        <div className="col-span-5 md:col-span-2">
          <h1 className="mb-2 text-5xl text-gray-900">{title}</h1>
          {subtitle ? (
            <p className="mb-4 font-sans font-medium text-gray-600 uppercase md:mb-0">{subtitle}</p>
          ) : null}
        </div>

        {description ? (
          <p className="col-span-5 text-xl md:col-span-3 md:text-3xl">{description}</p>
        ) : null}
      </Container>
    </section>
  )
}
