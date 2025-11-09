import { type CollectionConfig, slugField } from 'payload'

const tours: CollectionConfig = {
  slug: 'tours',
  admin: {
    useAsTitle: 'title',
  },
  labels: {
    singular: 'Führung',
    plural: 'Führungen',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Allgemein',
          fields: [
            {
              type: 'text',
              name: 'title',
              label: 'Titel',
              required: true,
              admin: {
                width: '60%',
              },
            },
            slugField({
              name: 'slug',
              fieldToUse: 'title',
              required: true,
            }),
            {
              type: 'text',
              name: 'subtitle',
              label: 'Untertitel',
              admin: {
                description: 'Der Untertitel wird unter dem Titel angezeigt und ist optional.',
              },
            },
            {
              type: 'textarea',
              name: 'description',
              label: 'Beschreibung',
              required: true,
              admin: {
                description:
                  'Die Beschreibung gibt einen kurzen Überblick über die Führung und sollte nicht länger als 2 Sätze sein.',
              },
            },
            {
              type: 'upload',
              name: 'image',
              label: 'Bild',
              relationTo: 'media',
              required: true,
              admin: {
                position: 'sidebar',
                description:
                  'Dieses Bild wird sowohl auf der Führungsseite als auch auf der Übersichtsseite angezeigt.',
              },
            },
            {
              type: 'text',
              name: 'caption',
              label: 'Bildunterschrift',
              admin: {
                position: 'sidebar',
                description: 'Die Bildunterschrift wird unter dem Bild angezeigt und ist optional.',
              },
            },
            {
              type: 'richText',
              name: 'content',
              label: 'Inhalt',
              required: true,
            },
            {
              type: 'upload',
              name: 'images',
              label: 'Bildergalerie',
              relationTo: 'media',
              hasMany: true,
              admin: {
                description: 'Die Bildergalerie wird unter dem Inhalt angezeigt und ist optional.',
              },
            },
          ],
        },
      ],
    },
  ],
}

export default tours
