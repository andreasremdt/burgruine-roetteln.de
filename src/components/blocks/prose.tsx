import type { Media, RichTextBlock } from '@/payload-types'
import { defaultJSXConverters, RichText } from '@payloadcms/richtext-lexical/react'
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

export default function Prose({ content, className, imageOverride }: Props) {
  if (!content) return null

  return (
    <RichText
      converters={{
        ...defaultJSXConverters,
        upload: ({ node }) => {
          return (
            <ImageKitImage
              image={node.value as Media}
              width={imageOverride?.width || 900}
              height={imageOverride?.height || 500}
              className={imageOverride?.className}
            />
          )
        },
      }}
      data={content}
      className={cn(
        'prose prose-a:underline prose-xl prose-blockquote:text-gray-800 prose-blockquote:mb-8 prose-blockquote:-translate-x-48 max-w-none',
        className,
      )}
    />
  )
}
