import type { Media } from '@/payload-types'
import Container from '../ui/container'
import { getContactInfo, getFooterInfo, getOpeningHours } from '@/lib/fetchers'
import ImageKitImage from '../imagekit-image'

export default async function Footer() {
  const footer = await getFooterInfo()
  const contactInfo = await getContactInfo()
  const openingHours = await getOpeningHours()

  return (
    <footer className="bg-gray-900 text-sm text-gray-300">
      <figure className="grid grid-cols-6">
        {footer.image.map((image) => (
          <ImageKitImage
            key={(image as Media).id}
            image={image}
            width={400}
            className="aspect-square w-full object-cover grayscale transition-all duration-300 hover:grayscale-0"
            height={400}
          />
        ))}
      </figure>

      <Container className="grid grid-cols-1 gap-8 py-10 sm:grid-cols-2 md:grid-cols-4 md:py-20">
        <div>
          <p className="mb-4 font-serif text-3xl text-white">{footer.title}</p>
          <p>{footer.description}</p>
        </div>

        <nav>
          <h2 className="mb-4 font-serif text-3xl text-white">Seitenmenü</h2>

          <ul>
            <li>
              <a
                className="transition-colors hover:text-white focus-visible:text-white"
                href="/burg"
              >
                Die Burg
              </a>
            </li>
            <li>
              <a
                className="transition-colors hover:text-white focus-visible:text-white"
                href="/besuchen"
              >
                Ihr Besuch
              </a>
            </li>
            <li>
              <a
                className="transition-colors hover:text-white focus-visible:text-white"
                href="/verein"
              >
                Der Verein
              </a>
            </li>
            <li>
              <a
                className="transition-colors hover:text-white focus-visible:text-white"
                href="/kontakt"
              >
                Kontakt
              </a>
            </li>
            <li>
              <a
                className="transition-colors hover:text-white focus-visible:text-white"
                href="/impressum"
              >
                Impressum
              </a>
            </li>
            <li>
              <a
                className="transition-colors hover:text-white focus-visible:text-white"
                href="/datenschutz"
              >
                Datenschutz
              </a>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="mb-4 font-serif text-3xl text-white">Öffnungszeiten</h2>

          <h3 className="mb-2 font-medium text-white">Unterburg</h3>
          <p>{openingHours.titleInnerWard}</p>
          <p>{openingHours.notesInnerWard}</p>

          <h3 className="mt-4 mb-2 font-medium text-white">Oberburg</h3>
          <p>{openingHours.titleOuterWard}</p>
          <p>{openingHours.notesOuterWard}</p>
        </div>

        <div>
          <h2 className="mb-4 font-serif text-3xl text-white">Kontakt</h2>

          <p
            className="mb-4"
            dangerouslySetInnerHTML={{ __html: contactInfo.name.replaceAll('\n', '<br />') }}
          />

          <p>
            <a
              className="transition-colors hover:text-white focus-visible:text-white"
              href={`tel:${contactInfo.phone}`}
            >
              {contactInfo.phone}
            </a>
          </p>

          <p>
            <a
              className="transition-colors hover:text-white focus-visible:text-white"
              href={`mailto:${contactInfo.email}`}
            >
              {contactInfo.email}
            </a>
          </p>
        </div>
      </Container>

      <div className="border-t border-gray-700 py-8 text-center text-xs">
        <p className="mb-1">
          &copy; {new Date().getFullYear()} Burgruine Rötteln. Alle Rechte vorbehalten.
        </p>
        <p>
          Design & Entwicklung{' '}
          <a href="https://andreasremdt.com" target="_blank" rel="noopener noreferrer">
            Softwareentwicklung Andreas Remdt
          </a>
          .
        </p>
      </div>
    </footer>
  )
}
