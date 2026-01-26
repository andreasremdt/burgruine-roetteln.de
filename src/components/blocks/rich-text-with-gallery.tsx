'use client'

import type { RichTextWithGalleryBlock } from '@/payload-types'
import { cn, slugify } from '@/lib/utils'
import Container from '../ui/container'
import ImageKitImage from '../imagekit-image'
import Heading from '../ui/heading'
import { useState } from 'react'
import Lightbox from '../lightbox'
import Prose from './prose'

type Props = RichTextWithGalleryBlock & {
    className?: string
}

export default function RichTextWithGallery({ content, title, description, className, groups, subMenuTitle }: Props) {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const allImages = groups?.flatMap((group) => group.images.filter((image) => typeof image !== 'string')) || []

    return (
        <section
            className={cn('bg-gray-50 py-24 lg:py-40', className)}
            id={subMenuTitle ? slugify(subMenuTitle) : undefined}
        >
            <Container>
                {description ? (
                    <Heading level="h5" tag="h2" dash>
                        {title}
                    </Heading>
                ) : null}
                <Heading level="h1" tag="h2" className="mb-16">
                    {description || title}
                </Heading>

                <Prose content={content} className={cn({
                    'mb-16': groups && groups.length > 0,
                })} />

                {groups?.map((group) => (
                    <div key={group.id} className="mb-8 last:mb-0">
                        {group.title ? (
                            <Heading level="h2" tag="h3" className="mb-4 mt-8">
                                {group.title}
                            </Heading>
                        ) : null}


                        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                            {group.images
                                .filter((image) => typeof image !== 'string')
                                .map((image, index) => (
                                    <figure key={typeof image === 'string' ? image : image.id}>
                                        <a
                                            href={typeof image === 'string' ? image : image.imagekit?.url || ''}
                                            onClick={(event) => {
                                                event.preventDefault()
                                                setCurrentImageIndex(allImages.indexOf(image))
                                                setIsLightboxOpen(true)
                                            }}
                                            aria-label={`Bild ${index + 1} von ${group.images.filter((image) => typeof image !== 'string').length} öffnen`}
                                        >
                                            <ImageKitImage
                                                image={image}
                                                loading="lazy"
                                                decoding="async"
                                                className="mb-1 aspect-square w-full object-cover"
                                            />
                                        </a>
                                        {typeof image === 'object' && image.caption ? (
                                            <figcaption className="font-sans text-sm font-medium md:text-base">
                                                {image.caption}
                                            </figcaption>
                                        ) : null}
                                    </figure>
                                ))}
                        </div>
                    </div>
                ))}

            </Container>

            <Lightbox
                images={allImages}
                currentIndex={currentImageIndex}
                isOpen={isLightboxOpen}
                onClose={() => setIsLightboxOpen(false)}
                onNext={() => setCurrentImageIndex((prev) => (prev + 1) % allImages.length)}
                onPrevious={() =>
                    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length)
                }
            />
        </section>
    )
}
