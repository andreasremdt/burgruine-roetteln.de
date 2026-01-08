import type { Block } from 'payload'

const openingHours: Block = {
  slug: 'opening-hours',
  labels: {
    singular: 'Öffnungszeiten',
    plural: 'Öffnungszeiten',
  },
  interfaceName: 'OpeningHoursBlock',
  imageURL: '/blocks/opening-hours.png',
  fields: [
    {
      type: 'select',
      name: 'layout',
      label: 'Layout',
      defaultValue: 'horizontal',
      options: [
        {
          label: 'Horizontal',
          value: 'horizontal',
        },
        {
          label: 'Vertikal',
          value: 'vertical',
        },
      ],
      admin: {
        description: 'Das Layout bestimmt die Anordnung der Öffnungszeiten.',
        width: '50%',
      },
    },
    {
      type: 'checkbox',
      name: 'background',
      label: 'Mit grauem Hintergrund',
      admin: {
        description:
          'Die Öffnungszeiten bekommen einen grauen Hintergrund, wenn diese Option aktiviert ist.',
      },
    },
  ],
}

export default openingHours
