import { AboutSection } from "@/components/AboutSection";
import CardFlip from "@/components/Certificates";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <AboutSection/>
      <ProjectsSection/>
      {/* <TestimonialsSection/> */}
      <CardFlip/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}
