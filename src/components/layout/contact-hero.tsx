'use client'

import dynamic from 'next/dynamic'

const Map = dynamic(() => import('../ui/map'), { ssr: false })

export default function ContactHero() {
  return (
    <Map className="relative z-0 -mt-24 h-160 w-full before:absolute before:inset-0 before:z-1000 before:bg-linear-to-b before:from-black/60 before:to-transparent before:to-40% md:-mt-32" />
  )
}
