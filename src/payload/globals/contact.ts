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
      type: 'textarea',
      name: 'location',
      label: 'Lage',
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
    {
      type: 'group',
      name: 'social',
      label: 'Social Media',
      fields: [
        {
          type: 'row',
          fields: [
            {
              type: 'text',
              name: 'instagram',
              label: 'Instagram',
            },
            {
              type: 'text',
              name: 'facebook',
              label: 'Facebook',
            },
          ],
        },
      ],
    },
  ],
}

export default contact
