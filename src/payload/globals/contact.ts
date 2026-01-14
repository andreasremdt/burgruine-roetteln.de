import type { GlobalConfig } from 'payload'

const contact: GlobalConfig = {
  slug: 'contact',
  label: 'Kontakt',
  fields: [
    {
      type: 'group',
      label: 'Kontaktinformationen',
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
          type: 'row',
          fields: [
            {
              type: 'text',
              name: 'phone',
              label: 'Telefon',
              required: true,
              admin: {
                width: '50%',
              },
            },
            {
              type: 'text',
              name: 'email',
              label: 'E-Mail',
              required: true,
              admin: {
                width: '50%',
              },
            },
          ],
        },
      ],
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
