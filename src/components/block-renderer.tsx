import type { Page } from '@/payload-types'
import Tours from './blocks/tours'
import TwoColumnsWithImage from './blocks/two-columns-with-image'
import TextWithTwoImages from './blocks/text-with-two-images'
import Statistics from './blocks/statistics'
import Gallery from './blocks/gallery'

type Props = {
  blocks: Page['content']
}

export default function BlockRenderer({ blocks }: Props) {
  if (!blocks) return null

  return blocks.map((block) => {
    switch (block.blockType) {
      case 'tours':
        return <Tours {...block} key={block.id} />
      case 'twoColumnsWithImage':
        return <TwoColumnsWithImage {...block} key={block.id} />
      case 'textWithTwoImages':
        return <TextWithTwoImages {...block} key={block.id} />
      case 'statistics':
        return <Statistics {...block} key={block.id} />
      case 'gallery':
        return <Gallery {...block} key={block.id} />
      default:
        return null
    }
  })
}
