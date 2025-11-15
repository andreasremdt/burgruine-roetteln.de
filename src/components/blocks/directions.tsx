'use client'

import type { DirectionsBlock } from '@/payload-types'
import Button from '../ui/button'
import Prose from './prose'
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('../ui/map'), { ssr: false })

export default function Directions({ title, description, buttons }: DirectionsBlock) {
  return (
    <section
      className="grid grid-cols-1 bg-gray-50 lg:grid-cols-[auto_minmax(0%,640px)_minmax(0%,640px)_auto]"
      id="anfahrt"
    >
      <Map className="order-1 col-span-2 hidden h-full w-full lg:block" />

      <div className="order-1 py-16 pr-4 pl-4 lg:pl-16">
        <h2 className="mb-8 text-5xl text-gray-900">{title}</h2>

        <Prose content={description} />

        {buttons?.map((button) => (
          <Button
            href={button.link}
            target="_blank"
            rel="noopener noreferrer nofollow"
            key={button.id}
          >
            {button.label}
          </Button>
        ))}
      </div>
    </section>
  )
}
