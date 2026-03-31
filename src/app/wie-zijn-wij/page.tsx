"use client";

import { PageHero } from "@/components/PageHero";
import { motion } from "framer-motion";
import Image from "next/image";

const team = [
  {
    name: "Ralph van Meijgaard",
    role: "Chefkok & Coördinator",
    image: "/images/wie-zijn-wij/ralph-van-meijgaard.jpg",
    bio: "Was chefkok en coördinator op de OBS Bloemhof en sinds 2008 betrokken bij het opzetten van de gezonde schoollunch. Hij was verantwoordelijk voor zowel de bouw van de fysieke keuken, de inhoudelijke invulling daarvan en voor de ontwikkeling van de GezondeLunch en de kook- en smaaklessen. Vanaf het schooljaar 2018-\u201919 ontwikkelt hij met collega\u2019s en de leerlingen van het RVC de Hef lekkere en GezondeKantine producten.",
  },
  {
    name: "Deniz Ozer",
    role: "Chefkok & Keukencoördinator",
    image: "/images/wie-zijn-wij/deniz-ozer.jpg",
    bio: "Chefkok en keukencoördinator op de Agnesschool. Sinds 2014 is hij betrokken bij de inhoudelijke invulling van de gezonde lunch van het programma \u2018Doen-denken\u2019 van Rotterdam Vakmanstad. Naast zijn werkzaamheden op de Agnesschool is hij volop actief bij het ontwikkelen van de GezondeKantine op Vakcollege de Hef. Deniz weet als geen ander een goede en smakelijke maaltijd neer te zetten, zelfs met weinig middelen.",
  },
  {
    name: "Ramesh Acharya",
    role: "Souschef",
    image: "/images/wie-zijn-wij/ramesh-acharya.jpg",
    bio: "Souschef op de Agnesschool. Begint in 2015 als vrijwilliger en groeit door tot vaste assistent van de chefkok. Inmiddels met een afgeronde koks opleiding een onmisbare kracht binnen de organisatie. Hij is een flexibele en leergierige kok en iemand waar je altijd op kunt bouwen.",
  },
];

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function WieZijnWijPage() {
  return (
    <main className="min-h-[100dvh] bg-cream">
      <PageHero
        title="Wie zijn wij"
        subtitle="De koks en leermeesters achter VoedselEducatie010"
        image="/images/homepage/voedseleducatie-sfeer-2.jpg"
        imageAlt="Het team van VoedselEducatie010"
      />

      <section className="py-12 md:py-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold tracking-tight text-charcoal mb-10"
          >
            Ons team
          </motion.h2>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6"
          >
            {team.map((member, i) => (
              <motion.article
                key={member.name}
                variants={fadeUp}
                className={i === 0 ? "md:col-span-6" : "md:col-span-3"}
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-5">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-charcoal">
                  {member.name}
                </h3>
                <p className="text-sm text-warm-gray-light mt-0.5 mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-warm-gray leading-relaxed">
                  {member.bio}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
