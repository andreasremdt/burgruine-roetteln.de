import Link from 'next/link'
import type { ToursBlock } from '@/payload-types'
import { cn } from '@/lib/utils'
import Container from '../ui/container'
import ImageKitImage from '../imagekit-image'
import Heading from '../ui/heading'
import { slugify } from '@/lib/utils'
export default function ToursBlock({ title, description, tours, dark, subMenuTitle }: ToursBlock) {
  return (
    <section
      className={cn('py-24 lg:py-40', {
        'bg-gray-100': !dark,
        'bg-gray-900 text-white': dark,
      })}
      id={subMenuTitle ? slugify(subMenuTitle) : undefined}
    >
      <Container className="mx-auto max-w-7xl px-4">
        <Heading
          level="h5"
          tag="h2"
          dash
          className={cn({
            'before:bg-gray-600': !dark,
            'before:bg-white': dark,
          })}
        >
          {title}
        </Heading>
        <Heading
          level="h1"
          tag="p"
          className={cn('mb-16', {
            'text-white': dark,
          })}
        >
          {description}
        </Heading>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:gap-16">
          {tours.map((tour) => {
            if (typeof tour === 'string') {
              return null
            }
            return (
              <article key={tour.id} className="relative">
                <ImageKitImage
                  image={tour.image}
                  width="400"
                  height="400"
                  loading="lazy"
                  decoding="async"
                  className="mb-4 aspect-video w-full object-cover sm:aspect-square"
                />
                <div>
                  <Heading
                    level="h3"
                    tag="h3"
                    className={cn({
                      'text-white': dark,
                    })}
                  >
                    {tour.title}
                  </Heading>
                  <Link
                    prefetch
                    className={cn(
                      'font-sans text-xs font-medium tracking-wider uppercase transition-colors after:absolute after:inset-0',
                      {
                        'text-gray-300 hover:text-gray-400 focus-visible:text-gray-400': dark,
                        'text-gray-500 hover:text-gray-500 focus-visible:text-gray-500': !dark,
                      },
                    )}
                    href={`/fuehrungen/${tour.slug}`}
                  >
                    Mehr erfahren
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
