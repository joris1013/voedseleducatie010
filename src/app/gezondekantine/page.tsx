"use client";

import { PageHero } from "@/components/PageHero";
import { ContentSection } from "@/components/ContentSection";

export default function GezondeKantinePage() {
  return (
    <main className="min-h-[100dvh] bg-cream">
      <PageHero
        title="GezondeKantine"
        subtitle="Foodprint voor de school van de toekomst — we moedigen leerlingen aan een gezonde maaltijd te kiezen."
        image="/images/gezondekantine/kantine-product.jpg"
        imageAlt="Gezonde kantineproducten op school"
      />

      <ContentSection
        heading="GezondeKantine"
        image="/images/gezondekantine/kantine-sfeer.jpg"
        imageAlt="Sfeerbeeld van de gezonde schoolkantine"
        imagePosition="right"
      >
        <p>
          VoedselEducatie010 ontwikkelt op RVC De Hef nieuwe gezonde
          kantineproducten. De leerlingen gaan bij deze veranderingen een actieve
          rol spelen. Tijdens kook- en smaaklessen laten we zien welke
          ingrediënten gebruikt worden en hoe we de producten maken.
        </p>
        <p>
          Doordat we samen met de leerlingen op zoek gaan naar innovatieve en
          gezonde producten zal er uiteindelijk ook belangstelling en waardering
          ontstaan voor het nieuwe eten.
        </p>
      </ContentSection>

      <ContentSection heading="Leer- en werkbedrijf">
        <p>
          Stagiairs van het VMBO en MBO leren onder begeleiding van koks (erkende
          leermeesters) maaltijden te bereiden. In deze leeromgeving worden
          vakkennis en vaardigheden bijgebracht.
        </p>
      </ContentSection>
    </main>
  );
}
