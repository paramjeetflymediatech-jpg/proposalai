import Link from "next/link";
import AnimateOnScroll from "../ui/AnimateOnScroll";

const PROBLEMS = [
  {
    title: "The Compliance Trap",
    desc: "Complex RFPs bury the winning strategy under mountains of requirements and 800-row spreadsheets. Your team spends so much time decoding \"what they want\" that you run out of time to craft a strategy that actually wins.",
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    bg: "bg-[#5DFFCE]",
  },
  {
    title: "The Information Scavenger Hunt",
    desc: "Your organization&apos;s brilliance is locked in silos — hidden in emails, old PDFs, or the minds of busy Subject Matter Experts. You waste hours reinventing the wheel because you can&apos;t find the perfect answer you wrote six months ago.",
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    bg: "bg-[#DFA5D4]",
  },
  {
    title: "The Brand Disconnect",
    desc: "Pasting snippets from different sources creates a disjointed, robotic narrative that fails to showcase your unique value. Without a unified voice, you risk submitting generic responses that look just like your competitors.",
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    bg: "bg-[#1A9CDA]",
  },
];

export default function ProblemGrid() {
  return (
    <section className="bg-white rounded-t-[32px]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">

        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
          <AnimateOnScroll>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              You&apos;re Winning, But You Can&apos;t Scale
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <Link href="/contact" className="btn-primary whitespace-nowrap">
              Book a Demo
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </AnimateOnScroll>
        </div>

        {/* Subheadline */}
        <AnimateOnScroll>
          <p className="text-gray-500 text-lg max-w-2xl mb-14">
            Every new opportunity forces a tradeoff: either decline the bid or stretch your experts too thin hunting for information and wrestling with formatting.
          </p>
        </AnimateOnScroll>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
          {PROBLEMS.map((problem, i) => (
            <AnimateOnScroll key={i} delay={i * 120}>
              <div className={`${problem.bg} rounded-3xl p-8 h-full flex flex-col`}>
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6 flex-shrink-0">
                  {problem.icon}
                </div>
                <h3 className="text-xl font-medium text-black mb-3">{problem.title}</h3>
                <p className="text-black/80 text-md leading-relaxed flex-1">{problem.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}