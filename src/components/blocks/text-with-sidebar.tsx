import type { TextWithSidebarBlock } from '@/payload-types'
import Container from '../ui/container'
import Prose from './prose'
import BlockRenderer from '../block-renderer'

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
          <h2 className="mb-2 flex items-center font-sans font-medium text-gray-600 uppercase before:mr-4 before:block before:h-px before:w-8 before:bg-gray-600">
            {title}
          </h2>

          <p className="mb-4 text-3xl">{description}</p>

          <Prose content={content} />
        </div>

        <div className="col-span-5 lg:col-span-2">
          <BlockRenderer blocks={sidebar} />
        </div>
      </Container>
    </section>
  )
}
