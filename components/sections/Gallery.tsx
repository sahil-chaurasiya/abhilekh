"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { galleryImages } from "@/lib/data";
import type { GalleryImage } from "@/types";

const FILTERS: { key: GalleryImage["category"] | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "doctor", label: "Doctor" },
  { key: "clinic", label: "Clinic" },
  { key: "surgery", label: "Operation Theatre" },
  { key: "equipment", label: "Equipment" },
  { key: "team", label: "Team" },
  { key: "awards", label: "Awards" },
];

export default function Gallery() {
  const [filter, setFilter] = useState<GalleryImage["category"] | "all">("all");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filtered =
    filter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  const openAt = (idx: number) => setActiveIndex(idx);
  const close = () => setActiveIndex(null);
  const next = () =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % filtered.length));
  const prev = () =>
    setActiveIndex((i) =>
      i === null ? null : (i - 1 + filtered.length) % filtered.length
    );

  return (
    <section id="gallery" className="relative py-24 lg:py-32 bg-white">
      <div className="container-clinic">
        <SectionHeading
          eyebrow="Gallery"
          title="Inside the practice"
          description="A closer look at the clinic, the operation theatre, and the moments behind every patient's care."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                filter === f.key
                  ? "bg-clinic-navy text-white"
                  : "bg-clinic-fog text-clinic-slate hover:bg-clinic-mist"
              }`}
              aria-pressed={filter === f.key}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {filtered.map((img, i) => (
            <motion.button
              key={img.src}
              onClick={() => openAt(i)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.06 }}
              className="group relative block w-full overflow-hidden rounded-2xl shadow-card"
              aria-label={`View image: ${img.alt}`}
            >
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-clinic-navy-deep/0 transition-colors duration-300 group-hover:bg-clinic-navy-deep/20" />
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-clinic-navy-deep/95 p-4"
            role="dialog"
            aria-modal="true"
            onClick={close}
          >
            <button
              onClick={close}
              aria-label="Close gallery"
              className="absolute top-6 right-6 flex h-11 w-11 items-center justify-center rounded-full glass-dark text-white"
            >
              <X size={20} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous image"
              className="absolute left-4 flex h-11 w-11 items-center justify-center rounded-full glass-dark text-white sm:left-8"
            >
              <ChevronLeft size={22} />
            </button>
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative aspect-[4/5] w-full max-w-lg overflow-hidden rounded-2xl sm:aspect-[3/2] sm:max-w-3xl"
            >
              <Image
                src={filtered[activeIndex].src}
                alt={filtered[activeIndex].alt}
                fill
                sizes="90vw"
                className="object-cover"
              />
            </motion.div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next image"
              className="absolute right-4 flex h-11 w-11 items-center justify-center rounded-full glass-dark text-white sm:right-8"
            >
              <ChevronRight size={22} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
