import Hero from "@/components/sections/Hero";
import Statistics from "@/components/sections/Statistics";
import About from "@/components/sections/About";
import Expertise from "@/components/sections/Expertise";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Technology from "@/components/sections/Technology";
import TreatmentProcess from "@/components/sections/TreatmentProcess";
import BeforeAfter from "@/components/sections/BeforeAfter";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import ClinicInfo from "@/components/sections/ClinicInfo";
import Faq from "@/components/sections/Faq";
import AppointmentForm from "@/components/sections/AppointmentForm";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Statistics />
      <About />
      <Expertise />
      <WhyChooseUs />
      <Technology />
      <TreatmentProcess />
      <BeforeAfter />
      <Gallery />
      <Testimonials />
      <ClinicInfo />
      <Faq />
      <AppointmentForm />
      <Contact />
    </>
  );
}