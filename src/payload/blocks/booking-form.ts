import type { Block } from 'payload'

const bookingForm: Block = {
  slug: 'booking-form',
  labels: {
    singular: 'Buchungsformular',
    plural: 'Buchungsformulare',
  },
  interfaceName: 'BookingFormBlock',
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
  ],
}

export default bookingForm
