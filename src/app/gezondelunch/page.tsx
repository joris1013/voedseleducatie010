"use client";

import { motion } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import { ContentSection } from "@/components/ContentSection";

export default function GezondeLunchPage() {
  return (
    <main className="min-h-[100dvh] bg-cream">
      <PageHero
        title="GezondeLunch"
        subtitle="Dagelijks verse, warme en educatieve schoollunches voor basisschoolleerlingen in Rotterdam."
        image="/images/homepage/kinderen-lunch-2016.jpg"
        imageAlt="Kinderen genieten van een gezonde schoollunch"
      />

      <ContentSection
        image="/images/gezondelunch/lunch-recent.jpg"
        imageAlt="Verse schoollunch bereid in onze keuken"
        imagePosition="right"
      >
        <p>
          Stichting VoedselEducatie010 biedt leerlingen van basisscholen dagelijks
          een warme, gezonde en educatieve SchoolLunch aan. Verse groenten en fruit
          zijn een must. Vanuit een professionele keuken wordt dagelijks met een team
          van koks/leermeesters, stagiairs, vrijwilligers gekookt met verse
          ingrediënten.
        </p>
        <p>
          Wij brengen de lunch naar school en serveren het uit. Overblijfouders
          helpen met de logistiek en dragen pedagogisch een steentje bij.
        </p>
      </ContentSection>

      <ContentSection
        heading="Wat willen we"
        image="/images/gezondelunch/lunch-keuken.jpg"
        imageAlt="Onze professionele keuken waar de lunches worden bereid"
        imagePosition="left"
        imageSmall
      >
        <p>
          Kinderen bewust maken van een gezonde leefstijl en hen handreikingen
          bieden om deze te ontwikkelen en aan te houden. We gaan sociaal gedrag en
          omgangsnormen bij de kinderen bevorderen. Ouders geven we meer inzicht
          door coaching en begeleiding in het nastreven van een duurzame en gezonde
          leefstijl voor hun kinderen en hun gezin.
        </p>
      </ContentSection>

      <section className="py-12 md:py-20 bg-cream-dark">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="md:col-span-5"
            >
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-charcoal mb-6">
                Waar werken we
              </h2>
              <p className="text-base text-warm-gray leading-relaxed max-w-[65ch]">
                Wekelijks bieden we ruim 2000 vers klaargemaakte lunches op
                basisscholen in Rotterdam en omstreken.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="md:col-span-5 md:col-start-7"
            >
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-charcoal mb-6">
                Leer/werkomgeving
              </h2>
              <p className="text-base text-warm-gray leading-relaxed max-w-[65ch]">
                Deelnemers aan het leer/werk traject LPC van de gemeente Rotterdam
                doen bij ons onder begeleiding van koks/leermeesters vakkennis en
                ervaring op.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
