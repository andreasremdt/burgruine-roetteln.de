import { type CollectionConfig, slugField } from 'payload'
import directions from '../blocks/directions'
import tours from '../blocks/tours'
import richText from '../blocks/rich-text'
import twoColumnsWithImage from '../blocks/two-columns-with-image'
import textWithTwoImages from '../blocks/text-with-two-images'
import statistics from '../blocks/statistics'
import gallery from '../blocks/gallery'
import costs from '../blocks/costs'
import events from '../blocks/events'
import openingHours from '../blocks/opening-hours'
import oneColumnWithImage from '../blocks/one-column-with-image'
import timeline from '../blocks/timeline'
import offerOverview from '../blocks/offer-overview'
import textWithSidebar from '../blocks/text-with-sidebar'
import contactForm from '../blocks/contact-form'

const pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  labels: {
    singular: 'Seite',
    plural: 'Seiten',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Allgemein',
          fields: [
            {
              type: 'group',
              label: 'Allgemein',
              fields: [
                {
                  type: 'select',
                  name: 'layout',
                  label: 'Design',
                  admin: {
                    description:
                      'Das Design der Seite legt fest, welcher Inhalt angezeigt wird und sollte auf die jeweilige Seite angepasst werden.',
                  },
                  required: true,
                  defaultValue: 'title',
                  options: [
                    {
                      label: 'Nur Titel',
                      value: 'title',
                    },
                    {
                      label: 'Titel, Untertitel und Beschreibung',
                      value: 'title-subtitle-description',
                    },
                    {
                      label: 'Startseite',
                      value: 'home',
                    },
                    {
                      label: 'Kontakt (mit Karte)',
                      value: 'contact',
                    },
                  ],
                },
                {
                  type: 'text',
                  name: 'title',
                  label: 'Titel',
                  required: true,
                },
                {
                  type: 'text',
                  name: 'subtitle',
                  label: 'Untertitel',
                  required: true,
                  admin: {
                    condition: (data) => data.layout === 'title-subtitle-description',
                    description: 'Der Untertitel wird unter dem Titel angezeigt.',
                  },
                },
                {
                  type: 'textarea',
                  name: 'description',
                  label: 'Beschreibung',
                  required: true,
                  admin: {
                    condition: (data) =>
                      data.layout === 'title-subtitle-description' || data.layout === 'home',
                    description: 'Die Beschreibung wird unter dem Untertitel angezeigt.',
                  },
                },
                slugField({
                  name: 'slug',
                  fieldToUse: 'title',
                  required: true,
                }),
              ],
            },
          ],
        },
        {
          label: 'Inhalt',
          fields: [
            {
              type: 'blocks',
              name: 'content',
              label: 'Inhalt',
              blocks: [
                tours,
                richText,
                twoColumnsWithImage,
                oneColumnWithImage,
                textWithTwoImages,
                statistics,
                gallery,
                costs,
                directions,
                events,
                openingHours,
                timeline,
                offerOverview,
                textWithSidebar,
                contactForm,
              ],
            },
          ],
        },
      ],
    },
  ],
}

export default pages
