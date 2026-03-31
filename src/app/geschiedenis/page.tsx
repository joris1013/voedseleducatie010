"use client";

import { PageHero } from "@/components/PageHero";
import { motion } from "framer-motion";

const timeline = [
  {
    year: "2008",
    text: "Op de OBS Bloemhof wordt een begin gemaakt met de warme lunch voor 300 leerlingen als onderdeel van het traject \u2018Fysieke Integriteit\u2019 van stichting Rotterdam Vakmanstad. In de 5 leerlijnen \u2014 judo, koken, tuin-, filosofie- en technieklessen \u2014 oefenen de leerlingen nieuwe skills op fysiek, sociaal en mentaal vlak.",
  },
  {
    year: "2012",
    text: "Meer scholen sluiten aan op het programma. De leerlingen van de Agnesschool krijgen ook een warme lunch aangeboden. Totaal worden op jaarbasis zo\u2019n 72.000 lunches klaargemaakt. Ouders, hulpmoeders en vrijwilligers helpen dagelijks mee met fruit snijden, uitserveren, opruimen en het begeleiden van groepen.",
  },
  {
    year: "Nu",
    text: "VoedselEducatie010 is een zelfstandige stichting geworden. De organisatie specialiseert zich in het ontwikkelen en aanbieden van gezonde producten. De keuken is ook het decor van kook- en smaaklessen, cursussen voor ouders en buurtbewoners, familie- en wijkdiners.",
  },
];

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function GeschiedenisPage() {
  return (
    <main className="min-h-[100dvh] bg-cream">
      <PageHero
        title="Geschiedenis"
        subtitle="Van een warme lunch op de OBS Bloemhof tot een stichting die wekelijks 2000 kinderen bereikt."
        image="/images/geschiedenis/beginjaren-keuken.jpg"
        imageAlt="De beginjaren van VoedselEducatie010"
      />

      <section className="py-12 md:py-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="relative max-w-3xl border-l-2 border-carrot/30 pl-8 md:pl-12 ml-4"
          >
            {timeline.map((block) => (
              <motion.div
                key={block.year}
                variants={fadeUp}
                className="relative pb-14 last:pb-0"
              >
                <span className="absolute -left-[calc(2rem+5px)] md:-left-[calc(3rem+5px)] top-1.5 block h-2.5 w-2.5 rounded-full bg-carrot" />
                <span className="block text-3xl md:text-4xl font-bold tracking-tighter text-carrot mb-3">
                  {block.year}
                </span>
                <p className="text-base text-warm-gray leading-relaxed max-w-[60ch]">
                  {block.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
