import type { Block } from 'payload'
import subMenuFields from './shared/sub-menu-fields'

const richTextWithTwoColumns: Block = {
  slug: 'richTextWithTwoColumns',
  labels: {
    plural: 'Freitext mit zwei Spalten',
    singular: 'Freitext mit zwei Spalten',
  },
  interfaceName: 'RichTextWithTwoColumnsBlock',
  imageURL: '/blocks/rich-text-with-two-columns.png',
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'left',
          type: 'richText',
          label: 'Inhalt der linken Spalte',
          required: true,
        },
        {
          name: 'right',
          type: 'richText',
          label: 'Inhalt der rechten Spalte',
          required: true,
        },
      ],
    },
    subMenuFields,
  ],
}

export default richTextWithTwoColumns
