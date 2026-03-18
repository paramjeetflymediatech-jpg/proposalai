import Link from "next/link";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import CTASection from "@/components/sections/CTASection";

export const metadata = {
  title: "About Us – ProposalAI",
  description: "Learn about ProposalAI, our mission, and the team behind the platform.",
};

const TEAM = [
  { name: "Alex Rivera", role: "CEO & Co-Founder", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&q=80" },
  { name: "Priya Sharma", role: "CTO & Co-Founder", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80" },
  { name: "Marcus Lee", role: "Head of Product", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&q=80" },
  { name: "Sarah Chen", role: "Head of Customer Success", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80" },
];

const VALUES = [
  { emoji: "🎯", title: "Customer Obsession", desc: "Every feature we build starts with a real customer problem. We talk to proposal teams every week." },
  { emoji: "⚡", title: "Move Fast", desc: "We ship improvements weekly. Our customers see the impact of feedback within days, not quarters." },
  { emoji: "🤝", title: "Human + AI", desc: "We believe AI enhances human expertise. Our tools amplify your team's capabilities, never replace judgment." },
  { emoji: "🔒", title: "Trust First", desc: "Enterprise-grade security and compliance are built in from day one, not bolted on after the fact." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full mb-6">
              Our Story
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-dark mb-6 leading-tight">
              We Exist to Help You
              <br />
              <span className="text-primary">Win More Business</span>
            </h1>
            <p className="text-gray-500 text-xl leading-relaxed max-w-2xl mx-auto">
              ProposalAI was founded by proposal professionals who were tired of spending 80% of their time on the mechanical parts of proposal writing — and only 20% on the strategic parts that actually win.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-mint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
                Our Mission is Simple
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                We believe that every great company deserves an equal shot at winning the business they're best positioned to deliver. The difference between winning and losing a proposal shouldn't come down to who has the biggest proposal team.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                With ProposalAI, a team of 3 can compete with the proposal capability of a team of 30. That's the equalizer we set out to build.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80" alt="Team" className="w-full h-80 object-cover" />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="text-center mb-14">
            <h2 className="font-display text-4xl font-bold text-dark mb-4">What We Stand For</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">The values that guide every decision we make, from product to culture.</p>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VALUES.map((v, i) => (
              <AnimateOnScroll key={i} delay={i * 100}>
                <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg hover:bg-white transition-all duration-300">
                  <span className="text-4xl mb-4 block">{v.emoji}</span>
                  <h3 className="font-bold text-xl text-dark mb-2">{v.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{v.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="text-center mb-14">
            <h2 className="font-display text-4xl font-bold text-white mb-4">Meet the Team</h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">Proposal experts, AI engineers, and customer champions — all obsessed with your success.</p>
          </AnimateOnScroll>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {TEAM.map((member, i) => (
              <AnimateOnScroll key={i} delay={i * 100}>
                <div className="text-center group">
                  <div className="w-32 h-32 mx-auto rounded-2xl overflow-hidden mb-4 ring-2 ring-transparent group-hover:ring-primary transition-all duration-300">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <h3 className="font-bold text-white text-sm">{member.name}</h3>
                  <p className="text-gray-400 text-xs mt-1">{member.role}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Join the ProposalAI Family"
        subtitle="Over 500 companies trust ProposalAI to power their proposal process. See why."
        btnLabel="Book a Demo"
        secondBtn={{ label: "View Careers", href: "/careers" }}
      />
    </>
  );
}
