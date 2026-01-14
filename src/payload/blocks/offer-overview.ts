import type { Block } from 'payload'
import subMenuFields from './shared/sub-menu-fields'

const offerOverview: Block = {
  slug: 'offer-overview',
  labels: {
    singular: 'Angebotsübersicht',
    plural: 'Angebotsübersichten',
  },
  interfaceName: 'OfferOverviewBlock',
  imageURL: '/blocks/offer-overview.png',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Titel',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Untertitel',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Beschreibung',
      required: true,
    },
    {
      name: 'offers',
      label: 'Angebote',
      type: 'array',
      labels: {
        singular: 'Angebot',
        plural: 'Angebote',
      },
      required: true,
      fields: [
        {
          name: 'image',
          type: 'upload',
          label: 'Bild',
          required: true,
          relationTo: 'media',
        },
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
              name: 'url',
              type: 'text',
              label: 'URL',
              required: true,
            },
          ],
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Beschreibung',
          required: true,
        },
      ],
    },
    subMenuFields,
  ],
}

export default offerOverview
