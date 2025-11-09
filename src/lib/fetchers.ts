import { cache } from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'

export const getFooterInfo = cache(async function getFooterInfo() {
  const payload = await getPayload({ config })
  const footer = await payload.findGlobal({
    slug: 'footer',
  })

  return footer
})

export const getContactInfo = cache(async function getContactInfo() {
  const payload = await getPayload({ config })
  const contact = await payload.findGlobal({
    slug: 'contact',
  })

  return contact
})
