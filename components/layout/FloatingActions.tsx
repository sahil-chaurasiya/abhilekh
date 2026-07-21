"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, CalendarPlus, MessageCircle, PhoneCall } from "lucide-react";

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "918560944006";
  const phone = process.env.NEXT_PUBLIC_CLINIC_PHONE || "+918560944006";

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const buttons = [
    {
      key: "whatsapp",
      href: `https://wa.me/${whatsapp}?text=${encodeURIComponent(
        "Hello, I would like to book an appointment with Dr. Abhilekh."
      )}`,
      icon: MessageCircle,
      label: "Chat on WhatsApp",
      className: "bg-[#25D366] text-white",
    },
    {
      key: "call",
      href: `tel:${phone}`,
      icon: PhoneCall,
      label: "Call the clinic",
      className: "bg-clinic-navy text-white",
    },
    {
      key: "appointment",
      href: "#appointment",
      icon: CalendarPlus,
      label: "Book an appointment",
      className: "bg-clinic-emerald text-white",
    },
  ];

  return (
    <div className="fixed bottom-6 right-5 sm:right-8 z-40 flex flex-col items-end gap-3">
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 10 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
            className="flex h-12 w-12 items-center justify-center rounded-full glass shadow-card text-clinic-navy"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      {buttons.map((btn, i) => (
        <motion.a
          key={btn.key}
          href={btn.href}
          target={btn.key === "whatsapp" ? "_blank" : undefined}
          rel={btn.key === "whatsapp" ? "noopener noreferrer" : undefined}
          aria-label={btn.label}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 + i * 0.15, duration: 0.5 }}
          className={`relative flex h-14 w-14 items-center justify-center rounded-full shadow-premium hover:-translate-y-1 transition-transform ${btn.className}`}
        >
          <span className="absolute inset-0 rounded-full border-2 border-current opacity-40 animate-ripple" />
          <btn.icon size={22} />
        </motion.a>
      ))}
    </div>
  );
}