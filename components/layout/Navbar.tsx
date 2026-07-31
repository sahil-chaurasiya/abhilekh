"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, PhoneCall } from "lucide-react";
import { useActiveSection } from "@/hooks/useActiveSection";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "expertise", label: "Expertise" },
  { id: "process", label: "Process" },
  { id: "gallery", label: "Gallery" },
  { id: "testimonials", label: "Testimonials" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

// Distance (in px) over which the navbar eases from its "hero" look
// into its scrolled "glass" look. A wider range = a slower, smoother fade.
const SCROLL_RANGE = 140;

function hexToRgb(hex: string) {
  const value = hex.replace("#", "");
  const bigint = parseInt(value, 16);
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255,
  };
}

function mixColor(hexA: string, hexB: string, t: number, alpha = 1) {
  const a = hexToRgb(hexA);
  const b = hexToRgb(hexB);
  const r = Math.round(a.r + (b.r - a.r) * t);
  const g = Math.round(a.g + (b.g - a.g) * t);
  const bl = Math.round(a.b + (b.b - a.b) * t);
  return `rgba(${r}, ${g}, ${bl}, ${alpha})`;
}

export default function Navbar() {
  const [progress, setProgress] = useState(0); // 0 = top of page, 1 = fully scrolled
  const [mobileOpen, setMobileOpen] = useState(false);
  const ticking = useRef(false);
  const activeId = useActiveSection(NAV_ITEMS.map((item) => item.id));

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const value = Math.min(Math.max(window.scrollY / SCROLL_RANGE, 0), 1);
        setProgress(value);
        ticking.current = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Interpolated colours so the transition eases continuously with scroll
  // position instead of snapping between two hard states.
  const textColor = mixColor("#FFFFFF", "#0A2E4D", progress);
  const textColorMuted = mixColor("#FFFFFF", "#0A2E4D", progress, 0.82);
  // Emerald accent shifts to a slightly deeper, more saturated shade as the
  // background lightens, so it stays legible against both the dark hero
  // and the pale glass pill.
  const accentColor = mixColor("#14B88C", "#0B7A5C", progress);

  const pillBackground = `rgba(255, 255, 255, ${0.65 * progress})`;
  const pillBorder = `rgba(255, 255, 255, ${0.4 * progress})`;
  const pillBlur = `blur(${20 * progress}px) saturate(${100 + 60 * progress}%)`;
  const pillShadow =
    progress > 0.05
      ? `0 10px 40px -12px rgba(10, 46, 77, ${0.18 * progress})`
      : "none";

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        paddingTop: `${20 - 8 * progress}px`,
        paddingBottom: `${20 - 8 * progress}px`,
        transition: "padding 0.15s linear",
      }}
    >
      <div className="container-clinic">
        <div
          className="flex items-center justify-between rounded-full px-5 sm:px-7 py-3 border"
          style={{
            backgroundColor: pillBackground,
            borderColor: pillBorder,
            backdropFilter: pillBlur,
            WebkitBackdropFilter: pillBlur,
            boxShadow: pillShadow,
            transition:
              "background-color 0.15s linear, border-color 0.15s linear, box-shadow 0.15s linear",
          }}
        >
          <a href="#hero" className="flex items-center shrink-0">
            <div
              className="rounded-xl px-3 py-1.5 sm:px-4 sm:py-2"
              style={{
                backgroundColor: `rgba(255, 255, 255, ${0.9})`,
                transition: "background-color 0.15s linear",
              }}
            >
              <Image
                src="/images/logo-full.png"
                alt="Dr. Abhilekh Tripathi — Urologist & Renal Transplant Surgeon"
                width={1400}
                height={496}
                priority
                className="h-9 sm:h-11 w-auto object-contain"
              />
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                data-active={activeId === item.id}
                className="nav-link text-sm font-medium"
                style={{
                  color: activeId === item.id ? accentColor : textColorMuted,
                  transition: "color 0.15s linear",
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${process.env.NEXT_PUBLIC_CLINIC_PHONE || "+911234567890"}`}
              className="flex items-center gap-2 text-sm font-medium"
              style={{ color: textColor, transition: "color 0.15s linear" }}
            >
              <PhoneCall size={16} style={{ color: accentColor }} />
              Call Now
            </a>
            <a
              href="#appointment"
              className="btn-ripple rounded-full bg-clinic-navy px-5 py-2.5 text-sm font-semibold text-white shadow-card transition-transform hover:-translate-y-0.5 hover:bg-clinic-navy-light"
            >
              Book Appointment
            </a>
          </div>

          <button
            className="lg:hidden p-2"
            style={{ color: textColor, transition: "color 0.15s linear" }}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden container-clinic mt-3"
          >
            <div className="glass rounded-3xl p-6 shadow-premium flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 text-base font-medium text-clinic-navy border-b border-clinic-navy/5 last:border-none"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#appointment"
                onClick={() => setMobileOpen(false)}
                className="mt-4 rounded-full bg-clinic-navy px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Book Appointment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}