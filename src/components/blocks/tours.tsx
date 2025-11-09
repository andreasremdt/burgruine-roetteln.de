import Link from 'next/link'
import type { ToursBlock } from '@/payload-types'
import { cn } from '@/lib/utils'
import Container from '../ui/container'
import ImageKitImage from '../imagekit-image'

export default function ToursBlock({ title, description, tours, dark }: ToursBlock) {
  return (
    <section
      className={cn('py-24 lg:py-40', {
        'bg-primary-100': !dark,
        'bg-neutral-900 text-white': dark,
      })}
    >
      <Container className="mx-auto max-w-7xl px-4">
        <h2
          className={cn(
            'mb-2 flex items-center font-sans font-medium uppercase before:mr-4 before:block before:h-px before:w-8',
            {
              'before:bg-neutral-600': !dark,
              'before:bg-white': dark,
            },
          )}
        >
          {title}
        </h2>
        <p className="mb-16 text-5xl">{description}</p>

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
                  className="mb-4 aspect-video w-full rounded-sm object-cover sm:aspect-square"
                />
                <div>
                  <h3 className="mb-2 text-3xl">{tour.title}</h3>
                  <Link
                    className={cn(
                      'font-sans font-medium uppercase transition-colors after:absolute after:inset-0',
                      {
                        'text-primary-300 hover:text-primary-400 focus-visible:text-primary-400':
                          dark,
                        'text-primary-500 hover:text-primary-500 focus-visible:text-primary-500':
                          !dark,
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
