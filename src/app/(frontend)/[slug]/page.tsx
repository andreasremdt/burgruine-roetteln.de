import { notFound } from 'next/navigation'
import { getPageBySlug } from '@/lib/fetchers'
import HeroRenderer from '@/components/hero-renderer'
import BlockRenderer from '@/components/block-renderer'

type Props = {
  params: Promise<{
    slug: string
  }>
}

export default async function Page({ params }: Props) {
  const { slug } = await params

  const page = await getPageBySlug(slug || 'home')

  if (!page) {
    notFound()
  }

  return (
    <>
      <HeroRenderer page={page} />
      <BlockRenderer blocks={page.content} />
    </>
  )
}
