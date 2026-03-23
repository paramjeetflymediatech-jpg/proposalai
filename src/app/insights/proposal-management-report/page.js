import Link from "next/link";
import AnimateOnScroll from "../../../components/ui/AnimateOnScroll";

export const metadata = {
  title: "2026 State of Proposal Management Report – ProposalAI Insights",
  description: "Our annual survey of 500+ proposal professionals reveals how AI is reshaping the industry and what winning teams do differently.",
};

const KEY_FINDINGS = [
  { stat: "73%", label: "of teams say RFP volume increased in 2025" },
  { stat: "80%", label: "of top performers use AI in their proposal workflow" },
  { stat: "3x", label: "faster turnaround for AI-assisted teams vs manual" },
  { stat: "62%", label: "reduction in rework when using a knowledge base" },
];

const SECTIONS = [
  {
    heading: "The State of Play: Proposal Teams Under Pressure",
    body: `In 2026, proposal teams face more pressure than ever before. RFP volumes are rising, deadlines are tightening, and evaluators expect increasingly personalized, well-researched responses. Our survey of 500+ proposal professionals across technology, consulting, insurance, and professional services reveals a industry at a tipping point.\n\nManual workflows are breaking down. Teams that relied on keyword search and static content libraries are struggling to keep pace. Meanwhile, organizations that have embraced intelligent automation are pulling ahead — winning more bids in less time, with smaller teams.`,
  },
  {
    heading: "What Winning Teams Do Differently",
    body: `The data is clear: high-performing proposal teams share a set of common practices that separate them from the pack.\n\nFirst, they treat their institutional knowledge as a strategic asset. Rather than storing content in siloed folders, they maintain a living, AI-indexed knowledge base that every team member can query in seconds.\n\nSecond, they automate the first draft. Top performers don't start from a blank page — they use AI to generate a context-aware first draft that already addresses the RFP's specific requirements, then layer human expertise on top for strategic differentiation.\n\nThird, they measure and iterate. Winning teams track bid scores, analyze what language resonates, and continuously feed learnings back into their knowledge base.`,
  },
  {
    heading: "The AI Adoption Gap",
    body: `Despite the clear evidence of AI's impact, adoption remains uneven. Only 38% of respondents describe their AI usage as "embedded in daily workflow." The majority are still in experimental mode — using AI for occasional tasks rather than as a core part of the proposal process.\n\nThe gap between AI-embedded teams and those still experimenting is stark: AI-embedded teams report 47% higher win rates and 60% faster average response times. This suggests that the competitive advantage of AI is not just about using the technology — it's about integrating it deeply enough to change how the team operates.`,
  },
  {
    heading: "Looking Ahead: The Proposals of 2027",
    body: `As we look toward 2027, the proposal landscape will continue to evolve rapidly. Evaluators will increasingly expect hyper-personalized responses that demonstrate a deep understanding of their specific context — not just technical compliance with requirements.\n\nTeams that invest now in building robust knowledge bases, establishing AI-assisted workflows, and developing the human skills to direct and refine AI output will be best positioned to win. Those that delay risk falling permanently behind.`,
  },
];

export default function InsightsReportPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-white pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <AnimateOnScroll>
            <Link href="/resource" className="inline-flex items-center gap-2 text-primary text-sm font-semibold mb-8 hover:gap-3 transition-all">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Resources
            </Link>

            <div className="flex items-center gap-3 mb-5">
              <span className="bg-emerald-100 text-emerald-700 text-xs font-medium uppercase tracking-widest px-3 py-1.5 rounded-full">Insights</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1.5 rounded-full">Trends · Annual Report</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium text-dark mb-6 leading-[1.08]">
              2026 State of Proposal Management Report
            </h1>

            <p className="text-xl text-gray-500 leading-relaxed mb-8">
              Our annual survey of 500+ proposal professionals reveals how AI is reshaping the industry — and what winning teams do differently.
            </p>

            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>January 20, 2026</span>
              <span>·</span>
              <span>12 min read</span>
              <span>·</span>
              <span>ProposalAI Research Team</span>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Key findings banner ── */}
      <section className="bg-[#1A9BD9] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll>
            <p className="text-emerald-100 text-xs font-medium uppercase tracking-widest text-center mb-8">Key Findings at a Glance</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {KEY_FINDINGS.map((f, i) => (
                <div key={i} className="text-center">
                  <p className="font-display text-4xl font-medium text-white mb-1">{f.stat}</p>
                  <p className="text-emerald-100 text-sm leading-snug">{f.label}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Article body ── */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <AnimateOnScroll>
          <div className="space-y-12">
            {SECTIONS.map((section, i) => (
              <div key={i}>
                <h2 className="font-display text-2xl font-medium text-dark mb-4">{section.heading}</h2>
                {section.body.split("\n\n").map((para, j) => (
                  <p key={j} className="text-gray-700 leading-relaxed mb-4">{para}</p>
                ))}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 bg-dark rounded-2xl p-8 md:p-10 text-center">
            <h3 className="font-display text-2xl font-medium text-white mb-3">Ready to join the winning side of this shift?</h3>
            <p className="text-white/60 mb-6">See how ProposalAI helps teams move from searching to winning.</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 bg-primary text-white text-sm font-semibold pl-6 pr-1.5 py-1.5 rounded-full shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all duration-200"
            >
              Book a Demo
              <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Link>
          </div>
        </AnimateOnScroll>
      </article>
    </>
  );
}