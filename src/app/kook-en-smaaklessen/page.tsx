"use client";

import { PageHero } from "@/components/PageHero";
import { ContentSection } from "@/components/ContentSection";

export default function KookEnSmaaklessenPage() {
  return (
    <main className="min-h-[100dvh] bg-cream">
      <PageHero
        title="Kook- en Smaaklessen"
        subtitle="Gezond en lekker, dat kan gemakkelijk samen."
        image="/images/homepage/koken-kinderen.jpg"
        imageAlt="Kinderen volgen een kookles"
      />

      <ContentSection
        image="/images/kook-en-smaaklessen/smaaklessen-sfeer.jpg"
        imageAlt="Sfeerbeeld van een smaakles met leerlingen"
        imagePosition="right"
      >
        <p>
          Met kook- en smaaklessen willen we de leerlingen kennis en vaardigheden
          over voeding en gezondheid bijbrengen. We willen ze prikkelen om als het
          om eten gaat bewustere keuzes te maken.
        </p>
        <p>
          Een gezonde kapsalon is in een handomdraai gemaakt. En onze bonenburger
          wint aan populariteit. In deze lessen koppelen we de GezondeLunch en de
          GezondeKantine aan elkaar.
        </p>
      </ContentSection>

      <ContentSection
        heading="Van kleuter tot jongere"
        image="/images/homepage/voedseleducatie-sfeer-1.jpg"
        imageAlt="Leerlingen van verschillende leeftijden aan het koken"
        imagePosition="left"
      >
        <p>
          Wij geven de kook- en smaaklessen aan leerlingen van het primair
          onderwijs en het vmbo. Op de OBS Bloemhof krijgen alle groepen meerdere
          lessen per schooljaar aangeboden.
        </p>
        <p>
          Alle leerlingen van Vakcollege de Hef uit de onderbouw en de
          internationale schakelklassen krijgen een reeks lessen waarin brede
          smaakontwikkeling en ecowijsheid centraal staan. Van knippen en
          scheuren, mengen en roeren bij kleuters tot aan hakken met een koksmes
          bij de jongeren. De bovenbouw leert daarnaast met een oven omgaan.
        </p>
      </ContentSection>
    </main>
  );
}
