import type { Page } from '@/payload-types'
import HomeHero from './layout/home-hero'
import TitleHero from './layout/title-hero'
import AdvancedHero from './layout/advanced-hero'
import ContactHero from './layout/contact-hero'

type Props = {
  page: Page
}

export default function HeroRenderer({ page }: Props) {
  if (!page) return null

  switch (page.layout) {
    case 'contact':
      return <ContactHero />
    case 'home':
      return <HomeHero title={page.title} description={page.description} />
    case 'title':
      return <TitleHero title={page.title} />
    case 'title-subtitle-description':
      return (
        <AdvancedHero title={page.title} subtitle={page.subtitle} description={page.description} />
      )
    default:
      return null
  }
}
