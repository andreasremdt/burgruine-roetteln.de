import type { Metadata } from 'next'
import { getPageBySlug } from '@/lib/fetchers'
import TitleHero from '@/components/layout/title-hero'
import BlockRenderer from '@/components/block-renderer'

export default async function Page() {
  const page = await getPageBySlug('fuehrungen/reservieren')

  return (
    <>
      <TitleHero title={page.title} />

      <BlockRenderer blocks={page.content} />
    </>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('fuehrungen/reservieren')

  return {
    title: page.meta?.title,
    description: page.meta?.description,
    openGraph: {
      title: page.meta?.title || '',
      description: page.meta?.description || '',
    },
    twitter: {
      title: page.meta?.title || '',
      description: page.meta?.description || '',
    },
  }
}
