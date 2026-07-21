"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle2, AlertCircle, CalendarClock } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { appointmentSchema, type AppointmentFormValues } from "@/lib/validations";

type SubmitState = "idle" | "loading" | "success" | "error";

export default function AppointmentForm() {
  const [state, setState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentSchema),
  });

  const onSubmit = async (values: AppointmentFormValues) => {
    setState("loading");
    try {
      const res = await fetch("/api/appointment", {
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
      setMessage("We could not reach the server. Please check your connection and try again.");
    }
  };

  const inputClass =
    "w-full rounded-xl border border-clinic-navy/10 bg-white px-4 py-3.5 text-sm text-clinic-ink placeholder:text-clinic-slate/60 transition-colors focus:border-clinic-emerald focus:outline-none focus:ring-2 focus:ring-clinic-emerald/20";

  return (
    <section id="appointment" className="relative py-24 lg:py-32 bg-white">
      <div className="container-clinic">
        <SectionHeading
          eyebrow="Book an Appointment"
          title="Reserve your private consultation"
          description="Share a few details and our team will confirm your slot within one business day."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-14 max-w-3xl rounded-[2rem] bg-clinic-fog p-6 shadow-card sm:p-10"
        >
          <AnimatePresence mode="wait">
            {state === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center py-10 text-center"
              >
                <CheckCircle2 size={56} className="text-clinic-emerald" />
                <h3 className="mt-5 font-display text-2xl font-semibold text-clinic-navy">
                  Request received
                </h3>
                <p className="mt-2 max-w-sm text-sm text-clinic-slate">{message}</p>
                <button
                  onClick={() => setState("idle")}
                  className="mt-6 rounded-full bg-clinic-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-clinic-navy-light"
                >
                  Book another appointment
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="grid gap-5 sm:grid-cols-2"
              >
                <div className="sm:col-span-2 flex items-center gap-2 text-clinic-navy">
                  <CalendarClock size={18} className="text-clinic-emerald" />
                  <span className="text-sm font-medium">
                    All fields marked are required for scheduling.
                  </span>
                </div>

                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-clinic-navy">
                    Full Name
                  </label>
                  <input id="name" className={inputClass} placeholder="Jane Doe" {...register("name")} />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-600">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="age" className="mb-1.5 block text-sm font-medium text-clinic-navy">
                    Age
                  </label>
                  <input
                    id="age"
                    type="number"
                    className={inputClass}
                    placeholder="45"
                    {...register("age")}
                  />
                  {errors.age && (
                    <p className="mt-1.5 text-xs text-red-600">{errors.age.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="gender" className="mb-1.5 block text-sm font-medium text-clinic-navy">
                    Gender
                  </label>
                  <select id="gender" className={inputClass} defaultValue="" {...register("gender")}>
                    <option value="" disabled>Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.gender && (
                    <p className="mt-1.5 text-xs text-red-600">{errors.gender.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-clinic-navy">
                    Phone Number
                  </label>
                  <input id="phone" className={inputClass} placeholder="+91 98765 43210" {...register("phone")} />
                  {errors.phone && (
                    <p className="mt-1.5 text-xs text-red-600">{errors.phone.message}</p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-clinic-navy">
                    Email Address
                  </label>
                  <input id="email" type="email" className={inputClass} placeholder="jane@email.com" {...register("email")} />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-600">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="preferredDate" className="mb-1.5 block text-sm font-medium text-clinic-navy">
                    Preferred Date
                  </label>
                  <input id="preferredDate" type="date" className={inputClass} {...register("preferredDate")} />
                  {errors.preferredDate && (
                    <p className="mt-1.5 text-xs text-red-600">{errors.preferredDate.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="preferredTime" className="mb-1.5 block text-sm font-medium text-clinic-navy">
                    Preferred Time
                  </label>
                  <input id="preferredTime" type="time" className={inputClass} {...register("preferredTime")} />
                  {errors.preferredTime && (
                    <p className="mt-1.5 text-xs text-red-600">{errors.preferredTime.message}</p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="symptoms" className="mb-1.5 block text-sm font-medium text-clinic-navy">
                    Symptoms
                  </label>
                  <textarea
                    id="symptoms"
                    rows={3}
                    className={inputClass}
                    placeholder="Briefly describe what you're experiencing"
                    {...register("symptoms")}
                  />
                  {errors.symptoms && (
                    <p className="mt-1.5 text-xs text-red-600">{errors.symptoms.message}</p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="additionalNotes" className="mb-1.5 block text-sm font-medium text-clinic-navy">
                    Additional Notes <span className="text-clinic-slate/60">(optional)</span>
                  </label>
                  <textarea
                    id="additionalNotes"
                    rows={2}
                    className={inputClass}
                    placeholder="Previous reports, medications, or anything else we should know"
                    {...register("additionalNotes")}
                  />
                </div>

                {state === "error" && (
                  <div className="sm:col-span-2 flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
                    <AlertCircle size={18} />
                    {message}
                  </div>
                )}

                <div className="sm:col-span-2 mt-2">
                  <button
                    type="submit"
                    disabled={state === "loading"}
                    className="btn-ripple flex w-full items-center justify-center gap-2 rounded-full bg-clinic-navy px-8 py-4 text-sm font-semibold text-white shadow-premium transition-colors hover:bg-clinic-navy-light disabled:opacity-70"
                  >
                    {state === "loading" ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Submitting your request…
                      </>
                    ) : (
                      "Request Appointment"
                    )}
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
