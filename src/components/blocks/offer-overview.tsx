import Link from 'next/link'
import type { OfferOverviewBlock } from '@/payload-types'
import Container from '../ui/container'
import Heading from '../ui/heading'
import Text from '../ui/text'
import Button from '../ui/button'
import ImageKitImage from '../imagekit-image'
import { slugify } from '@/lib/utils'

export default function OfferOverview({
  title,
  description,
  subtitle,
  offers,
  subMenuTitle,
}: OfferOverviewBlock) {
  return (
    <section
      className="bg-gray-50 py-24 lg:py-40"
      id={subMenuTitle ? slugify(subMenuTitle) : undefined}
    >
      <Container>
        <Heading level="h5" tag="h2" dash>
          {title}
        </Heading>
        <Heading level="h2" tag="h2" className="mb-8">
          {subtitle}
        </Heading>
        <Text className="mb-16 max-w-3xl">{description}</Text>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {offers.map((offer) => (
            <article key={offer.id} className="flex flex-col">
              <ImageKitImage
                image={offer.image}
                width={320}
                height={240}
                className="mb-4 aspect-video w-full object-cover"
              />
              <Heading level="h3" tag="h3">
                <Link
                  prefetch
                  className="text-gray-900 transition-colors hover:text-gray-700 focus-visible:text-gray-700"
                  href={offer.url}
                >
                  {offer.title}
                </Link>
              </Heading>
              <Text className="mb-auto">{offer.description}</Text>
              <Button href={offer.url} className="mt-4 w-max">
                Mehr erfahren
              </Button>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
