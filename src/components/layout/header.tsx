import Link from 'next/link'
import Container from '../ui/container'
import { getMenuItems, getTours } from '@/lib/fetchers'
import HeaderClient from './header.client'

export default async function Header() {
  const tours = await getTours()
  const menuItems = await getMenuItems()

  return (
    <header className="relative z-20 text-white">
      <Container className="flex h-24 items-center justify-between gap-4 md:h-32">
        <Link href="/" className="font-serif text-3xl sm:text-4xl" prefetch>
          Burgruine Rötteln
        </Link>

        <HeaderClient tours={tours} menuItems={menuItems} />
      </Container>
    </header>
  )
}
