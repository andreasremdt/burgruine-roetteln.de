import type { TimelineBlock } from '@/payload-types'
import { cn } from '@/lib/utils'
import Container from '../ui/container'
import Prose from './prose'
import Heading from '../ui/heading'

export default function Timeline({ description, items }: TimelineBlock) {
  return (
    <Container tag="section" aria-label="Timeline" className="py-24 lg:py-40">
      <Heading level="h3" tag="p" className="mb-24 text-center lg:mb-40">
        {description}
      </Heading>

      {items ? (
        <ul className="relative mx-auto max-w-4xl after:absolute after:-top-8 after:-bottom-8 after:left-1/2 after:-z-10 after:w-px md:after:bg-gray-300">
          {items.map((item, index) => (
            <li
              key={item.id}
              className={cn('relative flex flex-col', {
                'mb-20': index < items.length - 1,
                'md:items-end md:text-right': index % 2 === 1,
              })}
            >
              <Heading
                level="h3"
                tag="h3"
                className="mb-2 bg-white font-sans text-2xl font-bold md:absolute md:left-1/2 md:-translate-x-1/2"
              >
                {item.year}
              </Heading>
              <Prose
                className={cn('flex flex-col text-balance md:max-w-2/5', {
                  'items-end': index % 2 === 1,
                })}
                content={item.content}
                imageOverride={{ width: 200, height: 300, className: 'w-max mb-0' }}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-2xl text-gray-900">Keine Einträge in der Timeline.</p>
      )}
    </Container>
  )
}
