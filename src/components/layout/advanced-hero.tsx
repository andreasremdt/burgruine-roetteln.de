import type { ComponentPropsWithoutRef } from 'react'
import { getHeader } from '@/lib/fetchers'
import { cn } from '@/lib/utils'
import Container from '../ui/container'
import ImageKitImage from '../imagekit-image'
import Heading from '../ui/heading'

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
          priority
          role="presentation"
          className="h-full w-full object-cover"
        />
      </div>

      <Container className="grid grid-cols-5 gap-x-8 py-24 lg:py-40">
        <div className="col-span-5 md:col-span-2">
          {subtitle ? (
            <Heading level="h5" tag="p" dash>
              {subtitle}
            </Heading>
          ) : null}
          <Heading level="h1" tag="h1" className="mb-8 md:mb-0">
            {title}
          </Heading>
        </div>

        {description ? (
          <p className="col-span-5 text-xl leading-relaxed md:col-span-3 md:text-3xl md:leading-tight">
            {description}
          </p>
        ) : null}
      </Container>
    </section>
  )
}
