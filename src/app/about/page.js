import Link from "next/link";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import CTASection from "@/components/sections/CTASection";

export const metadata = {
  title: "About Us – ProposalAI",
  description: "Turning Proposal Chaos into Competitive Advantage. Learn about the story behind ProposalAI.",
};

const FEATURES = [
  {
    title: "Unlock Your Knowledge",
    desc: "We transform your past proposals and documents into a secure, searchable library beyond just maintaining a list of question/answer pairs."
  },
  {
    title: "Context That Matters",
    desc: "Generic AI gives generic answers. Our platform develops a deep understanding of your business, what makes it unique and how best to position it for the current opportunity."
  },
  {
    title: "Unmatched Speed",
    desc: "Slash the time it takes to respond to complex RFPs. We automate repetitive tasks like requirement extraction, development of personalized winning themes and generating draft responses, giving you back hours in your day."
  },
  {
    title: "Consistent Quality",
    desc: "Ensure every document that leaves your door is evaluated for accuracy and your specific tone of voice giving you confidence that you have met all requirements and are on brand."
  },
  {
    title: "Human-Centric Design",
    desc: "We believe technology should empower experts, not replace them. Our tools handle the busywork so your team can focus on high value strategy and final polish."
  },
  {
    title: "Security You Can Trust",
    desc: "Your data is your competitive advantage. We employ security measures to ensure your knowledge base remains private, protected, and exclusively yours."
  }
];

const Shape = ({ className }) => (
  <div className={`pointer-events-none absolute ${className}`}>
    <div className="w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
  </div>
);

export default function AboutPage() {
  return (
    <div className="bg-white overflow-hidden">
      {/* Hero */}
      <section className="relative pt-24 pb-12 md:pt-40 md:pb-24 border-b border-gray-50 overflow-hidden">
        <Shape className="-top-20 -left-20 scale-75 md:scale-100" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimateOnScroll>
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-dark mb-6 md:mb-10 leading-[1.1] tracking-tight">
              Turning Proposal Chaos into <span className="text-primary">Competitive Advantage</span>
            </h1>
            <p className="text-gray-500 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto font-medium">
              We built the solution we wished we had: a smarter way to handle the pressure of RFPs without the burnout.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Origin Story */}
      <section className="relative py-16 md:py-32 bg-mint/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimateOnScroll>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-dark mb-8 leading-tight">
                It Started With a <span className="text-primary">Shared Frustration</span>
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p className="font-semibold text-dark text-xl">
                  We did not start as a software company. We started as a team of professionals who were tired of the status quo.
                </p>
                <p>
                  We loved our actual work, but we hated the process of winning it. We saw brilliant teams getting bogged down by the colossal task of writing proposals. We spent countless hours manually searching for the right paragraph from an old document, wrestling with formatting, and answering the same questions over and over.
                </p>
                <p>
                  We knew there had to be a better way. We asked ourselves a simple question. What if we could build an assistant to handle the heavy lifting so humans could focus on strategy?
                </p>
                <p>
                  That question became our mission, and it led to the creation of ProposalAI.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200} className="lg:pt-12">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-2xl -rotate-3" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white p-2">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" 
                    alt="Our Origin" 
                    className="rounded-2xl w-full h-[400px] object-cover" 
                  />
                </div>
                <Shape className="-bottom-20 -right-20" />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Why Teams Choose Us (3x2 Grid) */}
      <section className="relative py-16 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimateOnScroll className="text-center mb-12 md:mb-20">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-6">
              Built to Maximize <span className="text-primary">Your Expertise</span>
            </h2>
            <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto">
              We designed ProposalAI to be the intelligent engine behind your success. Here is how we empower your team to win more business.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {FEATURES.map((f, i) => (
              <AnimateOnScroll key={i} delay={i * 100}>
                <div className="h-full p-6 md:p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:shadow-2xl hover:bg-white hover:-translate-y-2 transition-all duration-500">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <div className="w-6 h-6 bg-primary rounded-full opacity-20 animate-pulse" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-dark mb-4">{f.title}</h3>
                  <p className="text-gray-500 leading-relaxed font-medium">
                    {f.desc}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="relative py-20 md:py-40 bg-dark text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 transform translate-x-1/2" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimateOnScroll>
            <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold mb-8 md:mb-12">
              Freeing Experts to Be <span className="text-primary">Experts</span>
            </h2>
            <p className="text-gray-300 text-lg sm:text-xl md:text-3xl leading-relaxed font-medium">
              Our mission is simple. We want to free teams from administrative busywork so they can focus on the innovation and relationships that actually win deals. We believe that your people and past successes are your greatest assets, and we are here to help you use them both.
            </p>
          </AnimateOnScroll>
          <Shape className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-150 opacity-20" />
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready for a Smarter Way to Work?"
        subtitle="Join the teams who have moved beyond manual searching and started winning with intelligence."
        btnLabel="See ProposalAI in Action"
        btnHref="/contact"
      />
    </div>
  );
}

