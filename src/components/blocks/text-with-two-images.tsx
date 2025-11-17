import type { TextWithTwoImagesBlock } from '@/payload-types'
import Container from '../ui/container'
import Button from '../ui/button'
import ImageKitImage from '../imagekit-image'
import Prose from './prose'
import Heading from '../ui/heading'

export default function TextWithTwoImages({
  title,
  description,
  content,
  image,
  buttons,
}: TextWithTwoImagesBlock) {
  return (
    <section className="relative border-b border-gray-300 bg-gray-100 pt-24 pb-24 after:absolute after:right-0 after:bottom-0 after:left-0 after:h-56 after:bg-white lg:pt-40">
      <Container>
        <h2 className="mb-2 flex items-center font-sans font-medium text-gray-600 uppercase before:mr-4 before:block before:h-px before:w-8 before:bg-gray-600">
          {title}
        </h2>
        <Heading level="h1" tag="p" className="mb-16">
          {description}
        </Heading>

        <div className="mb-24 ml-[35%] md:mb-40">
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

        <div className="relative z-10 grid grid-cols-2 gap-16">
          <figure>
            <ImageKitImage
              image={image[0]}
              loading="lazy"
              decoding="async"
              width={600}
              height={600}
              className="mb-1 aspect-square object-cover"
            />
            <figcaption className="font-sans font-medium">Mitglieder bei der Arbeit</figcaption>
          </figure>

          <figure className="mt-16">
            <ImageKitImage
              image={image[1]}
              loading="lazy"
              decoding="async"
              className="mb-1 aspect-square object-cover"
            />
            <figcaption className="font-sans font-medium">Mitglieder bei der Arbeit</figcaption>
          </figure>
        </div>
      </Container>
    </section>
  )
}
