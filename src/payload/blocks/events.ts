import type { Block } from 'payload'

const events: Block = {
  slug: 'events',
  labels: {
    singular: 'Veranstaltungen',
    plural: 'Veranstaltungen',
  },
  interfaceName: 'EventsBlock',
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

export default events
