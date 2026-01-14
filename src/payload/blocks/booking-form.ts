import type { Block } from 'payload'
import subMenuFields from './shared/sub-menu-fields'

const bookingForm: Block = {
  slug: 'booking-form',
  labels: {
    singular: 'Buchungsformular',
    plural: 'Buchungsformulare',
  },
  interfaceName: 'BookingFormBlock',
  imageURL: '/blocks/booking-form.png',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Titel',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Beschreibung',
      required: true,
    },
    subMenuFields,
  ],
}

export default bookingForm
