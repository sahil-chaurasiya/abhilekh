"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const techItems = [
  {
    image: "/images/laser-procedure.webp",
    title: "Holmium Laser Systems",
    description:
      "High-precision laser lithotripsy that fragments stones with minimal tissue impact and faster recovery.",
  },
  {
    image: "/images/equipment.webp",
    title: "Robotic Surgical Platform",
    description:
      "Da Vinci-assisted surgery for prostate and kidney procedures, offering unmatched surgical dexterity.",
  },
  {
    image: "/images/kidney-model.webp",
    title: "3D Diagnostic Imaging",
    description:
      "Detailed anatomical modelling used to plan every procedure with millimetre-level precision.",
  },
];

export default function Technology() {
  return (
    <section className="relative py-24 lg:py-32 bg-clinic-mist">
      <div className="container-clinic">
        <SectionHeading
          eyebrow="Technology"
          title="Modern instruments, meticulously maintained"
          description="The clinic invests continually in equipment that reduces risk, shortens recovery, and improves outcomes."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {techItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group overflow-hidden rounded-[2rem] bg-white shadow-card"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-clinic-navy-deep/60 to-transparent" />
              </div>
              <div className="p-7">
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
    </section>
  );
}
