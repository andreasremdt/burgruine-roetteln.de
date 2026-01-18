'use client'

import { MapContainer, Marker, TileLayer } from 'react-leaflet'

type Props = {
  className?: string
}

const LATITUDE = 47.6381
const LONGITUDE = 7.66781
const ZOOM = 14

export default function Map({ className }: Props) {
  return (
    <MapContainer
      center={[LATITUDE, LONGITUDE]}
      zoom={ZOOM}
      className={className}
      scrollWheelZoom={false}
      dragging={false}
    >
      <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png" />
      <Marker position={[LATITUDE, LONGITUDE]} />
    </MapContainer>
  )
}
