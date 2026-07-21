import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Dr. Abhilekh's clinic collects, uses, and protects your personal and medical information.",
};

export default function PrivacyPolicy() {
  return (
    <section className="container-clinic py-32">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-3xl font-semibold text-clinic-navy sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-clinic-slate">Last updated: July 2026</p>

        <div className="mt-10 space-y-8 text-clinic-slate leading-relaxed">
          <div>
            <h2 className="font-display text-xl font-semibold text-clinic-navy">Information We Collect</h2>
            <p className="mt-2">
              When you book an appointment or contact us through this website, we collect the
              information you provide directly, including your name, age, gender, phone number,
              email address, and a description of your symptoms. This information is used solely
              to schedule and prepare for your consultation.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-clinic-navy">How We Use Your Information</h2>
            <p className="mt-2">
              Your information is used to confirm appointments, communicate with you about your
              visit, and maintain accurate medical records. We do not sell or share your personal
              or medical information with third parties for marketing purposes.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-clinic-navy">Data Security</h2>
            <p className="mt-2">
              Appointment data is stored in an access-controlled database, and all communications
              are encrypted in transit. Only authorised clinical and administrative staff can
              access patient records.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-clinic-navy">Your Rights</h2>
            <p className="mt-2">
              You may request access to, correction of, or deletion of your personal information
              at any time by contacting the clinic directly at care@drabhilekh.com.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
