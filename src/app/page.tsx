import Nav from "@/components/Nav";
import HeroSection from "@/components/HeroSection";
import TickerSection from "@/components/TickerSection";
import AboutSection from "@/components/AboutSection";
import CurriculumSection from "@/components/CurriculumSection";
import MethodSection from "@/components/MethodSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <HeroSection />
      <TickerSection />
      <AboutSection />
      <CurriculumSection />
      <MethodSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </>
  );
}
