import Link from 'next/link'
import Container from '../ui/container'
import Icon from '../ui/icon'
import { getTours } from '@/lib/fetchers'

export default async function Header() {
  const tours = await getTours()
  console.log(tours)
  return (
    <header className="relative z-20 text-white">
      <Container className="flex h-24 items-center justify-between gap-4 border-b border-gray-500 md:h-32">
        <a href="/" className="font-serif text-3xl sm:text-4xl">
          Burgruine Rötteln
        </a>

        <button
          type="button"
          aria-label="Hauptmenü öffnen"
          aria-live="polite"
          aria-controls="menu"
          aria-expanded="false"
          data-action="toggle-menu"
          className="z-20 block cursor-pointer transition-colors hover:text-gray-200 focus-visible:text-gray-200 lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            aria-hidden="true"
            stroke="currentColor"
            className="z-20 h-10 w-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              className="hidden"
              d="M6 18 18 6M6 6l12 12"
            ></path>
          </svg>
        </button>

        <nav
          data-action="menu"
          className="pointer-events-none fixed top-0 right-0 bottom-0 overflow-auto bg-white py-8 pr-32 pl-8 opacity-0 shadow-sm lg:pointer-events-auto lg:static lg:overflow-visible lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none"
        >
          <ul className="flex flex-col gap-4 font-medium uppercase lg:flex-row lg:gap-10 lg:text-sm">
            <li>
              <Link
                href="/burg"
                className="transition-colors hover:text-gray-200 focus-visible:text-gray-200"
              >
                Die Burg
              </Link>
            </li>
            <li className="group relative">
              <Link
                className="text flex items-center gap-2 transition-colors hover:text-gray-200 focus-visible:text-gray-200"
                href="/besuchen"
              >
                Ihr Besuch
                <Icon name="chevron-down" className="hidden lg:block" />
              </Link>
              <ul className="top-full left-0 mt-2 bg-white py-2 group-focus-within:block group-hover:block before:absolute before:-top-2 before:h-2 before:w-full lg:absolute lg:hidden lg:shadow-sm">
                <li>
                  <Link
                    className="block px-4 py-2 text-gray-700 transition-colors hover:bg-gray-100 focus-visible:bg-gray-100"
                    href="/besuchen#anfahrt"
                  >
                    Anfahrt
                  </Link>
                </li>
                <li>
                  <Link
                    className="block px-4 py-2 text-gray-700 transition-colors hover:bg-gray-100 focus-visible:bg-gray-100"
                    href="/besuchen#eintrittspreise"
                  >
                    Eintrittspreise
                  </Link>
                </li>
                <li>
                  <Link
                    className="block px-4 py-2 text-gray-700 transition-colors hover:bg-gray-100 focus-visible:bg-gray-100"
                    href="/besuchen#veranstaltungen"
                  >
                    Veranstaltungen
                  </Link>
                </li>
              </ul>
            </li>
            <li className="group relative">
              <Link
                className="text flex items-center gap-2 transition-colors hover:text-gray-200 focus-visible:text-gray-200"
                href="/fuehrungen"
              >
                Führungen <Icon name="chevron-down" className="hidden lg:block" />
              </Link>
              <ul className="top-full left-0 mt-2 bg-white py-2 group-focus-within:block group-hover:block before:absolute before:-top-2 before:h-2 before:w-full lg:absolute lg:hidden lg:shadow-sm">
                {tours.map((tour) => (
                  <li key={tour.id}>
                    <Link
                      className="block px-4 py-2 text-gray-700 transition-colors hover:bg-gray-100 focus-visible:bg-gray-100"
                      href={`/fuehrungen/${tour.slug}`}
                    >
                      {tour.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="group relative">
              <Link
                className="text flex items-center gap-2 transition-colors hover:text-gray-200 focus-visible:text-gray-200"
                href="/verein"
              >
                Der Verein <Icon name="chevron-down" className="hidden lg:block" />
              </Link>
              <ul className="top-full left-0 mt-2 bg-white py-2 group-focus-within:block group-hover:block before:absolute before:-top-2 before:h-2 before:w-full lg:absolute lg:hidden lg:shadow-sm">
                <li>
                  <Link
                    className="block px-4 py-2 text-gray-700 transition-colors hover:bg-gray-100 focus-visible:bg-gray-100"
                    href="/verein#arbeitsgruppe"
                  >
                    Arbeitsgruppe
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                className="transition-colors hover:text-gray-200 focus-visible:text-gray-200"
                href="/kontakt"
              >
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  )
}
