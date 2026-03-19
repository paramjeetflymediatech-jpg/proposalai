import Link from "next/link";
import AnimateOnScroll from "../../../components/ui/AnimateOnScroll";

export const metadata = {
  title: "The Human-AI Balance: When to Let AI Lead vs. Take Over – ProposalAI Insights",
  description: "Not everything should be automated. This guide helps proposal teams understand where AI adds the most value and where human judgment is irreplaceable.",
};

const BALANCE_TABLE = [
  { task: "First-draft generation", who: "AI", why: "Fast, context-aware, draws from knowledge base" },
  { task: "RFP requirement extraction", who: "AI", why: "Consistent, thorough, no missed clauses" },
  { task: "Win strategy & differentiation", who: "Human", why: "Requires relationship knowledge & judgment" },
  { task: "Pricing & commercial terms", who: "Human", why: "Business context & risk assessment needed" },
  { task: "Content library management", who: "Both", why: "AI indexes & retrieves; humans approve & curate" },
  { task: "Final review & polish", who: "Human", why: "Brand voice, tone, and strategic nuance" },
  { task: "Compliance cross-checking", who: "AI", why: "Reliable, systematic, never fatigued" },
  { task: "Relationship & exec messaging", who: "Human", why: "Empathy and political awareness matter" },
];

const SECTIONS = [
  {
    heading: "The Automation Temptation",
    body: `When teams first adopt AI proposal tools, there's a natural temptation to automate everything. The time savings are real, the efficiency gains are measurable, and the technology is genuinely capable. But experienced proposal leaders quickly learn that full automation is a trap.\n\nThe most successful implementations aren't the ones that remove humans from the process — they're the ones that put humans in the right parts of the process, freed from the tedious work that AI does better.`,
  },
  {
    heading: "Where AI Genuinely Wins",
    body: `AI excels at tasks that are high-volume, pattern-dependent, and data-intensive. Extracting requirements from a 200-page RFP? AI is faster and more thorough than any human. Cross-referencing 50 past proposals to find the most relevant case study? AI does this in seconds.\n\nThe key insight is that these are tasks where speed and consistency matter more than judgment. AI never gets tired, never misses a clause, and never forgets that you answered a similar question two years ago with language that scored highly.`,
  },
  {
    heading: "Where Human Judgment Remains Irreplaceable",
    body: `Strategic differentiation cannot be automated. Understanding why a particular client cares about a specific outcome — based on a conversation at a conference, a comment in a previous meeting, or knowledge of their internal politics — requires human intelligence that no AI currently possesses.\n\nPricing decisions, risk assessments, and commercial terms require judgment that sits outside the proposal itself. And the final layer of polish — the choice of a particular phrase that signals you understand this client's world — is something human experts do better than any algorithm.`,
  },
  {
    heading: "Building the Right Collaboration",
    body: `The most effective proposal teams treat AI as a highly capable junior team member: give it clear instructions, let it do the volume work, then have senior humans review, redirect, and elevate the output.\n\nIn practice, this looks like: AI generates the first draft based on RFP requirements and the knowledge base. A senior proposal manager reviews the draft, flagging sections that need strategic input. Subject matter experts add depth to technical sections. A final reviewer ensures the narrative arc is compelling and the tone is right.\n\nThis division of labor typically reduces total proposal effort by 60-70% while actually improving quality — because humans are spending their limited time on the work only they can do.`,
  },
];

export default function InsightsHumanAIPage() {
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
              <span className="bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">Insights</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1.5 rounded-full">Strategy · Guide</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-6 leading-[1.08]">
              The Human-AI Balance: When to Let AI Lead vs. Take Over
            </h1>

            <p className="text-xl text-gray-500 leading-relaxed mb-8">
              Not everything should be automated. This guide helps proposal teams understand where AI adds the most value — and where human judgment is irreplaceable.
            </p>

            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>January 8, 2026</span>
              <span>·</span>
              <span>8 min read</span>
              <span>·</span>
              <span>ProposalAI Team</span>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Article body ── */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <AnimateOnScroll>
          <div className="space-y-12">
            {SECTIONS.map((section, i) => (
              <div key={i}>
                <h2 className="font-display text-2xl font-bold text-dark mb-4">{section.heading}</h2>
                {section.body.split("\n\n").map((para, j) => (
                  <p key={j} className="text-gray-700 leading-relaxed mb-4">{para}</p>
                ))}
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Balance table */}
        <AnimateOnScroll>
          <div className="mt-14">
            <h2 className="font-display text-2xl font-bold text-dark mb-6">The Balance Sheet: AI vs. Human by Task</h2>
            <div className="rounded-2xl overflow-hidden border border-gray-200">
              {/* Header */}
              <div className="grid grid-cols-3 bg-dark text-white text-xs font-bold uppercase tracking-wider px-5 py-3">
                <span>Task</span>
                <span>Best Handled By</span>
                <span>Why</span>
              </div>
              {/* Rows */}
              {BALANCE_TABLE.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-3 px-5 py-4 text-sm border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                >
                  <span className="text-dark font-medium pr-4">{row.task}</span>
                  <span className={`font-bold pr-4 ${
                    row.who === "AI" ? "text-primary" :
                    row.who === "Human" ? "text-emerald-600" :
                    "text-violet-600"
                  }`}>{row.who}</span>
                  <span className="text-gray-500">{row.why}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-3 text-center">
              <span className="text-primary font-semibold">AI</span> · <span className="text-emerald-600 font-semibold">Human</span> · <span className="text-violet-600 font-semibold">Both</span>
            </p>
          </div>
        </AnimateOnScroll>

        {/* CTA */}
        <AnimateOnScroll>
          <div className="mt-14 bg-dark rounded-2xl p-8 md:p-10 text-center">
            <h3 className="font-display text-2xl font-bold text-white mb-3">Want to find the right balance for your team?</h3>
            <p className="text-white/60 mb-6">ProposalAI is built around the principle that AI and humans win together.</p>
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