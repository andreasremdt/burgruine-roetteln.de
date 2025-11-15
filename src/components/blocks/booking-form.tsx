'use client'

import type { BookingFormBlock } from '@/payload-types'
import Button from '../ui/button'
import Container from '../ui/container'
import Input from '../ui/input'
import Label from '../ui/label'
import Select from '../ui/select'
import Textarea from '../ui/textarea'
import { getSearchParam } from '@/lib/utils'

export default function BookingForm({ title, description }: BookingFormBlock) {
  return (
    <section className="pb-24 lg:pb-40">
      <Container className="grid grid-cols-1 gap-16 lg:grid-cols-3">
        <div>
          <h2 className="mb-4 text-4xl text-gray-900">{title}</h2>
          <p className="mb-4 text-xl">{description}</p>
        </div>

        <form action="" method="POST" className="lg:col-span-2">
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

          <div className="grid grid-cols-1 sm:grid-cols-4 sm:gap-4">
            <div className="mb-4 sm:col-span-2 md:col-span-3">
              <Label htmlFor="tour">Art der Führung</Label>
              <Select name="tour" id="tour" required defaultValue={getSearchParam('type')}>
                <option value="Reguläre Führung">Reguläre Führung</option>
                <option value="Kinder und Schulklassen">Kinder und Schulklassen</option>
                <option value="Sonderführungen">Sonderführung</option>
                <option value="Virtuelle Führung">Virtuelle Führung</option>
                <option value="Kindergeburtstag">Kindergeburtstag</option>
                <option value="Burgwächterrundgang">Burgwächterrundgang</option>
              </Select>
            </div>
            <div className="mb-4 sm:col-span-2 md:col-span-1">
              <Label htmlFor="participants">Anzahl Teilnehmer</Label>
              <Input type="number" name="participants" id="participants" required />
            </div>
          </div>

          <div className="mb-4">
            <Label htmlFor="message">Ihre Nachricht</Label>
            <Textarea name="message" id="message" rows={5} required />
          </div>

          <Button>Nachricht senden &rarr;</Button>
        </form>
      </Container>
    </section>
  )
}
