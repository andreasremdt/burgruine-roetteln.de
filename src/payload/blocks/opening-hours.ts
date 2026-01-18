import type { Block } from 'payload'
import subMenuFields from './shared/sub-menu-fields'

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
      type: 'checkbox',
      name: 'showImage',
      label: 'Schaltfläche zum Burgplan anzeigen',
      defaultValue: true,
      admin: {
        description:
          'Wenn diese Option aktiviert ist, wird eine Schaltfläche zum Burgplan angezeigt. Der Benutzer kann diesen Plan dann öffnen.',
      },
    },
    {
      type: 'upload',
      name: 'image',
      label: 'Bild vom Burgplan',
      relationTo: 'media',
      required: true,
      admin: {
        condition: (_, siblingData) => siblingData.showImage,
      },
    },
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
    subMenuFields,
  ],
}

export default openingHours
