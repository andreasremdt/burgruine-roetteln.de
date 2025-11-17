'use client'

import { useState } from 'react'
import type { Media } from '@/payload-types'
import ImageKitImage from '../imagekit-image'
import Lightbox from '../lightbox'

type Props = {
  images: (string | Media)[]
}

export default function FooterGallery({ images }: Props) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  return (
    <figure className="grid grid-cols-6">
      {images.map((image, index) => (
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
            key={typeof image === 'string' ? image : image.id}
            image={image}
            width={400}
            height={400}
            className="aspect-square w-full object-cover grayscale transition-all duration-300 hover:grayscale-0"
          />
        </a>
      ))}

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
    </figure>
  )
}
