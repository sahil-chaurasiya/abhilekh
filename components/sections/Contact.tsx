"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle2, AlertCircle, Mail, PhoneCall, MessageCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { contactSchema, type ContactFormValues } from "@/lib/validations";

type SubmitState = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [state, setState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (values: ContactFormValues) => {
    setState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        setState("error");
        setMessage(data.message || "Something went wrong. Please try again.");
        return;
      }
      setState("success");
      setMessage(data.message);
      reset();
    } catch {
      setState("error");
      setMessage("We could not reach the server. Please try again shortly.");
    }
  };

  const inputClass =
    "w-full rounded-xl border border-clinic-navy/10 bg-clinic-fog px-4 py-3.5 text-sm text-clinic-ink placeholder:text-clinic-slate/60 transition-colors focus:border-clinic-emerald focus:outline-none focus:ring-2 focus:ring-clinic-emerald/20";

  const channels = [
    {
      icon: PhoneCall,
      label: "Call the clinic",
      value: process.env.NEXT_PUBLIC_CLINIC_PHONE || "+91 85609 44006",
      href: `tel:${process.env.NEXT_PUBLIC_CLINIC_PHONE || "+918560944006"}`,
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Message us directly",
      href: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "918560944006"}`,
    },
    {
      icon: Mail,
      label: "Email",
      value: "abhilekhtripathi@gmail.com",
      href: "mailto:abhilekhtripathi@gmail.com",
    },
  ];

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-white">
      <div className="container-clinic">
        <SectionHeading
          eyebrow="Get in Touch"
          title="We're here to help, whenever you need us"
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-4">
            {channels.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.label === "WhatsApp" ? "_blank" : undefined}
                rel={c.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-4 rounded-2xl bg-clinic-fog p-5 transition-colors hover:bg-clinic-mist"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-clinic-navy text-white">
                  <c.icon size={20} />
                </span>
                <span>
                  <span className="block text-xs font-medium uppercase tracking-wider text-clinic-slate">
                    {c.label}
                  </span>
                  <span className="block font-display text-base font-semibold text-clinic-navy">
                    {c.value}
                  </span>
                </span>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 rounded-[2rem] bg-clinic-fog p-6 shadow-card sm:p-8"
          >
            <AnimatePresence mode="wait">
              {state === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center py-8 text-center"
                >
                  <CheckCircle2 size={48} className="text-clinic-emerald" />
                  <h3 className="mt-4 font-display text-xl font-semibold text-clinic-navy">
                    Message sent
                  </h3>
                  <p className="mt-2 text-sm text-clinic-slate">{message}</p>
                  <button
                    onClick={() => setState("idle")}
                    className="mt-5 rounded-full bg-clinic-navy px-6 py-2.5 text-sm font-semibold text-white"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  className="grid gap-4 sm:grid-cols-2"
                >
                  <div>
                    <label htmlFor="c-name" className="mb-1.5 block text-sm font-medium text-clinic-navy">
                      Name
                    </label>
                    <input id="c-name" className={inputClass} {...register("name")} />
                    {errors.name && <p className="mt-1.5 text-xs text-red-600">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="c-phone" className="mb-1.5 block text-sm font-medium text-clinic-navy">
                      Phone <span className="text-clinic-slate/60">(optional)</span>
                    </label>
                    <input id="c-phone" className={inputClass} {...register("phone")} />
                    {errors.phone && <p className="mt-1.5 text-xs text-red-600">{errors.phone.message}</p>}
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="c-email" className="mb-1.5 block text-sm font-medium text-clinic-navy">
                      Email
                    </label>
                    <input id="c-email" type="email" className={inputClass} {...register("email")} />
                    {errors.email && <p className="mt-1.5 text-xs text-red-600">{errors.email.message}</p>}
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="c-message" className="mb-1.5 block text-sm font-medium text-clinic-navy">
                      Message
                    </label>
                    <textarea id="c-message" rows={4} className={inputClass} {...register("message")} />
                    {errors.message && <p className="mt-1.5 text-xs text-red-600">{errors.message.message}</p>}
                  </div>

                  {state === "error" && (
                    <div className="sm:col-span-2 flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
                      <AlertCircle size={18} />
                      {message}
                    </div>
                  )}

                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      disabled={state === "loading"}
                      className="btn-ripple flex w-full items-center justify-center gap-2 rounded-full bg-clinic-emerald px-8 py-4 text-sm font-semibold text-white shadow-glow transition-colors hover:bg-clinic-emerald-dark disabled:opacity-70"
                    >
                      {state === "loading" ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Sending…
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}