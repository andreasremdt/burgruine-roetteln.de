import type { CollectionConfig } from 'payload'

const events: CollectionConfig = {
  slug: 'events',
  admin: {
    useAsTitle: 'title',
  },
  labels: {
    singular: 'Veranstaltung',
    plural: 'Veranstaltungen',
  },
  fields: [
    {
      type: 'date',
      name: 'date',
      label: 'Datum',
      required: true,
      admin: {
        position: 'sidebar',
        description: 'Dieses Datum dient der Sortierung und wird nicht in der Liste angezeigt.',
      },
    },
    {
      type: 'checkbox',
      name: 'published',
      label: 'Veröffentlicht',
      defaultValue: true,
      admin: {
        position: 'sidebar',
        description:
          'Wenn nicht veröffentlicht, wird die Veranstaltung nicht in der Liste angezeigt.',
      },
    },
    {
      type: 'row',
      fields: [
        {
          type: 'text',
          name: 'title',
          label: 'Titel',
          required: true,
          admin: {
            width: '50%',
          },
        },
        {
          type: 'text',
          name: 'url',
          label: 'URL',
          admin: {
            description:
              'Optionaler Link zur Veranstaltung. Falls angegeben wird eine Schaltfläche unter dem Titel angezeigt.',
            width: '50%',
          },
        },
      ],
    },
    {
      type: 'richText',
      name: 'description',
      label: 'Beschreibung',
    },
    {
      type: 'row',
      fields: [
        {
          type: 'text',
          name: 'displayedDate',
          label: 'Zeitraum',
          required: true,
          admin: {
            width: '50%',
            description: 'Der Zeitraum wird links in der Liste angezeigt.',
          },
        },
        {
          type: 'text',
          name: 'time',
          label: 'Uhrzeit',
          admin: {
            width: '50%',
            description: 'Die Uhrzeit wird unter dem Zeitraum angezeigt und ist optional.',
          },
        },
      ],
    },
  ],
}

export default events
