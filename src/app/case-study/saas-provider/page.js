import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "../../../components/ui/AnimateOnScroll";

export const metadata = {
  title: "Revolutionizing Responses for a Leading SaaS Provider – ProposalAI",
};

const CHALLENGE = `The client was grappling with the immense effort required for complex enterprise RFPs and detailed security questionnaires. These manual processes were a significant time drain on crucial product development and sales resources. Maintaining consistency and quickly accessing specific technical or security information from a vast repository of documents was a major bottleneck, often delaying sales cycles and impacting team productivity. Additionally, the length and variability of complex Excel questionnaire templates required deep expertise across the entire domain in order to ensure the full suite of requirements were addressed, and there was no contradictory information across responses.`;

const SOLUTION_INTRO = `ProposalAI was implemented as the central nervous system for the company's response management. They uploaded their extensive library of past proposals, technical documentation, security compliance reports, and marketing materials to create a unified, intelligent knowledge base. Key ProposalAI features leveraged include:`;

const SOLUTION_POINTS = [
  "Centralized Knowledge Management: Ensuring all teams access up-to-date and approved information.",
  "AI-Powered Query: For instant, precise answers to RFPs and security questions from their own data.",
  "Automated Requirement Extraction & Draft Generation: To quickly process new RFPs and produce branded first drafts.",
  "Automated Questionnaire Completion: Consistent and accurate response to over 800 individual requirements spanning everything from company details, product features & services through to architectural design and security.",
];

const RESULTS_INTRO = `By leveraging ProposalAI, the SaaS provider achieved significant, measurable improvements:`;

const RESULTS_POINTS = [
  "Slashed proposal and questionnaire completion time by an average of 80%, allowing for much faster turnaround.",
  "Freed up expert and security teams, reallocating an estimated 20+ hours per week per team back to core innovation and strategic tasks.",
  "Accelerated sales cycles by up to 30%, enhancing client trust through rapid, high-quality submissions and contributing directly to improved client acquisition rates.",
];

const CTA_TEXT = "Imagine what this level of efficiency and precision could unlock for your team.";
const CTA_BTN = "READY TO SEE HOW?";

export default function SaaSCaseStudyPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative bg-white overflow-hidden"
        style={{ minHeight: "calc(100vh - 80px)" }}
      >
        {/* ════════════════════════════════════════
            3 BLOBS — positioned exactly like ref
            ════════════════════════════════════════ */}

        {/* BLOB 1 — Top-left, large, partially clipped behind text */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "#ebebeb",
            top: "-60px",
            left: "-150px",
            zIndex: 0,
          }}
        />

        {/* BLOB 2 — Top-right, medium, partially clipped on illustration side */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: "260px",
            height: "260px",
            borderRadius: "50%",
            background: "#ebebeb",
            top: "-30px",
            right: "-60px",
            zIndex: 0,
          }}
        />

        {/* BLOB 3 — Bottom-right area, small, under illustration */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background: "#ebebeb",
            bottom: "30px",
            right: "18%",
            zIndex: 0,
          }}
        />

        {/* ── Desktop (md+) ── */}
        <div
          className="hidden md:flex relative"
          style={{ minHeight: "calc(100vh - 80px)", zIndex: 1 }}
        >
          {/* LEFT — text vertically centered */}
          <div className="w-1/2 flex flex-col justify-center px-10 lg:px-16 py-16">
            <AnimateOnScroll>
              {/* Back + badge inline */}
              <div className="flex items-center gap-3 mb-8">
                <Link
                  href="/resource"
                  className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:gap-2.5 transition-all"
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to Resources
                </Link>
                <span className="inline-block bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                  Case Study · SaaS
                </span>
              </div>

              <h1 className="font-display text-4xl lg:text-5xl font-bold text-dark mb-5 leading-[1.05]">
                Revolutionizing Responses for a Leading SaaS Provider
              </h1>
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed max-w-md">
                <span className="font-bold text-dark">Client:</span> A rapidly expanding SaaS provider specializing in enterprise cloud solutions.
              </p>
            </AnimateOnScroll>
          </div>

          {/* RIGHT — plain white, illustration full height */}
          <div className="w-1/2 flex items-center justify-center overflow-hidden relative">
            <Image
              src="/case-study-1.png"
              alt="SaaS Provider illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* ── Mobile (below md) ── */}
        <div className="flex flex-col md:hidden relative px-6 pt-10 pb-12" style={{ zIndex: 1 }}>
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <Link
              href="/resource"
              className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back
            </Link>
            <span className="inline-block bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
              Case Study · SaaS
            </span>
          </div>

          <div className="w-full h-52 mb-8 relative">
            <Image
              src="/case-study-1.png"
              alt="SaaS Provider illustration"
              fill
              className="object-contain"
            />
          </div>

          <h1 className="font-display text-3xl font-bold text-dark mb-4 leading-tight">
            Revolutionizing Responses for a Leading SaaS Provider
          </h1>
          <p className="text-gray-600 text-base">
            <span className="font-bold text-dark">Client:</span> A rapidly expanding SaaS provider specializing in enterprise cloud solutions.
          </p>
        </div>
      </section>

      {/* ── Content sections ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-10">

        {/* Challenge */}
        <AnimateOnScroll>
          <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary mb-5">The Challenge</h2>
            <p className="text-gray-700 leading-relaxed">{CHALLENGE}</p>
          </div>
        </AnimateOnScroll>

        {/* Solution */}
        <AnimateOnScroll>
          <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary mb-5">Solution:</h2>
            <p className="text-gray-700 leading-relaxed mb-6">{SOLUTION_INTRO}</p>
            <ul className="space-y-3">
              {SOLUTION_POINTS.map((p, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimateOnScroll>

        {/* Results */}
        <AnimateOnScroll>
          <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary mb-5">Results</h2>
            <p className="text-gray-700 leading-relaxed mb-6">{RESULTS_INTRO}</p>
            <ul className="space-y-3 mb-8">
              {RESULTS_POINTS.map((p, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-6 border-t border-gray-200">
              <p className="font-bold text-dark text-base flex-1">{CTA_TEXT}</p>
              <Link
                href="/contact"
                className="inline-flex items-center bg-dark text-white text-xs font-bold uppercase tracking-widest px-6 py-3.5 rounded-full hover:bg-gray-800 transition-all duration-200 whitespace-nowrap"
              >
                {CTA_BTN}
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </>
  );
}