'use client'

import { useState } from 'react'
import type { TextWithTwoImagesBlock } from '@/payload-types'
import Container from '../ui/container'
import Button from '../ui/button'
import ImageKitImage from '../imagekit-image'
import Prose from './prose'
import Heading from '../ui/heading'
import { slugify } from '@/lib/utils'
import Lightbox from '../lightbox'

export default function TextWithTwoImages({
  title,
  description,
  subMenuTitle,
  content,
  images,
  buttons,
}: TextWithTwoImagesBlock) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const validImages = images?.filter((image) => typeof image !== 'string') || []

  return (
    <section
      id={subMenuTitle ? slugify(subMenuTitle) : undefined}
      className="relative border-b border-gray-300 bg-gray-100 pt-24 pb-24 after:absolute after:right-0 after:bottom-0 after:left-0 after:h-56 after:bg-white lg:pt-40"
    >
      <Container>
        <Heading level="h5" tag="h2" dash>
          {title}
        </Heading>
        <Heading level="h1" tag="p" className="mb-8">
          {description}
        </Heading>

        <div className="mb-24 md:mb-40 md:ml-[25%]">
          <Prose content={content} className="mb-4" />

          {buttons ? (
            <div className="mt-4 flex flex-wrap gap-4">
              {buttons.map((button) => (
                <Button key={button.id} href={button.link} variant={button.theme}>
                  {button.label}
                </Button>
              ))}
            </div>
          ) : null}
        </div>

        {validImages.length > 0 ? (
          <>
            <div className="relative z-10 grid max-w-7xl grid-cols-3 gap-8 md:gap-16">
              {validImages.map((image, index) => (
                <figure key={image.id}>
                  <a
                    href={image.imagekit?.url || ''}
                    onClick={(event) => {
                      event.preventDefault()
                      setCurrentImageIndex(index)
                      setIsLightboxOpen(true)
                    }}
                    aria-label={`Bild ${index + 1} von ${validImages.length} öffnen`}
                  >
                    <ImageKitImage
                      image={image}
                      loading="lazy"
                      decoding="async"
                      className="mb-1 aspect-square object-cover"
                    />
                  </a>
                  {typeof image === 'object' && image.caption ? (
                    <figcaption className="font-sans font-medium">{image.caption}</figcaption>
                  ) : null}
                </figure>
              ))}
            </div>

            <Lightbox
              images={validImages}
              currentIndex={currentImageIndex}
              isOpen={isLightboxOpen}
              onClose={() => setIsLightboxOpen(false)}
              onNext={() => setCurrentImageIndex((prev) => (prev + 1) % validImages.length)}
              onPrevious={() =>
                setCurrentImageIndex((prev) => (prev - 1 + validImages.length) % validImages.length)
              }
            />
          </>
        ) : null}
      </Container>
    </section>
  )
}
