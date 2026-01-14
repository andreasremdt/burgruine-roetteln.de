import type { ComponentPropsWithoutRef } from 'react'
import Container from '../ui/container'
import Heading from '../ui/heading'
import TitleHero from './title-hero'

type Props = ComponentPropsWithoutRef<'section'> & {
  title: string
  subtitle?: string | null
  description?: string | null
}

export default async function AdvancedHero({ title, subtitle, description }: Props) {
  return (
    <>
      <TitleHero title={title} />

      <div className="bg-gray-50">
        <Container className="grid grid-cols-5 gap-x-8 py-24 lg:py-40">
          <div className="col-span-5 md:col-span-2">
            <Heading level="h1" tag="h2" className="mb-8 md:mb-0">
              {subtitle}
            </Heading>
          </div>

          {description ? (
            <p
              className="col-span-5 text-xl leading-relaxed md:col-span-3 md:text-3xl md:leading-tight"
              dangerouslySetInnerHTML={{ __html: description.replace(/\n/g, '<br />') }}
            />
          ) : null}
        </Container>
      </div>
    </>
  )
}
