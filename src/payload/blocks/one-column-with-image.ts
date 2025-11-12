import type { Block } from 'payload'

const oneColumnWithImage: Block = {
  slug: 'oneColumnWithImage',
  labels: {
    singular: 'Text mit Bild',
    plural: 'Text mit Bilder',
  },
  interfaceName: 'OneColumnWithImageBlock',
  fields: [
    {
      type: 'richText',
      name: 'content',
      label: 'Inhalt',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      label: 'Bild',
      required: true,
      relationTo: 'media',
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
  ],
}

export default oneColumnWithImage
