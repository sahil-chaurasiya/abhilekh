"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { expertiseItems } from "@/lib/data";

export default function Expertise() {
  return (
    <section id="expertise" className="relative py-24 lg:py-32 bg-clinic-fog">
      <div className="container-clinic">
        <SectionHeading
          eyebrow="Areas of Expertise"
          title="Comprehensive urological care, under one roof"
          description="From routine consultations to complex robotic procedures, every treatment is matched to the precise nature of your condition."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {expertiseItems.map((item, i) => {
            const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[
              item.icon
            ] ?? Icons.Stethoscope;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-card transition-shadow hover:shadow-premium"
              >
                <div
                  className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-clinic-emerald/5 transition-transform duration-500 group-hover:scale-150"
                  aria-hidden="true"
                />
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-clinic-navy/5 text-clinic-navy transition-colors duration-300 group-hover:bg-clinic-emerald group-hover:text-white">
                  <Icon size={26} strokeWidth={1.75} />
                </div>
                <h3 className="relative mt-6 font-display text-xl font-semibold text-clinic-navy">
                  {item.title}
                </h3>
                {item.tagline && (
                  <p className="relative mt-1 text-xs font-semibold uppercase tracking-wide text-clinic-emerald">
                    {item.tagline}
                  </p>
                )}
                <p className="relative mt-3 text-sm leading-relaxed text-clinic-slate">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}