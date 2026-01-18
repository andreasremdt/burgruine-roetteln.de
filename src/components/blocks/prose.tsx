import type { Media, RichTextBlock } from '@/payload-types'
import type { SerializedLinkNode } from '@payloadcms/richtext-lexical'
import {
  defaultJSXConverters,
  RichText,
  LinkJSXConverter,
} from '@payloadcms/richtext-lexical/react'
import { cn } from '@/lib/utils'
import ImageKitImage from '../imagekit-image'

type Props = Pick<RichTextBlock, 'content'> & {
  className?: string
  imageOverride?: {
    width: number
    height: number
    className?: string
  }
}

function internalDocToHref({ linkNode }: { linkNode: SerializedLinkNode }) {
  const { relationTo, value } = linkNode.fields.doc!

  if (typeof value !== 'object') {
    throw new Error('Expected value to be an object')
  }

  switch (relationTo) {
    case 'pages':
      return `/${value.slug}`
    default:
      return `/${relationTo}/${value.slug}`
  }
}

export default function Prose({ content, className, imageOverride }: Props) {
  if (!content) return null

  return (
    <RichText
      converters={{
        ...defaultJSXConverters,
        ...LinkJSXConverter({ internalDocToHref }),
        upload: ({ node }) => {
          if (node.value) {
            return (
              <ImageKitImage
                image={node.value as Media}
                width={imageOverride?.width || 450}
                height={imageOverride?.height || 250}
                className={imageOverride?.className}
              />
            )
          }

          return null
        },
      }}
      data={content}
      className={cn(
        'prose prose-a:underline prose-lg sm:prose-xl prose-blockquote:text-gray-800 prose-blockquote:mb-8 prose-blockquote:-translate-x-48 prose-headings:font-normal max-w-none',
        className,
      )}
    />
  )
}
