import type { Block } from 'payload'
import subMenuFields from './shared/sub-menu-fields'

const tours: Block = {
  slug: 'tours',
  labels: {
    plural: 'Listen der Führungen',
    singular: 'Liste der Führungen',
  },
  interfaceName: 'ToursBlock',
  imageURL: '/blocks/tours.png',
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'title',
          label: 'Titel',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          label: 'Beschreibung',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'dark',
      type: 'checkbox',
      label: 'Dunkler Hintergrund',
    },
    {
      name: 'tours',
      label: 'Führungen',
      type: 'relationship',
      required: true,
      relationTo: 'tours',
      admin: {
        description: 'Wählen Sie alle Führungen aus, die in der Liste angezeigt werden sollen.',
      },
      hasMany: true,
    },
    subMenuFields,
  ],
}
export default tours
