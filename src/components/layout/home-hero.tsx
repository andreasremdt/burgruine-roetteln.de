import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'
import Button from '../ui/button'
import Container from '../ui/container'

type Props = ComponentPropsWithoutRef<'section'> & {
  title: string
  description?: string | null
}

export default function HomeHero({ title, description, className, ...props }: Props) {
  return (
    <section
      className={cn(
        'bg-primary-50 -mt-24 flex max-h-220 flex-col justify-end bg-cover bg-center bg-no-repeat pt-32 pb-8 sm:h-[75vw] sm:pt-0 md:-mt-32 md:justify-center md:pb-0',
        className,
      )}
      style={{
        backgroundImage:
          'url(https://ik.imagekit.io/6uqkzvybwk/burgruine-roetteln/main-hero_-jQldRFqI.webp)',
      }}
      {...props}
    >
      <Container className="w-full">
        <h1 className="mb-4 text-4xl text-balance text-gray-900 md:text-5xl lg:max-w-1/2">
          {title}
        </h1>
        {description ? (
          <p className="mb-6 text-xl md:mb-14 md:text-2xl lg:max-w-1/2">{description}</p>
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
