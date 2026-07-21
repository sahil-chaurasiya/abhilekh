import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        clinic: {
          navy: "#0A2E4D",
          "navy-deep": "#06192E",
          "navy-light": "#12446F",
          emerald: "#0F9D77",
          "emerald-light": "#14B88C",
          "emerald-dark": "#0B7A5C",
          fog: "#F5F7F8",
          mist: "#EEF2F3",
          slate: "#4B5D6A",
          ink: "#0E1B24",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-manrope)", "sans-serif"],
      },
      boxShadow: {
        premium: "0 30px 80px -20px rgba(10, 46, 77, 0.25)",
        card: "0 10px 40px -12px rgba(10, 46, 77, 0.18)",
        glow: "0 0 60px -10px rgba(15, 157, 119, 0.35)",
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "50%": { transform: "translateY(-18px) translateX(8px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-30px)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        ripple: {
          "0%": { transform: "scale(0.9)", opacity: "0.6" },
          "100%": { transform: "scale(2.4)", opacity: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        "float-slow": "float-slow 12s ease-in-out infinite",
        gradientShift: "gradientShift 10s ease infinite",
        shimmer: "shimmer 2.5s linear infinite",
        ripple: "ripple 1.1s ease-out infinite",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
