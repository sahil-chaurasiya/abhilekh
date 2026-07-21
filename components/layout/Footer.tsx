import Image from "next/image";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-clinic-navy-deep text-white">
      <div className="absolute inset-0 opacity-40">
        <Image
          src="/images/footer-bg.webp"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-clinic-navy-deep via-clinic-navy-deep/95 to-clinic-navy-deep/80" />

      <div className="relative container-clinic py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-display text-2xl font-semibold">Dr. Abhilekh</p>
            <p className="mt-1 text-xs uppercase tracking-[0.25em] text-clinic-emerald-light">
              Consultant Urologist
            </p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              A private urology practice dedicated to advanced, compassionate
              care — from kidney stone treatment to robotic surgery and men's
              reproductive health.
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social media link"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-clinic-emerald hover:text-clinic-emerald-light"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Explore
            </p>
            <ul className="mt-5 space-y-3 text-sm text-white/60">
              <li><a href="#about" className="hover:text-clinic-emerald-light transition-colors">About Dr. Abhilekh</a></li>
              <li><a href="#expertise" className="hover:text-clinic-emerald-light transition-colors">Areas of Expertise</a></li>
              <li><a href="#gallery" className="hover:text-clinic-emerald-light transition-colors">Gallery</a></li>
              <li><a href="#testimonials" className="hover:text-clinic-emerald-light transition-colors">Patient Stories</a></li>
              <li><a href="#faq" className="hover:text-clinic-emerald-light transition-colors">FAQs</a></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Legal
            </p>
            <ul className="mt-5 space-y-3 text-sm text-white/60">
              <li><a href="/privacy-policy" className="hover:text-clinic-emerald-light transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-clinic-emerald-light transition-colors">Terms of Service</a></li>
              <li><a href="#appointment" className="hover:text-clinic-emerald-light transition-colors">Book an Appointment</a></li>
              <li><a href="#contact" className="hover:text-clinic-emerald-light transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row">
          <p>© {year} Dr. Abhilekh Urology Clinic. All rights reserved.</p>
          <p>Designed for a private medical practice. Not a substitute for emergency care.</p>
        </div>
      </div>
    </footer>
  );
}
