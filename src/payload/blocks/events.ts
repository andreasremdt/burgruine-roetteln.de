import type { Block } from 'payload'
import subMenuFields from './shared/sub-menu-fields'

const events: Block = {
  slug: 'events',
  labels: {
    singular: 'Veranstaltungen',
    plural: 'Veranstaltungen',
  },
  interfaceName: 'EventsBlock',
  imageURL: '/blocks/events.png',
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

export default events
