"use client";

import { PageHero } from "@/components/PageHero";
import { motion } from "framer-motion";

const board = [
  { name: "Erkan Sahin", role: "Voorzitter" },
  { name: "Marit van der Riet", role: "Penningmeester" },
  { name: "Ceciel Landsaat", role: "Secretaris" },
];

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function BestuurPage() {
  return (
    <main className="min-h-[100dvh] bg-cream">
      <PageHero
        title="Bestuur"
        subtitle="Het bestuur van Stichting VoedselEducatie010"
      />

      <section className="py-12 md:py-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="max-w-2xl"
          >
            {board.map((member) => (
              <motion.div
                key={member.name}
                variants={fadeUp}
                className="border-t border-charcoal/10 py-6 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1"
              >
                <h3 className="text-lg font-bold text-charcoal">
                  {member.name}
                </h3>
                <span className="text-sm text-warm-gray">{member.role}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
