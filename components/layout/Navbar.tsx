"use client";

import { useEffect, useState } from "react";
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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useActiveSection(NAV_ITEMS.map((item) => item.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container-clinic">
        <div
          className={`flex items-center justify-between rounded-full px-5 sm:px-7 py-3 transition-all duration-500 ${
            scrolled
              ? "glass shadow-card"
              : "bg-transparent border border-transparent"
          }`}
        >
          <a
            href="#hero"
            className="font-display text-lg sm:text-xl font-semibold text-clinic-navy tracking-tight"
          >
            Dr. Abhilekh
            <span className="block text-[10px] font-body font-medium tracking-[0.2em] uppercase text-clinic-emerald">
              Consultant Urologist
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                data-active={activeId === item.id}
                className={`nav-link text-sm font-medium transition-colors ${
                  activeId === item.id ? "text-clinic-emerald" : "text-clinic-navy/80 hover:text-clinic-navy"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${process.env.NEXT_PUBLIC_CLINIC_PHONE || "+911234567890"}`}
              className="flex items-center gap-2 text-sm font-medium text-clinic-navy"
            >
              <PhoneCall size={16} className="text-clinic-emerald" />
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
            className="lg:hidden text-clinic-navy p-2"
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
