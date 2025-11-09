import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'

import users from './payload/collections/users'
import media from './payload/collections/media'
import footer from './payload/globals/footer'
import contact from './payload/globals/contact'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [users, media],
  globals: [footer, contact],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
    connectOptions: {
      dbName: process.env.DATABASE_NAME,
      appName: process.env.DATABASE_APP_NAME,
      retryWrites: true,
      writeConcern: {
        w: 'majority',
      },
    },
  }),
  graphQL: {
    disable: true,
  },
})
