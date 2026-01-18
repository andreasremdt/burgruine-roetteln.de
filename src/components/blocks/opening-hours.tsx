import { getContactInfo, getOpeningHours } from '@/lib/fetchers'
import type { OpeningHoursBlock } from '@/payload-types'
import { cn } from '@/lib/utils'
import Icon from '../ui/icon'
import { slugify } from '@/lib/utils'
import OpeningHoursImageButton from './opening-hours-image-button'

export default async function OpeningHours({
  layout,
  background,
  subMenuTitle,
  showImage,
  image,
}: OpeningHoursBlock) {
  const openingHours = await getOpeningHours()
  const contactInfo = await getContactInfo()

  return (
    <section
      className={cn({
        'bg-gray-50 p-6 md:p-12': background,
        'px-4 py-20 md:py-40': layout === 'horizontal',
      })}
      id={subMenuTitle ? slugify(subMenuTitle) : undefined}
    >
      <dl
        className={cn('grid grid-cols-1', {
          'mx-auto max-w-5xl gap-8 px-4 md:grid-cols-2 md:gap-16': layout === 'horizontal',
        })}
      >
        <div>
          <dt className="mb-2 flex items-center gap-4 font-sans text-sm font-medium text-gray-900 uppercase sm:text-base">
            <Icon name="clock" className="size-5" />
            Öffnungszeiten Unterburg
          </dt>
          <dd className="ml-9 text-lg">
            {openingHours.titleInnerWard}
            <br />
            {openingHours.notesInnerWard}
          </dd>
        </div>
        <div
          className={cn({
            'mt-4 border-t border-gray-200 pt-4': layout === 'vertical',
          })}
        >
          <dt className="mb-2 flex items-center gap-4 font-sans text-sm font-medium text-gray-900 uppercase sm:text-base">
            <Icon name="clock" className="size-5" />
            Öffnungszeiten Oberburg
          </dt>
          <dd className="ml-9 text-lg">
            {openingHours.titleOuterWard}
            <br />
            {openingHours.notesOuterWard}
          </dd>
        </div>
        <div
          className={cn({
            'mt-4 border-t border-gray-200 pt-4': layout === 'vertical',
          })}
        >
          <dt className="mb-2 flex items-center gap-4 font-sans text-sm font-medium text-gray-900 uppercase sm:text-base">
            <Icon name="map-pin" className="size-5" />
            Lage
          </dt>
          <dd className="ml-9 text-lg">{contactInfo.location}</dd>
        </div>
        <div
          className={cn({
            'mt-4 border-t border-gray-200 pt-4': layout === 'vertical',
          })}
        >
          <dt className="mb-2 flex items-center gap-4 font-sans text-sm font-medium text-gray-900 uppercase sm:text-base">
            <Icon name="lightning" className="size-5" />
            Ausnahmen
          </dt>
          <dd className="ml-9 text-lg">{openingHours.exceptions}</dd>
        </div>
      </dl>

      {showImage ? <OpeningHoursImageButton image={image} /> : null}
    </section>
  )
}
