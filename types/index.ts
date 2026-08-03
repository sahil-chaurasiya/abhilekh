export interface ExpertiseItem {
  id: string;
  title: string;
  tagline?: string;
  description: string;
  icon: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface TimelineStep {
  step: string;
  title: string;
  description: string;
}

export interface EducationItem {
  year: string;
  title: string;
  institution: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  category: "clinic" | "surgery" | "doctor" | "team" | "awards" | "equipment";
}

export interface Testimonial {
  id: string;
  name: string;
  age: number;
  procedure: string;
  quote: string;
  rating: number;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix: string;
}