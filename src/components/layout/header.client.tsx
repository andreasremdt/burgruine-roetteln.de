'use client'

import Link from 'next/link'
import type { Tour } from '@/payload-types'
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

export default function HeaderClient({ menuItems }: Props) {
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
                  onClick={() => setIsMenuVisible(false)}
                >
                  {menu.title}
                  {menu.subMenuItems.length > 0 ? (
                    <Icon name="chevron-down" className="hidden lg:block" />
                  ) : null}
                </Link>

                {menu.subMenuItems.length > 0 ? (
                  <ul className="top-full left-0 min-w-56 bg-white pt-2 group-focus-within:block group-hover:block before:absolute before:-top-2 before:h-2 before:w-full lg:absolute lg:mt-2 lg:hidden lg:py-2 lg:shadow-sm">
                    {menu.subMenuItems.map((subMenu) => (
                      <li key={subMenu.url}>
                        <Link
                          prefetch
                          className="block px-4 py-2 text-gray-700 transition-colors lg:hover:bg-gray-100 lg:focus-visible:bg-gray-100"
                          href={subMenu.url}
                          onClick={() => setIsMenuVisible(false)}
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
        </ul>
      </nav>
    </div>
  )
}
