import clsx, { type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(...classes))
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('de-DE', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}
