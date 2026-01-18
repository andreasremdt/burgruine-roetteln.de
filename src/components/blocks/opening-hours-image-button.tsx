'use client'

import { useState } from 'react'
import type { Media } from '@/payload-types'
import Button from '../ui/button'
import Lightbox from '../lightbox'

type Props = {
  image?: (string | null) | Media
}

export default function OpeningHoursImageButton({ image }: Props) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  const images = image && typeof image !== 'string' ? [image] : []

  if (images.length === 0) return null

  return (
    <>
      <div className="mt-8 flex md:justify-center">
        <Button onClick={() => setIsLightboxOpen(true)}>Burgplan öffnen</Button>
      </div>

      <Lightbox
        images={images}
        currentIndex={0}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
      />
    </>
  )
}
