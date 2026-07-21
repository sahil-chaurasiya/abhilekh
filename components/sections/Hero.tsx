"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Star, Clock, PhoneCall } from "lucide-react";
import SplitText from "@/components/ui/SplitText";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-clinic-navy-deep pt-28 pb-16"
    >
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 bg-[linear-gradient(120deg,#06192E_0%,#0A2E4D_45%,#0B7A5C_120%)] bg-[length:200%_200%] animate-gradientShift"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-grain mix-blend-overlay" aria-hidden="true" />

      {/* Floating blobs */}
      <div
        className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-clinic-emerald/20 blur-3xl animate-float-slow"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-clinic-navy-light/40 blur-3xl animate-float"
        aria-hidden="true"
      />

      <div className="container-clinic relative grid items-center gap-14 lg:grid-cols-2">
        {/* Text column */}
        <div className="text-white">
          <motion.div
            initial={{ y: 16 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-clinic-emerald-light"
          >
            <ShieldCheck size={14} />
            Trusted Urological Care Since 2011
          </motion.div>

          <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-[3.4rem] font-medium leading-[1.08]">
            <SplitText text="Precision Urology," />
            <br />
            <SplitText
              text="Delivered with Compassion."
              delay={0.5}
              className="text-gradient"
            />
          </h1>

          <motion.p
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mt-6 max-w-lg text-base sm:text-lg leading-relaxed text-white/70"
          >
            Dr. Abhilekh brings fifteen years of surgical expertise and robotic
            precision to kidney stones, prostate care, and men&apos;s health —
            in a private clinic built around your comfort.
          </motion.p>

          <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="#appointment" variant="secondary">
              Book a Consultation
            </MagneticButton>
            <MagneticButton href="#about" variant="ghost">
              Meet Dr. Abhilekh
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="mt-10 flex flex-wrap items-center gap-8"
          >
            <div className="flex items-center gap-2 text-sm text-white/70">
              <Clock size={16} className="text-clinic-emerald-light" />
              Mon–Sat, 9:00 AM – 7:00 PM
            </div>
            <a
              href={`tel:${process.env.NEXT_PUBLIC_CLINIC_PHONE || "+911234567890"}`}
              className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
            >
              <PhoneCall size={16} className="text-clinic-emerald-light" />
              24×7 Emergency Line
            </a>
          </motion.div>
        </div>

        {/* Image column */}
        <motion.div
          initial={{ scale: 0.92 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-premium">
            <Image
              src="/images/hero-doctor.webp"
              alt="Dr. Abhilekh, Consultant Urologist, standing in his private clinic"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-clinic-navy-deep/50 via-transparent to-transparent" />
          </div>

          {/* Floating stat card */}
          <motion.div
            initial={{ x: -30, y: 20 }}
            animate={{ x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="absolute -left-6 bottom-10 glass rounded-2xl px-5 py-4 shadow-premium sm:-left-10"
          >
            <div className="flex items-center gap-1 text-clinic-emerald">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <p className="mt-1 font-display text-2xl font-semibold text-clinic-navy">
              18,000+
            </p>
            <p className="text-xs text-clinic-slate">Patients treated</p>
          </motion.div>

          {/* Floating badge */}
          <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            className="absolute -top-6 -right-4 glass rounded-2xl px-5 py-3 shadow-premium sm:-right-8"
          >
            <p className="font-display text-xl font-semibold text-clinic-navy">
              15+ Yrs
            </p>
            <p className="text-xs text-clinic-slate">Surgical Experience</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ y: -10 }}
        animate={{ y: 0 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
        aria-hidden="true"
      >
        <div className="flex h-9 w-6 items-start justify-center rounded-full border border-white/30 p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-clinic-emerald-light"
          />
        </div>
      </motion.div>
    </section>
  );
}