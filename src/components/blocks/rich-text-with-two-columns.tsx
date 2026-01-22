import type { RichTextWithTwoColumnsBlock } from '@/payload-types'
import Prose from './prose'
import Container from '../ui/container'
import { slugify } from '@/lib/utils'

export default function RichTextWithTwoColumns({ left, right, subMenuTitle }: RichTextWithTwoColumnsBlock) {
    return (
        <Container
            tag="section"
            className="py-24 lg:py-40"
            id={subMenuTitle ? slugify(subMenuTitle) : undefined}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <Prose content={left} />
                <Prose content={right} />
            </div>
        </Container>
    )
}
