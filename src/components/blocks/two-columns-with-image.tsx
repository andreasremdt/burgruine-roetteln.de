import type { TwoColumnsWithImageBlock } from '@/payload-types'
import Container from '../ui/container'
import ImageKitImage from '../imagekit-image'
import Text from '../ui/text'
import Heading from '../ui/heading'

export default function TwoColumnsWithImage({
  title,
  description,
  content,
  image,
}: TwoColumnsWithImageBlock) {
  return (
    <section className="relative pt-24 after:absolute after:right-0 after:bottom-0 after:left-0 after:-z-10 after:h-32 after:bg-gray-50 lg:pt-40">
      <Container>
        <Heading level="h5" tag="h2" dash>
          {title}
        </Heading>
        <Heading level="h1" tag="p" className="mb-8">
          {description}
        </Heading>

        <Text className="mb-24 gap-8 md:mb-40 md:ml-[35%] md:columns-2">{content}</Text>

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
