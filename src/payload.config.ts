import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { seoPlugin } from '@payloadcms/plugin-seo'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import { de } from '@payloadcms/translations/languages/de'
import { en } from '@payloadcms/translations/languages/en'

import users from './payload/collections/users'
import media from './payload/collections/media'
import tours from './payload/collections/tours'
import pages from './payload/collections/pages'
import events from './payload/collections/events'
import footer from './payload/globals/footer'
import contact from './payload/globals/contact'
import costs from './payload/globals/costs'
import openingHours from './payload/globals/opening-hours'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [users, media, tours, pages, events],
  globals: [footer, contact, costs, openingHours],
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
  i18n: {
    supportedLanguages: { de, en },
    fallbackLanguage: 'de',
  },
  plugins: [
    seoPlugin({
      collections: ['pages', 'tours'],
      uploadsCollection: 'media',
      tabbedUI: true,
      generateTitle: ({ doc }) => `${doc.title} - Burgruine Rötteln`,
      generateDescription: ({ doc }) => doc.description,
    }),
  ],
})
