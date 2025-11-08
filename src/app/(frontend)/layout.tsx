import { Roboto } from 'next/font/google'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'

const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
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
          roboto.variable,
          'leading-relaxed text-gray-600 antialiased dark:bg-gray-900 dark:text-gray-100',
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
