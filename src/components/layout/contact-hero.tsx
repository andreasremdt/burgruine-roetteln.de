'use client'

import dynamic from 'next/dynamic'

const Map = dynamic(() => import('../ui/map'), { ssr: false })

export default function ContactHero() {
  return <Map className="z-0 h-160 w-full" />
}
