"use client";

import { PageHero } from "@/components/PageHero";
import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  "logo-sterrenschool.png",
  "logo-rb.jpg",
  "logo-unknown-1.png",
  "logo-unknown-2.jpeg",
  "logo-rvc-de-hef.jpg",
  "logo-stichting-rvko.png",
  "logo-stichting-boor.jpg",
  "logo-stichting-vogelgezang.png",
  "logo-unknown-3.png",
  "logo-sntr.png",
  "logo-agnesschool.jpg",
  "logo-bloemhof.jpg",
  "logo-gemeente-rotterdam.jpeg",
  "logo-sol.gif",
  "logo-unknown-4.jpeg",
  "logo-albeda-college.png",
  "logo-rdamse-munt.png",
  "logo-rotterdam-vakmanstad.jpg",
  "logo-de-nieuwe-poort.png",
  "logo-noah-theater.jpeg",
  "logo-unknown-5.jpeg",
  "logo-partner-extra.jpg",
];

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04 },
  },
};

const fadeIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.35 } },
};

export default function PartnersPage() {
  return (
    <main className="min-h-[100dvh] bg-cream">
      <PageHero
        title="Partners"
        subtitle="Onze samenwerkingspartners in Rotterdam en omstreken."
      />

      <section className="py-12 md:py-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center"
          >
            {logos.map((file) => (
              <motion.div
                key={file}
                variants={fadeIn}
                className="relative flex items-center justify-center h-16"
              >
                <Image
                  src={`/images/partners/${file}`}
                  alt={file
                    .replace(/^logo-/, "")
                    .replace(/\.\w+$/, "")
                    .replace(/-/g, " ")}
                  fill
                  className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
