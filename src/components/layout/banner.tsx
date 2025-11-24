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
    <div className="bg-kornblau-400 font-medium text-white">
      <Container className="flex flex-wrap items-center justify-between gap-4 py-4 text-sm">
        <p className="hidden items-center gap-2 md:flex">
          {banner.showOpeningHours ? (
            <>
              <Icon name="clock" />
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
            className="flex items-center gap-2 transition-colors hover:text-white focus-visible:text-white"
          >
            <Icon name="bell" />
            Nächste Veranstaltung: {nextEvent.title}
          </Link>
        ) : null}

        {!banner.showNextEvent ? banner.rightSideText : null}
      </Container>
    </div>
  )
}
