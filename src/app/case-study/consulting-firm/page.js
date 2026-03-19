import Link from "next/link";
import AnimateOnScroll from "../../../components/ui/AnimateOnScroll";

export const metadata = {
  title: "Empowering a Strategic Management Consulting Firm – ProposalAI",
};

const CHALLENGE = `The firm's success depended on delivering unique, insightful proposals for each client RFP, effectively showcasing their tailored methodologies, relevant experience, and clear value. The highly manual and time-consuming process of collating information from past engagements, customizing it for new opportunities, and meeting stringent deadlines was a major drain on valuable consultant time, diverting them from critical client work and strategic analysis.`;

const SOLUTION_INTRO = `ProposalAI was deployed to create a dynamic, easily searchable knowledge base from the firm's extensive library of past proposals, in-depth case studies, and proprietary methodology documents. Key uses include:`;

const SOLUTION_POINTS = [
  "AI-Powered Knowledge Synthesis: Enabling consultants to instantly find relevant case studies or have the AI synthesize information for new bid sections.",
  "Automated RFP Processing & Draft Generation: Uploading client RFPs to extract key needs and generate branded first-draft proposals using the firm's collective insights.",
  "Enhanced Research Capabilities: Utilizing AI for market research and quick creation of PowerPoint decks.",
];

const RESULTS_INTRO = `The adoption of ProposalAI brought about a new level of efficiency and effectiveness:`;

const RESULTS_POINTS = [
  "Radically reduced time spent on proposal drafting by over 70%, freeing up significant consultant capacity.",
  "Ensured high-quality, consistent messaging, leading to a 95% reduction in the use of outdated or off-brand content.",
  "Increased capacity to produce tailored, impactful proposals at scale, allowing the firm to confidently pursue more qualified opportunities.",
];

const CTA_TEXT = "What could your consultants achieve with more time dedicated to strategy and client value?";
const CTA_BTN = "LET'S DISCUSS HOW PROPOSALAI CAN HELP.";

export default function ConsultingCaseStudyPage() {
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
                <span className="inline-block bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                  Case Study · Consulting
                </span>
              </div>

              <h1 className="font-display text-4xl lg:text-5xl font-bold text-dark mb-5 leading-[1.05]">
                Empowering a Strategic Management Consulting Firm
              </h1>
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed max-w-md">
                <span className="font-bold text-dark">Client:</span> A strategy consulting firm recognized for its insightful and bespoke client solutions.
              </p>
            </AnimateOnScroll>
          </div>

          {/* RIGHT */}
          <div className="w-1/2 flex items-center justify-center overflow-hidden">
            <img
              src="/case-study-3.png"
              alt="Consulting illustration"
              className="w-full h-full object-contain object-center"
              style={{ maxHeight: "calc(100vh - 80px)", padding: "24px 0" }}
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
            <span className="inline-block bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
              Case Study · Consulting
            </span>
          </div>

          <div className="w-full h-52 mb-8">
            <img src="/case-study-3.png" alt="Consulting illustration" className="w-full h-full object-contain" />
          </div>

          <h1 className="font-display text-3xl font-bold text-dark mb-4 leading-tight">
            Empowering a Strategic Management Consulting Firm
          </h1>
          <p className="text-gray-600 text-base">
            <span className="font-bold text-dark">Client:</span> A strategy consulting firm recognized for its insightful and bespoke client solutions.
          </p>
        </div>
      </section>

      {/* ── Content ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-10">

        <AnimateOnScroll>
          <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary mb-5">The Challenge</h2>
            <p className="text-gray-700 leading-relaxed">{CHALLENGE}</p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary mb-5">Solution</h2>
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