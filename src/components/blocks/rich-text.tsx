import type { RichTextBlock } from '@/payload-types'
import Prose from './prose'
import Container from '../ui/container'

export default function RichText({ content }: RichTextBlock) {
  return (
    <Container tag="section" className="py-24 lg:py-40">
      <Prose content={content} />
    </Container>
  )
}
