import type { GlobalConfig } from 'payload'

const openingHours: GlobalConfig = {
  slug: 'opening-hours',
  label: 'Öffnungszeiten',
  fields: [
    {
      type: 'collapsible',
      label: 'Unterburg',
      fields: [
        {
          type: 'text',
          name: 'titleInnerWard',
          label: 'Öffnungszeiten',
          required: true,
        },
        {
          type: 'textarea',
          name: 'notesInnerWard',
          label: 'Bemkerungen',
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Oberburg',
      fields: [
        {
          type: 'text',
          name: 'titleOuterWard',
          label: 'Öffnungszeiten',
          required: true,
        },
        {
          type: 'textarea',
          name: 'notesOuterWard',
          label: 'Bemkerungen',
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Ausnahmen',
      fields: [
        {
          type: 'textarea',
          name: 'exceptions',
          label: 'Ausnahmen',
        },
      ],
    },
  ],
}
export default openingHours
