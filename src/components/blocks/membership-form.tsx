import type { MembershipFormBlock } from '@/payload-types'
import Container from '../ui/container'
import MembershipFormClient from './membership-form.client'

export default function MembershipForm({ description }: MembershipFormBlock) {
  return (
    <section className="py-24 lg:py-40">
      <Container>
        <MembershipFormClient description={description} />
      </Container>
    </section>
  )
}
