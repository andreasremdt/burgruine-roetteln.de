import type { GlobalConfig } from 'payload'

const openingHours: GlobalConfig = {
  slug: 'opening-hours',
  label: 'Öffnungszeiten',
  fields: [
    {
      type: 'group',
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
      type: 'group',
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
      type: 'group',
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
