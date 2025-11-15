import type { GlobalConfig } from 'payload'

const header: GlobalConfig = {
  slug: 'header',
  label: 'Kopfteil',
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
}

export default header
