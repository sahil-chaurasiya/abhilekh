"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Star, Quote, BadgeCheck, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [paused]);

  const current = testimonials[index];

  return (
    <section
      id="testimonials"
      className="relative py-24 lg:py-32 bg-clinic-navy-deep overflow-hidden"
    >
      <div
        className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-clinic-emerald/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-clinic relative">
        <SectionHeading
          eyebrow="Patient Stories"
          title="Trusted by patients, one recovery at a time"
          light
        />

        <div
          className="relative mx-auto mt-16 max-w-3xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <Quote
            className="absolute -top-8 left-1/2 -translate-x-1/2 text-clinic-emerald/30"
            size={56}
            aria-hidden="true"
          />
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.5 }}
              className="glass-dark rounded-[2rem] p-10 text-center sm:p-14"
            >
              <div className="flex justify-center gap-1 text-clinic-emerald-light">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-6 font-display text-xl italic leading-relaxed text-white sm:text-2xl">
                &ldquo;{current.quote}&rdquo;
              </p>

              <div className="mt-8 flex items-center justify-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-clinic-emerald/50">
                  <Image
                    src={current.image}
                    alt={current.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <p className="flex items-center gap-1.5 text-sm font-semibold text-white">
                    {current.name}
                    <BadgeCheck size={14} className="text-clinic-emerald-light" />
                  </p>
                  <p className="text-xs text-white/50">
                    Age {current.age} · {current.procedure}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() =>
                setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
              }
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full glass-dark text-white transition-colors hover:bg-clinic-emerald/30"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  onClick={() => setIndex(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-6 bg-clinic-emerald-light" : "w-2 bg-white/25"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full glass-dark text-white transition-colors hover:bg-clinic-emerald/30"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
