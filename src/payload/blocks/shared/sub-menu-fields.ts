import type { Field } from 'payload'

const subMenuFields: Field = {
  type: 'group',
  label: 'Menü',
  fields: [
    {
      type: 'checkbox',
      name: 'showInSubMenu',
      label: 'Als Unterpunkt im Menü anzeigen',
      defaultValue: false,
      admin: {
        description:
          'Wenn dieser Haken gesetzt ist, wird der Inhalt als Unterpunkt im Menü angezeigt.',
      },
    },
    {
      type: 'text',
      name: 'subMenuTitle',
      label: 'Titel des Unterpunkts',
      required: true,
      admin: {
        description: 'Der Titel des Unterpunkts wird im Menü angezeigt.',
        condition: (_, siblingData) => siblingData.showInSubMenu,
      },
    },
  ],
}

export default subMenuFields
