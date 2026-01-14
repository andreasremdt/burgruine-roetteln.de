import Image from 'next/image'
import Link from 'next/link'
import { getContactInfo, getFooterInfo, getOpeningHours } from '@/lib/fetchers'
import Container from '../ui/container'
import Icon from '../ui/icon'
import Heading from '../ui/heading'
import logo from '../../../public/ssg-logo.svg'
import FooterGallery from './footer-gallery'

export default async function Footer() {
  const footer = await getFooterInfo()
  const contactInfo = await getContactInfo()
  const openingHours = await getOpeningHours()

  return (
    <footer className="bg-gray-900 text-sm text-gray-300">
      <FooterGallery images={footer.image} />

      <Container className="grid grid-cols-1 gap-8 py-10 sm:grid-cols-2 md:grid-cols-4 md:py-20">
        <div>
          <Heading level="h3" tag="p" className="font-serif text-white">
            {footer.title}
          </Heading>
          <p className="mb-4">{footer.description}</p>
          <a
            href="https://www.schloesser-und-gaerten.de/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={logo} alt="SSG Logo" width={250} height={100} />
          </a>
        </div>

        <nav>
          <Heading level="h3" tag="h2" className="font-serif text-white">
            Seitenmenü
          </Heading>

          <ul>
            {footer.footerMenu
              .filter((menu) => typeof menu !== 'string')
              .map((menu) => (
                <li key={menu.id}>
                  <Link
                    prefetch
                    className="transition-colors hover:text-white focus-visible:text-white"
                    href={menu.slug}
                  >
                    {menu.title}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>

        <div>
          <Heading level="h3" tag="h2" className="font-serif text-white">
            Öffnungszeiten
          </Heading>

          <h3 className="mb-2 font-medium text-white">Unterburg</h3>
          <p>{openingHours.titleInnerWard}</p>
          <p>{openingHours.notesInnerWard}</p>

          <h3 className="mt-4 mb-2 font-medium text-white">Oberburg</h3>
          <p>{openingHours.titleOuterWard}</p>
          <p>{openingHours.notesOuterWard}</p>
        </div>

        <div>
          <Heading level="h3" tag="h2" className="font-serif text-white">
            Kontakt
          </Heading>

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

          {contactInfo.social?.instagram || contactInfo.social?.facebook ? (
            <div className="mt-4 flex items-center gap-2">
              {contactInfo.social?.instagram && (
                <a href={contactInfo.social.instagram} target="_blank" rel="noopener noreferrer">
                  <Icon name="instagram" className="size-6" />
                </a>
              )}
              {contactInfo.social?.facebook && (
                <a href={contactInfo.social.facebook} target="_blank" rel="noopener noreferrer">
                  <Icon name="facebook" className="size-6" />
                </a>
              )}
            </div>
          ) : null}
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
