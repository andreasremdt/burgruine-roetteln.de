import Link from 'next/link'
import Container from '../ui/container'
import Icon from '../ui/icon'

export default function Banner() {
  return (
    <div className="bg-kornblau-400 font-medium text-white">
      <Container className="flex flex-wrap items-center justify-between gap-4 py-4 text-sm">
        <p className="hidden items-center gap-2 md:flex">
          <Icon name="clock" />
          Täglich geöffnet von 10:00 - 18:00 Uhr
        </p>

        <Link
          href="/besuchen#veranstaltungen"
          className="flex items-center gap-2 transition-colors hover:text-white focus-visible:text-white"
        >
          <Icon name="bell" />
          Nächste Veranstaltung: 1. Mai Hock auf Rötteln
        </Link>
      </Container>
    </div>
  )
}
