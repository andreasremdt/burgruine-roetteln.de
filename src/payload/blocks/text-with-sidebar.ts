import type { Block } from 'payload'
import openingHours from './opening-hours'
import subMenuFields from './shared/sub-menu-fields'

const textWithSidebar: Block = {
  slug: 'text-with-sidebar',
  labels: {
    singular: 'Text mit Seitenleiste',
    plural: 'Text mit Seitenleiste',
  },
  interfaceName: 'TextWithSidebarBlock',
  imageURL: '/blocks/text-with-sidebar.png',
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
    subMenuFields,
  ],
}

export default textWithSidebar
