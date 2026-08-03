"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, Target, Eye, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { education } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-white">
      <div className="container-clinic">
        <SectionHeading
          eyebrow="About Dr. Abhilekh"
          title="A surgeon's precision. A physician's patience."
          description="Over a decade dedicated to surgery and urology — combining advanced surgical technique with a practice built on listening first."
        />

        <div className="mt-16 grid gap-14 lg:grid-cols-12 lg:gap-10 lg:items-start">
          {/* Images */}
          <div className="lg:col-span-5 relative lg:sticky lg:top-28 lg:self-start">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-card"
            >
              <Image
                src="/images/about-doctor.webp"
                alt="Dr. Abhilekh smiling in the clinic corridor"
                fill
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="absolute -bottom-10 -right-6 w-2/3 aspect-[4/3] overflow-hidden rounded-[1.5rem] border-4 border-white shadow-premium sm:-right-10"
            >
              <Image
                src="/images/about-consultation.webp"
                alt="Dr. Abhilekh consulting with a patient"
                fill
                sizes="30vw"
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Content */}
          <div className="lg:col-span-7 lg:pl-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-base sm:text-lg leading-relaxed text-clinic-slate"
            >
              Dr. Abhilekh is a consultant urologist and renal transplant
              surgeon trained in general surgery, urology, and renal
              transplantation. Over more than a decade in practice, he has
              built his work around a simple principle: every patient
              deserves a clear explanation, a considered plan, and a
              treatment matched precisely to their condition — not the other
              way around.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 space-y-3"
            >
              {[
                "MCh (Urology & Renal Transplantation) Surgeon",
                "Expertise in Endourology, Laparoscopy & Renal Transplantation",
                "Trained in advanced laparoscopic & endoscopic procedures",
                "Dedicated to providing ethical, evidence-based & compassionate care",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-clinic-emerald"
                  />
                  <span className="text-sm sm:text-base leading-relaxed text-clinic-slate">
                    {point}
                  </span>
                </li>
              ))}
            </motion.ul>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl bg-clinic-fog p-6"
              >
                <Target className="text-clinic-emerald" size={22} />
                <h3 className="mt-3 font-display text-lg font-semibold text-clinic-navy">
                  Mission
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-clinic-slate">
                  To deliver advanced urological treatment with the same care
                  and attention one would want for their own family.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-2xl bg-clinic-fog p-6"
              >
                <Eye className="text-clinic-emerald" size={22} />
                <h3 className="mt-3 font-display text-lg font-semibold text-clinic-navy">
                  Vision
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-clinic-slate">
                  A private clinic where the most advanced procedures feel
                  personal, unhurried, and entirely transparent.
                </p>
              </motion.div>
            </div>

            {/* Education timeline */}
            <div className="mt-12">
              <div className="flex items-center gap-2 text-clinic-navy">
                <GraduationCap size={20} className="text-clinic-emerald" />
                <h3 className="font-display text-lg font-semibold">
                  Education &amp; Training
                </h3>
              </div>
              <div className="mt-6 space-y-0">
                {education.map((item, i) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="relative flex gap-5 pb-8 last:pb-0"
                  >
                    <div className="flex flex-col items-center">
                      <span className="flex h-3 w-3 shrink-0 rounded-full bg-clinic-emerald ring-4 ring-clinic-emerald/15" />
                      {i !== education.length - 1 && (
                        <span className="mt-1 w-px flex-1 bg-clinic-navy/10" />
                      )}
                    </div>
                    <div className="-mt-1">
                      <p className="text-xs font-semibold uppercase tracking-wider text-clinic-emerald">
                        {item.year}
                      </p>
                      <p className="mt-1 font-display text-base font-semibold text-clinic-navy">
                        {item.title}
                      </p>
                      <p className="text-sm text-clinic-slate">
                        {item.institution}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}