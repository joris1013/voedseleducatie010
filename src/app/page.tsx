"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const staggerChild = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const programs = [
  {
    title: "GezondeLunch",
    href: "/gezondelunch",
    image: "/images/homepage/kinderen-lunch-2016.jpg",
    span: "md:col-span-4",
  },
  {
    title: "GezondeKantine",
    href: "/gezondekantine",
    image: "/images/gezondekantine/kantine-product.jpg",
    span: "md:col-span-2",
  },
  {
    title: "GezondeCatering",
    href: "/gezondecatering",
    image: "/images/gezondecatering/catering-presentatie.jpg",
    span: "md:col-span-2",
  },
  {
    title: "Kook- en Smaaklessen",
    href: "/kook-en-smaaklessen",
    image: "/images/homepage/koken-kinderen.jpg",
    span: "md:col-span-2",
  },
  {
    title: "GezondeWijk",
    href: "/gezondewijk",
    image: "/images/homepage/keuken-2015.jpg",
    span: "md:col-span-2",
  },
];

const stats = [
  { number: "2.000+", label: "lunches per week" },
  { number: "Sinds 2008", label: "actief in Rotterdam" },
  { number: "72.000", label: "lunches per jaar" },
];

const galleryPhotos = [
  {
    src: "/images/homepage/actueel-2.jpg",
    alt: "Drankstation in de schoolkeuken",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/images/homepage/actueel-3.jpg",
    alt: "Hartvormig deeg gemaakt door kinderen",
    className: "col-span-1 row-span-2",
  },
  {
    src: "/images/homepage/actueel-4.jpg",
    alt: "Kinderen koken samen in de keuken",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/images/homepage/actueel-5.jpg",
    alt: "Kok met VE010 schort",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/images/homepage/voedseleducatie-sfeer-1.jpg",
    alt: "Verse groenten worden gesneden",
    className: "col-span-1 row-span-1",
  },
];

const partnerLogos = [
  { src: "/images/partners/logo-gemeente-rotterdam.jpeg", alt: "Gemeente Rotterdam" },
  { src: "/images/partners/logo-rvc-de-hef.jpg", alt: "RVC de Hef" },
  { src: "/images/partners/logo-stichting-boor.jpg", alt: "Stichting BOOR" },
  { src: "/images/partners/logo-agnesschool.jpg", alt: "Agnesschool" },
  { src: "/images/partners/logo-bloemhof.jpg", alt: "Bloemhof" },
  { src: "/images/partners/logo-rotterdam-vakmanstad.jpg", alt: "Rotterdam Vakmanstad" },
  { src: "/images/partners/logo-albeda-college.png", alt: "Albeda College" },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-24">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="md:col-span-5 lg:col-span-5 flex flex-col justify-center">
              <motion.h1
                custom={0}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="text-4xl md:text-6xl tracking-tighter leading-none font-bold text-charcoal"
              >
                Gezond eten voor Rotterdamse kinderen
              </motion.h1>

              <motion.p
                custom={1}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="mt-6 text-base md:text-lg text-warm-gray leading-relaxed max-w-[50ch]"
              >
                Wekelijks bereiden we meer dan 2.000 verse lunches voor
                basisscholen in Rotterdam. Met kook- en smaaklessen maken we
                kinderen bewust van gezonde voeding.
              </motion.p>

              <motion.div
                custom={2}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="mt-8"
              >
                <Link
                  href="#programmas"
                  className="inline-block bg-forest text-white px-6 py-3 rounded-xl font-medium hover:bg-forest-light transition-colors active:scale-[0.97] transform"
                >
                  Ontdek onze programma&apos;s
                </Link>
              </motion.div>
            </div>

            <motion.div
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="md:col-span-7 lg:col-span-7 md:flex md:justify-end"
            >
              <div className="relative w-full md:w-[95%] aspect-[4/3] md:aspect-[3/4] rounded-3xl overflow-hidden">
                <Image
                  src="/images/gezondelunch/lunch-recent.jpg"
                  alt="Meisje met lunchkar op een Rotterdamse basisschool"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 58vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Programs Bento Grid ── */}
      <section id="programmas" className="py-20 md:py-32">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <motion.h2
            variants={staggerChild}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-3xl md:text-5xl tracking-tighter font-bold text-charcoal mb-10 md:mb-14"
          >
            Onze Programma&apos;s
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-5"
          >
            {programs.map((program) => (
              <motion.div
                key={program.title}
                variants={staggerChild}
                className={`${program.span} group`}
              >
                <Link href={program.href} className="block relative rounded-2xl overflow-hidden aspect-[16/10]">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-5 md:p-6">
                    <h3 className="text-lg md:text-xl font-semibold text-white">
                      {program.title}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Impact Numbers ── */}
      <section className="bg-cream-dark">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-16 md:py-24">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={staggerChild}
                className="text-center md:text-left"
              >
                <p className="text-4xl md:text-5xl font-bold tracking-tighter text-forest">
                  {stat.number}
                </p>
                <p className="mt-2 text-warm-gray text-base">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Photo Gallery ── */}
      <section className="py-20 md:py-32">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <motion.h2
            variants={staggerChild}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-3xl md:text-5xl tracking-tighter font-bold text-charcoal mb-10 md:mb-14"
          >
            Uit de keuken
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 auto-rows-[200px] md:auto-rows-[240px]">
              {galleryPhotos.map((photo) => (
                <motion.div
                  key={photo.src}
                  variants={staggerChild}
                  className={`${photo.className} rounded-2xl overflow-hidden relative`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, rotate: -6, scale: 0.9 }}
              whileInView={{ opacity: 1, rotate: -4, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
              className="hidden md:block absolute -bottom-8 -right-4 w-32 h-40 rounded-xl overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.12)] border-4 border-cream z-10 rotate-[-4deg]"
            >
              <Image
                src="/images/gezondelunch/lunch-serveren.jpg"
                alt="Kinderen serveren hun lunch"
                fill
                className="object-cover"
                sizes="128px"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Team Teaser ── */}
      <section className="py-20 md:py-32 bg-cream-dark">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 items-center">
            <motion.div
              variants={staggerChild}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="md:col-span-7 relative rounded-3xl overflow-hidden aspect-[4/3]"
            >
              <Image
                src="/images/homepage/voedseleducatie-sfeer-2.jpg"
                alt="Twee koks bereiden verse maaltijden in de keuken"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 58vw"
              />
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="md:col-span-5 flex flex-col justify-center"
            >
              <motion.h2
                variants={staggerChild}
                className="text-3xl md:text-5xl tracking-tighter font-bold text-charcoal"
              >
                De mensen achter het eten
              </motion.h2>

              <motion.p
                variants={staggerChild}
                className="mt-6 text-base md:text-lg text-warm-gray leading-relaxed max-w-[50ch]"
              >
                Onze koks en leermeesters werken dagelijks met verse
                ingredi&euml;nten. Ze begeleiden stagiairs en vrijwilligers en
                brengen voedselwijsheid in de wijk.
              </motion.p>

              <motion.div variants={staggerChild} className="mt-8">
                <Link
                  href="/wie-zijn-wij"
                  className="inline-flex items-center gap-2 text-forest font-medium hover:text-forest-light transition-colors group"
                >
                  <span>Ontmoet het team</span>
                  <span
                    aria-hidden="true"
                    className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                  >
                    &rarr;
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Partner Logo Bar ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <motion.h2
            variants={staggerChild}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="text-3xl md:text-5xl tracking-tighter font-bold text-charcoal mb-10 md:mb-14"
          >
            Onze Partners
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="overflow-x-auto scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
          >
            <div className="flex items-center gap-8 md:gap-12 min-w-max md:min-w-0 md:flex-wrap md:justify-start">
              {partnerLogos.map((logo) => (
                <motion.div
                  key={logo.alt}
                  variants={staggerChild}
                  className="shrink-0"
                >
                  <div className="relative h-12 md:h-14 w-24 md:w-32 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      fill
                      className="object-contain"
                      sizes="128px"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={staggerChild}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-10"
          >
            <Link
              href="/partners"
              className="inline-flex items-center gap-2 text-forest font-medium hover:text-forest-light transition-colors group"
            >
              <span>Bekijk alle partners</span>
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-300 group-hover:translate-x-1"
              >
                &rarr;
              </span>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
