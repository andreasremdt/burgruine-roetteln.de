import type { GlobalConfig } from 'payload'

const header: GlobalConfig = {
  slug: 'header',
  label: 'Kopfteil',
  fields: [
    {
      type: 'group',
      label: 'Hauptmenü',
      fields: [
        {
          name: 'mainMenu',
          type: 'relationship',
          label: 'Einträge',
          relationTo: 'pages',
          hasMany: true,
          required: true,
        },
      ],
    },
    {
      type: 'group',
      label: 'Design',
      fields: [
        {
          type: 'upload',
          name: 'image',
          label: 'Bilder',
          relationTo: 'media',
          required: true,
          admin: {
            description: 'Dieses Bild wird als Hauptbild im Kopfbereich der Seite angezeigt.',
          },
        },
      ],
    },
  ],
}

export default header
