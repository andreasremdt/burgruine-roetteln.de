import type { Block } from 'payload'
import subMenuFields from './shared/sub-menu-fields'

const richTextWithGallery: Block = {
  slug: 'richTextWithGallery',
  labels: {
    plural: 'Freitext mit Galerie',
    singular: 'Freitext mit Galerie',
  },
  interfaceName: 'RichTextWithGalleryBlock',
  imageURL: '/blocks/rich-text-with-gallery.png',
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
        },
      ],
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Inhalt',
      required: true,
    },
    {
      name: 'images',
      type: 'upload',
      label: 'Bilder',
      required: true,
      relationTo: 'media',
      hasMany: true,
    },
    subMenuFields,
  ],
}

export default richTextWithGallery
