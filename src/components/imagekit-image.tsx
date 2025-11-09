import Image, { type ImageProps } from 'next/image'
import type { Media } from '@/payload-types'
import { cn } from '@/lib/utils'

type Props = Omit<ImageProps, 'src' | 'alt'> & {
  image: string | Media
}

export default function ImageKitImage({
  image,
  quality = 75,
  loading = 'lazy',
  decoding = 'async',
  className,
  ...props
}: Props) {
  if (typeof image === 'string' || !image.imagekit) {
    return null
  }

  return (
    <Image
      src={image.imagekit.url || ''}
      loading={loading}
      alt={image.alt || ''}
      quality={quality}
      decoding={decoding}
      width={image.width || 300}
      height={image.height || 300}
      className={cn('bg-gray-100', className)}
      {...props}
    />
  )
}
