import type { Block } from 'payload'
import subMenuFields from './shared/sub-menu-fields'

const membershipForm: Block = {
  slug: 'membership-form',
  labels: {
    singular: 'Mitgliedsantrag',
    plural: 'Mitgliedsanträge',
  },
  interfaceName: 'MembershipFormBlock',
  fields: [
    {
      name: 'description',
      type: 'textarea',
      label: 'Beschreibung',
      required: true,
    },
    subMenuFields,
  ],
}

export default membershipForm
