import type { TextWithTwoImagesBlock } from '@/payload-types'
import Container from '../ui/container'
import Button from '../ui/button'
import ImageKitImage from '../imagekit-image'
import Prose from './prose'

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
        <p className="mb-16 text-5xl text-gray-900">{description}</p>

        <div className="mb-16 ml-[35%]">
          <Prose content={content} className="mb-4" />

          {buttons?.map((button) => (
            <Button key={button.id} href={button.link} variant={button.theme}>
              {button.label}
            </Button>
          ))}
        </div>

        <div className="relative z-10 grid grid-cols-2 gap-16">
          <figure>
            <ImageKitImage
              image={image[0]}
              loading="lazy"
              decoding="async"
              width={600}
              height={600}
              className="mb-1 aspect-square rounded-sm object-cover"
            />
            <figcaption className="font-sans font-medium">Mitglieder bei der Arbeit</figcaption>
          </figure>

          <figure className="mt-16">
            <ImageKitImage
              image={image[1]}
              loading="lazy"
              decoding="async"
              className="mb-1 aspect-square rounded-sm object-cover"
            />
            <figcaption className="font-sans font-medium">Mitglieder bei der Arbeit</figcaption>
          </figure>
        </div>
      </Container>
    </section>
  )
}
