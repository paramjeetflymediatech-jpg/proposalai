import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "../../components/ui/AnimateOnScroll";
import CTASection from "../../components/sections/CTASection";

export const metadata = {
  title: "About Us – ProposalAI",
  description: "We built the solution we wished we had: a smarter way to handle the pressure of RFPs without the burnout.",
};

const FEATURES = [
  {
    title: "Unlock Your Knowledge",
    desc: "We transform your past proposals and documents into a secure, searchable library beyond just maintaining a list of question/answer pairs.",
    dark: false,
  },
  {
    title: "Context That Matters",
    desc: "Generic AI gives generic answers. Our platform develops a deep understanding of your business, what makes it unique and how best to position it for the current opportunity.",
    dark: true,
  },
  {
    title: "Unmatched Speed",
    desc: "Slash the time it takes to respond to complex RFPs. We automate repetitive tasks like requirement extraction, development of personalized winning themes and generating draft responses, giving you back hours in your day.",
    dark: false,
  },
  {
    title: "Consistent Quality",
    desc: "Ensure every document that leaves your door is evaluated for accuracy and your specific tone of voice giving you confidence that you have met all requirements and are on brand.",
    dark: true,
  },
  {
    title: "Human-Centric Design",
    desc: "We believe technology should empower experts, not replace them. Our tools handle the busywork so your team can focus on high value strategy and final polish.",
    dark: false,
  },
  {
    title: "Security You Can Trust",
    desc: "Your data is your competitive advantage. We employ security measures to ensure your knowledge base remains private, protected, and exclusively yours.",
    dark: true,
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-dark leading-tight">
              Turning Proposal Chaos into Competitive Advantage
            </h1>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Hero image ───────────────────────────────────────────────── */}
      <section className="bg-white pb-0">
        <AnimateOnScroll>
          <div className="max-w-5xl mx-auto px-2 sm:px-6 lg:px-4">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/about-us-hero.png"
                alt="ProposalAI team"
                width={1500}
                height={200}
                className="w-full h-[320px] object-cover"
              />
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* ── Subheadline ──────────────────────────────────────────────── */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              We built the solution we wished we had: a smarter way to handle the pressure of RFPs without the burnout.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Origin Story ─────────────────────────────────────────────── */}
      <section className="bg-[#F5F0E8] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <AnimateOnScroll className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-tight max-w-4xl mx-auto">
              It Started With a Shared Frustration
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="max-w-3xl mx-auto space-y-6 text-center">
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                We did not start as a software company. We started as a team of professionals who were tired of the status quo.
              </p>
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                We loved our actual work, but we hated the process of winning it. We saw brilliant teams getting bogged down by the colossal task of writing proposals. We spent countless hours manually searching for the right paragraph from an old document, wrestling with formatting, and answering the same questions over and over.
              </p>
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                We knew there had to be a better way. We asked ourselves a simple question. What if we could build an assistant to handle the heavy lifting so humans could focus on strategy?
              </p>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-semibold">
                That question became our mission, and it led to the creation of ProposalAI.
              </p>
            </div>
          </AnimateOnScroll>

        </div>
      </section>

      {/* ── Why Teams Choose Us ──────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="text-center mb-14">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-dark mb-5">
              Built to Maximize Your Expertise
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
              We designed ProposalAI to be the intelligent engine behind your success. Here is how we empower your team to win more business.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {FEATURES.map((feat, i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <div className={`rounded-3xl p-8 ${feat.dark ? "bg-gray-950" : "bg-primary"}`}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-full border-2 border-white/40 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </div>
                    <h3 className="text-white font-bold text-xl">{feat.title}</h3>
                  </div>
                  <p className="text-white/80 text-base leading-relaxed">{feat.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Mission ──────────────────────────────────────────────── */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-dark mb-8 leading-tight">
              Freeing Experts to Be Experts
            </h2>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-10">
              Our mission is simple. We want to free teams from administrative busywork so they can focus on the innovation and relationships that actually win deals. We believe that your people and past successes are your greatest assets, and we are here to help you use them both.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-dark text-white text-sm font-bold uppercase tracking-widest px-8 py-4 rounded-full hover:bg-gray-800 transition-all duration-200"
            >
              EXPLORE NOW
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <CTASection
        title="Ready for a Smarter Way to Work?"
        subtitle="Join the teams who have moved beyond manual searching and started winning with intelligence."
        btnLabel="See ProposalAI in Action"
      />
    </>
  );
}