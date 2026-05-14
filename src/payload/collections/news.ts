import type { CollectionConfig } from 'payload'

const neuigkeiten: CollectionConfig = {
  slug: 'news',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'date'],
  },
  labels: {
    singular: 'Neuigkeit',
    plural: 'Neuigkeiten',
  },
  fields: [
    {
      type: 'text',
      name: 'title',
      label: 'Titel',
      required: true,
    },
    {
      type: 'date',
      name: 'date',
      label: 'Datum',
      required: true,
      defaultValue: new Date().toISOString(),
      admin: {
        position: 'sidebar',
      },
    },
    {
      type: 'upload',
      name: 'image',
      label: 'Bild',
      relationTo: 'media',
      admin: {
        position: 'sidebar',
      },
    },
    {
      type: 'checkbox',
      name: 'published',
      label: 'Veröffentlicht',
      defaultValue: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      type: 'textarea',
      name: 'text',
      label: 'Text',
      required: true,
      validate: (value) => {
        if (typeof value !== 'string') return true
        if (value.length > 350) {
          return 'Der Text darf höchstens 350 Zeichen lang sein.'
        }
        return true
      },
    },
  ],
}

export default neuigkeiten
