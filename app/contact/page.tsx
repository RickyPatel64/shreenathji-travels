import PageHero from "@/components/layout/PageHero";
import ContactSection from "@/components/home/ContactSection";

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        description="We're available 24×7 to help you with airport transfers, local taxi, outstation trips, and corporate travel."
      />

      <ContactSection />
    </>
  );
}