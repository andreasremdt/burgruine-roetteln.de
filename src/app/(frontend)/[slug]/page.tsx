import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { getPageBySlug } from '@/lib/fetchers'
import HeroRenderer from '@/components/hero-renderer'
import BlockRenderer from '@/components/block-renderer'
import LivePreview from '@/components/live-preview'
import { Metadata } from 'next'

type Props = {
  params: Promise<{
    slug: string
  }>
}

export default async function Page({ params }: Props) {
  const { isEnabled } = await draftMode()
  const { slug } = await params

  const page = await getPageBySlug(slug || 'home')

  if (!page) {
    notFound()
  }

  return (
    <>
      <HeroRenderer page={page} />
      <BlockRenderer blocks={page.content} />

      {isEnabled ? <LivePreview /> : null}
    </>
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = await getPageBySlug(slug || 'home')

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
