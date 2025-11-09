import type { Media } from '@/payload-types'
import Container from './ui/container'
import { getFooterInfo } from '@/lib/fetchers'
import ImageKitImage from './imagekit-image'

export default async function Footer() {
  const footer = await getFooterInfo()

  return (
    <footer className="bg-neutral-900 text-sm text-neutral-300">
      <figure className="grid grid-cols-6">
        {footer.image.map((image) => (
          <ImageKitImage
            key={(image as Media).id}
            image={image}
            width={400}
            className="aspect-square w-full object-cover"
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

          <h3 className="mb-2 font-medium text-white">Mitte März - Anfang November</h3>
          <p className="mb-2">Täglich 10:00 - 18:00 Uhr</p>

          <h3 className="mb-2 font-medium text-white">Anfang November - Mitte März</h3>
          <p className="mb-2">Jedes Wochenende und an Feiertagen 10:00 - 16:00 Uhr</p>

          <p>Der letzte Einlass ist jeweils eine halbe Stunde vor Schließung.</p>
        </div>

        <div>
          <h2 className="mb-4 font-serif text-3xl text-white">Kontakt</h2>

          <p>
            Röttelnbund e.V. Haagen
            <br />
            Burgruine Rötteln
            <br />
            79541 Lörrach Haagen
            <br />
            <br />
            <a
              className="transition-colors hover:text-white focus-visible:text-white"
              href="tel:+49762156494"
            >
              +49 (0)7621 56494
            </a>
            <br />
            <a
              className="transition-colors hover:text-white focus-visible:text-white"
              href="mailto:info@burgruine-roetteln.de"
            >
              info@burgruine-roetteln.de
            </a>
          </p>
        </div>
      </Container>

      <div className="border-t border-neutral-600 py-8 text-center">
        <p>&copy; {new Date().getFullYear()} Burgruine Rötteln. Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  )
}
