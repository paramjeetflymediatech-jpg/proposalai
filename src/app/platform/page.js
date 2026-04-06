import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "../../components/ui/AnimateOnScroll";
import CTASection from "../../components/sections/CTASection";
import ClientsSection from "../../components/sections/ClientsSection";
import FeatureVideoSection from "@/components/sections/Featurevideosection";
import FaqAccordion from "@/components/ui/FaqAccordion";

export const metadata = {
  title: "Platform – ProposalAI",
  description: "Explore the ProposalAI platform — built for proposal teams that need to move fast and win more.",
};

const PLATFORM_CARDS = [
  {
    gif: "/platform-card-1.gif",
    title: "Private Knowledge Base",
    desc: "Centralize your proposals, policies, and technical docs into a dynamic library. We use secure, commercial AI processing to ensure your data remains exclusive to your tenant and is never used to train foundation models.",
  },
  {
    gif: "/platform-card-2.gif",
    title: "Chat with Anything",
    desc: 'Empower your Subject Matter Experts to "talk" to your documents, perform real-time research using a simple chat interface. Instantly retrieve market trends, competitor insights, technical specs or past answers without digging through folders or waiting for email replies.',
  },
  {
    gif: "/platform-card-3.gif",
    title: "Intelligent Data Ingestion",
    desc: "Whether it's a 250+ row Excel questionnaire or a PDF technical manual, our platform ingests and indexes diverse file formats. Automatically extract key requirements and summarize complex documents to kickstart your drafting process.",
  },
  {
    gif: "/platform-card-4.gif",
    title: "Project Management",
    desc: "Instantly convert RFP deadlines into a structured project timeline. Our AI analyzes submission dates to automatically generate a step-by-step workback plan with assigned tasks and milestones to keep your team on track.",
  },
];

const BRANDS = Array.from({ length: 10 }, (_, i) => `/brand-${i + 1}.png`);

const SHOWCASE_ITEMS = [
  {
    src: "/platform-img-1.png",
    alt: "AI-powered desktop experience",
    title: "Intelligent Desktop",
    desc: "Access your full proposal workspace from any desktop. Smart suggestions and AI drafts available right where you work.",
  },
  {
    src: "/platform-img-2.png",
    alt: "Mobile proposal management",
    title: "Mobile Ready",
    desc: "Review, approve, and collaborate on proposals from your phone. Full feature parity across every device.",
  },
  {
    src: "/platform-img-3.png",
    alt: "Precision analytics and insights",
    title: "Precision Insights",
    desc: "Built with forensic attention to detail. Every data point, every pattern, every win — captured and surfaced for you.",
  },
];

export default function PlatformPage() {
  return (
    <>
      {/* ── 1. Hero ─────────────────────────────────────────────────── */}
      <section
        className="relative flex flex-col lg:flex-row items-center overflow-hidden"
        style={{
          background: "#E8E0D0",
          minHeight: "auto",
          paddingTop: "100px",
          paddingBottom: "60px",
          isolation: "isolate",
        }}
      >
        {/* Content Side */}
        <div className="relative w-full lg:w-1/2 px-6 sm:px-10 lg:pl-16 lg:pr-0 z-10 flex flex-col justify-center text-left lg:text-left items-start">
          <AnimateOnScroll>
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
              The Smarter Way to Write Winning Proposals
            </h1>
            <p className="text-gray-600 text-base sm:text-lg max-w-md mb-10 leading-relaxed">
              Transform your collective knowledge into a competitive advantage. Respond faster, ensure accuracy, and close more deals.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-between sm:justify-start gap-2.5 bg-primary text-white text-base font-semibold pl-6 pr-1.5 py-1.5 rounded-full shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all duration-200 group">
                Request a Personalized Demo
                <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center flex-shrink-0 group-hover:translate-x-1 transition-transform">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </Link>
            </div>
          </AnimateOnScroll>
        </div>


        {/* Image Side */}
        <div
          className="relative w-full lg:w-1/2 mt-12 lg:mt-0 h-[300px] sm:h-[450px] lg:h-[600px] flex items-end justify-end pointer-events-none"
          style={{ mixBlendMode: "multiply" }}
        >
          <div className="relative w-full h-full max-w-2xl">
            <Image
              src="/platfrom-home.png"
              alt="Platform hero"
              fill
              className="object-contain object-bottom lg:object-right-bottom"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── 3. Scroll-driven video section ───────────────────────── */}
      <FeatureVideoSection />

      {/* ── 4. GIF Cards on primary bg ──────────────────── */}
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <AnimateOnScroll className="text-center mb-12 md:mb-16">
            <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-3">The Platform</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-white mb-5">The Intelligent Engine Behind Every Win</h2>
            <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Centralize your knowledge, automate your workflow, and empower your experts with a platform built for the complexity of modern bids
            </p>
          </AnimateOnScroll>

          {/* 2×2 GIF cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-16 md:mb-24">
            {PLATFORM_CARDS.map((card, i) => (
              <AnimateOnScroll key={i} delay={i * 100} className="h-full">
                <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 text-center flex flex-col items-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="w-24 h-24 md:w-28 md:h-28 relative mb-5 md:mb-6">
                    <Image src={card.gif} alt={card.title} fill unoptimized className="object-contain" />
                  </div>
                  <h3 className="font-light text-lg md:text-xl text-dark mb-2 md:mb-3">{card.title}</h3>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-sm">{card.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

        </div>
      </section>

      {/* ── 5. FAQ ───────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <AnimateOnScroll>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-dark leading-tight mb-8">
                Frequently Asked Questions
              </h2>
              <Link href="/contact" className="inline-flex items-center bg-primary text-white text-sm font-semibold px-8 py-3.5 rounded-full shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all duration-200">
                Request a Personalized Demo
              </Link>
            </AnimateOnScroll>
          </div>

          <div className="max-w-3xl mx-auto">
            <AnimateOnScroll delay={100}>
              <FaqAccordion />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── 6. Capabilities — heading+subheading left, image right ─── */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left — heading + subheading + button */}
            <AnimateOnScroll>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-dark leading-tight mb-5">
                Stop Searching,
                <span className="text-primary">  Start Winning</span>
              </h2>
              <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-8">
                See how ProposalAI transforms your existing documents into your most powerful competitive advantage.

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