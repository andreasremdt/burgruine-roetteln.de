import Link from 'next/link'
import Image from 'next/image'
import type { OfferOverviewBlock } from '@/payload-types'
import Container from '../ui/container'
import Heading from '../ui/heading'

export default function OfferOverview({ title, description, offers }: OfferOverviewBlock) {
  return (
    <section className="bg-gray-50 py-24 lg:py-40">
      <Container className="grid grid-cols-5 gap-16">
        <div className="col-span-5 md:col-span-2">
          <Heading level="h2" tag="h2" className="mb-8">
            {title}
          </Heading>
          <p className="text-xl">{description}</p>
        </div>

        <div className="col-span-5 grid grid-cols-1 gap-8 md:col-span-3 lg:grid-cols-2">
          {offers.map((offer) => (
            <article key={offer.id}>
              <Image src="/history.svg" width="60" height="60" className="mb-4 opacity-50" alt="" />
              <h3 className="mb-2 text-3xl">
                <Link
                  prefetch
                  className="text-gray-900 transition-colors hover:text-gray-700 focus-visible:text-gray-700"
                  href={offer.url}
                >
                  {offer.title}
                </Link>
              </h3>
              <p className="text-xl">{offer.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
