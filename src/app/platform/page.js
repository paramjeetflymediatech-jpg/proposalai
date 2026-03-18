import Link from "next/link";
import AnimateOnScroll from "../../components/ui/AnimateOnScroll";
import CTASection from "../../components/sections/CTASection";
import ClientsSection from "../../components/sections/ClientsSection";

export const metadata = {
  title: "Platform – ProposalAI",
  description: "Explore the ProposalAI platform — built for proposal teams that need to move fast and win more.",
};

const PLATFORM_FEATURES = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "AI Content Engine",
    desc: "Generates first-draft proposals instantly using your company knowledge base, past wins, and real-time RFP requirements.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Team Collaboration",
    desc: "Assign sections to team members, track real-time edits, leave comments, and merge contributions — all in one workspace.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    title: "Knowledge Library",
    desc: "Centralized repository for all your approved content, past proposals, and winning templates — always searchable.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Win Analytics",
    desc: "Deep insights into what makes your proposals win. Track scores, identify patterns, and continuously improve performance.",
  },
];

const PLATFORM_CAPABILITIES = [
  { title: "Multi-format Export", desc: "Export to PDF, Word, PowerPoint, or custom branded formats in one click." },
  { title: "CRM Integration", desc: "Sync with Salesforce, HubSpot, and 20+ CRMs to auto-populate proposal data." },
  { title: "E-Signature Built-in", desc: "Send for signature directly from ProposalAI without third-party tools." },
  { title: "Version Control", desc: "Full proposal history with the ability to restore any previous version instantly." },
  { title: "Compliance Checker", desc: "Automatically flag missing requirements and ensure every RFP criterion is addressed." },
  { title: "Custom Branding", desc: "Match your exact brand guidelines with custom themes, fonts, and color palettes." },
];

export default function PlatformPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden pt-16" style={{ background: "#E8E0D0" }}>
        <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=900&q=80"
            alt="Platform hero"
            className="w-full h-full object-cover opacity-80"
            style={{ filter: "grayscale(1) contrast(1.1)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#E8E0D0] via-[#E8E0D0]/60 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 pt-32 w-full">
          <AnimateOnScroll>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full mb-6">
              The Platform
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-dark leading-[1.05] mb-6 max-w-2xl">
              Built to Win.{" "}
              <span className="text-primary">Designed to Scale.</span>
            </h1>
            <p className="text-gray-600 text-xl max-w-xl mb-10 leading-relaxed">
              The ProposalAI platform combines powerful AI with intuitive collaboration tools to help your team create winning proposals at every stage of the sales cycle.
            </p>
            <Link href="/contact" className="btn-primary text-base px-8 py-4 shadow-lg shadow-primary/25">
              Explore Now
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Core features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-dark mb-4">
              Core Platform Capabilities
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Everything your proposal team needs, unified in one intelligent workspace.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PLATFORM_FEATURES.map((feat, i) => (
              <AnimateOnScroll key={i} delay={i * 100}>
                <div className="flex gap-6 p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-lg hover:border-primary/20 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {feat.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-dark mb-2">{feat.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{feat.desc}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Platform cards on blue bg */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="text-center mb-14">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              Built for Every Team Size
            </h2>
            <p className="text-white/70 text-lg max-w-xl mx-auto">
              From solo consultants to enterprise proposal centers — ProposalAI scales with your needs.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PLATFORM_FEATURES.slice(0, 4).map((feat, i) => (
              <AnimateOnScroll key={i} delay={i * 100}>
                <div className="bg-white rounded-3xl p-8 card-hover">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                    {feat.icon}
                  </div>
                  <h3 className="font-bold text-xl text-dark mb-3">{feat.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{feat.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <ClientsSection />

      {/* Additional capabilities */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
                More Capabilities That
                <span className="text-primary"> Set You Apart</span>
              </h2>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                ProposalAI is packed with features designed specifically for proposal teams. Every detail matters when you're competing for business.
              </p>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2 shadow-lg shadow-primary/25">
                See It in Action
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </AnimateOnScroll>

            <div className="space-y-4">
              {PLATFORM_CAPABILITIES.map((cap, i) => (
                <AnimateOnScroll key={i} delay={i * 80}>
                  <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all duration-300">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-dark mb-1">{cap.title}</h4>
                      <p className="text-sm text-gray-500">{cap.desc}</p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="See the Platform in Action"
        subtitle="Schedule a 30-minute demo and get a personalized walkthrough of how ProposalAI works for your specific use case."
        btnLabel="Book a Demo"
        secondBtn={{ label: "View Pricing", href: "/contact" }}
        image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80"
      />
    </>
  );
}
