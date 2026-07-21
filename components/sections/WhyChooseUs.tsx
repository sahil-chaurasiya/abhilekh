"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { whyChooseUs } from "@/lib/data";

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-clinic-navy-deep py-24 lg:py-32">
      <div className="absolute inset-0">
        <Image
          src="/images/clinic-interior.webp"
          alt=""
          fill
          className="object-cover opacity-25"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-clinic-navy-deep via-clinic-navy-deep/90 to-clinic-navy-deep" />

      <div className="container-clinic relative">
        <SectionHeading
          eyebrow="Why Choose Dr. Abhilekh"
          title="Care shaped around outcomes, not routine"
          description="Every consultation, procedure, and follow-up is designed with one goal — the best possible result for you."
          light
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, i) => {
            const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[
              item.icon
            ] ?? Icons.Sparkles;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="glass-dark rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-clinic-emerald/20 text-clinic-emerald-light">
                  <Icon size={24} strokeWidth={1.75} />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
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
