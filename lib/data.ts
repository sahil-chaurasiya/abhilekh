import type {
  ExpertiseItem,
  FeatureItem,
  TimelineStep,
  EducationItem,
  GalleryImage,
  Testimonial,
  FaqItem,
  StatItem,
} from "@/types";

export const expertiseItems: ExpertiseItem[] = [
  {
    id: "kidney-stones",
    title: "Kidney Stones",
    description:
      "Precise, minimally invasive stone removal using laser lithotripsy and RIRS, tailored to stone size and location.",
    icon: "Gem",
  },
  {
    id: "prostate-disorders",
    title: "Prostate Disorders",
    description:
      "Comprehensive care for BPH and prostate conditions, from medical management to laser enucleation.",
    icon: "Activity",
  },
  {
    id: "laser-surgery",
    title: "Laser Surgery",
    description:
      "Holmium and thulium laser procedures that reduce bleeding, pain, and recovery time for our patients.",
    icon: "Zap",
  },
  {
    id: "uti",
    title: "Urinary Tract Infections",
    description:
      "Rapid diagnosis and treatment of recurrent UTIs, with a focus on identifying and resolving root causes.",
    icon: "ShieldCheck",
  },
  {
    id: "male-infertility",
    title: "Male Infertility",
    description:
      "Discreet, evidence-based evaluation and treatment for couples navigating fertility concerns.",
    icon: "HeartPulse",
  },
  {
    id: "kidney-cancer",
    title: "Kidney Cancer",
    description:
      "Nerve- and organ-sparing surgical approaches designed around long-term kidney function and recovery.",
    icon: "Ribbon",
  },
  {
    id: "bladder-disorders",
    title: "Bladder Disorders",
    description:
      "Advanced management of bladder dysfunction, from overactive bladder to reconstructive procedures.",
    icon: "CircleDot",
  },
  {
    id: "urinary-incontinence",
    title: "Urinary Incontinence",
    description:
      "Tailored treatment plans that restore confidence and quality of life, from therapy to surgical correction.",
    icon: "Waves",
  },
  {
    id: "robotic-surgery",
    title: "Robotic Surgery",
    description:
      "Da Vinci-assisted procedures offering unmatched precision, smaller incisions, and faster recovery.",
    icon: "Cpu",
  },
  {
    id: "erectile-dysfunction",
    title: "Erectile Dysfunction",
    description:
      "Confidential consultations and modern treatment pathways designed around each patient's goals.",
    icon: "Heart",
  },
];

export const whyChooseUs: FeatureItem[] = [
  {
    id: "technology",
    title: "Latest Technology",
    description: "Da Vinci robotics, holmium lasers, and 4K imaging for precision at every step.",
    icon: "Sparkles",
  },
  {
    id: "equipment",
    title: "Modern Equipment",
    description: "A fully equipped operation theatre maintained to international surgical standards.",
    icon: "Wrench",
  },
  {
    id: "care",
    title: "Compassionate Care",
    description: "Every patient is treated with dignity, patience, and clear, honest communication.",
    icon: "HandHeart",
  },
  {
    id: "experience",
    title: "11+ Years Experience",
    description: "Over a decade dedicated to surgery and urological medicine, from general surgery to advanced urology.",
    icon: "Award",
  },
  {
    id: "success-rate",
    title: "High Success Rate",
    description: "A consistent record of successful outcomes across thousands of procedures.",
    icon: "TrendingUp",
  },
  {
    id: "patient-centered",
    title: "Patient-Centered Treatment",
    description: "Treatment plans built around your life, your concerns, and your recovery.",
    icon: "Users",
  },
];

export const treatmentProcess: TimelineStep[] = [
  {
    step: "01",
    title: "Consultation",
    description: "A private, unhurried conversation to understand your symptoms, history, and concerns.",
  },
  {
    step: "02",
    title: "Diagnosis",
    description: "Precise diagnostic imaging and lab work to identify the exact nature of the condition.",
  },
  {
    step: "03",
    title: "Treatment Planning",
    description: "A personalised plan weighing every option, explained clearly before you decide.",
  },
  {
    step: "04",
    title: "Procedure",
    description: "Minimally invasive, laser, or robotic-assisted surgery performed with meticulous care.",
  },
  {
    step: "05",
    title: "Recovery",
    description: "Structured post-operative support to minimise discomfort and speed healing.",
  },
  {
    step: "06",
    title: "Follow-Up",
    description: "Ongoing check-ins to confirm full recovery and long-term urological health.",
  },
];

export const education: EducationItem[] = [
  {
    year: "2009",
    title: "MBBS",
    institution: "Assam Medical College, Dibrugarh",
  },
  {
    year: "2015",
    title: "MS General Surgery",
    institution: "JLN Medical College, Ajmer",
  },
  {
    year: "2023",
    title: "MCh Urology & Renal Transplantation",
    institution: "SCB Medical College and Hospital, Cuttack, Odisha",
  },
];

export const galleryImages: GalleryImage[] = [
  { src: "/images/gallery-doctor-1.webp", alt: "Dr. Abhilekh in the consultation room", category: "doctor" },
  { src: "/images/gallery-clinic-1.webp", alt: "Reception area of the clinic", category: "clinic" },
  { src: "/images/gallery-surgery-1.webp", alt: "Robotic surgery in progress", category: "surgery" },
  { src: "/images/gallery-equipment-1.webp", alt: "Laser lithotripsy equipment", category: "equipment" },
  { src: "/images/gallery-clinic-2.webp", alt: "Waiting lounge interior", category: "clinic" },
  { src: "/images/gallery-team-1.webp", alt: "Dr. Abhilekh with clinical staff", category: "team" },
  { src: "/images/gallery-awards-1.webp", alt: "Dr. Abhilekh receiving a medical honour", category: "awards" },
  { src: "/images/gallery-surgery-2.webp", alt: "Operation theatre setup", category: "surgery" },
  { src: "/images/gallery-doctor-2.webp", alt: "Dr. Abhilekh reviewing scans", category: "doctor" },
  { src: "/images/gallery-clinic-3.webp", alt: "Clinic exterior facade", category: "clinic" },
  { src: "/images/gallery-equipment-2.webp", alt: "Ultrasound and imaging suite", category: "equipment" },
  { src: "/images/gallery-team-2.webp", alt: "Clinical team huddle", category: "team" },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Rajesh Mehta",
    age: 54,
    procedure: "Laser Kidney Stone Removal",
    quote:
      "I was dreading surgery, but Dr. Abhilekh explained every step and the recovery was far quicker than I expected. I was back to work in days.",
    rating: 5,
    image: "/images/testimonial-1.webp",
  },
  {
    id: "t2",
    name: "Sunita Rao",
    age: 61,
    procedure: "Bladder Reconstruction",
    quote:
      "The care here feels personal. The entire team made a difficult diagnosis feel manageable, and the results have been life-changing.",
    rating: 5,
    image: "/images/testimonial-2.webp",
  },
  {
    id: "t3",
    name: "Vikram Shah",
    age: 47,
    procedure: "Robotic Prostate Surgery",
    quote:
      "The precision of the robotic procedure and the honesty of the consultations gave me full confidence from day one.",
    rating: 5,
    image: "/images/testimonial-3.webp",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "What conditions does Dr. Abhilekh treat?",
    answer:
      "Dr. Abhilekh treats the full range of urological conditions, including kidney stones, prostate disorders, bladder dysfunction, urinary tract infections, male infertility, urinary incontinence, and urological cancers, using both medical and surgical approaches.",
  },
  {
    question: "Is robotic surgery safer than traditional surgery?",
    answer:
      "Robotic-assisted surgery offers greater precision, smaller incisions, less blood loss, and typically a faster recovery than open surgery. Whether it is the right choice depends on your specific condition, which Dr. Abhilekh will assess during your consultation.",
  },
  {
    question: "How do I prepare for my first consultation?",
    answer:
      "Bring any previous test reports, scans, or prescriptions, a list of current medications, and a summary of your symptoms and their duration. This helps make the first consultation as productive as possible.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "The clinic works with most major insurance providers and can assist with cashless claims for eligible procedures. Please contact our front desk with your policy details ahead of your visit.",
  },
  {
    question: "How long is recovery after laser stone surgery?",
    answer:
      "Most patients resume light activity within 2–3 days and normal routines within a week. Dr. Abhilekh provides a personalised recovery timeline based on stone size, location, and the specific procedure performed.",
  },
  {
    question: "Is parking available at the clinic?",
    answer:
      "Yes, complimentary on-site parking is available for all patients and visitors during clinic hours.",
  },
];

export const stats: StatItem[] = [
  { label: "Patients Treated", value: 18000, suffix: "+" },
  { label: "Years of Experience", value: 11, suffix: "+" },
  { label: "Successful Surgeries", value: 9500, suffix: "+" },
  { label: "Patient Satisfaction", value: 98, suffix: "%" },
];

export const clinicHours = [
  { day: "Monday – Friday", hours: "9:00 AM – 7:00 PM" },
  { day: "Saturday", hours: "9:00 AM – 2:00 PM" },
  { day: "Sunday", hours: "Emergency Only" },
];