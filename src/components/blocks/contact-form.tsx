import type { ContactFormBlock } from '@/payload-types'
import BlockRenderer from '../block-renderer'
import Container from '../ui/container'
import Label from '../ui/label'
import Input from '../ui/input'
import Textarea from '../ui/textarea'
import Button from '../ui/button'

export default function ContactForm({ sidebar, title, description }: ContactFormBlock) {
  return (
    <section className="py-24 lg:py-40">
      <Container className="grid grid-cols-1 gap-16 md:grid-cols-3">
        <div className="order-2">
          <BlockRenderer blocks={sidebar} />
        </div>

        <form
          action=""
          method="POST"
          className="z-10 order-1 bg-white md:order-2 md:col-span-2 md:-mt-60 md:border md:border-gray-300 md:p-8 lg:p-16"
        >
          <h1 className="text-5xl text-gray-900">{title}</h1>
          <p className="mb-8 text-xl">{description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4">
            <div className="mb-4">
              <Label htmlFor="name">Ihr Name</Label>
              <Input name="name" id="name" required />
            </div>
            <div className="mb-4">
              <Label htmlFor="email">Ihre E-Mail-Adresse</Label>
              <Input type="email" name="email" id="email" required />
            </div>
          </div>

          <div className="mb-4">
            <Label htmlFor="subject">Betreff</Label>
            <Input name="subject" id="subject" required />
          </div>

          <div className="mb-4">
            <Label htmlFor="message">Ihre Nachricht</Label>
            <Textarea name="message" id="message" rows={5} required />
          </div>

          <Button type="submit">Nachricht senden &rarr;</Button>
        </form>
      </Container>
    </section>
  )
}
