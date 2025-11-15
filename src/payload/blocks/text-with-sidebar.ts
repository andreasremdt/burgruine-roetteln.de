import type { Block } from 'payload'
import openingHours from './opening-hours'

const textWithSidebar: Block = {
  slug: 'text-with-sidebar',
  labels: {
    singular: 'Text mit Seitenleiste',
    plural: 'Text mit Seitenleiste',
  },
  interfaceName: 'TextWithSidebarBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Titel',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Beschreibung',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Inhalt',
      required: true,
    },
    {
      name: 'sidebar',
      label: 'Inhalt der Seitenleiste',
      labels: {
        singular: 'Inhalt',
        plural: 'Inhalte',
      },
      type: 'blocks',
      required: true,
      blocks: [openingHours],
    },
  ],
}

export default textWithSidebar
