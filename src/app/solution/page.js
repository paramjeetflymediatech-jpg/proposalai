import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "../../components/ui/AnimateOnScroll";
import CTASection from "../../components/sections/CTASection";
import ClientsSection from "../../components/sections/ClientsSection";

export const metadata = {
  title: "Solution – ProposalAI",
  description: "Discover ProposalAI solutions for RFP responses, evaluations, and security questionnaires.",
};

const USE_CASES = [
  {
    tag: "Use Case 01",
    title: "RFP Response Automation",
    desc: "Stop spending 40+ hours on every RFP. ProposalAI reads the requirements, searches your knowledge base, and produces a complete first draft — ready for your team to refine and win.",
    features: [
      "Auto-extract requirements",
      "AI first-draft generation",
      "Compliance gap detection",
      "Smart content suggestions",
    ],
    image: "/step1.png",
    color: "from-cyan-500 to-blue-600",
    href: "/solution/rfp-responses",
  },
  {
    tag: "Use Case 02",
    title: "Security Questionnaires",
    desc: "Security questionnaires are repetitive and time-consuming. ProposalAI builds a dynamic answer library from your past SQs so you never answer the same question twice.",
    features: [
      "Answer library",
      "Auto-match questions",
      "Compliance frameworks",
      "One-click export",
    ],
    image: "/step2.png",
    color: "from-emerald-500 to-teal-600",
    href: "/solution/security",
  },
  {
    tag: "Use Case 03",
    title: "Grant Writing",
    desc: "Automate strict compliance checks and draft compelling narratives. Empower your team to win vital grants without administrative burnout.",
    features: [
      "Requirement extraction",
      "Compliance validation",
      "Past success adaptation",
      "Team collaboration tools",
    ],
    image: "/step3.png",
    color: "from-purple-500 to-pink-600",
    href: "/solution/grant-writing",
  },
];

const INDUSTRIES = [
  { name: "Technology & SaaS",      icon: "💻" },
  { name: "Re-Insurance Brokers",   icon: "🏛️" },
  { name: "Consulting Firms",       icon: "📊" },
  { name: "Healthcare",             icon: "🏥" },
  { name: "Financial Services",     icon: "💰" },
  { name: "Government Contracting", icon: "🏛️" },
];

export default function SolutionPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full mb-6">
              Solutions
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-dark mb-6 leading-tight">
              The Right Tool for
              <br />
              <span className="text-primary">Every Proposal Challenge</span>
            </h1>
            <p className="text-gray-500 text-xl max-w-2xl mx-auto mb-10">
              Whether you&apos;re responding to RFPs, tackling security questionnaires, or writing grants — ProposalAI has a purpose-built solution.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 bg-primary text-white text-base font-semibold pl-6 pr-2 py-2 rounded-full shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all duration-200"
            >
              Explore Solutions
              <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Use cases ────────────────────────────────────────────────── */}
      <section className="bg-[#F5F0E8] py-8">
        {USE_CASES.map((uc, i) => (
          <div key={i} className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

                {/* Text */}
                <AnimateOnScroll className={i % 2 !== 0 ? "lg:order-2" : ""}>
                  <span className="text-xs font-bold text-primary uppercase tracking-widest">{uc.tag}</span>
                  <h2 className="font-display text-4xl md:text-5xl font-bold text-dark mt-3 mb-5 leading-tight">
                    {uc.title}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">{uc.desc}</p>
                  <ul className="space-y-3 mb-8">
                    {uc.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-3 text-gray-700">
                        <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={uc.href}
                    className="inline-flex items-center gap-2.5 bg-primary text-white text-sm font-semibold pl-5 pr-1.5 py-1.5 rounded-full shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all duration-200 w-fit"
                  >
                    Learn More
                    <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </Link>
                </AnimateOnScroll>

                {/* Image */}
                <AnimateOnScroll delay={200} className={i % 2 !== 0 ? "lg:order-1" : ""}>
                  <div className={`rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br ${uc.color} p-1`}>
                    <div className="rounded-3xl overflow-hidden bg-white relative h-80">
                      <Image
                        src={uc.image}
                        alt={uc.title}
                        fill
                        className="object-contain p-6"
                      />
                    </div>
                  </div>
                </AnimateOnScroll>

              </div>
            </div>
          </div>
        ))}
      </section>


      <CTASection
        title="Find Your Perfect Solution"
        subtitle="Talk to our team and get a solution tailored to your specific proposal challenges and industry requirements."
        btnLabel="Book a Demo"
        secondBtn={{ label: "See All Features", href: "/platform" }}
      />
    </>
  );
}