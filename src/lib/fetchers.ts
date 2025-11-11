import { cache } from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import { draftMode } from 'next/headers'

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

export const getCosts = cache(async function getCosts() {
  const payload = await getPayload({ config })
  const costs = await payload.findGlobal({
    slug: 'costs',
  })

  return costs.items
})

export const getEvents = cache(async function getEvents() {
  const payload = await getPayload({ config })
  const events = await payload.find({
    collection: 'events',
    pagination: false,
    limit: 100,
    sort: 'date',
    where: {
      published: {
        equals: true,
      },
    },
  })

  return events.docs
})

export const getOpeningHours = cache(async function getOpeningHours() {
  const payload = await getPayload({ config })
  const openingHours = await payload.findGlobal({
    slug: 'opening-hours',
  })

  return openingHours
})

export const getPageBySlug = cache(async function getPageBySlug(slug: string) {
  const { isEnabled } = await draftMode()
  const payload = await getPayload({ config })
  const result = await payload.find({
    collection: 'pages',
    draft: isEnabled,
    pagination: false,
    limit: 1,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs[0]
})

export const getTourBySlug = cache(async function getTourBySlug(slug: string) {
  const { isEnabled } = await draftMode()
  const payload = await getPayload({ config })
  const result = await payload.find({
    collection: 'tours',
    draft: isEnabled,
    pagination: false,
    limit: 1,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs[0]
})
