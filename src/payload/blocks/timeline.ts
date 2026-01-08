import type { Block } from 'payload'

const timeline: Block = {
  slug: 'timeline',
  labels: {
    singular: 'Zeitstrahl',
    plural: 'Zeitstrahlen',
  },
  interfaceName: 'TimelineBlock',
  imageURL: '/blocks/timeline.png',
  fields: [
    {
      name: 'description',
      type: 'textarea',
      label: 'Beschreibung',
    },
    {
      type: 'array',
      name: 'items',
      label: 'Einträge',
      labels: {
        singular: 'Eintrag',
        plural: 'Einträge',
      },
      fields: [
        {
          name: 'year',
          type: 'number',
          label: 'Jahr',
        },
        {
          name: 'content',
          type: 'richText',
          label: 'Inhalt',
          required: true,
        },
      ],
    },
  ],
}

export default timeline
