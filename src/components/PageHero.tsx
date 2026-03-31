"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
}

export function PageHero({ title, subtitle, image, imageAlt }: PageHeroProps) {
  return (
    <section className="pt-24 md:pt-32 pb-12 md:pb-20">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="md:col-span-6 lg:col-span-5">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-none text-charcoal"
            >
              {title}
            </motion.h1>
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-6 text-base md:text-lg text-warm-gray leading-relaxed max-w-[55ch]"
              >
                {subtitle}
              </motion.p>
            )}
          </div>
          {image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="md:col-span-6 lg:col-span-7"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
                <Image
                  src={image}
                  alt={imageAlt || title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
