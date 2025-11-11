import type { GlobalConfig } from 'payload'

const costs: GlobalConfig = {
  slug: 'costs',
  label: 'Eintrittspreise',
  fields: [
    {
      type: 'array',
      name: 'items',
      label: 'Einträge',
      labels: {
        singular: 'Eintrag',
        plural: 'Einträge',
      },
      fields: [
        {
          type: 'row',
          fields: [
            {
              type: 'text',
              name: 'title',
              label: 'Bezeichnung',
              required: true,
            },
            {
              type: 'text',
              name: 'price',
              label: 'Preis',
              required: true,
            },
          ],
        },
        {
          type: 'text',
          name: 'description',
          label: 'Optionale Beschreibung',
          admin: {
            description:
              'Diese Beschreibung ist optional und wird unter der Bezeichnung und dem Preis angezeigt.',
          },
        },
      ],
    },
  ],
}
export default costs
