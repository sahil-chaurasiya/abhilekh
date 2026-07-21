"use client";

import { stats } from "@/lib/data";
import { useCounter } from "@/hooks/useCounter";

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, value: current } = useCounter(value);

  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-4xl font-semibold text-clinic-navy sm:text-5xl">
        {current.toLocaleString()}
        <span className="text-clinic-emerald">{suffix}</span>
      </p>
      <p className="mt-2 text-sm font-medium uppercase tracking-wider text-clinic-slate">
        {label}
      </p>
    </div>
  );
}

export default function Statistics() {
  return (
    <section className="relative border-y border-clinic-navy/5 bg-white py-16 lg:py-20">
      <div className="container-clinic">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
