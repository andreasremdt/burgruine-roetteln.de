import type { Page } from '@/payload-types'
import Tours from './blocks/tours'
import TwoColumnsWithImage from './blocks/two-columns-with-image'
import TextWithTwoImages from './blocks/text-with-two-images'
import Statistics from './blocks/statistics'
import Gallery from './blocks/gallery'
import Costs from './blocks/costs'
import Directions from './blocks/directions'
import Events from './blocks/events'
import OpeningHours from './blocks/opening-hours'
import OneColumnWithImage from './blocks/one-column-with-image'
import Timeline from './blocks/timeline'
import OfferOverview from './blocks/offer-overview'
import TextWithSidebar from './blocks/text-with-sidebar'
import ContactForm from './blocks/contact-form'
import RichText from './blocks/rich-text'
import RichTextWithTwoColumns from './blocks/rich-text-with-two-columns'
import BookingForm from './blocks/booking-form'
import RichTextWithGallery from './blocks/rich-text-with-gallery'
import MembershipForm from './blocks/membership-form'

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
      case 'costs':
        return <Costs {...block} key={block.id} />
      case 'directions':
        return <Directions {...block} key={block.id} />
      case 'events':
        return <Events {...block} key={block.id} />
      case 'opening-hours':
        return <OpeningHours {...block} key={block.id} />
      case 'oneColumnWithImage':
        return <OneColumnWithImage {...block} key={block.id} />
      case 'timeline':
        return <Timeline {...block} key={block.id} />
      case 'offer-overview':
        return <OfferOverview {...block} key={block.id} />
      case 'text-with-sidebar':
        return <TextWithSidebar {...block} key={block.id} />
      case 'contact-form':
        return <ContactForm {...block} key={block.id} />
      case 'richText':
        return <RichText {...block} key={block.id} />
      case 'richTextWithTwoColumns':
        return <RichTextWithTwoColumns {...block} key={block.id} />
      case 'booking-form':
        return <BookingForm {...block} key={block.id} />
      case 'richTextWithGallery':
        return <RichTextWithGallery {...block} key={block.id} />
      case 'membership-form':
        return <MembershipForm {...block} key={block.id} />
      default:
        return null
    }
  })
}
