import type { GlobalConfig } from 'payload'

const banner: GlobalConfig = {
  slug: 'banner',
  label: 'Banner',
  fields: [
    {
      type: 'group',
      label: 'Linke Seite',
      fields: [
        {
          type: 'checkbox',
          name: 'showOpeningHours',
          label: 'Öffnungszeiten anzeigen',
        },
        {
          type: 'text',
          name: 'leftSideText',
          label: 'Text für linke Seite',
          admin: {
            condition: (data) => !data.showOpeningHours,
            description:
              'Dieser Text wird in der linken Seite des Banners angezeigt, wenn der Haken nicht gesetzt ist.',
          },
        },
      ],
    },
    {
      type: 'group',
      label: 'Rechte Seite',
      fields: [
        {
          type: 'checkbox',
          name: 'showNextEvent',
          label: 'Nächstes Event anzeigen',
        },
        {
          type: 'text',
          name: 'rightSideText',
          label: 'Text für rechte Seite',
          admin: {
            condition: (data) => !data.showNextEvent,
            description:
              'Dieser Text wird in der rechten Seite des Banners angezeigt, wenn der Haken nicht gesetzt ist.',
          },
        },
      ],
    },
  ],
}

export default banner
