import Link from 'next/link'
import { getBanner, getEvents, getOpeningHours } from '@/lib/fetchers'
import Container from '../ui/container'
import Icon from '../ui/icon'

export default async function Banner() {
  const banner = await getBanner()
  const openingHours = await getOpeningHours()
  const events = await getEvents()

  const nextEvent = events.find((event) => event.date > new Date().toISOString())

  return (
    <div className="bg-kornblau-400 relative z-10 font-medium text-white">
      <Container className="flex flex-wrap items-center justify-between gap-4 py-2 text-sm sm:py-4">
        <p className="hidden gap-2 md:flex">
          {banner.showOpeningHours ? (
            <>
              <Icon name="clock" className="mt-[3px] shrink-0" />
              {openingHours.titleOuterWard}
            </>
          ) : (
            banner.leftSideText
          )}
        </p>

        {banner.showNextEvent && nextEvent ? (
          <Link
            prefetch
            href="/besuchen#veranstaltungen"
            className="flex gap-2 transition-colors hover:text-white focus-visible:text-white"
          >
            <Icon name="bell" className="mt-[3px] shrink-0" />
            Nächste Veranstaltung: {nextEvent.title}
          </Link>
        ) : null}

        {!banner.showNextEvent ? banner.rightSideText : null}
      </Container>
    </div>
  )
}
