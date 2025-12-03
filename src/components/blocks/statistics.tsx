import type { StatisticsBlock } from '@/payload-types'
import Container from '../ui/container'
import Prose from './prose'
import Button from '../ui/button'
import Heading from '../ui/heading'

export default function Statistics({
  title,
  description,
  content,
  buttons,
  statistics,
}: StatisticsBlock) {
  return (
    <section className="py-24 lg:py-40" id="arbeitsgruppe">
      <Container>
        <Heading level="h5" tag="h2" dash>
          {title}
        </Heading>
        <Heading level="h1" tag="p" className="mb-8 md:max-w-1/2">
          {description}
        </Heading>

        <div className="md:ml-[25%]">
          <dl className="mb-16 grid grid-cols-2 gap-8 sm:grid-cols-3 md:gap-16">
            {statistics?.map((statistic) => (
              <div key={statistic.id} className="flex flex-col-reverse gap-4">
                <Heading tag="dt" level="h5">
                  {statistic.label}
                </Heading>
                <dd className="text-4xl text-gray-900 sm:text-5xl lg:text-6xl">
                  {statistic.value}
                </dd>
              </div>
            ))}
          </dl>

          <Prose content={content} className="mb-4" />

          {buttons ? (
            <div className="flex flex-wrap gap-1">
              {buttons.map((button) => (
                <Button key={button.id} href={button.link} variant={button.theme}>
                  {button.label}
                </Button>
              ))}
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  )
}
