import type { Block } from 'payload'
import subMenuFields from './shared/sub-menu-fields'

const directions: Block = {
  slug: 'directions',
  labels: {
    singular: 'Anfahrt',
    plural: 'Anfahrten',
  },
  interfaceName: 'DirectionsBlock',
  imageURL: '/blocks/directions.png',
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
    subMenuFields,
  ],
}

export default directions
