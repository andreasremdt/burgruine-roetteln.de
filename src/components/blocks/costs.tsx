import Container from '../ui/container'
import type { CostsBlock } from '@/payload-types'
import { getCosts } from '@/lib/fetchers'

export default async function Costs({ title, description }: CostsBlock) {
  const items = await getCosts()

  return (
    <section className="pb-24 lg:pb-40" id="eintrittspreise">
      <Container>
        <h2 className="text-5xl text-gray-900 md:text-center">{title}</h2>
        <p className="text-2xl md:text-center">{description}</p>

        {items ? (
          <ul className="mt-16 space-y-3 text-xl md:mx-auto md:max-w-lg">
            {items.map((item) => (
              <li key={item.id} className="flex justify-between">
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
