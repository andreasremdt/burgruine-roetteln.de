import type { ComponentPropsWithoutRef } from 'react'
import type { GalleryBlock } from '@/payload-types'
import { cn } from '@/lib/utils'
import Container from '../ui/container'
import ImageKitImage from '../imagekit-image'

type Props = GalleryBlock & {
  className?: string
}

export default function Gallery({ title, description, images, className }: Props) {
  return (
    <section className={cn('bg-primary-50 py-24 lg:py-40', className)}>
      <Container>
        {description ? (
          <h2 className="mb-2 flex items-center font-sans font-medium text-neutral-600 uppercase before:mr-4 before:block before:h-px before:w-8 before:bg-neutral-600">
            {title}
          </h2>
        ) : null}
        <p className="mb-16 text-5xl text-neutral-900">{description || title}</p>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {images.map((image) => (
            <figure key={typeof image === 'string' ? image : image.id}>
              <ImageKitImage
                image={image}
                width={300}
                height={300}
                loading="lazy"
                decoding="async"
                className="mb-1 aspect-square w-full rounded-sm object-cover"
              />
              <figcaption className="font-sans font-medium">
                Platzhalter-Text für dieses Bild
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  )
}
