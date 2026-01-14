import type { Block } from 'payload'
import subMenuFields from './shared/sub-menu-fields'

const statistics: Block = {
  slug: 'statistics',
  labels: {
    plural: 'Text mit Zahlen',
    singular: 'Text mit Zahlen',
  },
  interfaceName: 'StatisticsBlock',
  imageURL: '/blocks/statistics.png',
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Titel',
          required: true,
        },
        {
          name: 'description',
          type: 'text',
          label: 'Beschreibung',
          required: true,
        },
      ],
    },
    {
      type: 'array',
      name: 'statistics',
      labels: {
        singular: 'Statistik',
        plural: 'Statistiken',
      },
      label: 'Statistiken',
      fields: [
        {
          type: 'row',
          fields: [
            {
              type: 'text',
              name: 'value',
              label: 'Wert',
              required: true,
              admin: {
                width: '30%',
              },
            },
            {
              type: 'text',
              name: 'label',
              label: 'Bezeichnung',
              required: true,
              admin: {
                width: '70%',
              },
            },
          ],
        },
      ],
    },
    {
      type: 'richText',
      name: 'content',
      label: 'Inhalt',
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
        {
          type: 'select',
          name: 'theme',
          label: 'Design',
          defaultValue: 'primary',
          required: true,
          options: [
            {
              label: 'Primär',
              value: 'primary',
            },
            {
              label: 'Sekundär',
              value: 'secondary',
            },
          ],
        },
      ],
      maxRows: 2,
    },
    subMenuFields,
  ],
}

export default statistics
