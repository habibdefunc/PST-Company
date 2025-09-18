"use client";

import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

import HeroSection from "./HeroSection";
import ServicesSection from "./ServiceSection";
import ReasonsSection from "./ReasonSection";
import TestimonialsSection from "./TestimonialsSection";
import ContactSection from "./ContactSection";

export default function HomeComponent() {
  return (
    <div className="font-poppins relative  w-full ">
      <HeroSection />
      <ServicesSection />
      <ReasonsSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
