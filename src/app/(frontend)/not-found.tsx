import type { Metadata } from 'next'
import Button from '@/components/ui/button'
import TitleHero from '@/components/layout/title-hero'
import Text from '@/components/ui/text'
import Container from '@/components/ui/container'

export const metadata: Metadata = {
  title: 'Seite nicht gefunden',
  description:
    'Die von Ihnen gewünschte Seite konnte nicht gefunden werden. Bitte vergewissern Sie sich, das die URL stimmt.',
}

export default function NotFound() {
  return (
    <>
      <TitleHero title="Seite nicht gefunden" />
      <Container className="py-24 text-center lg:py-40">
        <Text className="mb-8">
          Die von Ihnen gewünschte Seite konnte nicht gefunden werden. Bitte vergewissern Sie sich,
          das die URL stimmt. Eventuell wurden die Seite oder der Beitrag auch gelöscht. Mit einem
          Klick auf die unten sichtbare Schaltfläche gelangen Sie auf die Startseite zurück.
        </Text>
        <Button href="/">Zur Startseite</Button>
      </Container>
    </>
  )
}
