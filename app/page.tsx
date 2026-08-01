import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import FleetPreview from "@/components/home/FleetPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import FloatingActions from "@/components/layout/FloatingActions";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/home/ContactSection";
export default function Home() {
  return (
    <>
     
      <Hero />
      <Services />
      <FleetPreview />
      <WhyChooseUs />
      <Testimonials />
      <ContactSection />
       <Footer />
      <FloatingActions />
    </>
  );
}