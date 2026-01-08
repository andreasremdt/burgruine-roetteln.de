import type { Block } from 'payload'

const twoColumnsWithImage: Block = {
  slug: 'twoColumnsWithImage',
  labels: {
    plural: 'Spaltentext mit Bild',
    singular: 'Spaltentext mit Bild',
  },
  interfaceName: 'TwoColumnsWithImageBlock',
  imageURL: '/blocks/two-columns-with-image.png',
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
      type: 'textarea',
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
  ],
}

export default twoColumnsWithImage
