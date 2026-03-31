"use client";

import { PageHero } from "@/components/PageHero";
import { ContentSection } from "@/components/ContentSection";

export default function DoelPage() {
  return (
    <main className="min-h-[100dvh] bg-cream">
      <PageHero
        title="Doel"
        subtitle="Gezond eten en voedselwijsheid voor iedereen in Rotterdam."
        image="/images/doel/doel-sfeer.jpg"
        imageAlt="Voedselwijsheid in Rotterdam"
      />

      <ContentSection heading="Gezond eten en Voedselwijsheid">
        <p>
          Gezondheid is ongelijk verdeeld in Rotterdam. In veel wijken is
          overgewicht bij kleuters, jongeren en volwassenen een groot probleem.
          Ongezonde voeding in combinatie met sociale, culturele en economische
          barrières vergroten de kans dat wijkbewoners minder goed meekomen in de
          samenleving en dat hun kinderen moeilijker leren op school.
        </p>
        <p>
          VoedselEducatie010 geeft leerlingen, ouders en wijkbewoners inzicht in
          hun voedselpatroon. We stimuleren voedselwijsheid door lekker en gezond
          eten centraal te stellen en het doorbreken van ongezonde patronen.
        </p>
      </ContentSection>
    </main>
  );
}
