import type { Block } from 'payload'
import subMenuFields from './shared/sub-menu-fields'

const richText: Block = {
  slug: 'richText',
  labels: {
    plural: 'Freitext',
    singular: 'Freitext',
  },
  interfaceName: 'RichTextBlock',
  imageURL: '/blocks/rich-text.png',
  fields: [
    {
      name: 'content',
      type: 'richText',
      label: 'Inhalt',
      required: true,
    },
    subMenuFields,
  ],
}

export default richText
