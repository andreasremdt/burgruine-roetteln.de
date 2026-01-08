import { notFound } from 'next/navigation'
import { getTourBySlug } from '@/lib/fetchers'
import AdvancedHero from '@/components/layout/advanced-hero'
import Container from '@/components/ui/container'
import Button from '@/components/ui/button'
import ImageKitImage from '@/components/imagekit-image'
import Prose from '@/components/blocks/prose'
import Gallery from '@/components/blocks/gallery'
import { Metadata } from 'next'

type Props = {
  params: Promise<{
    slug: string
  }>
}

export default async function Page({ params }: Props) {
  const { slug } = await params

  const tour = await getTourBySlug(slug)

  if (!tour) {
    notFound()
  }

  return (
    <>
      <AdvancedHero title={tour.title} subtitle={tour.subtitle} description={tour.description} />

      <section className="bg-gray-50 pb-24 lg:pb-40">
        <Container className="relative grid grid-cols-2 gap-16">
          <figure className="col-span-2 md:col-span-1">
            <ImageKitImage
              image={tour.image}
              width={600}
              height={600}
              loading="eager"
              className="mb-1 aspect-square object-cover"
            />
            {tour.caption ? (
              <figcaption className="font-sans font-medium">{tour.caption}</figcaption>
            ) : null}
          </figure>

          <div className="col-span-2 md:col-span-1">
            <Prose content={tour.content} className="mb-4" />

            <Button href={`/fuehrungen/reservieren?type=${encodeURIComponent(tour.title)}`}>
              Jetzt reservieren &rarr;
            </Button>
          </div>
        </Container>
      </section>

      {tour.images ? (
        <Gallery
          title="Impressionen dieser Führung"
          images={tour.images}
          className="bg-white"
          blockType="gallery"
        />
      ) : null}
    </>
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const tour = await getTourBySlug(slug)

  return {
    title: tour.meta?.title,
    description: tour.meta?.description,
    openGraph: {
      title: tour.meta?.title || '',
      description: tour.meta?.description || '',
    },
    twitter: {
      title: tour.meta?.title || '',
      description: tour.meta?.description || '',
    },
  }
}
