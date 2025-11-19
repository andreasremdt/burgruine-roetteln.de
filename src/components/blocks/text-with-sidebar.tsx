import type { TextWithSidebarBlock } from '@/payload-types'
import Container from '../ui/container'
import Prose from './prose'
import BlockRenderer from '../block-renderer'
import Heading from '../ui/heading'

export default function TextWithSidebar({
  title,
  description,
  content,
  sidebar,
}: TextWithSidebarBlock) {
  return (
    <section className="py-24 lg:py-40">
      <Container className="grid grid-cols-5 gap-16">
        <div className="col-span-5 lg:col-span-3">
          <Heading level="h5" tag="h2" dash>
            {title}
          </Heading>

          <p className="mb-4 text-xl leading-snug sm:text-2xl md:text-3xl md:leading-tight">
            {description}
          </p>

          <Prose content={content} />
        </div>

        <div className="col-span-5 lg:col-span-2">
          <BlockRenderer blocks={sidebar} />
        </div>
      </Container>
    </section>
  )
}
