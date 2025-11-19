import Container from '@/components/ui/container'
import { getPageBySlug } from '@/lib/fetchers'
import TitleHero from '@/components/layout/title-hero'
import OpeningHours from '@/components/blocks/opening-hours'
import BlockRenderer from '@/components/block-renderer'

export default async function Page() {
  const page = await getPageBySlug('fuehrungen/reservieren')

  return (
    <>
      <TitleHero title={page.title} />

      <OpeningHours blockType="opening-hours" layout="horizontal" />

      <BlockRenderer blocks={page.content} />
    </>
  )
}
