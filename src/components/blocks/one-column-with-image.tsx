import type { OneColumnWithImageBlock } from '@/payload-types'
import Container from '../ui/container'
import ImageKitImage from '../imagekit-image'
import Button from '../ui/button'
import Prose from './prose'

export default function OneColumnWithImage({ content, image, buttons }: OneColumnWithImageBlock) {
  return (
    <section className="relative bg-gray-50 pb-24 before:absolute before:right-0 before:bottom-0 before:left-0 before:h-20 before:bg-gray-50 xl:pb-0 xl:before:bg-white">
      <Container className="relative grid grid-cols-2 gap-16">
        <figure className="col-span-2 md:col-span-1">
          <ImageKitImage
            image={image}
            width={600}
            height={600}
            loading="eager"
            className="mb-1 aspect-square object-cover"
          />
          <figcaption className="font-sans font-medium">
            Der große Burgturm kann erklommen werden.
          </figcaption>
        </figure>

        <div className="col-span-2 md:col-span-1">
          <Prose content={content} />

          {buttons?.map((button) => (
            <Button key={button.id} href={button.link}>
              {button.label}
            </Button>
          ))}
        </div>
      </Container>
    </section>
  )
}
