import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "../../../components/ui/AnimateOnScroll";

export const metadata = {
  title: "Driving Wins for a Re-insurance Broker – ProposalAI",
};

const CHALLENGE = `In a fiercely competitive global market, the client needed to respond to complex, time-sensitive RFPs from major cedents with exceptional speed, accuracy, and strategic insight. Their traditional methods of synthesizing vast amounts of proprietary market intelligence, historical placement data, and internal expertise were labor-intensive and slow, making it difficult to consistently craft highly tailored, compelling proposals that effectively showcased their unique value proposition.`;

const SOLUTION_INTRO = `The brokerage firm adopted ProposalAI to transform its extensive library of successful past RFP responses, market analyses, and proprietary structuring expertise into a dynamic, interactive knowledge base. This enabled them to:`;

const SOLUTION_POINTS = [
  "Instantly Query Proprietary Data: Using AI to pinpoint optimal structuring options, relevant market precedents, and key strategic insights for specific cedent RFP requirements.",
  "Automate RFP Processing: Uploading cedent RFPs for AI-driven requirement extraction and rapid generation of customized, high-quality draft proposals.",
  "Leverage AI-Assisted Research: Quickly incorporating current market data to strengthen RFP responses.",
];

const RESULTS_INTRO = `The strategic implementation of ProposalAI yielded compelling outcomes:`;

const RESULTS_POINTS = [
  "Accelerated response times for complex RFPs by an average of 70%, significantly improving speed to market.",
  "Improved operational efficiency across global teams, allowing for an increase in RFP handling capacity without additional headcount.",
  "Strengthened their competitive edge, contributing to an uplift in RFP win rates.",
];

const CTA_TEXT = "Could your firm benefit from this competitive advantage?";
const CTA_BTN = "LET'S EXPLORE YOUR SPECIFIC NEEDS.";

export default function InsuranceCaseStudyPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative bg-white overflow-hidden"
        style={{ minHeight: "calc(100vh - 80px)" }}
      >
        {/* BLOB 1 — Top-left, large, partially clipped */}
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

        {/* BLOB 2 — Top-right, medium, partially clipped */}
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

        {/* BLOB 3 — Bottom-right, small, under illustration */}
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
          {/* LEFT */}
          <div className="w-1/2 flex flex-col justify-center px-10 lg:px-16 py-16">
            <AnimateOnScroll>
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
                <span className="inline-block bg-primary/10 text-primary text-xs font-medium uppercase tracking-widest px-3 py-1.5 rounded-full">
                  Case Study · Insurance
                </span>
              </div>

              <h1 className="font-display text-4xl lg:text-5xl font-medium text-dark mb-5 leading-[1.05]">
                Driving Wins for a Re-insurance Broker
              </h1>
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed max-w-md">
                <span className="font-medium text-dark">Client:</span> A re-insurance broker renowned for structuring complex programs for large cedents.
              </p>
            </AnimateOnScroll>
          </div>

          {/* RIGHT */}
          <div className="w-1/2 flex items-center justify-center overflow-hidden relative">
            <Image
              src="/case-study-2.png"
              alt="Insurance illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* ── Mobile ── */}
        <div className="flex flex-col md:hidden relative px-6 pt-10 pb-12" style={{ zIndex: 1 }}>
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <Link href="/resource" className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back
            </Link>
            <span className="inline-block bg-primary/10 text-primary text-xs font-medium uppercase tracking-widest px-3 py-1.5 rounded-full">
              Case Study · Insurance
            </span>
          </div>

          <div className="w-full h-52 mb-8 relative">
            <Image src="/case-study-2.png" alt="Insurance illustration" fill className="object-contain" />
          </div>

          <h1 className="font-display text-3xl font-medium text-dark mb-4 leading-tight">
            Driving Wins for a Re-insurance Broker
          </h1>
          <p className="text-gray-600 text-base">
            <span className="font-medium text-dark">Client:</span> A re-insurance broker renowned for structuring complex programs for large cedents.
          </p>
        </div>
      </section>

      {/* ── Content ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-10">

        <AnimateOnScroll>
          <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
            <h2 className="font-display text-2xl md:text-3xl font-medium text-primary mb-5">The Challenge</h2>
            <p className="text-gray-700 leading-relaxed">{CHALLENGE}</p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
            <h2 className="font-display text-2xl md:text-3xl font-medium text-primary mb-5">Solution: ProposalAI in Action</h2>
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

        <AnimateOnScroll>
          <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
            <h2 className="font-display text-2xl md:text-3xl font-medium text-primary mb-5">Results</h2>
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
              <p className="font-medium text-dark text-base flex-1">{CTA_TEXT}</p>
              <Link
                href="/contact"
                className="inline-flex items-center bg-dark text-white text-xs font-medium uppercase tracking-widest px-6 py-3.5 rounded-full hover:bg-gray-800 transition-all duration-200 whitespace-nowrap"
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