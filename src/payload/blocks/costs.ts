import type { Block } from 'payload'

const costs: Block = {
  slug: 'costs',
  labels: {
    singular: 'Eintrittspreise',
    plural: 'Eintrittspreise',
  },
  interfaceName: 'CostsBlock',
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
  ],
}

export default costs
