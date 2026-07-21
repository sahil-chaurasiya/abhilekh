import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/layout/FloatingActions";
import ScrollProgress from "@/components/layout/ScrollProgress";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.drabhilekh.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dr. Abhilekh | Consultant Urologist & Robotic Surgeon",
    template: "%s | Dr. Abhilekh, Consultant Urologist",
  },
  description:
    "Dr. Abhilekh is a leading consultant urologist specialising in kidney stone treatment, laser and robotic surgery, prostate care, and male reproductive health. Book a private consultation today.",
  keywords: [
    "Dr. Abhilekh",
    "urologist",
    "kidney stone treatment",
    "robotic surgery urology",
    "prostate specialist",
    "laser urology surgery",
    "urology clinic",
    "male infertility specialist",
  ],
  authors: [{ name: "Dr. Abhilekh" }],
  creator: "Dr. Abhilekh Urology Clinic",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Dr. Abhilekh | Consultant Urologist & Robotic Surgeon",
    description:
      "A private urology practice offering advanced, compassionate care in kidney stone treatment, laser and robotic surgery, and men's reproductive health.",
    siteName: "Dr. Abhilekh Urology Clinic",
    images: [
      {
        url: "/images/hero-doctor.webp",
        width: 1600,
        height: 2200,
        alt: "Dr. Abhilekh, Consultant Urologist",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Abhilekh | Consultant Urologist & Robotic Surgeon",
    description:
      "Advanced, compassionate urology care — kidney stones, laser and robotic surgery, prostate and men's health.",
    images: ["/images/hero-doctor.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const physicianSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: "Dr. Abhilekh",
    medicalSpecialty: "Urology",
    image: `${siteUrl}/images/hero-doctor.webp`,
    url: siteUrl,
    telephone: process.env.NEXT_PUBLIC_CLINIC_PHONE || "+91-123-456-7890",
    address: {
      "@type": "PostalAddress",
      streetAddress: "12 Residency Road",
      addressLocality: "Indore",
      addressRegion: "Madhya Pradesh",
      postalCode: "452001",
      addressCountry: "IN",
    },
  };

  const clinicSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: "Dr. Abhilekh Urology Clinic",
    image: `${siteUrl}/images/clinic-interior.webp`,
    url: siteUrl,
    telephone: process.env.NEXT_PUBLIC_CLINIC_PHONE || "+91-123-456-7890",
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "12 Residency Road",
      addressLocality: "Indore",
      addressRegion: "Madhya Pradesh",
      postalCode: "452001",
      addressCountry: "IN",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "14:00",
      },
    ],
    medicalSpecialty: "Urology",
  };

  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="font-body bg-clinic-fog text-clinic-ink overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[999] focus:bg-clinic-navy focus:text-white focus:px-5 focus:py-3 focus:rounded-full"
        >
          Skip to main content
        </a>
        <ScrollProgress />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
