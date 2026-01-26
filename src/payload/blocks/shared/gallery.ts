import type { Field } from 'payload'

const galleryFields: Field = {
  type: 'group',
  fields: [
    {
      type: 'array',
      name: 'groups',
      label: 'Bildergruppen',
      labels: {
        singular: 'Bildergruppe',
        plural: 'Bildergruppen',
      },
      fields: [
        {
          type: 'text',
          name: 'title',
          label: 'Titel',
        },
        {
          type: 'upload',
          name: 'images',
          label: 'Bilder',
          relationTo: 'media',
          hasMany: true,
          required: true,
        },
      ],
    },
  ],
}

export default galleryFields
