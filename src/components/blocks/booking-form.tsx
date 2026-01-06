import type { BookingFormBlock } from '@/payload-types'
import Container from '../ui/container'
import Heading from '../ui/heading'
import Text from '../ui/text'
import { getTours } from '@/lib/fetchers'
import BookingFormClient from './booking-form.client'

export default async function BookingForm({ title, description }: BookingFormBlock) {
  const tours = await getTours()

  return (
    <section className="pb-24 lg:pb-40">
      <Container className="grid grid-cols-1 gap-16 lg:grid-cols-3">
        <div>
          <Heading level="h2" tag="h2" className="mb-4">
            {title}
          </Heading>
          <Text>{description}</Text>
        </div>

        <BookingFormClient tours={tours} />
      </Container>
    </section>
  )
}
