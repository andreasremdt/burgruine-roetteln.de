import Container from '../ui/container'
import type { CostsBlock } from '@/payload-types'
import { getCosts } from '@/lib/fetchers'
import Heading from '../ui/heading'
import Text from '../ui/text'

export default async function Costs({ title, description }: CostsBlock) {
  const items = await getCosts()

  return (
    <section className="pb-24 lg:pb-40" id="eintrittspreise">
      <Container>
        <Heading level="h1" tag="h2" className="md:text-center">
          {title}
        </Heading>
        <Text className="md:text-center">{description}</Text>

        {items ? (
          <ul className="mt-16 space-y-6 text-xl sm:space-y-3 md:mx-auto md:max-w-lg">
            {items.map((item) => (
              <li key={item.id} className="flex flex-col justify-between sm:flex-row">
                <span>
                  {item.title}:
                  {item.description ? <i className="block">{item.description}</i> : null}
                </span>
                <b className="font-bold text-gray-900">{item.price}</b>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-2xl md:text-center">Keine Eintrittspreise vorhanden.</p>
        )}
      </Container>
    </section>
  )
}
