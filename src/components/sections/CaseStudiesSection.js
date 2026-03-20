import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "../ui/AnimateOnScroll";

const POSTS = [
  {
    category: "Case Study",
    title: "How TechCorp Cut Proposal Time by 80% Using ProposalAI",
    excerpt: "TechCorp's proposal team was spending 40+ hours per RFP. With ProposalAI, they reduced that to under 8 hours while improving their win rate from 23% to 61%.",
    image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=600&q=80",
    bg: "bg-pink-400",
    href: "/resource/case-study-techcorp",
  },
  {
    category: "Insights",
    title: "The Future of Proposal Management: AI, Automation & Human Expertise",
    excerpt: "Explore how leading companies are blending AI capabilities with human strategic thinking to create a new standard for proposal excellence.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80",
    bg: "bg-gray-900",
    href: "/resource/future-of-proposals",
  },
  {
    category: "Case Study",
    title: "Re-Insurance Broker Achieves 3x Growth with AI-Powered Bids",
    excerpt: "A leading re-insurance broker used ProposalAI to standardize complex submissions and triple their capacity without adding headcount.",
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=600&q=80",
    bg: "bg-primary",
    href: "/resource/case-study-broker",
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="py-24 bg-mint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <AnimateOnScroll>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-dark">
              Stories of Success
            </h2>
            <p className="text-gray-500 text-lg mt-3 max-w-lg">
              See how teams like yours are using ProposalAI to transform their proposal process.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <Link href="/resource" className="btn-primary whitespace-nowrap">
              Book a Demo
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </AnimateOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {POSTS.map((post, i) => (
            <AnimateOnScroll key={i} delay={i * 100}>
              <Link href={post.href} className="group block rounded-3xl overflow-hidden card-hover bg-white shadow-sm">
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Card body */}
                <div className={`${post.bg} p-6 relative`}>
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-dark flex items-center justify-center group-hover:bg-white group-hover:shadow transition-all duration-300">
                    <svg className="w-4 h-4 text-white group-hover:text-dark transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                  <span className="text-xs font-bold text-white/70 uppercase tracking-widest">{post.category}</span>
                  <h3 className="text-white font-bold text-lg mt-2 mb-3 pr-8 leading-snug">{post.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
