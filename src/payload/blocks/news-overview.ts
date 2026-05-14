import type { Block } from 'payload'
import subMenuFields from './shared/sub-menu-fields'

const newsOverview: Block = {
  slug: 'newsOverview',
  labels: {
    singular: 'Neuigkeiten',
    plural: 'Neuigkeiten',
  },
  interfaceName: 'NewsOverviewBlock',
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
          required: true,
        },
      ],
    },
    {
      name: 'entriesPerPage',
      type: 'number',
      label: 'Anzahl Einträge pro Seite',
      required: true,
      defaultValue: 3,
      max: 10,
      min: 1,
      admin: {
        width: '50%',
        description:
          'So viele Neuigkeiten werden gleichzeitig angezeigt. Gibt es mehr Einträge, erscheint eine Seitennavigation.',
      },
    },
    subMenuFields,
  ],
}

export default newsOverview
