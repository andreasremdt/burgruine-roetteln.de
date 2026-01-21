'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import Icon from './ui/icon'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > 200)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Zurück nach oben"
      className={cn(
        'fixed right-4 bottom-4 z-50 flex size-12 cursor-pointer items-center justify-center bg-kornblau-400 text-white shadow-lg transition-all hover:bg-gray-900 focus-visible:bg-gray-900 sm:right-6 sm:bottom-6 sm:size-14',
        isVisible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0',
      )}
    >
      <Icon name="chevron-down" className="size-6 rotate-180" />
    </button>
  )
}
