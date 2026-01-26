import type { OneColumnWithImageBlock } from '@/payload-types'
import Container from '../ui/container'
import ImageKitImage from '../imagekit-image'
import Button from '../ui/button'
import Prose from './prose'
import { slugify } from '@/lib/utils'

export default function OneColumnWithImage({
  content,
  image,
  buttons,
  subMenuTitle,
}: OneColumnWithImageBlock) {
  return (
    <section
      className="bg-gray-50 pb-24"
      id={subMenuTitle ? slugify(subMenuTitle) : undefined}
    >
      <Container className="relative grid grid-cols-2 gap-16">
        <figure className="col-span-2 mt-2 md:col-span-1">
          <ImageKitImage
            image={image}
            loading="eager"
            className="mb-1 aspect-square w-full object-cover"
          />
          {typeof image === 'object' && image.caption ? (
            <figcaption className="font-sans font-medium">{image.caption}</figcaption>
          ) : null}
        </figure>

        <div className="col-span-2 md:col-span-1">
          <Prose content={content} />

          {buttons ? (
            <div className="mt-4 flex flex-wrap gap-4">
              {buttons?.map((button) => (
                <Button key={button.id} href={button.link}>
                  {button.label}
                </Button>
              ))}
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  )
}
