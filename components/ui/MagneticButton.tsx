"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit";
  ariaLabel?: string;
}

export default function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  type = "button",
  ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * 0.25, y: y * 0.35 });
  };

  const handleMouseLeave = () => setPos({ x: 0, y: 0 });

  const styles = {
    primary:
      "bg-clinic-navy text-white hover:bg-clinic-navy-light shadow-premium",
    secondary:
      "bg-clinic-emerald text-white hover:bg-clinic-emerald-dark shadow-glow",
    ghost:
      "bg-white/10 text-white border border-white/30 hover:bg-white/20 backdrop-blur-md",
  };

  const content = (
    <motion.span
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.3 }}
      className="inline-block"
    >
      {children}
    </motion.span>
  );

  const baseClass = clsx(
    "btn-ripple group relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-semibold tracking-wide transition-colors duration-300 hover:-translate-y-0.5 will-change-transform",
    styles[variant],
    className
  );

  if (href) {
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        aria-label={ariaLabel}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={baseClass}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={baseClass}
    >
      {content}
    </button>
  );
}
