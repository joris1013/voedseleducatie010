"use client";

import { PageHero } from "@/components/PageHero";
import { ContentSection } from "@/components/ContentSection";

export default function StagiairsPage() {
  return (
    <main className="min-h-[100dvh] bg-cream">
      <PageHero
        title="Stagiairs en Vrijwilligers"
        subtitle="Samen werken aan gezonde voeding in Rotterdam"
        image="/images/stagiairs/stagiairs-keuken.jpg"
        imageAlt="Stagiairs in de keuken"
      />

      <ContentSection heading="Leer- en werkomgeving">
        <p>
          Stagiairs van het VMBO en MBO doen bij ons onder begeleiding van
          koks/leermeesters vakkennis en ervaring op. VoedselEducatie010 is ook
          een stagebedrijf. Stagiairs zorgen samen met de koks voor gezonde
          lunches en catering. Dat doen we in onze keuken of op locatie.
          Stagiaires van de horeca opleidingen kunnen in ons leerbedrijf
          praktische en theoretische vaardigheden opdoen. Zij kunnen dan zelf
          meewerken aan de bereiding van soepen, broodjes, salades en andere
          hapjes en ontwikkelen in het leerproces nieuwe gezonde
          kantineproducten.
        </p>
      </ContentSection>

      <ContentSection heading="Vrijwilligers uit de wijk">
        <p>
          Sociaal-maatschappelijke ontwikkeling stimuleren bij ouders en
          vrijwilligers uit de wijk. Een belangrijke schakel in dit geheel zijn
          de vrijwilligers en moeders. Wij bieden mensen met een afstand tot de
          arbeidsmarkt een kans om mee te werken in het productieproces. Zij
          helpen mee met de bereiding van de maaltijden, het uitserveren van de
          lunch, de kooklessen en catering. Door deze samenwerking versterken wij
          de banden met de wijk.
        </p>
      </ContentSection>
    </main>
  );
}
