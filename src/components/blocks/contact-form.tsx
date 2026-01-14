import type { ContactFormBlock } from '@/payload-types'
import BlockRenderer from '../block-renderer'
import Container from '../ui/container'
import ContactFormClient from './contact-form.client'
import { slugify } from '@/lib/utils'

export default function ContactForm({
  sidebar,
  title,
  description,
  subMenuTitle,
}: ContactFormBlock) {
  return (
    <section className="py-24 lg:py-40" id={subMenuTitle ? slugify(subMenuTitle) : undefined}>
      <Container className="grid grid-cols-1 gap-16 md:grid-cols-3">
        <div className="order-2">
          <BlockRenderer blocks={sidebar} />
        </div>

        <ContactFormClient title={title} description={description} />
      </Container>
    </section>
  )
}
