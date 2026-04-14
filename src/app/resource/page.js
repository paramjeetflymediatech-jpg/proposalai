"use client";
"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "../../components/ui/AnimateOnScroll";

const CATEGORIES = [
  { label: "All", activeCls: "bg-[#1A9CDA] border-[#1A9CDA] text-white", color: "#1A9CDA" },
  { label: "Case Studies", activeCls: "bg-[#10B981] border-[#10B981] text-white", color: "#10B981" },
  { label: "Blog", activeCls: "bg-[#1A9CDA] border-[#1A9CDA] text-white", color: "#1A9CDA" },
  { label: "Insights", activeCls: "bg-[#6366F1] border-[#6366F1] text-white", color: "#6366F1" },
  { label: "News", activeCls: "bg-[#F59E0B] border-[#F59E0B] text-white", color: "#F59E0B" },
];

const POSTS = [
  { 
    category: "Case Studies", 
    tag: "SaaS", 
    title: "Revolutionizing Responses for a Leading SaaS Provider", 
    excerpt: "A rapidly expanding SaaS provider slashed proposal completion time by 80% and freed 20+ expert hours per week without compromising quality.", 
    date: "March 2026", 
    readTime: "5 min read", 
    href: "/case-study/saas-provider",
    image: "/case-study-1.png",
    color: "#10B981"
  },
  { 
    category: "Case Studies", 
    tag: "Insurance", 
    title: "Driving Wins for a Re-insurance Broker", 
    excerpt: "A re-insurance broker renowned for structuring complex programs for large cedents used ProposalAI to scale volume without adding headcount.", 
    date: "February 2026", 
    readTime: "6 min read", 
    href: "/case-study/re-insurance-broker",
    image: "/case-study-2.png",
    color: "#10B981"
  },
  { 
    category: "Case Studies", 
    tag: "Consulting", 
    title: "Empowering a Strategic Management Consulting Firm", 
    excerpt: "A strategy consulting firm recognized for bespoke client solutions used ProposalAI to produce tailored proposals in a fraction of the time.", 
    date: "January 2026", 
    readTime: "7 min read", 
    href: "/case-study/consulting-firm",
    image: "/case-study-3.png",
    color: "#10B981"
  },
  { 
    category: "Blog", 
    tag: "AI & Strategy", 
    title: "Beyond Keywords: The Power of Contextually Aware AI", 
    excerpt: "Traditional automation fills blanks. Contextually aware AI understands your knowledge base, your client's RFP, and the nuanced interplay.", 
    date: "March 15, 2026", 
    readTime: "8 min read", 
    href: "/blog/beyond-keywords",
    image: "/card-1.png",
    color: "#1A9CDA"
  },
  { 
    category: "Blog", 
    tag: "Productivity", 
    title: "The Search Trap: Why Old Libraries Are Failing", 
    excerpt: "Are your proposal experts stuck acting as librarians? Find out why searchable databases aren't enough anymore.", 
    date: "March 1, 2026", 
    readTime: "6 min read", 
    href: "/blog/search-trap",
    image: "/card-2.png",
    color: "#1A9CDA"
  },
  { 
    category: "Insights", 
    tag: "Trends", 
    title: "2026 State of Proposal Management Report", 
    excerpt: "Our annual survey of 500+ professionals reveals how AI is reshaping the industry and what winning teams do differently.", 
    date: "January 20, 2026", 
    readTime: "12 min read", 
    href: "/insights/proposal-management-report",
    image: "/about-us-hero.png",
    color: "#6366F1"
  },
  { 
    category: "Insights", 
    tag: "Strategy", 
    title: "The Human-AI Balance: When to Let AI Lead", 
    excerpt: "Not everything should be automated. This guide helps proposal teams understand where AI adds the most value.", 
    date: "January 8, 2026", 
    readTime: "8 min read", 
    href: "/insights/human-ai-balance",
    image: "/card-3.png",
    color: "#6366F1"
  },
  
];

export default function ResourcePage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All" ? POSTS : POSTS.filter((p) => p.category === activeCategory);

  return (
    <>
      <div className="bg-[#F9FAFB] min-h-screen">
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="bg-white py-24 md:py-32 overflow-hidden border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <AnimateOnScroll>
              <div className="inline-block bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
                Explore the Library
              </div>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-dark mb-6 leading-tight">
                Master the Art and Science <br />
                <span className="text-primary italic">of Winning Proposals</span>
              </h1>
              <p className="text-gray-600 text-lg max-w-lg mb-10 leading-relaxed">
                Discover the strategies, success stories, and industry trends that help top teams stop chasing deadlines and start winning deals.
              </p>
            </AnimateOnScroll>
          </div>
          <div className="flex-1 relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/resources-hero-section.jpg"
              alt="Resource hero"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Filter + Grid ─────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="mb-16">
            <AnimateOnScroll className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="max-w-2xl">
                <h2 className="font-display text-3xl md:text-4xl font-light text-dark mb-4">The Latest Thinking</h2>
                <p className="text-gray-500 text-lg">Browse case studies, blogs, insights, and news from the ProposalAI team.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                {CATEGORIES.map((cat) => {
                  const isActive = activeCategory === cat.label;
                  return (
                    <button 
                      key={cat.label} 
                      onClick={() => setActiveCategory(cat.label)}
                      className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border-2 ${
                        isActive 
                        ? `${cat.activeCls} shadow-lg scale-105` 
                        : "bg-white text-gray-500 border-gray-100 hover:border-gray-200 hover:text-dark shadow-sm"
                      }`}
                    >
                      {cat.label}
                    </button>
                  );
                })}
              </div>
            </AnimateOnScroll>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {filtered.map((post, i) => (
              <AnimateOnScroll key={`${post.title}-${i}`} delay={i * 50}>
                <Link 
                  href={post.href} 
                  className="group block h-full bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="relative h-60 overflow-hidden">
                    <Image
                      src={post.image || "/d.jpg"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span 
                        className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white shadow-lg"
                        style={{ backgroundColor: post.color }}
                      >
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 text-gray-400 text-xs mb-4">
                      <span>{post.date}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-dark font-medium text-xl mb-4 group-hover:text-primary transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="mt-8 flex items-center gap-2 text-primary font-semibold text-sm">
                      Read Full Article
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
          
          {filtered.length === 0 && (
            <div className="text-center py-32 bg-white rounded-3xl border border-dashed border-gray-200">
              <p className="text-xl text-gray-400">No resources found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>

      {/* ── CTA Section ── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-16">

            {/* Left — text */}
            <div className="flex-1">
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-dark leading-[1.05] mb-6">
                Ready to Write{" "}
                <span className="text-primary">Your Own Success Story?</span>
              </h2>
              <p className="text-gray-500 text-base md:text-lg max-w-lg mb-8 leading-relaxed">
                Join the teams cutting response times by 80%. Book a demo to see ProposalAI in action.
              </p>
              <Link href="/contact" className="inline-flex items-center bg-dark text-white text-sm font-light uppercase tracking-widest px-8 py-4 rounded-full hover:bg-gray-800 transition-all duration-200">
                Book a Demo
              </Link>
            </div>

            {/* Right — image: hidden on mobile */}
            <div className="hidden md:flex flex-1 justify-end">
              <div className="w-full max-w-3xl overflow-hidden rounded-xl relative aspect-[16/10]">
                <Image
                  src="/resources-hero-section.jpg"
                  alt="Winning proposals team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}