import type { ComponentPropsWithoutRef } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import Container from '../ui/container'

type Props = ComponentPropsWithoutRef<'section'> & {
  title: string
}

export default function ImageHero({ title, className, ...props }: Props) {
  return (
    <section className={cn('relative -mt-32 h-[75vh] max-h-96 bg-gray-50', className)} {...props}>
      <Image
        src="https://ik.imagekit.io/6uqkzvybwk/burgruine-roetteln/main-hero_-jQldRFqI.webp"
        alt=""
        width={1920}
        height={500}
        role="presentation"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <Container className="relative flex h-full items-end justify-center">
        <h1 className="mb-16 text-5xl text-gray-900">{title}</h1>
      </Container>
    </section>
  )
}
