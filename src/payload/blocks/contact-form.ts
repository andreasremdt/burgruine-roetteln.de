import type { Block } from 'payload'
import openingHours from './opening-hours'

const contactForm: Block = {
  slug: 'contact-form',
  labels: {
    singular: 'Kontaktformular',
    plural: 'Kontaktformulare',
  },
  interfaceName: 'ContactFormBlock',
  imageURL: '/blocks/contact-form.png',
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
    {
      name: 'sidebar',
      label: 'Inhalt der Seitenleiste',
      labels: {
        singular: 'Inhalt',
        plural: 'Inhalte',
      },
      type: 'blocks',
      required: true,
      blocks: [openingHours],
    },
  ],
}

export default contactForm
