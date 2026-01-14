import type { TwoColumnsWithImageBlock } from '@/payload-types'
import Container from '../ui/container'
import ImageKitImage from '../imagekit-image'
import Text from '../ui/text'
import Heading from '../ui/heading'
import { slugify } from '@/lib/utils'

export default function TwoColumnsWithImage({
  title,
  description,
  content,
  image,
  subMenuTitle,
}: TwoColumnsWithImageBlock) {
  return (
    <section
      className="relative pt-24 after:absolute after:right-0 after:bottom-0 after:left-0 after:-z-10 after:h-32 after:bg-gray-50 lg:pt-40"
      id={subMenuTitle ? slugify(subMenuTitle) : undefined}
    >
      <Container>
        <Heading level="h5" tag="h2" dash>
          {title}
        </Heading>
        <Heading level="h1" tag="p" className="mb-8">
          {description}
        </Heading>

        <Text className="mb-24 gap-8 md:mb-40 md:ml-[25%] md:columns-2">{content}</Text>

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
