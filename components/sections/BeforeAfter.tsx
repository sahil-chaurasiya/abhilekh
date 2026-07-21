"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MoveHorizontal } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function BeforeAfter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);

  const updatePosition = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  };

  return (
    <section className="relative py-24 lg:py-32 bg-clinic-fog">
      <div className="container-clinic">
        <SectionHeading
          eyebrow="Recovery in Focus"
          title="Real recovery, visible progress"
          description="Drag the slider to see the difference between the pre-treatment scan and the post-recovery result."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-14 max-w-4xl select-none"
        >
          <div
            ref={containerRef}
            className="relative aspect-[16/10] w-full overflow-hidden rounded-[2rem] shadow-premium"
            onMouseMove={(e) => dragging && updatePosition(e.clientX)}
            onMouseUp={() => setDragging(false)}
            onMouseLeave={() => setDragging(false)}
            onTouchMove={(e) => updatePosition(e.touches[0].clientX)}
          >
            <Image
              src="/images/before-treatment.webp"
              alt="Diagnostic scan before treatment"
              fill
              sizes="(max-width: 1024px) 100vw, 900px"
              className="object-cover"
            />
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${position}%` }}
            >
              <Image
                src="/images/after-treatment.webp"
                alt="Diagnostic scan after successful treatment"
                fill
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-cover"
              />
            </div>

            <div
              className="absolute top-0 bottom-0 w-1 -ml-0.5 bg-white shadow-lg"
              style={{ left: `${position}%` }}
            >
              <button
                onMouseDown={() => setDragging(true)}
                onTouchStart={() => setDragging(true)}
                aria-label="Drag to compare before and after images"
                className="absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-grab items-center justify-center rounded-full bg-white text-clinic-navy shadow-premium active:cursor-grabbing"
              >
                <MoveHorizontal size={20} />
              </button>
            </div>

            <span className="absolute left-4 top-4 rounded-full bg-clinic-navy-deep/70 px-3 py-1 text-xs font-medium text-white">
              Before
            </span>
            <span className="absolute right-4 top-4 rounded-full bg-clinic-emerald/80 px-3 py-1 text-xs font-medium text-white">
              After
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
