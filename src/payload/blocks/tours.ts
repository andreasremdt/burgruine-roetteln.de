import type { Block } from 'payload'

const tours: Block = {
  slug: 'tours',
  labels: {
    plural: 'Listen der Führungen',
    singular: 'Liste der Führungen',
  },
  interfaceName: 'ToursBlock',
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
  ],
}
export default tours
