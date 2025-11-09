import { notFound } from 'next/navigation'
import { getTourBySlug } from '@/lib/fetchers'
import AdvancedHero from '@/components/layout/advanced-hero'
import Container from '@/components/ui/container'
import Button from '@/components/ui/button'
import ImageKitImage from '@/components/imagekit-image'
import Prose from '@/components/blocks/prose'

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

      <section className="bg-primary-50 pb-24 lg:pb-40">
        <Container className="relative grid grid-cols-2 gap-16">
          <figure className="col-span-2 md:col-span-1">
            <ImageKitImage
              image={tour.image}
              width={600}
              height={600}
              loading="eager"
              className="mb-1 aspect-square rounded-sm object-cover"
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
        <section className="py-24 lg:py-40">
          <Container>
            <h2 className="mb-12 text-5xl text-neutral-900">Impressionen dieser Führung</h2>

            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {tour.images.map((image) => (
                <figure key={typeof image === 'string' ? image : image.id}>
                  <ImageKitImage
                    image={image}
                    width={300}
                    height={300}
                    loading="lazy"
                    decoding="async"
                    className="mb-1 aspect-square w-full rounded-sm object-cover"
                  />
                  <figcaption className="font-sans font-medium">
                    Platzhalter-Text für dieses Bild
                  </figcaption>
                </figure>
              ))}
            </div>
          </Container>
        </section>
      ) : null}
    </>
  )
}
