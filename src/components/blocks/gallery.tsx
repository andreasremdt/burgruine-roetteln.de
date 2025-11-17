'use client'

import type { GalleryBlock } from '@/payload-types'
import { cn } from '@/lib/utils'
import Container from '../ui/container'
import ImageKitImage from '../imagekit-image'
import Heading from '../ui/heading'
import { useState } from 'react'
import Lightbox from '../lightbox'

type Props = GalleryBlock & {
  className?: string
}

export default function Gallery({ title, description, images, className }: Props) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  return (
    <section className={cn('bg-gray-50 py-24 lg:py-40', className)}>
      <Container>
        {description ? (
          <h2 className="mb-2 flex items-center font-sans font-medium text-gray-600 uppercase before:mr-4 before:block before:h-px before:w-8 before:bg-gray-600">
            {title}
          </h2>
        ) : null}
        <Heading level="h1" tag="h2" className="mb-16">
          {description || title}
        </Heading>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {images.map((image, index) => (
            <figure key={typeof image === 'string' ? image : image.id}>
              <a
                href={typeof image === 'string' ? image : image.imagekit?.url || ''}
                onClick={(event) => {
                  event.preventDefault()
                  setCurrentImageIndex(index)
                  setIsLightboxOpen(true)
                }}
                aria-label={`Bild ${index + 1} von ${images.length} öffnen`}
              >
                <ImageKitImage
                  image={image}
                  width={300}
                  height={300}
                  loading="lazy"
                  decoding="async"
                  className="mb-1 aspect-square w-full object-cover"
                />
              </a>
              <figcaption className="font-sans font-medium">
                Platzhalter-Text für dieses Bild
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>

      <Lightbox
        images={images}
        currentIndex={currentImageIndex}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        onNext={() => setCurrentImageIndex((prev) => (prev + 1) % images.length)}
        onPrevious={() =>
          setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
        }
      />
    </section>
  )
}
