import type { CollectionConfig } from 'payload'

const requests: CollectionConfig = {
  slug: 'requests',
  admin: {
    useAsTitle: 'name',
  },
  labels: {
    singular: 'Führungsanfrage',
    plural: 'Führungsanfragen',
  },
  access: {
    create: () => false,
    read: ({ req: { user } }) => Boolean(user),
    update: () => false,
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'email',
      label: 'E-Mail',
      type: 'email',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'type',
      label: 'Art der Führung',
      type: 'text',
      required: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'participants',
      label: 'Anzahl Teilnehmer',
      type: 'text',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'message',
      label: 'Nachricht',
      type: 'textarea',
      required: true,
      admin: {
        rows: 10,
      },
    },
  ],
}

export default requests
