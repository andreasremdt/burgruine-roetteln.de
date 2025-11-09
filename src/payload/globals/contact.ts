import type { GlobalConfig } from 'payload'

const contact: GlobalConfig = {
  slug: 'contact',
  label: 'Kontakt',
  fields: [
    {
      type: 'textarea',
      name: 'name',
      label: 'Name und Anschrift',
      required: true,
    },
    {
      type: 'text',
      name: 'phone',
      label: 'Telefon',
      required: true,
    },
    {
      type: 'text',
      name: 'email',
      label: 'E-Mail',
      required: true,
    },
  ],
}

export default contact
