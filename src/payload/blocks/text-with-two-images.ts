import type { Block } from 'payload'

const textWithTwoImages: Block = {
  slug: 'textWithTwoImages',
  labels: {
    plural: 'Text mit zwei Bildern',
    singular: 'Text mit zwei Bildern',
  },
  interfaceName: 'TextWithTwoImagesBlock',
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
    {
      name: 'image',
      type: 'upload',
      label: 'Bild',
      required: true,
      relationTo: 'media',
      hasMany: true,
      maxRows: 2,
      minRows: 2,
    },
  ],
}

export default textWithTwoImages
