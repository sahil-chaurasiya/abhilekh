"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { treatmentProcess } from "@/lib/data";

export default function TreatmentProcess() {
  return (
    <section id="process" className="relative py-24 lg:py-32 bg-white">
      <div className="container-clinic">
        <SectionHeading
          eyebrow="The Treatment Journey"
          title="A clear path, from first visit to full recovery"
          description="Every patient moves through the same considered process — nothing rushed, nothing skipped."
        />

        <div className="relative mt-20">
          {/* connecting line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px bg-clinic-navy/10 lg:left-1/2 lg:hidden"
            aria-hidden="true"
          />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute top-8 left-0 right-0 hidden h-px origin-left bg-clinic-navy/10 lg:block"
            aria-hidden="true"
          />

          <div className="grid gap-10 lg:grid-cols-6 lg:gap-6">
            {treatmentProcess.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative flex gap-5 lg:flex-col lg:gap-0"
              >
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-clinic-navy font-display text-sm font-semibold text-white shadow-card lg:h-16 lg:w-16 lg:text-base">
                  {item.step}
                </div>
                <div className="lg:mt-6">
                  <h3 className="font-display text-lg font-semibold text-clinic-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-clinic-slate">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
