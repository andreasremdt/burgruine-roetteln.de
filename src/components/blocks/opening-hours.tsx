import { getContactInfo, getOpeningHours } from '@/lib/fetchers'
import type { OpeningHoursBlock } from '@/payload-types'
import Icon from '../ui/icon'
import { cn } from '@/lib/utils'

export default async function OpeningHours({ layout, background }: OpeningHoursBlock) {
  const openingHours = await getOpeningHours()
  const contactInfo = await getContactInfo()

  return (
    <dl
      className={cn('grid grid-cols-1 font-sans', {
        'bg-gray-50 p-12': background,
        'mx-auto max-w-7xl gap-16 px-4 py-24 md:grid-cols-4': layout === 'horizontal',
      })}
    >
      <div>
        <dt className="flex items-center gap-4 font-medium text-gray-900">
          <Icon name="clock" className="size-5" />
          Öffnungszeiten Unterburg
        </dt>
        <dd className="ml-10">
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
        <dt className="flex items-center gap-4 font-medium text-gray-900">
          <Icon name="clock" className="size-5" />
          Öffnungszeiten Oberburg
        </dt>
        <dd className="ml-10">
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
        <dt className="flex items-center gap-4 font-medium text-gray-900">
          <Icon name="map-pin" className="size-5" />
          Lage
        </dt>
        <dd className="ml-10">{contactInfo.location}</dd>
      </div>
      <div
        className={cn({
          'mt-4 border-t border-gray-200 pt-4': layout === 'vertical',
        })}
      >
        <dt className="flex items-center gap-4 font-medium text-gray-900">
          <Icon name="lightning" className="size-5" />
          Ausnahmen
        </dt>
        <dd className="ml-10">{openingHours.exceptions}</dd>
      </div>
    </dl>
  )
}
