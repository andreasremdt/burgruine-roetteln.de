import type { TwoColumnsWithImageBlock } from '@/payload-types'
import Container from '../ui/container'
import ImageKitImage from '../imagekit-image'

export default function TwoColumnsWithImage({
  title,
  description,
  content,
  image,
}: TwoColumnsWithImageBlock) {
  return (
    <section className="relative pt-24 after:absolute after:right-0 after:bottom-0 after:left-0 after:-z-10 after:h-32 after:bg-gray-50 lg:pt-40">
      <Container>
        <h2 className="mb-2 flex items-center font-sans font-medium text-gray-600 uppercase before:mr-4 before:block before:h-px before:w-8 before:bg-gray-600">
          {title}
        </h2>
        <p className="mb-16 text-5xl text-gray-900">{description}</p>

        <p className="mb-16 ml-[35%] columns-2 gap-18 text-xl">{content}</p>

        <figure>
          <ImageKitImage
            image={image}
            width={1368}
            height={700}
            loading="eager"
            decoding="async"
            className="aspect-video w-full object-cover"
          />
        </figure>
      </Container>
    </section>
  )
}
