import HeroSection from "../components/sections/HeroSection";
import StatsSection from "../components/sections/StatsSection";
import FeatureSections from "../components/sections/FeatureSections";
import ServicesSection from "../components/sections/ServicesSection";
import ClientsSection from "../components/sections/ClientsSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeatureSections />
      <ServicesSection />
      <ClientsSection />
      <CaseStudiesSection />
      <CTASection
        title="Start Winning More Proposals Today"
        subtitle="Book a personalized demo and see how ProposalAI can transform your proposal process in the first 30 days."
        btnLabel="Book a Demo"
        btnHref="/contact"
        secondBtn={{ label: "See It in Action", href: "/platform" }}
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
      />
    </>
  );
}
