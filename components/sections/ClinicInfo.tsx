"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, PhoneCall, Mail, ShieldCheck, ParkingSquare } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { clinicHours } from "@/lib/data";

export default function ClinicInfo() {
  const mapSrc =
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED ||
    "https://www.google.com/maps?q=Indore,Madhya+Pradesh&output=embed";

  const infoItems = [
    {
      icon: MapPin,
      title: "Address",
      lines: ["12 Residency Road, Near City Hospital", "Indore, Madhya Pradesh 452001"],
    },
    {
      icon: PhoneCall,
      title: "Phone",
      lines: [process.env.NEXT_PUBLIC_CLINIC_PHONE || "+91 123 456 7890", "24×7 Emergency Line"],
    },
    {
      icon: Mail,
      title: "Email",
      lines: ["care@drabhilekh.com"],
    },
    {
      icon: ShieldCheck,
      title: "Insurance",
      lines: ["Cashless claims accepted", "Most major providers"],
    },
    {
      icon: ParkingSquare,
      title: "Parking",
      lines: ["Complimentary on-site parking"],
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-clinic-fog">
      <div className="container-clinic">
        <SectionHeading
          eyebrow="Visit the Clinic"
          title="Find us, at your convenience"
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-[2rem] shadow-card"
          >
            <iframe
              src={mapSrc}
              title="Clinic location map"
              className="h-80 w-full border-0 lg:h-full lg:min-h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2">
            {infoItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="rounded-2xl bg-white p-6 shadow-card"
              >
                <item.icon className="text-clinic-emerald" size={22} />
                <h3 className="mt-3 font-display text-base font-semibold text-clinic-navy">
                  {item.title}
                </h3>
                {item.lines.map((line) => (
                  <p key={line} className="mt-1 text-sm text-clinic-slate">
                    {line}
                  </p>
                ))}
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="rounded-2xl bg-clinic-navy p-6 text-white shadow-card sm:col-span-2"
            >
              <div className="flex items-center gap-2">
                <Clock className="text-clinic-emerald-light" size={20} />
                <h3 className="font-display text-base font-semibold">
                  Clinic Hours
                </h3>
              </div>
              <dl className="mt-4 space-y-2">
                {clinicHours.map((h) => (
                  <div key={h.day} className="flex justify-between text-sm">
                    <dt className="text-white/60">{h.day}</dt>
                    <dd className="font-medium">{h.hours}</dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
