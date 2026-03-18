"use client";
import { useState } from "react";
import Link from "next/link";
import AnimateOnScroll from "../../components/ui/AnimateOnScroll";

const CATEGORIES = ["All", "Case Studies", "Insights"];

const POSTS = [
  {
    category: "Case Studies",
    tag: "Healthcare",
    title: "How a Healthcare Consulting Firm 3x'd Their Win Rate",
    excerpt: "Learn how this 50-person consulting firm used ProposalAI to standardize their proposal process and dramatically improve outcomes.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
    date: "March 10, 2026",
    readTime: "5 min read",
    bg: "bg-gray-900",
  },
  {
    category: "Case Studies",
    tag: "Technology",
    title: "TechStartup Wins $2M Government Contract with AI-Assisted Proposal",
    excerpt: "A case study on how a tech startup competed against enterprise rivals and won a major government RFP using ProposalAI.",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&q=80",
    date: "February 28, 2026",
    readTime: "7 min read",
    bg: "bg-primary",
  },
  {
    category: "Case Studies",
    tag: "Insurance",
    title: "Re-Insurance Broker Scales to 10x Volume Without Hiring",
    excerpt: "Automation allowed this broker to handle 10 times the proposal volume with the same lean team — and improve quality simultaneously.",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&q=80",
    date: "February 15, 2026",
    readTime: "6 min read",
    bg: "bg-emerald-600",
  },
  {
    category: "Insights",
    tag: "Trends",
    title: "2026 State of Proposal Management Report",
    excerpt: "Our annual survey of 500+ proposal professionals reveals how AI is reshaping the industry and what winning teams do differently.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    date: "January 20, 2026",
    readTime: "12 min read",
    bg: "bg-purple-600",
  },
  {
    category: "Insights",
    tag: "Strategy",
    title: "The Human-AI Balance: When to Let AI Lead vs. Take Over",
    excerpt: "Not everything should be automated. This guide helps proposal teams understand where AI adds the most value and where human judgment is irreplaceable.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80",
    date: "January 8, 2026",
    readTime: "8 min read",
    bg: "bg-orange-500",
  },
  {
    category: "Insights",
    tag: "Productivity",
    title: "7 Proposal Bottlenecks AI Can Eliminate Today",
    excerpt: "Identify the exact stages of your proposal workflow where AI intervention delivers the fastest ROI and time savings.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
    date: "December 15, 2025",
    readTime: "6 min read",
    bg: "bg-rose-500",
  },
];

export default function ResourcePage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All" ? POSTS : POSTS.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-white relative overflow-hidden">
        <div className="absolute right-0 top-16 bottom-0 w-5/12 overflow-hidden rounded-l-3xl">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80"
            alt="Resource"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full mb-6">
              Resources
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-dark mb-6 leading-[1.05] max-w-2xl">
              Learn What
              <br />
              Makes Proposals
              <br />
              <span className="text-primary">Win.</span>
            </h1>
            <p className="text-gray-500 text-xl max-w-lg mb-10 leading-relaxed">
              Case studies, industry insights, and practical guides from proposal professionals around the world.
            </p>
            <button className="btn-dark text-base px-8 py-4">
              EXPLORE NOW
            </button>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Rounded container */}
          <div className="bg-white rounded-3xl p-10">
            <AnimateOnScroll className="text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mb-3">
                All Resources
              </h2>
              <p className="text-gray-500">Browse case studies and insights from the ProposalAI community.</p>

              {/* Filter tabs */}
              <div className="flex items-center justify-center gap-3 mt-6">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border ${
                      activeCategory === cat
                        ? "bg-primary text-white border-primary shadow-md shadow-primary/20"
                        : "bg-white text-gray-600 border-gray-200 hover:border-primary hover:text-primary"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filtered.map((post, i) => (
                <AnimateOnScroll key={i} delay={i * 80}>
                  <Link href="#" className="group block rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <span className="absolute top-3 left-3 text-xs font-bold text-white bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
                        {post.tag}
                      </span>
                    </div>
                    <div className={`${post.bg} p-6 relative`}>
                      <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:shadow transition-all">
                        <svg className="w-4 h-4 text-white group-hover:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                      <span className="text-xs font-bold text-white/60 uppercase tracking-widest">{post.category}</span>
                      <h3 className="text-white font-bold text-base mt-2 mb-3 pr-8 leading-snug">{post.title}</h3>
                      <p className="text-white/70 text-xs leading-relaxed line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center gap-3 mt-4 text-white/50 text-xs">
                        <span>{post.date}</span>
                        <span>·</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </Link>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <h2 className="font-display text-4xl font-bold text-white mb-4">
              Stay Ahead of the Curve
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Get the latest insights, case studies, and tips delivered to your inbox every two weeks.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your work email"
                className="flex-1 px-5 py-3.5 rounded-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
            <p className="text-gray-600 text-xs mt-3">No spam. Unsubscribe anytime.</p>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
