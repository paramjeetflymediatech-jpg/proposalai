import HeroSection from "../components/sections/HeroSection";
import StatsSection from "../components/sections/StatsSection";
import FeatureSections from "../components/sections/FeatureSections";
import ServicesSection from "../components/sections/ServicesSection";

import SliderSection from "@/components/sections/SliderSection";
import FeaturedSection from "@/components/sections/Featuredsection";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeatureSections />
  <ServicesSection/>
  <SliderSection/>
  <FeaturedSection/>

       <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left — heading + subheading + button */}
            <AnimateOnScroll>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-dark leading-tight mb-5">
                The Smarter Way to 
                <span className="text-primary">  Write Winning Proposals </span>
              </h2>
              <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-8">
Transform your collective knowledge into a competitive advantage. Respond faster, ensure accuracy, and close more deals. 
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 bg-primary text-white text-sm sm:text-base font-semibold
                           pl-5 pr-1.5 py-1.5 rounded-full shadow-lg shadow-primary/25
                           hover:bg-primary/90 transition-all duration-200"
              >
                Book a Personalized Demo
                <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </Link>
            </AnimateOnScroll>

            {/* Right — image */}
            <AnimateOnScroll delay={150}>
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/platform-feature.jpg"
                  alt="ProposalAI in action"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimateOnScroll>

          </div>
        </div>
      </section>

  
    
     
    </>
  );
}
