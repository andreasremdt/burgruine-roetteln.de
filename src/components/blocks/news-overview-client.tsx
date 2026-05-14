'use client'

import { useMemo, useState } from 'react'
import type { News } from '@/payload-types'
import { formatDate, slugify } from '@/lib/utils'
import Container from '../ui/container'
import Heading from '../ui/heading'
import Text from '../ui/text'
import Button from '../ui/button'
import ImageKitImage from '../imagekit-image'

type Props = {
  title: string
  description?: string | null
  entriesPerPage: number
  items: News[]
  subMenuTitle?: string | null
}

export default function NewsOverviewClient({
  title,
  description,
  entriesPerPage,
  items,
  subMenuTitle,
}: Props) {
  const pageSize = Math.min(50, Math.max(1, entriesPerPage || 6))
  const [pageIndex, setPageIndex] = useState(0)

  const totalPages = Math.max(1, Math.ceil(items.length / pageSize))

  const clampedPageIndex = Math.min(pageIndex, totalPages - 1)

  const visibleItems = useMemo(() => {
    const start = clampedPageIndex * pageSize
    return items.slice(start, start + pageSize)
  }, [items, clampedPageIndex, pageSize])

  const goPrev = () => {
    setPageIndex((p) => {
      const current = Math.min(p, totalPages - 1)
      return Math.max(0, current - 1)
    })
  }

  const goNext = () => {
    setPageIndex((p) => {
      const current = Math.min(p, totalPages - 1)
      return Math.min(totalPages - 1, current + 1)
    })
  }

  const showPagination = items.length > pageSize

  return (
    <section className="py-24 lg:py-40" id={subMenuTitle ? slugify(subMenuTitle) : undefined}>
      <Container>
        <Heading level="h5" tag="h2" dash>
          {title}
        </Heading>
        <Heading level="h1" tag="p" className="mb-16">
          {description}
        </Heading>

        {visibleItems.map((item) => (
          <article className="grid gap-6 border-b border-gray-200 pb-8 mb-8 last:border-b-0 last:pb-0 lg:grid-cols-12 lg:gap-10" key={item.id}>
            {item.image && typeof item.image === 'object' ? (
              <div className="lg:col-span-4">
                <ImageKitImage
                  image={item.image}
                  className="aspect-4/3 w-full object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
            ) : (
              <div className="hidden col-span-4 bg-gray-100 aspect-4/3 lg:flex items-center justify-center text-gray-500 text-sm font-medium tracking-wide uppercase font-sans" aria-hidden="true">Kein Bild verfügbar</div>
            )}
            <div
              className="lg:col-span-8"
            >
              <time
                dateTime={item.date}
                className="block font-sans text-sm font-medium tracking-wide text-gray-500 uppercase"
              >
                {formatDate(item.date)}
              </time>
              <Heading level="h3" tag="h3" className="mb-4">
                {item.title}
              </Heading>
              <Text>{item.text}</Text>
            </div>
          </article>
        ))}

        {showPagination ? (
          <nav
            className="mt-16 flex flex-wrap items-center justify-center gap-2 sm:gap-4"
            aria-label="Seitennavigation Neuigkeiten"
          >
            <Button
              type="button"
              variant="secondary"
              disabled={clampedPageIndex <= 0}
              onClick={goPrev}
            >
              Zurück
            </Button>
            <span className="font-sans text-xs uppercase tracking-wider font-medium block sm:before:content-['|'] sm:after:content-['|'] sm:before:mr-6 sm:after:ml-6 sm:after:text-gray-300 sm:before:text-gray-300">
              Seite {clampedPageIndex + 1} von {totalPages}
            </span>
            <Button
              type="button"
              variant="secondary"
              disabled={clampedPageIndex >= totalPages - 1}
              onClick={goNext}
            >
              Weiter
            </Button>
          </nav>
        ) : null}
      </Container>
    </section>
  )
}
