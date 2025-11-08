import { Open_Sans, Cormorant_Garamond } from 'next/font/google'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'

const openSans = Open_Sans({
  weight: ['400', '500', '700', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
})

const cormorantGaramond = Cormorant_Garamond({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant-garamond',
})

export const metadata = {
  description: 'Burgruine Roetteln',
  title: 'Burgruine Roetteln',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://www.youtube-nocookie.com" />
        <link rel="preconnect" href="https://ik.imagekit.io" />
      </head>

      <body
        className={cn(
          openSans.variable,
          cormorantGaramond.variable,
          'text-neutral-700 antialiased',
        )}
        itemScope
        itemType="https://schema.org/WebPage"
      >
        <main id="content" className="mx-auto max-w-7xl px-4 md:px-8" itemProp="mainContentOfPage">
          {children}
        </main>
      </body>
    </html>
  )
}
