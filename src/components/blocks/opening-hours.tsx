import { getContactInfo, getOpeningHours } from '@/lib/fetchers'
import type { OpeningHoursBlock } from '@/payload-types'
import Container from '../ui/container'
import Icon from '../ui/icon'

export default async function OpeningHours({ layout, background }: OpeningHoursBlock) {
  const openingHours = await getOpeningHours()
  const contactInfo = await getContactInfo()

  return (
    <section className="py-24 lg:py-40">
      <Container>
        <dl className="grid grid-cols-1 gap-16 font-sans md:grid-cols-4">
          <div>
            <dt className="flex items-center gap-4 font-medium text-neutral-900">
              <Icon name="clock" className="size-6" />
              Öffnungszeiten Unterburg
            </dt>
            <dd className="ml-10">
              {openingHours.titleInnerWard}
              <br />
              {openingHours.notesInnerWard}
            </dd>
          </div>
          <div>
            <dt className="flex items-center gap-4 font-medium text-neutral-900">
              <Icon name="clock" className="size-6" />
              Öffnungszeiten Oberburg
            </dt>
            <dd className="ml-10">
              {openingHours.titleOuterWard}
              <br />
              {openingHours.notesOuterWard}
            </dd>
          </div>
          <div>
            <dt className="flex items-center gap-4 font-medium text-neutral-900">
              <Icon name="map-pin" className="size-6" />
              Lage
            </dt>
            <dd className="ml-10">{contactInfo.location}</dd>
          </div>
          <div>
            <dt className="flex items-center gap-4 font-medium text-neutral-900">
              <Icon name="lightning" className="size-6" />
              Ausnahmen
            </dt>
            <dd className="ml-10">{openingHours.exceptions}</dd>
          </div>
        </dl>
      </Container>
    </section>
  )
}
