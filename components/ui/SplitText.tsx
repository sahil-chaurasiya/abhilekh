"use client";

import { motion } from "framer-motion";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const container = {
  hidden: { opacity: 0 },
  visible: (delay: number) => ({
    opacity: 1,
    transition: { staggerChildren: 0.028, delayChildren: delay },
  }),
};

const child = {
  hidden: { opacity: 0, y: 24, rotateX: -40 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function SplitText({
  text,
  className,
  delay = 0,
}: SplitTextProps) {
  const words = text.split(" ");

  return (
    <motion.span
      className={className}
      style={{ display: "inline-block", perspective: 800 }}
      variants={container}
      custom={delay}
      initial="hidden"
      animate="visible"
      aria-label={text}
    >
      {words.map((word, wi) => (
        <span
          key={wi}
          style={{ display: "inline-block", whiteSpace: "nowrap" }}
        >
          {word.split("").map((char, ci) => (
            <motion.span
              key={ci}
              variants={child}
              style={{ display: "inline-block" }}
              aria-hidden="true"
            >
              {char}
            </motion.span>
          ))}
          {wi !== words.length - 1 && "\u00A0"}
        </span>
      ))}
    </motion.span>
  );
}
