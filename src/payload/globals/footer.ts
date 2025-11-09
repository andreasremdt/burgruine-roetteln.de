import type { GlobalConfig } from 'payload'

const footer: GlobalConfig = {
  slug: 'footer',
  label: 'Fußbereich',
  fields: [
    {
      type: 'text',
      name: 'title',
      label: 'Titel',
      required: true,
      admin: {
        description: 'Dies ist in der Regel der Name der Seite.',
      },
    },
    {
      type: 'textarea',
      name: 'description',
      label: 'Beschreibung',
      required: true,
      admin: {
        description:
          'Die Beschreibung sollte nicht mehr als 1 Satz lang sein und gibt einen kurzen Überblick über die Burgruine.',
      },
    },
    {
      type: 'upload',
      name: 'image',
      label: 'Bilder',
      relationTo: 'media',
      hasMany: true,
      maxRows: 6,
      minRows: 6,
      required: true,
      admin: {
        description:
          'Die Bilder werden über der Fußzeile angezeigt. Es müssen genau 6 Bilder ausgewählt werden.',
      },
    },
  ],
}

export default footer
