import type { StatisticsBlock } from '@/payload-types'
import Container from '../ui/container'
import Prose from './prose'
import Button from '../ui/button'

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
        <h2 className="mb-2 flex items-center font-sans font-medium text-gray-600 uppercase before:mr-4 before:block before:h-px before:w-8 before:bg-gray-600">
          {title}
        </h2>
        <p className="mb-16 max-w-1/2 text-5xl text-gray-900">{description}</p>

        <div className="ml-[35%]">
          <dl className="mb-16 grid grid-cols-3 gap-16">
            {statistics?.map((statistic) => (
              <div key={statistic.id} className="flex flex-col-reverse gap-4">
                <dt className="font-sans font-medium text-gray-600 uppercase">{statistic.label}</dt>
                <dd className="text-7xl text-gray-900">{statistic.value}</dd>
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
