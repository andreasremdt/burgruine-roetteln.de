import type { CollectionConfig } from 'payload'

const users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  labels: {
    singular: 'Benutzer',
    plural: 'Benutzer',
  },
  auth: true,
  fields: [],
}

export default users
