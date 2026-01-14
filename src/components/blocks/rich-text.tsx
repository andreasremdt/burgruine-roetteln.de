import type { RichTextBlock } from '@/payload-types'
import Prose from './prose'
import Container from '../ui/container'
import { slugify } from '@/lib/utils'

export default function RichText({ content, subMenuTitle }: RichTextBlock) {
  return (
    <Container
      tag="section"
      className="py-24 lg:py-40"
      id={subMenuTitle ? slugify(subMenuTitle) : undefined}
    >
      <Prose content={content} />
    </Container>
  )
}
