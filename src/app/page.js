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

      <section className="bg-[#000000] px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto bg-[#1A9CDA]  rounded-b-[40px] md:rounded-b-[60px] p-8 md:p-16 lg:px-4 lg:py-10 shadow-2xl relative overflow-hidden">

        <div className="max-w-7xl mx-auto bg-white rounded-[40px] md:rounded-[60px] p-8 md:p-16 lg:p-20 shadow-2xl relative overflow-hidden">
          
          <div className="flex flex-col lg:flex-row justify-between items-start mb-12 lg:mb-16 gap-8">
            <div className="max-w-2xl">
              <AnimateOnScroll>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-5.5xl font-medium text-dark leading-[1.1] mb-6">
                  The Smarter Way to <br className="hidden md:block" />
                  <span className="text-primary">Write Winning Proposals</span>
                </h2>
                <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                  Transform your collective knowledge into a competitive advantage. Respond faster, ensure accuracy, and close more deals.
                </p>
              </AnimateOnScroll>
            </div>
            
            <AnimateOnScroll delay={100}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-white text-sm sm:text-base font-semibold
                           px-6 py-3 rounded-full hover:bg-primary/90 transition-all duration-200 group shadow-lg shadow-primary/25"
              >
                Book a Demo
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </AnimateOnScroll>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-10">
              <AnimateOnScroll delay={200}>
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#1A9CDA] flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-light text-dark mb-2">Accelerate Drafting</h4>
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                      Leverage AI to pull relevant content from your legacy proposals and technical documents instantly.
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={300}>
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#1A9CDA] flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-light text-dark mb-2">Ensure Compliance</h4>
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                      Automatically check your responses against RFP requirements to ensure 100% compliance every time.
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>

            <AnimateOnScroll delay={400}>
              <div className="relative w-full aspect-[4/3] rounded-[30px] overflow-hidden shadow-xl border-8 border-gray-50">
                <Image
                  src="/platform-feature.jpg"
                  alt="ProposalAI Platform"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
        </div>
      </section>

  
    
     
    </>
  );
}
