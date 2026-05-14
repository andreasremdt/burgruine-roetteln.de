import type { NewsOverviewBlock } from '@/payload-types'
import { getPublishedNews } from '@/lib/fetchers'
import NewsOverviewClient from './news-overview-client'

export default async function NewsOverview({
  title,
  description,
  entriesPerPage,
  subMenuTitle,
}: NewsOverviewBlock) {
  const items = await getPublishedNews()

  if (items.length === 0) {
    return null
  }

  return (
    <NewsOverviewClient
      title={title}
      description={description}
      entriesPerPage={entriesPerPage}
      items={items}
      subMenuTitle={subMenuTitle}
    />
  )
}
