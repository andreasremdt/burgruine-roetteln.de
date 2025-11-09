import type { Page } from '@/payload-types'
import Tours from './blocks/tours'

type Props = {
  blocks: Page['content']
}

export default function BlockRenderer({ blocks }: Props) {
  if (!blocks) return null

  return blocks.map((block) => {
    switch (block.blockType) {
      case 'tours':
        return <Tours {...block} key={block.id} />
      default:
        return null
    }
  })
}
