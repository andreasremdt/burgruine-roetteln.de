import type { EventsBlock, Event } from '@/payload-types'
import { cn, slugify } from '@/lib/utils'
import Container from '../ui/container'
import { getEvents } from '@/lib/fetchers'
import Prose from './prose'
import Heading from '../ui/heading'
import Button from '../ui/button'

function isPreviousEvent(event: Event) {
  return event.date < new Date().toISOString()
}

export default async function Events({ title, description, subMenuTitle }: EventsBlock) {
  const events = await getEvents()
  const nextEvent = events.find((event) => event.date > new Date().toISOString())

  return (
    <section className="py-24 lg:py-40" id={subMenuTitle ? slugify(subMenuTitle) : undefined}>
      <Container>
        <Heading level="h1" tag="h2" className="mb-20 text-center">
          {title}
        </Heading>
        {description ? <p className="mb-16 text-5xl text-gray-900">{description}</p> : null}

        {events.map((event) => (
          <article
            className={cn(
              'relative mb-12 grid-cols-6 gap-8 border-b border-gray-300 pb-12 transition-opacity last:mb-0 last:border-b-0 last:pb-0 hover:opacity-100 md:grid',
              {
                'to-primary-50 border-gray-300 bg-linear-to-b from-white':
                  nextEvent?.id === event.id,
                'opacity-50': isPreviousEvent(event) && nextEvent,
              },
            )}
            key={event.id}
          >
            <time
              dateTime={event.date}
              className="col-span-2 mt-1 font-sans font-medium whitespace-nowrap uppercase lg:col-span-1"
            >
              {event.displayedDate}
              {event.time ? (
                <span className="block text-sm font-normal text-wrap text-gray-500">
                  {event.time}
                </span>
              ) : null}
            </time>
            <div className="col-span-4 lg:col-span-5">
              <Heading level="h3" tag="h3" className="mb-2 text-3xl">
                {event.title}
              </Heading>

              {event.description ? <Prose content={event.description} /> : null}
              {event.url ? (
                <Button
                  href={event.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="mt-4"
                >
                  Mehr erfahren
                </Button>
              ) : null}

              {nextEvent?.id === event.id ? (
                <p className="absolute right-0 bottom-2 font-sans text-sm font-medium text-gray-500 uppercase">
                  Nächste Veranstaltung
                </p>
              ) : null}
            </div>
          </article>
        ))}
      </Container>
    </section>
  )
}
