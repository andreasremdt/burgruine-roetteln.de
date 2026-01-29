import type { CollectionConfig } from 'payload'

const memberships: CollectionConfig = {
  slug: 'memberships',
  admin: {
    useAsTitle: 'name',
    group: 'Formulare',
  },
  labels: {
    singular: 'Mitgliedsantrag',
    plural: 'Mitgliedsanträge',
  },
  access: {
    create: () => false,
    read: ({ req: { user } }) => Boolean(user),
    update: () => false,
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      type: 'group',
      label: 'Allgemein',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'name',
              label: 'Vor- und Nachname',
              type: 'text',
              required: true,
              admin: {
                width: '50%',
              },
            },
            {
              name: 'email',
              label: 'E-Mail',
              type: 'email',
              required: true,
              admin: {
                width: '50%',
              },
            },
          ],
        },
        {
          type: 'row',
          fields: [
            {
              name: 'street',
              label: 'Straße und Hausnummer',
              type: 'text',
              required: true,
              admin: {
                width: '50%',
              },
            },
            {
              name: 'postalCode',
              label: 'PLZ',
              type: 'text',
              required: true,
              admin: {
                width: '25%',
              },
            },
            {
              name: 'city',
              label: 'Wohnort',
              type: 'text',
              required: true,
              admin: {
                width: '25%',
              },
            },
          ],
        },
        {
          type: 'row',
          fields: [
            {
              name: 'birthDate',
              label: 'Geburtsdatum',
              type: 'date',
              required: true,
              admin: {
                width: '33%',
                date: {
                  pickerAppearance: 'dayOnly',
                  displayFormat: 'dd.MM.yyyy',
                },
              },
            },
            {
              name: 'phone',
              label: 'Telefon',
              type: 'text',
              required: false,
              admin: {
                width: '33%',
              },
            },
            {
              name: 'annualFee',
              label: 'Jahresbeitrag in €',
              type: 'number',
              required: true,
              defaultValue: 10,
              admin: {
                width: '33%',
              },
            },
          ],
        },
      ],
    },
    {
      type: 'group',
      label: 'SEPA-Lastschriftmandat',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'accountHolder',
              label: 'Vor- und Nachname des Kontoinhabers',
              type: 'text',
              required: true,
              admin: {
                width: '50%',
              },
            },
            {
              name: 'sepaStreet',
              label: 'Straße',
              type: 'text',
              required: true,
              admin: {
                width: '50%',
              },
            },
          ],
        },
        {
          type: 'row',
          fields: [
            {
              name: 'sepaPostalCode',
              label: 'PLZ',
              type: 'text',
              required: true,
              admin: {
                width: '25%',
              },
            },
            {
              name: 'sepaCity',
              label: 'Wohnort',
              type: 'text',
              required: true,
              admin: {
                width: '25%',
              },
            },
            {
              name: 'iban',
              label: 'IBAN',
              type: 'text',
              required: true,
              admin: {
                width: '25%',
              },
            },
            {
              name: 'bic',
              label: 'BIC',
              type: 'text',
              required: true,
              admin: {
                width: '25%',
              },
            },
          ],
        },
      ],
    },
  ],
}

export default memberships
