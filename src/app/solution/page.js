import Link from "next/link";
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
    features: ["Auto-extract requirements", "AI first-draft generation", "Compliance gap detection", "Smart content suggestions"],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80",
    color: "from-cyan-500 to-blue-600",
    href: "/solution/rfp-responses",
  },
  {
    tag: "Use Case 02",
    title: "Bid Evaluation & Scoring",
    desc: "Evaluate incoming proposals with speed and consistency. Set your scoring criteria once and let AI assess every submission against the same objective standard.",
    features: ["Configurable scoring criteria", "Comparative analysis", "Bias-free evaluation", "Audit trail reports"],
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80",
    color: "from-purple-500 to-pink-600",
    href: "/solution/rfp-evaluations",
  },
  {
    tag: "Use Case 03",
    title: "Security Questionnaires",
    desc: "Security questionnaires are repetitive and time-consuming. ProposalAI builds a dynamic answer library from your past SQs so you never answer the same question twice.",
    features: ["Answer library", "Auto-match questions", "Compliance frameworks", "One-click export"],
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&q=80",
    color: "from-emerald-500 to-teal-600",
    href: "/solution/security",
  },
];

const INDUSTRIES = [
  { name: "Technology & SaaS", icon: "💻" },
  { name: "Re-Insurance Brokers", icon: "🏛️" },
  { name: "Consulting Firms", icon: "📊" },
  { name: "Healthcare", icon: "🏥" },
  { name: "Financial Services", icon: "💰" },
  { name: "Government Contracting", icon: "🏛️" },
];

export default function SolutionPage() {
  return (
    <>
      {/* Hero */}
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
              Whether you're responding to RFPs, evaluating bids, or tackling security questionnaires — ProposalAI has a purpose-built solution.
            </p>
            <Link href="/contact" className="btn-primary text-base px-8 py-4 shadow-lg shadow-primary/25">
              Explore Solutions
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Use cases detail */}
      <section className="bg-mint py-8">
        {USE_CASES.map((uc, i) => (
          <div key={i} className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center ${i % 2 !== 0 ? "" : ""}`}>
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
                  <Link href={uc.href} className="btn-primary">
                    Learn More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </AnimateOnScroll>

                <AnimateOnScroll delay={200} className={i % 2 !== 0 ? "lg:order-1" : ""}>
                  <div className={`rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br ${uc.color} p-1`}>
                    <div className="rounded-3xl overflow-hidden">
                      <img src={uc.image} alt={uc.title} className="w-full h-80 object-cover" />
                    </div>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Industries */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="text-center mb-14">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-dark mb-4">
              Solutions Across Industries
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              ProposalAI adapts to the unique language, formats, and requirements of your industry.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {INDUSTRIES.map((ind, i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <div className="flex items-center gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:border-primary/30 hover:bg-white hover:shadow-md transition-all duration-300 cursor-pointer">
                  <span className="text-3xl">{ind.icon}</span>
                  <span className="font-semibold text-dark">{ind.name}</span>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <ClientsSection />

      <CTASection
        title="Find Your Perfect Solution"
        subtitle="Talk to our team and get a solution tailored to your specific proposal challenges and industry requirements."
        btnLabel="Book a Demo"
        secondBtn={{ label: "See All Features", href: "/platform" }}
      />
    </>
  );
}
