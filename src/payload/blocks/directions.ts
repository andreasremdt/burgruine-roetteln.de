import type { Block } from 'payload'

const directions: Block = {
  slug: 'directions',
  labels: {
    singular: 'Anfahrt',
    plural: 'Anfahrten',
  },
  interfaceName: 'DirectionsBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Titel',
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Beschreibung',
      required: true,
    },
    {
      type: 'array',
      name: 'buttons',
      label: 'Schaltflächen',
      labels: {
        singular: 'Schaltfläche',
        plural: 'Schaltflächen',
      },
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'label',
              type: 'text',
              label: 'Label',
              required: true,
            },
            {
              name: 'link',
              type: 'text',
              label: 'URL',
              required: true,
            },
          ],
        },
      ],
    },
  ],
}

export default directions
