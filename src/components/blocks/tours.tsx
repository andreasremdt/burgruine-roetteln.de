import Link from 'next/link'
import type { ToursBlock } from '@/payload-types'
import { cn } from '@/lib/utils'
import Container from '../ui/container'
import ImageKitImage from '../imagekit-image'
import Heading from '../ui/heading'

export default function ToursBlock({ title, description, tours, dark }: ToursBlock) {
  return (
    <section
      className={cn('py-24 lg:py-40', {
        'bg-gray-100': !dark,
        'bg-gray-900 text-white': dark,
      })}
    >
      <Container className="mx-auto max-w-7xl px-4">
        <h2
          className={cn(
            'mb-2 flex items-center font-sans font-medium uppercase before:mr-4 before:block before:h-px before:w-8',
            {
              'before:bg-gray-600': !dark,
              'before:bg-white': dark,
            },
          )}
        >
          {title}
        </h2>
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
                    className={cn(
                      'font-sans font-medium uppercase transition-colors after:absolute after:inset-0',
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
