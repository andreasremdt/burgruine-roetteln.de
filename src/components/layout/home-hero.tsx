import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'
import Button from '../ui/button'
import Container from '../ui/container'
import { getHeader } from '@/lib/fetchers'
import ImageKitImage from '../imagekit-image'

type Props = ComponentPropsWithoutRef<'section'> & {
  title: string
  description?: string | null
}

export default async function HomeHero({ title, description, className, ...props }: Props) {
  const header = await getHeader()

  return (
    <section
      className={cn(
        'relative -mt-24 flex max-h-220 flex-col justify-end pt-32 pb-8 before:absolute before:inset-0 before:z-10 before:bg-linear-to-b before:from-black/60 before:to-transparent before:to-40% after:absolute after:inset-0 after:z-0 after:bg-linear-to-r after:from-black/60 after:to-transparent sm:h-[75vw] sm:pt-0 md:-mt-32 md:justify-center md:pb-0',
        className,
      )}
      {...props}
    >
      <ImageKitImage
        image={header.image}
        width={1920}
        height={800}
        loading="eager"
        role="presentation"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />

      <Container className="z-10 w-full">
        <h1 className="mb-4 text-4xl text-balance text-white md:text-5xl lg:max-w-1/2">{title}</h1>
        {description ? (
          <p className="mb-6 text-xl text-gray-100 md:mb-14 md:text-2xl lg:max-w-1/2">
            {description}
          </p>
        ) : null}

        <div className="flex flex-wrap gap-2">
          <Button href="/burg">Mehr über die Burg &rarr;</Button>
          <Button href="/besuchen" variant="secondary">
            Planen Sie Ihren Besuch &rarr;
          </Button>
        </div>
      </Container>
    </section>
  )
}
