"use client";
import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "../ui/AnimateOnScroll";

const TILES = [
  {
    title: "Link to Case Study 1",
    desc: "Explore our latest success stories, expert guides, and industry trends to help you bid smarter and win more.",
    href: "/case-study/saas-provider",
    bg: "#ff8181",
    img: "/case-study.png",
  },
  {
    title: "Link to Blog Article 2",
    desc: "Explore our latest success stories, expert guides, and industry trends to help you bid smarter and win more.",
    href: "/blog/search-trap",
    bg: "#BF86CB",
    img: "/case-study.png",
  },
  {
    title: "Link to Blog Article 3",
    desc: "Explore our latest success stories, expert guides, and industry trends to help you bid smarter and win more.",
    href: "/proposal-management-report",
    bg: "#2196F3",
    img: "/case-study.png",
  },
];

export default function FeaturedSection() {
  return (
    <section className="py-20 bg-[#E8FDF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <AnimateOnScroll>
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-12">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-medium text-dark mb-4">
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
              <Link 
                href={tile.href} 
                className="group block rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              >
                {/* Top — Image area */}
                <div
                  className="relative overflow-hidden"
                  style={{ height: 240 }}
                >
                  <Image
                    src={tile.img}
                    alt={tile.title}
                    fill
                    className="object-cover"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300" />
                </div>

                {/* Bottom — Colored panel that turns black on hover */}
                <div
                  className="relative p-8 transition-all duration-500 ease-in-out bg-[var(--tile-bg)] group-hover:!bg-[#0A0A0A]"
                  style={{
                    "--tile-bg": tile.bg,
                    minHeight: 180,
                  } }
                >
                  {/* Arrow button — top right */}
                  <div className="absolute top-5 right-5 w-11 h-11 rounded-full bg-[#0A0A0A] flex items-center justify-center group-hover:bg-white transition-colors duration-300 shadow-md">
                    <svg
                      className="w-5 h-5 text-white group-hover:text-[#0A0A0A] transition-colors duration-300"
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>

                  <h3 className="text-white font-display font-light text-xl leading-snug mb-3 pr-14 transition-colors">
                    {tile.title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed transition-colors">
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