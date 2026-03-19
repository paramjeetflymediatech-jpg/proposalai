import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import CTASection from "@/components/sections/CTASection";

const PAGE_DATA = {
  "rfp-responses": {
    hero: {
      title: "Turn RFP Chaos into",
      titleHighlight: "Strategic Wins",
      subtitle: "Automate requirement analysis and drafting. Empower your experts to deliver compliant, winning proposals faster.",
      btn: "Book a Demo",
    },
    sections: [
      {
        tag: "Analysis",
        title: "Instant Strategic Analysis",
        desc: "Don't waste days highlighting PDFs. Our AI instantly deconstructs the RFP to reveal core priorities and scoring criteria, delivering an immediate strategic brief for a confident go/no-go decision.",
        image: "/step1.png",
        flip: false,
      },
      {
        tag: "Drafting",
        title: "First Drafts That Sound Like You",
        desc: "ProposalAI uses your past wins and unique writing style to create a high-quality first draft. Every answer comes directly from your secure Knowledge Library, ensuring accuracy without the manual effort.",
        image: "/step2.png",
        flip: true,
      },
      {
        tag: "Refinement",
        title: "Collaborative Refinement at Speed",
        desc: "Transform proposal writing into a seamless workflow. Experts refine drafts and validate sources within the platform. Slash manual cycle times by 80% and focus on the strategic narrative.",
        image: "/step3.png",
        flip: false,
      },
    ],
    cta: {
      title: "Ready to Accelerate Your Next Submission?",
      subtitle: "Join the teams cutting RFP turnaround time from weeks to days.",
      btn: "Book a Demo",
    },
    video: "/videos/business.mp4",
  },

  "security": {
    hero: {
      title: "Conquer the 800-Row",
      titleHighlight: "Security Questionnaire",
      subtitle: "Automate Due Diligence and Security responses. Ensure 100% consistency and compliance in minutes, not days.",
      btn: "Book a Demo",
    },
    sections: [
      {
        tag: "Automation",
        title: "End the Spreadsheet Nightmare",
        desc: "Stop line-by-line fatigue. ProposalAI ingests varied templates and auto-populates them with verified answers from your secure knowledge base. Turn a two-week review into a one-click task.",
        image: "/step1.png",
        flip: false,
      },
      {
        tag: "Consistency",
        title: "Zero Conflicting Answers",
        desc: "Inconsistency kills trust. ProposalAI ensures answers are consistent across every document. We automatically validate responses against your latest compliance reports.",
        image: "/step2.png",
        flip: true,
      },
      {
        tag: "Resources",
        title: "Give Engineers Their Fridays Back",
        desc: "Your highest paid experts shouldn't be copy-pasting controls. Automate repetitive tasks so SMEs only need to review the final output. Reclaim 20+ hours per week per team.",
        image: "/step3.png",
        flip: false,
      },
    ],
    cta: {
      title: "Ready to Automate Due Diligence?",
      subtitle: "Book a demo to see how much time you can cut in answering questionnaires annually.",
      btn: "Book a Personalized Demo",
    },
    video: "/videos/business.mp4",
  },

  "grant-writing": {
    hero: {
      title: "Secure More Funding with",
      titleHighlight: "AI Powered Precision",
      subtitle: "Automate strict compliance checks and draft compelling narratives. Empower your team to win vital grants without administrative burnout.",
      btn: "Book a Demo",
    },
    sections: [
      {
        tag: "Compliance",
        title: "Never Miss a Requirement",
        desc: "Avoid formatting errors that can lead to disqualification. Our AI instantly extracts requirements from funding notices and validates your draft against them, ensuring 100% compliance.",
        image: "/step1.png",
        flip: false,
      },
      {
        tag: "Recycling",
        title: "Adapt Success, Don't Copy-Paste",
        desc: "Stop rewriting your history from scratch. Adapt your past responses to new opportunities and generate tailored drafts for specific funder priorities.",
        image: "/step2.png",
        flip: true,
      },
      {
        tag: "Resources",
        title: "Maximize Your Team's Impact",
        desc: "Multiply your most important assets — your people. Let ProposalAI handle the manual collation of data and bios, and free your program staff to focus on designing impactful solutions.",
        image: "/step3.png",
        flip: false,
      },
    ],
    cta: {
      title: "Ready to Increase Your Win Rate?",
      subtitle: "Stop letting administrative hurdles slow down your mission.",
      btn: "Book a Demo",
    },
    video: "/videos/business.mp4",
  },
};

export async function generateMetadata({ params }) {
  const data = PAGE_DATA[params.slug];
  if (!data) return {};
  return {
    title: `${data.hero.title} ${data.hero.titleHighlight} – ProposalAI`,
  };
}

export default function SolutionDetailPage({ params }) {
  const data = PAGE_DATA[params.slug];
  if (!data) notFound();

  const { hero, sections, cta, video } = data;

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section
        className="pt-32 pb-0 text-center overflow-hidden"
        style={{ background: "#d6f5e8" }}
      >
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 pb-16">
          <AnimateOnScroll>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-dark leading-tight mb-6">
              {hero.title}{" "}
              <span className="text-primary">{hero.titleHighlight}</span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              {hero.subtitle}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 bg-primary text-white text-base font-semibold pl-6 pr-2 py-2 rounded-full shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all duration-200"
            >
              {hero.btn}
              <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Link>
          </AnimateOnScroll>
        </div>

        {/* Video block */}
        <AnimateOnScroll delay={150}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-t-3xl overflow-hidden shadow-2xl">
              <video
                src={video}
                autoPlay
                muted
                loop
                playsInline
                className="w-full aspect-video object-cover"
              />
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* ── 3 Alternating sections ────────────────────────────────────── */}
      <section className="bg-white py-8">
        {sections.map((sec, i) => (
          <div key={i} className="py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

                {/* Text */}
                <AnimateOnScroll className={sec.flip ? "lg:order-2" : ""}>
                  <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">
                    {sec.tag}
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-dark leading-tight mb-6">
                    {sec.title}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {sec.desc}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2.5 bg-primary text-white text-sm font-semibold pl-5 pr-1.5 py-1.5 rounded-full shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all duration-200 w-fit"
                  >
                    Explore Now
                    <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </Link>
                </AnimateOnScroll>

                {/* Image */}
                <AnimateOnScroll delay={150} className={sec.flip ? "lg:order-1" : ""}>
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src={sec.image}
                      alt={sec.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </AnimateOnScroll>

              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <CTASection
        title={cta.title}
        subtitle={cta.subtitle}
        btnLabel={cta.btn}
    
      />
    </>
  );
}