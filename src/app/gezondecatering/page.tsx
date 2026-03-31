"use client";

import { PageHero } from "@/components/PageHero";
import { ContentSection } from "@/components/ContentSection";

export default function GezondeCateringPage() {
  return (
    <main className="min-h-[100dvh] bg-cream">
      <PageHero
        title="GezondeCatering"
        subtitle="Gezonde catering en bedrijfslunches op maat, in samenwerking met RVC de Hef."
        image="/images/gezondecatering/catering-presentatie.jpg"
        imageAlt="Professionele presentatie van gezonde catering"
      />

      <ContentSection
        image="/images/gezondecatering/catering-bereiden.jpg"
        imageAlt="Bereiding van catering in de professionele keuken"
        imagePosition="left"
      >
        <p>
          In samenwerking met RVC de Hef verzorgen wij een gezonde catering of
          bedrijfslunch op maat. Ook bezorgen wij op locatie voor organisaties en
          gezelschappen in de wijk.
        </p>
        <p>
          Vanaf 15 personen in de wijk en vanaf 40 personen op aanvraag in de rest
          van Rotterdam en omstreken. Vakcollege de Hef beschikt over 2
          professionele keukens en een conferentie zaal.
        </p>
        <p>
          Onze afnemers zijn in het algemeen maatschappelijke organisaties,
          onderwijs- en gezondheidsinstellingen.
        </p>
      </ContentSection>
    </main>
  );
}
