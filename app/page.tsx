import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Expertise from "@/components/sections/Expertise";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import TreatmentProcess from "@/components/sections/TreatmentProcess";
import Technology from "@/components/sections/Technology";
import Gallery from "@/components/sections/Gallery";
import BeforeAfter from "@/components/sections/BeforeAfter";
import Testimonials from "@/components/sections/Testimonials";
import Statistics from "@/components/sections/Statistics";
import Faq from "@/components/sections/Faq";
import AppointmentForm from "@/components/sections/AppointmentForm";
import ClinicInfo from "@/components/sections/ClinicInfo";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Expertise />
      <WhyChooseUs />
      <TreatmentProcess />
      <Technology />
      <Gallery />
      <BeforeAfter />
      <Statistics />
      <Testimonials />
      <Faq />
      <AppointmentForm />
      <ClinicInfo />
      <Contact />
    </>
  );
}
