import type { Block } from 'payload'
import subMenuFields from './shared/sub-menu-fields'

const costs: Block = {
  slug: 'costs',
  labels: {
    singular: 'Eintrittspreise',
    plural: 'Eintrittspreise',
  },
  interfaceName: 'CostsBlock',
  imageURL: '/blocks/costs.png',
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
    subMenuFields,
  ],
}

export default costs
