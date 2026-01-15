'use client'

import Link from 'next/link'
import type { Tour, Header } from '@/payload-types'
import useMobileMenu from '@/hooks/use-mobile-menu'
import useFocusTrap from '@/hooks/use-focus-trap'
import Icon from '../ui/icon'
import { cn } from '@/lib/utils'
import Heading from '../ui/heading'

type Props = {
  tours: Tour[]
  menuItems: {
    title: string
    url: string
    subMenuItems: { title: string; url: string }[]
  }[]
}

export default function HeaderClient({ tours, menuItems }: Props) {
  const {
    isMenuVisible,
    isHiddenFromScreenReaders,
    setIsMenuVisible,
    tabIndex,
    menuRef,
    toggleRef,
  } = useMobileMenu()
  const focusTrapRef = useFocusTrap<HTMLDivElement>(isMenuVisible)

  return (
    <div ref={focusTrapRef}>
      <button
        type="button"
        aria-label={isMenuVisible ? 'Hauptmenü schließen' : 'Hauptmenü öffnen'}
        aria-live="polite"
        aria-controls="menu"
        ref={toggleRef}
        aria-expanded={isMenuVisible}
        onClick={() => setIsMenuVisible(!isMenuVisible)}
        className={cn(
          'relative z-20 block cursor-pointer transition-colors hover:text-gray-200 focus-visible:text-gray-200 lg:hidden',
          {
            'fixed top-8 right-8 text-gray-900 hover:text-gray-700 focus-visible:text-gray-700':
              isMenuVisible,
          },
        )}
      >
        <Icon name={isMenuVisible ? 'close' : 'menu'} className="z-20 size-8" />
      </button>

      <nav
        ref={menuRef}
        aria-hidden={isHiddenFromScreenReaders ? 'true' : undefined}
        id="menu"
        className={cn(
          'fixed top-0 right-0 bottom-0 left-0 w-full overflow-auto bg-white py-8 pr-32 pl-8 shadow-sm sm:left-auto sm:w-auto lg:pointer-events-auto lg:static lg:overflow-visible lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none',
          {
            'pointer-events-none opacity-0': !isMenuVisible,
          },
        )}
      >
        <Heading level="h2" tag="h2" className="mb-8 font-serif lg:hidden">
          Menü
        </Heading>
        <ul className="flex flex-col gap-4 font-medium uppercase lg:flex-row lg:gap-10 lg:text-sm">
          {menuItems
            .filter((menuItem) => menuItem !== null)
            .map((menu) => (
              <li key={menu.url} className="group relative">
                <Link
                  prefetch
                  href={menu.url}
                  className="flex items-center gap-2 text-gray-900 transition-colors lg:text-white lg:hover:text-gray-200 lg:focus-visible:text-gray-200"
                  tabIndex={tabIndex}
                >
                  {menu.title}
                  {menu.subMenuItems.length > 0 ? (
                    <Icon name="chevron-down" className="hidden lg:block" />
                  ) : null}
                </Link>

                {menu.subMenuItems.length > 0 ? (
                  <ul className="top-full left-0 min-w-56 bg-white py-2 group-focus-within:block group-hover:block before:absolute before:-top-2 before:h-2 before:w-full lg:absolute lg:mt-2 lg:hidden lg:shadow-sm">
                    {menu.subMenuItems.map((subMenu) => (
                      <li key={subMenu.url}>
                        <Link
                          prefetch
                          className="block px-4 py-2 text-gray-700 transition-colors lg:hover:bg-gray-100 lg:focus-visible:bg-gray-100"
                          href={subMenu.url}
                          tabIndex={tabIndex}
                        >
                          {subMenu.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          {/* <li>
            <Link
              prefetch
              href="/burg"
              className="text-gray-900 transition-colors lg:text-white lg:hover:text-gray-200 lg:focus-visible:text-gray-200"
              tabIndex={tabIndex}
            >
              Die Burg
            </Link>
          </li>
          <li className="group relative">
            <Link
              prefetch
              className="flex items-center gap-2 text-gray-900 transition-colors lg:text-white lg:hover:text-gray-200 lg:focus-visible:text-gray-200"
              href="/besuchen"
              tabIndex={tabIndex}
            >
              Ihr Besuch
              <Icon name="chevron-down" className="hidden lg:block" />
            </Link>
            <ul className="top-full left-0 min-w-56 bg-white py-2 group-focus-within:block group-hover:block before:absolute before:-top-2 before:h-2 before:w-full lg:absolute lg:mt-2 lg:hidden lg:shadow-sm">
              <li>
                <Link
                  prefetch
                  className="block px-4 py-2 text-gray-700 transition-colors lg:hover:bg-gray-100 lg:focus-visible:bg-gray-100"
                  href="/besuchen#anfahrt"
                  tabIndex={tabIndex}
                >
                  Anfahrt
                </Link>
              </li>
              <li>
                <Link
                  prefetch
                  className="block px-4 py-2 text-gray-700 transition-colors lg:hover:bg-gray-100 lg:focus-visible:bg-gray-100"
                  href="/besuchen#eintrittspreise"
                  tabIndex={tabIndex}
                >
                  Eintrittspreise
                </Link>
              </li>
              <li>
                <Link
                  prefetch
                  className="block px-4 py-2 text-gray-700 transition-colors lg:hover:bg-gray-100 lg:focus-visible:bg-gray-100"
                  href="/besuchen#veranstaltungen"
                  tabIndex={tabIndex}
                >
                  Veranstaltungen
                </Link>
              </li>
            </ul>
          </li>
          <li className="group relative">
            <Link
              prefetch
              className="flex items-center gap-2 text-gray-900 transition-colors lg:text-white lg:hover:text-gray-200 lg:focus-visible:text-gray-200"
              href="/fuehrungen"
              tabIndex={tabIndex}
            >
              Führungen <Icon name="chevron-down" className="hidden lg:block" />
            </Link>
            <ul className="top-full left-0 min-w-56 bg-white py-2 group-focus-within:block group-hover:block before:absolute before:-top-2 before:h-2 before:w-full lg:absolute lg:mt-2 lg:hidden lg:shadow-sm">
              {tours.map((tour) => (
                <li key={tour.id}>
                  <Link
                    prefetch
                    className="block px-4 py-2 text-gray-700 transition-colors lg:hover:bg-gray-100 lg:focus-visible:bg-gray-100"
                    href={`/fuehrungen/${tour.slug}`}
                    tabIndex={tabIndex}
                  >
                    {tour.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li className="group relative">
            <Link
              prefetch
              className="flex items-center gap-2 text-gray-900 transition-colors lg:text-white lg:hover:text-gray-200 lg:focus-visible:text-gray-200"
              href="/verein"
              tabIndex={tabIndex}
            >
              Der Verein <Icon name="chevron-down" className="hidden lg:block" />
            </Link>
            <ul className="top-full left-0 min-w-56 bg-white py-2 group-focus-within:block group-hover:block before:absolute before:-top-2 before:h-2 before:w-full lg:absolute lg:mt-2 lg:hidden lg:shadow-sm">
              <li>
                <Link
                  prefetch
                  className="block px-4 py-2 text-gray-700 transition-colors lg:hover:bg-gray-100 lg:focus-visible:bg-gray-100"
                  href="/verein#arbeitsgruppe"
                  tabIndex={tabIndex}
                >
                  Arbeitsgruppe
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              prefetch
              className="text-gray-900 transition-colors lg:text-white lg:hover:text-gray-200 lg:focus-visible:text-gray-200"
              href="/kontakt"
              tabIndex={tabIndex}
            >
              Kontakt
            </Link>
          </li> */}
        </ul>
      </nav>
    </div>
  )
}
