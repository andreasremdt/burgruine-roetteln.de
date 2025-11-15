import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'
import { getHeader } from '@/lib/fetchers'
import Container from '../ui/container'
import ImageKitImage from '../imagekit-image'
import Heading from '../ui/heading'

type Props = ComponentPropsWithoutRef<'section'> & {
  title: string
}

export default async function ImageHero({ title, className, ...props }: Props) {
  const header = await getHeader()

  return (
    <section
      className={cn(
        'relative z-0 -mt-32 h-[75vh] max-h-96 before:absolute before:inset-0 before:z-10 before:bg-black/40',
        className,
      )}
      {...props}
    >
      <ImageKitImage
        image={header.image}
        width={1920}
        height={400}
        loading="eager"
        role="presentation"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <Container className="relative z-20 flex h-full items-end justify-center">
        <Heading level="h1" tag="h1" className="mb-16 text-white">
          {title}
        </Heading>
      </Container>
    </section>
  )
}
