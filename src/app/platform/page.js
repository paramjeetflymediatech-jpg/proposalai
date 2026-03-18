import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "../../components/ui/AnimateOnScroll";
import CTASection from "../../components/sections/CTASection";
import ClientsSection from "../../components/sections/ClientsSection";
import FeatureVideoSection from "../../components/sections/FeatureVideoSection";

export const metadata = {
  title: "Platform – ProposalAI",
  description: "Explore the ProposalAI platform — built for proposal teams that need to move fast and win more.",
};

const PLATFORM_CARDS = [
  {
    gif: "/platform-card-1.gif",
    title: "AI Content Engine",
    desc: "Generates first-draft proposals instantly using your company knowledge base, past wins, and real-time RFP requirements.",
  },
  {
    gif: "/platform-card-2.gif",
    title: "Team Collaboration",
    desc: "Assign sections to team members, track real-time edits, leave comments, and merge contributions — all in one workspace.",
  },
  {
    gif: "/platform-card-3.gif",
    title: "Knowledge Library",
    desc: "Centralized repository for all your approved content, past proposals, and winning templates — always searchable.",
  },
  {
    gif: "/platform-card-4.gif",
    title: "Win Analytics",
    desc: "Deep insights into what makes your proposals win. Track scores, identify patterns, and continuously improve performance.",
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

// Feature items for the image+list section
const FEATURE_LIST = [
  {
    title: "Real-Time Collaboration",
    desc: "Work together seamlessly with your team. Assign sections, track edits, and merge contributions in one shared workspace.",
  },
  {
    title: "Smart Automation",
    desc: "Let AI handle repetitive drafting tasks while your team focuses on strategy, relationships, and winning the deal.",
  },
];

export default function PlatformPage() {
  return (
    <>
      {/* ── 1. Hero ─────────────────────────────────────────────────── */}
      <section
        className="relative flex items-center overflow-hidden"
        style={{
          background: "#E8E0D0",
          minHeight: "calc(100vh - 80px)",
          paddingTop: "80px",
          isolation: "isolate",
        }}
      >
        <div
          className="hidden md:block absolute right-0 bottom-0 w-[65%] lg:w-[55%] h-[75%] lg:h-[85%]"
          style={{ mixBlendMode: "multiply" }}
        >
          <Image src="/platfrom-home.png" alt="Platform hero" fill className="object-contain object-right-bottom" priority />
        </div>
        <div className="md:hidden absolute right-0 bottom-0 w-full h-[45%]" style={{ mixBlendMode: "multiply" }}>
          <Image src="/platfrom-home.png" alt="" fill className="object-contain object-right-bottom opacity-40" priority />
        </div>
        <div className="relative w-full px-6 sm:px-10 lg:px-16 py-12 md:py-0">
          <AnimateOnScroll>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-dark leading-[1.08] mb-5 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
              The Smarter Way{" "}<span className="text-primary">to Write Winning Proposals  </span>
            </h1>
            <p className="text-gray-600 text-sm sm:text-base max-w-xs sm:max-w-sm mb-8 leading-relaxed">
               Transform your collective knowledge into a competitive advantage. Respond faster, ensure accuracy, and close more deals. 
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2.5 bg-primary text-white text-sm sm:text-base font-semibold pl-5 sm:pl-6 pr-1.5 py-1.5 rounded-full shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all duration-200">
              Request a Personalized Demo 
              <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

    

      {/* ── 3. Scroll-driven video section ───────────────────────── */}
      <FeatureVideoSection />

      {/* ── 4. GIF Cards + Brands on primary bg ──────────────────── */}
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="text-center mb-12 md:mb-16">
            <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-3">The Platform</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5">Built for Every Team Size</h2>
            <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              From solo consultants to enterprise proposal centers — ProposalAI scales with your needs and adapts to every workflow your team already uses.
            </p>
          </AnimateOnScroll>

          {/* 2×2 GIF cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-16 md:mb-24">
            {PLATFORM_CARDS.map((card, i) => (
              <AnimateOnScroll key={i} delay={i * 100}>
                <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 text-center flex flex-col items-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                  <div className="w-24 h-24 md:w-28 md:h-28 relative mb-5 md:mb-6">
                    <Image src={card.gif} alt={card.title} fill unoptimized className="object-contain" />
                  </div>
                  <h3 className="font-bold text-lg md:text-xl text-dark mb-2 md:mb-3">{card.title}</h3>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-sm">{card.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Brand logos */}
          <AnimateOnScroll className="text-center mb-10 md:mb-12">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white">Trusted by Industry Leaders</h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-6 md:gap-8 items-center justify-items-center">
            {BRANDS.map((src, i) => (
              <AnimateOnScroll key={i} delay={i * 60}>
                <div className="w-24 h-14 md:w-32 md:h-16 relative" style={{ mixBlendMode: "screen" }}>
                  <Image src={src} alt={`Brand ${i + 1}`} fill className="object-contain opacity-90 hover:opacity-100 transition-opacity" />
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>


      {/* ── 6. Feature image section (heading + list left, photo right) */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Top row — heading left, button right */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5 mb-10 md:mb-14">
            <AnimateOnScroll>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-dark leading-tight max-w-xl">
                More Capabilities That
                <span className="text-primary"> Set You Apart</span>
              </h2>
              <p className="text-gray-500 text-base md:text-lg mt-4 max-w-xl leading-relaxed">
                ProposalAI is packed with features designed specifically for proposal teams. Every detail matters when you're competing for business.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={100} className="flex-shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 bg-primary text-white text-sm sm:text-base font-semibold
                           pl-5 pr-1.5 py-1.5 rounded-full shadow-lg shadow-primary/25
                           hover:bg-primary/90 transition-all duration-200 whitespace-nowrap"
              >
                See It in Action
                <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </Link>
            </AnimateOnScroll>
          </div>

          {/* Bottom row — feature list left, photo right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Feature list */}
            <div className="space-y-8 md:space-y-10">
              {FEATURE_LIST.map((feat, i) => (
                <AnimateOnScroll key={i} delay={i * 100}>
                  <div className="flex gap-4 md:gap-5">
                    {/* Circle icon */}
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg md:text-xl text-dark mb-2">{feat.title}</h3>
                      <p className="text-gray-500 text-sm md:text-base leading-relaxed">{feat.desc}</p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

            {/* Photo right */}
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