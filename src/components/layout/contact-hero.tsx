'use client'

import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

type Props = ComponentPropsWithoutRef<'div'>

const LATITUDE = 47.6381
const LONGITUDE = 7.66781
const ZOOM = 14

export default function ContactHero({ className, ...props }: Props) {
  return (
    <MapContainer
      center={[LATITUDE, LONGITUDE]}
      zoom={ZOOM}
      className={cn('z-0 h-160 w-full', className)}
      scrollWheelZoom={false}
      {...props}
    >
      <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png" />
      <Marker position={[LATITUDE, LONGITUDE]} />
    </MapContainer>
  )
}
