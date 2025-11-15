import type { TimelineBlock } from '@/payload-types'
import { cn } from '@/lib/utils'
import Container from '../ui/container'
import Prose from './prose'

export default function Timeline({ description, items }: TimelineBlock) {
  return (
    <Container tag="section" aria-label="Timeline" className="py-24 lg:py-40">
      <p className="mb-24 text-3xl text-gray-900 md:text-4xl lg:mb-40">{description}</p>

      {items ? (
        <ul className="relative after:absolute after:top-0 after:bottom-0 after:left-1/2 after:-z-10 after:w-px md:after:bg-gray-300">
          {items.map((item, index) => (
            <li
              key={item.id}
              className={cn(
                'relative mb-20 flex flex-col',
                index % 2 === 1 ? 'md:items-end md:text-right' : '',
              )}
            >
              <h3 className="mb-2 bg-white font-sans text-2xl font-bold text-gray-500 md:absolute md:left-1/2 md:-translate-x-1/2">
                {item.year}
              </h3>
              <Prose className="mt-2 md:max-w-1/3" content={item.content} />
            </li>
          ))}
          {/* <li class="relative mb-20 flex flex-col">
            <h3
                class="text-gray-500 mb-2 bg-white font-sans text-2xl font-bold md:absolute md:left-1/2 md:-translate-x-1/2"
            >
                751
            </h3>
            <p class="mt-2 text-xl md:max-w-1/3 md:text-2xl">
                Erste Erwähnung der Kirche von Rötteln in einer Urkunde des Klosters St.
                Gallen.
            </p>
            </li>
            <li class="relative mb-20 flex flex-col md:items-end md:text-right">
            <h3
                class="text-gray-500 mb-2 bg-white font-sans text-2xl font-bold md:absolute md:left-1/2 md:-translate-x-1/2"
            >
                1103
            </h3>
            <Image
                src={wappen1}
                alt="Wappen"
                width={150}
                height={200}
                loading="lazy"
                decoding="async"
                format="webp"
                class="mb-2"
            />
            <p class="mt-2 text-xl md:max-w-1/3 md:text-2xl">
                Der Edelfreie Dietrich zu Rötteln begründet das Röttler
                Herrengeschlecht.
            </p>
            </li> */}
          {/* <li class="relative mb-20 flex flex-col">
            <h3
                class="text-gray-500 mb-2 bg-white font-sans text-2xl font-bold md:absolute md:left-1/2 md:-translate-x-1/2"
            >
                1147
            </h3>
            <p class="mt-2 text-xl md:max-w-1/3 md:text-2xl">
                Röttler Edelherren werden als Kreuzzugsteilnehmer genannt.
            </p>
            </li>
            <li class="relative mb-20 flex flex-col md:items-end md:text-right">
            <h3
                class="text-gray-500 mb-2 bg-white font-sans text-2xl font-bold md:absolute md:left-1/2 md:-translate-x-1/2"
            >
                1259
            </h3>
            <p class="mt-2 text-xl md:max-w-1/3 md:text-2xl">
                Erste urkundliche Erwähnung der Burg Rötteln.
            </p>
            </li>
            <li class="relative mb-20 flex flex-col">
            <h3
                class="text-gray-500 mb-2 bg-white font-sans text-2xl font-bold md:absolute md:left-1/2 md:-translate-x-1/2"
            >
                1315
            </h3>
            <Image
                src={wappen2}
                alt="Wappen"
                width={150}
                height={200}
                loading="lazy"
                decoding="async"
                format="webp"
                class="mb-2"
            />
            <p class="mt-2 text-xl md:max-w-1/3 md:text-2xl">
                Durch Erbschaft fallen die Herrschaften von Rötteln und Hachberg -
                Sausenberg zusamnmen.
            </p>
            </li>
            <li class="relative mb-20 flex flex-col md:items-end md:text-right">
            <h3
                class="text-gray-500 mb-2 bg-white font-sans text-2xl font-bold md:absolute md:left-1/2 md:-translate-x-1/2"
            >
                1356
            </h3>
            <p class="mt-2 text-xl md:max-w-1/3 md:text-2xl">
                Schweres Erdbeben im Dreiländereck mit Epizentrum in Basel beschädigt
                die Burg und die Kirche.
            </p>
            </li>
            <li class="relative mb-20 flex flex-col">
            <h3
                class="text-gray-500 mb-2 bg-white font-sans text-2xl font-bold md:absolute md:left-1/2 md:-translate-x-1/2"
            >
                1444
            </h3>
            <Image
                src={wappen3}
                alt="Wappen"
                width={150}
                height={200}
                loading="lazy"
                decoding="async"
                format="webp"
                class="mb-2"
            />
            <p class="mt-2 text-xl md:max-w-1/3 md:text-2xl">
                Durch Schenkung der Herrschaft Badenweiler an Rötteln wird das noch
                heute bestehende Gebiet des Markgräflerlandes gebildet.
            </p>
            </li>
            <li class="relative mb-20 flex flex-col md:items-end md:text-right">
            <h3
                class="text-gray-500 mb-2 bg-white font-sans text-2xl font-bold md:absolute md:left-1/2 md:-translate-x-1/2"
            >
                1503
            </h3>
            <p class="mt-2 text-xl md:max-w-1/3 md:text-2xl">
                Übergang der Burg Rötteln an Markgraf Christoph von Baden.
            </p>
            </li>
            <li class="relative mb-20 flex flex-col">
            <h3
                class="text-gray-500 mb-2 bg-white font-sans text-2xl font-bold md:absolute md:left-1/2 md:-translate-x-1/2"
            >
                1525
            </h3>
            <p class="mt-2 text-xl md:max-w-1/3 md:text-2xl">
                Bauernkrieg: Die Burg wird von Aufständischen eingenommen aber nicht
                beschädigt.
            </p>
            </li>
            <li class="relative mb-20 flex flex-col md:items-end md:text-right">
            <h3
                class="text-gray-500 mb-2 bg-white font-sans text-2xl font-bold md:absolute md:left-1/2 md:-translate-x-1/2"
            >
                1678
            </h3>
            <p class="mt-2 text-xl md:max-w-1/3 md:text-2xl">
                Zerstörung der Burg im holländischen Erbfolgekrieg durch französische
                Truppen unter Marschall Créqui.
            </p>
            </li>
            <li class="relative mb-20 flex flex-col">
            <h3
                class="text-gray-500 mb-2 bg-white font-sans text-2xl font-bold md:absolute md:left-1/2 md:-translate-x-1/2"
            >
                1926
            </h3>
            <p class="mt-2 text-xl md:max-w-1/3 md:text-2xl">
                Gründung des Röttelnbund e.V. Haagen.
            </p>
            </li>
            <li class="relative mb-20 flex flex-col md:items-end md:text-right">
            <h3
                class="text-gray-500 mb-2 bg-white font-sans text-2xl font-bold md:absolute md:left-1/2 md:-translate-x-1/2"
            >
                1989
            </h3>
            <p class="mt-2 text-xl md:max-w-1/3 md:text-2xl">
                Wiederaufbau der Landschreiberei.
            </p>
            </li>
            <li class="relative mb-20 flex flex-col">
            <h3
                class="text-gray-500 mb-2 bg-white font-sans text-2xl font-bold md:absolute md:left-1/2 md:-translate-x-1/2"
            >
                2001
            </h3>
            <p class="mt-2 text-xl md:max-w-1/3 md:text-2xl">
                Wiedereröffnung des Gillers für die Öffentlichkeit anlässlich des 75.
                Jubiläums des Röttelnbund e.V.
            </p>
            </li>
            <li class="relative mb-20 flex flex-col md:items-end md:text-right">
            <h3
                class="text-gray-500 mb-2 bg-white font-sans text-2xl font-bold md:absolute md:left-1/2 md:-translate-x-1/2"
            >
                2010
            </h3>
            <p class="mt-2 text-xl md:max-w-1/3 md:text-2xl">
                Aufstockung des Betriebsgebäudes vom Röttelnbund e.V.
            </p>
            </li>
            <li class="relative mb-20 flex flex-col">
            <h3
                class="text-gray-500 mb-2 bg-white font-sans text-2xl font-bold md:absolute md:left-1/2 md:-translate-x-1/2"
            >
                2019
            </h3>
            <p class="mt-2 text-xl md:max-w-1/3 md:text-2xl">
                Röttler Jahr mit verschiedensten Veranstaltungen rund um das Thema
                Rötteln.
            </p>
            </li>
            <li class="relative mb-20 flex flex-col md:items-end md:text-right">
            <h3
                class="text-gray-500 mb-2 bg-white font-sans text-2xl font-bold md:absolute md:left-1/2 md:-translate-x-1/2"
            >
                2022
            </h3>
            <p class="mt-2 text-xl md:max-w-1/3 md:text-2xl">
                Eine neue Edition „Die Letzten von Rötteln“ wird herausgegeben.
            </p>
            </li>
            <li class="relative flex flex-col">
            <h3
                class="text-gray-500 mb-2 bg-white font-sans text-2xl font-bold md:absolute md:left-1/2 md:-translate-x-1/2"
            >
                2023
            </h3>
            <p class="mt-2 text-xl md:max-w-1/3 md:text-2xl">
                Wissenschaftliche Grabungen durch Schlösser und Gärten Baden -
                Würtemberg.
            </p>
            </li> */}
        </ul>
      ) : (
        <p className="text-center text-2xl text-gray-900">Keine Einträge in der Timeline.</p>
      )}
    </Container>
  )
}
