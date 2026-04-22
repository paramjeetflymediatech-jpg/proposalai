import HeroSection from "../components/sections/HeroSection";
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
      <FeatureSections />
      <ServicesSection />
      <SliderSection />
      <FeaturedSection />

      <section className="bg-[#000000] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto bg-[#1A9CDA] rounded-b-[30px] md:rounded-b-[60px] p-4 sm:p-8 md:p-16 lg:px-10 lg:py-20 shadow-2xl relative overflow-hidden">
          <div className="max-w-7xl mx-auto bg-white rounded-[30px] md:rounded-[60px] p-6 sm:p-10 md:p-16 lg:p-20 shadow-2xl relative overflow-hidden">
            <div className="flex flex-col lg:flex-row justify-between items-start mb-10 lg:mb-16 gap-8 text-center lg:text-left">
              <div className="max-w-2xl mx-auto lg:mx-0">
                <AnimateOnScroll>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
                    The Smarter Way to Write Winning Proposals
                  </h2>
                  <p className="text-gray-500 text-sm md:text-base lg:text-lg leading-relaxed">
                    Transform your collective knowledge into a competitive advantage. Respond faster, ensure accuracy, and close more deals.
                  </p>
                </AnimateOnScroll>
              </div>

              <AnimateOnScroll delay={100} className="w-full lg:w-auto">
                <div className="flex justify-center lg:justify-start">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-primary text-white text-sm sm:text-base font-semibold
                               px-8 py-3.5 rounded-full hover:bg-primary/90 transition-all duration-200 group shadow-lg shadow-primary/25"
                  >
                    Book a Demo
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </AnimateOnScroll>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">
              <div className="space-y-8 md:space-y-10 order-2 lg:order-1">
                <AnimateOnScroll delay={200}>
                  <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 md:gap-6">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#1A9CDA] flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20">
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
                  <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 md:gap-6">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#1A9CDA] flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20">
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

              <AnimateOnScroll delay={400} className="order-1 lg:order-2">
                <div className="relative w-full aspect-video sm:aspect-[4/3] rounded-[20px] md:rounded-[30px] overflow-hidden shadow-2xl border-4 md:border-8 border-gray-50">
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
