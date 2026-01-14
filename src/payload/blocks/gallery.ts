import type { Block } from 'payload'
import subMenuFields from './shared/sub-menu-fields'

const gallery: Block = {
  slug: 'gallery',
  labels: {
    singular: 'Bildergalerie',
    plural: 'Bildergalerien',
  },
  interfaceName: 'GalleryBlock',
  imageURL: '/blocks/gallery.png',
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
      type: 'upload',
      name: 'images',
      label: 'Bilder',
      relationTo: 'media',
      hasMany: true,
      required: true,
    },
    subMenuFields,
  ],
}

export default gallery
