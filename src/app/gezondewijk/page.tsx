"use client";

import { PageHero } from "@/components/PageHero";
import { ContentSection } from "@/components/ContentSection";

export default function GezondeWijkPage() {
  return (
    <main className="min-h-[100dvh] bg-cream">
      <PageHero
        title="GezondeWijk"
        subtitle="Kookworkshops en smaaklessen voor wijkbewoners — van grond tot mond."
        image="/images/homepage/actueel-4.jpg"
        imageAlt="Wijkbewoners samen aan het koken"
      />

      <ContentSection
        heading="Workshops in de wijk"
        image="/images/homepage/actueel-3.jpg"
        imageAlt="Kookworkshop voor wijkbewoners"
        imagePosition="right"
      >
        <p>
          Samen met SOL en huisartsenpraktijk Mozaïek verzorgen wij kookworkshops
          voor wijkbewoners en patiënten met diabetes type 2. In de lessen is er
          veel aandacht voor koolhydraatarm koken.
        </p>
        <p>
          Ouders en kinderen in de wijk kunnen bij ons kook- en smaaklessen
          volgen. We verzorgen de workshops eventueel samen met maatschappelijke
          organisaties. Tijdens de lessen gaan we in op gezonde leefstijl en hoe
          voeding daaraan kan bijdragen. Naast het oefenen in kook- en
          snijtechnieken leren buurtbewoners hoe seizoensgroenten in de tuin
          gekweekt en verzorgd worden. We besteden ook aandacht aan ecologische
          processen. Van grond tot mond.
        </p>
      </ContentSection>

      <ContentSection heading="Taal in de keuken">
        <p>
          Ook de taal komt aan bod. We maken het Nederlands zichtbaar in de keuken
          en in de tuin. Zo bevorderen we taalvaardigheid tijdens de kook- en
          smaaklessen. Een reeks lessen kan worden afgesloten met een wijkdiner.
        </p>
        <p>
          Wij kunnen de workshops op elke locatie in de wijk geven.
        </p>
      </ContentSection>
    </main>
  );
}
