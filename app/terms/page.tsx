import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing the use of Dr. Abhilekh's clinic website and appointment booking service.",
};

export default function Terms() {
  return (
    <section className="container-clinic py-32">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-3xl font-semibold text-clinic-navy sm:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-4 text-sm text-clinic-slate">Last updated: July 2026</p>

        <div className="mt-10 space-y-8 text-clinic-slate leading-relaxed">
          <div>
            <h2 className="font-display text-xl font-semibold text-clinic-navy">Use of This Website</h2>
            <p className="mt-2">
              This website provides general information about Dr. Abhilekh&apos;s urology
              practice and allows visitors to request appointments. Content on this site is
              informational and does not constitute medical advice or a diagnosis.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-clinic-navy">Appointment Requests</h2>
            <p className="mt-2">
              Submitting an appointment request through this website does not guarantee a
              confirmed slot. Our team will contact you to confirm the date and time based on
              availability.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-clinic-navy">Medical Emergencies</h2>
            <p className="mt-2">
              This website is not monitored for emergencies. If you are experiencing a medical
              emergency, please call your local emergency services immediately or visit the
              nearest emergency room.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-clinic-navy">Limitation of Liability</h2>
            <p className="mt-2">
              The clinic makes reasonable efforts to keep information on this site accurate and
              current but does not warrant completeness. Use of this website is at your own
              discretion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
