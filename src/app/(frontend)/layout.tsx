import { Open_Sans, Cormorant_Garamond } from 'next/font/google'
import { cn } from '@/lib/utils'
import Banner from '@/components/layout/banner'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import '@/styles/globals.css'

const openSans = Open_Sans({
  weight: ['400', '500', '700', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
})

const cormorantGaramond = Cormorant_Garamond({
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant-garamond',
})

export const metadata = {
  description: {
    default: 'Die Burgruine Rötteln ist eine historische Burg in Lörrach, Deutschland',
  },
  title: {
    default: 'Burgruine Rötteln',
    template: '%s | Burgruine Rötteln',
  },
  authors: [{ name: 'Andreas Remdt', url: 'https://andreasremdt.com' }],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL),
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://ik.imagekit.io" />
      </head>

      <body
        className={cn(openSans.variable, cormorantGaramond.variable, 'text-gray-700')}
        itemScope
        itemType="https://schema.org/WebPage"
      >
        <a
          href="#content"
          className="text-kornblau-400 absolute top-0 right-0 left-0 z-20 -translate-y-full bg-white py-2 text-center font-medium transition-transform focus-visible:translate-y-0 sm:py-4"
        >
          Zum Inhalt springen
        </a>

        <Banner />

        <Header />

        <main id="content" className="font-serif" itemProp="mainContentOfPage">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}
