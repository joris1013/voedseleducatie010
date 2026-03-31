"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ContentSectionProps {
  heading?: string;
  children: React.ReactNode;
  image?: string;
  imageAlt?: string;
  imagePosition?: "left" | "right";
  imageSmall?: boolean;
}

export function ContentSection({
  heading,
  children,
  image,
  imageAlt,
  imagePosition = "right",
  imageSmall = false,
}: ContentSectionProps) {
  const textCol = image ? "md:col-span-6 lg:col-span-7" : "md:col-span-10";
  const imageCol = imageSmall ? "md:col-span-6 lg:col-span-5" : "md:col-span-6 lg:col-span-5";

  return (
    <section className="py-12 md:py-20">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className={`${textCol} ${imagePosition === "right" ? "" : "md:order-2"}`}
          >
            {heading && (
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-charcoal mb-6">
                {heading}
              </h2>
            )}
            <div className="text-base text-warm-gray leading-relaxed space-y-4 max-w-[65ch]">
              {children}
            </div>
          </motion.div>
          {image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`${imageCol} ${imagePosition === "right" ? "" : "md:order-1"}`}
            >
              <div className={`relative ${imageSmall ? "aspect-square" : "aspect-[4/3]"} rounded-2xl overflow-hidden`}>
                <Image
                  src={image}
                  alt={imageAlt || heading || "VoedselEducatie010"}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
