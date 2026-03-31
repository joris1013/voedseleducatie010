"use client";

import { PageHero } from "@/components/PageHero";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="min-h-[100dvh] bg-cream">
      <PageHero
        title="Contact"
        subtitle="Neem contact met ons op"
      />

      <section className="py-12 md:py-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="md:col-span-7"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label
                    htmlFor="naam"
                    className="block text-sm font-medium text-charcoal mb-1.5"
                  >
                    Naam *
                  </label>
                  <input
                    id="naam"
                    name="naam"
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white border border-charcoal/10 focus:border-forest focus:ring-1 focus:ring-forest outline-none transition"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-charcoal mb-1.5"
                  >
                    E-mail *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white border border-charcoal/10 focus:border-forest focus:ring-1 focus:ring-forest outline-none transition"
                  />
                </div>

                <div>
                  <label
                    htmlFor="onderwerp"
                    className="block text-sm font-medium text-charcoal mb-1.5"
                  >
                    Onderwerp
                  </label>
                  <input
                    id="onderwerp"
                    name="onderwerp"
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-charcoal/10 focus:border-forest focus:ring-1 focus:ring-forest outline-none transition"
                  />
                </div>

                <div>
                  <label
                    htmlFor="bericht"
                    className="block text-sm font-medium text-charcoal mb-1.5"
                  >
                    Bericht
                  </label>
                  <textarea
                    id="bericht"
                    name="bericht"
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-charcoal/10 focus:border-forest focus:ring-1 focus:ring-forest outline-none transition resize-y"
                  />
                </div>

                <button
                  type="submit"
                  className="px-8 py-3 bg-forest text-white font-medium rounded-xl hover:bg-forest-light transition-colors duration-200"
                >
                  Verstuur
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="md:col-span-5 md:col-start-9"
            >
              <div className="rounded-2xl bg-cream-dark p-8">
                <h3 className="text-lg font-bold text-charcoal mb-4">
                  E-mail
                </h3>
                <a
                  href="mailto:info@voedseleducatie010.nl"
                  className="text-forest hover:text-forest-light transition-colors duration-200 underline underline-offset-2"
                >
                  info@voedseleducatie010.nl
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
