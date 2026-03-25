"use client";
"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "../../components/ui/AnimateOnScroll";

const CATEGORIES = [
  { label: "All", activeCls: "bg-[#00B4D8] border-[#00B4D8] text-white" },
  { label: "Case Studies", activeCls: "bg-[#00B4D8] border-[#00B4D8] text-white" },
  { label: "Blog", activeCls: "bg-[#00B4D8] border-[#00B4D8] text-white" },
  { label: "Insights", activeCls: "bg-[#00B4D8] border-[#00B4D8] text-white" },
  { label: "News", activeCls: "bg-[#00B4D8] border-[#00B4D8] text-white" },
];



const POSTS = [
  { category: "Case Studies", tag: "SaaS", title: "Revolutionizing Responses for a Leading SaaS Provider", excerpt: "A rapidly expanding SaaS provider slashed proposal completion time by 80% and freed 20+ expert hours per week without compromising quality.", date: "March 2026", readTime: "5 min read", href: "/case-study/saas-provider" },
  { category: "Case Studies", tag: "Insurance", title: "Driving Wins for a Re-insurance Broker", excerpt: "A re-insurance broker renowned for structuring complex programs for large cedents used ProposalAI to scale volume without adding headcount.", date: "February 2026", readTime: "6 min read", href: "/case-study/re-insurance-broker" },
  { category: "Case Studies", tag: "Consulting", title: "Empowering a Strategic Management Consulting Firm", excerpt: "A strategy consulting firm recognized for bespoke client solutions used ProposalAI to produce tailored proposals in a fraction of the time.", date: "January 2026", readTime: "7 min read", href: "/case-study/consulting-firm" },
  { category: "Blog", tag: "AI & Strategy", title: "Beyond Keywords: The Power of Contextually Aware AI in Crafting Winning Proposals", excerpt: "Traditional automation fills blanks. Contextually aware AI understands your knowledge base, your client's RFP, and the nuanced interplay.", date: "March 15, 2026", readTime: "8 min read", href: "/blog/beyond-keywords" },
  { category: "Blog", tag: "Productivity", title: "The Search Trap: Why Old Proposal Libraries Are Failing Your Team", excerpt: "Are your proposal experts stuck acting as librarians? Find out why searchable databases aren't enough anymore.", date: "March 1, 2026", readTime: "6 min read", href: "/blog/search-trap" },
  { category: "Insights", tag: "Trends", title: "2026 State of Proposal Management Report", excerpt: "Our annual survey of 500+ proposal professionals reveals how AI is reshaping the industry and what winning teams do differently.", date: "January 20, 2026", readTime: "12 min read", href: "/insights/proposal-management-report" },
  { category: "Insights", tag: "Strategy", title: "The Human-AI Balance: When to Let AI Lead vs. Take Over", excerpt: "Not everything should be automated. This guide helps proposal teams understand where AI adds the most value.", date: "January 8, 2026", readTime: "8 min read", href: "/insights/human-ai-balance" },
  { category: "News", tag: "Release", title: "ProposalAI v2.0: Introducing Advanced Knowledge Graphing", excerpt: "We're excited to announce the launch of our most significant update yet, featuring real-time knowledge synthesis and enhanced security protocols.", date: "March 20, 2026", readTime: "4 min read", href: "/news/v2-launch" },
];

export default function ResourcePage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All" ? POSTS : POSTS.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="bg-white overflow-hidden" style={{ minHeight: "calc(100vh - 80px)" }}>
        <div className="flex h-full" style={{ minHeight: "calc(100vh - 80px)" }}>

          {/* Left — content: width adjusted for larger images */}
          <div className="w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-24 md:py-16">
            <AnimateOnScroll>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-light text-dark mb-6 leading-[1.05]">
                Master the Art<br />and Science{" "}
                <span className="text-primary">of Winning Proposals</span>
              </h1>
              <p className="text-black text-base font-medium sm:text-lg max-w-sm mb-10 leading-relaxed">
                Discover the strategies, success stories, and industry trends that help top teams stop chasing deadlines and start winning deals.
              </p>
              <button className="inline-flex items-center bg-dark text-white text-sm font-medium uppercase tracking-widest px-8 py-4 rounded-full hover:bg-gray-800 transition-all duration-200 w-fit">
                EXPLORE THE LIBRARY
              </button>
            </AnimateOnScroll>
          </div>

          {/* Right — image: hidden on mobile, visible on md+ */}
          <div className="hidden md:flex w-[60%] flex-col" style={{ paddingTop: "150px", paddingBottom: "50px" }}>
            <div className="flex-1 overflow-hidden relative" style={{ borderRadius: "30rem 0 0 30rem" }}>
              <Image
                src="/resources-hero-section.jpg"
                alt="Resource hero"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ── Filter + Grid ─────────────────────────────────────────────── */}
      <section className="py-12 md:py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-10">
            <AnimateOnScroll className="text-center mb-8 md:mb-10">
              <h2 className="font-display text-2xl md:text-4xl font-light text-dark mb-3">All Resources</h2>
              <p className="text-gray-500 text-sm md:text-base">Browse case studies, blogs, insights, and news from the ProposalAI community.</p>
              <div className="flex items-center justify-center gap-2 md:gap-3 mt-5 md:mt-6 flex-wrap">
                {CATEGORIES.map((cat) => {
                  const isActive = activeCategory === cat.label;
                  return (
                    <button key={cat.label} onClick={() => setActiveCategory(cat.label)}
                      className={`px-5 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 border-2 ${isActive ? `${cat.activeCls} shadow-md` : "bg-white text-gray-500 border-gray-200 hover:border-gray-400 hover:text-gray-700"}`}>
                      {cat.label}
                    </button>
                  );
                })}
              </div>
              {activeCategory !== "All" && (
                <p className="text-xs text-gray-400 mt-3">
                  Showing <span className="font-semibold text-gray-600">{filtered.length}</span> result{filtered.length !== 1 ? "s" : ""} for <span className="font-semibold text-gray-700">{activeCategory}</span>
                </p>
              )}
            </AnimateOnScroll>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {filtered.map((post, i) => (
                <AnimateOnScroll key={`${post.title}-${i}`} delay={i * 70} className="h-full">
                  <Link href={post.href} className="group flex flex-col h-full rounded-xl md:rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="relative h-44 md:h-48 overflow-hidden">
                      <Image
                        src="/d.jpg"
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="bg-[#1A9CDA] group-hover:bg-[#000000] p-5 md:p-6 relative transition-colors duration-300 flex-1 flex flex-col">
                      <span className="text-xs font-light text-white/60 uppercase tracking-widest">{post.category}</span>
                      <h3 className="text-white font-light text-sm md:text-base mt-2 mb-3 pr-10 leading-snug">{post.title}</h3>
                      <p className="text-white/70 text-xs leading-relaxed line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center gap-3 mt-4 text-white/50 text-xs">
                        <span>{post.date}</span><span>·</span><span>{post.readTime}</span>
                      </div>
                    </div>
                  </Link>
                </AnimateOnScroll>
              ))}
            </div>
            {filtered.length === 0 && <div className="text-center py-16 text-gray-400"><p className="text-lg font-medium">No posts found.</p></div>}
          </div>
        </div>
      </section>

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