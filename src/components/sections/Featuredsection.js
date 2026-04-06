"use client";
import Link from "next/link";
import AnimateOnScroll from "../ui/AnimateOnScroll";

const TILES = [
  {
    title: "Link to Case Study 1",
    desc: "Explore our latest success stories, expert guides, and industry trends to help you bid smarter and win more.",
    href: "/case-study/saas-provider",
    bg: "#f43f5e",
    iconBg: "#fda4af",
    icon: (
      <svg className="w-16 h-16 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Link to Blog Article 2",
    desc: "Explore our latest success stories, expert guides, and industry trends to help you bid smarter and win more.",
    href: "/blog/search-trap",
    bg: "#a855f7",
    iconBg: "#c084fc",
    icon: (
      <svg className="w-16 h-16 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Link to Blog Article 3",
    desc: "Explore our latest success stories, expert guides, and industry trends to help you bid smarter and win more.",
    href: "/proposal-management-report",
    bg: "#00B4D8",
    iconBg: "#38bdf8",
    icon: (
      <svg className="w-16 h-16 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

export default function FeaturedSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <AnimateOnScroll>
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                Real Results &amp; Fresh Perspectives
              </h2>
              <p className="text-gray-500 text-lg max-w-xl">
                Explore our latest success stories, expert guides, and industry trends to help you bid smarter and win more.
              </p>
            </div>
            <div className="flex-shrink-0 mt-2">
              <Link href="/contact" className="btn-primary whitespace-nowrap">
                Book a Demo
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </AnimateOnScroll>

        {/* 3 Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TILES.map((tile, i) => (
            <AnimateOnScroll key={i} delay={i * 120}>
              <Link href={tile.href} className="group block rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">

                {/* Top — Icon area */}
                <div
                  className="flex items-center justify-center"
                  style={{
                    height: 220,
                    backgroundColor: tile.iconBg,
                  }}
                >
                  <div
                    className="w-28 h-28 rounded-3xl flex items-center justify-center"
                    style={{ backgroundColor: "rgba(255,255,255,0.20)" }}
                  >
                    {tile.icon}
                  </div>
                </div>

                {/* Bottom — Colored panel */}
                <div
                  className="relative p-8"
                  style={{ backgroundColor: tile.bg, minHeight: 180 }}
                >
                  {/* Arrow button — top right */}
                  <div className="absolute top-5 right-5 w-11 h-11 rounded-full bg-[#0A0A0A] flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                    <svg
                      className="w-5 h-5 text-white group-hover:text-[#0A0A0A] transition-colors duration-300"
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>

                  <h3 className="text-white font-display font-bold text-xl leading-snug mb-3 pr-14">
                    {tile.title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {tile.desc}
                  </p>
                </div>

              </Link>
            </AnimateOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}