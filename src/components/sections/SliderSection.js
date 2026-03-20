"use client";
import { useState } from "react";
import Link from "next/link";
import AnimateOnScroll from "../ui/AnimateOnScroll";

const SLIDES = [
  {
    heading: "Unlock Your Corporate Intelligence",
    subheading: "Stop digging through folders for hours. Our AI understands the meaning behind your files to create a smart index of your business so you can find the exact answer instantly.",
    image: "/step1.png",
  },
  {
    heading: "Your Private Knowledge Base",
    subheading: "Your data belongs to you alone. We protect your proprietary information within a private and encrypted repository that is never used to train public AI models.",
    image: "/step2.png",
  },
  {
    heading: "Context-Aware Drafting",
    subheading: "Generate proposals that feel authentic to your brand. Our AI learns from your past wins and writing style to produce first drafts that are accurate and consistent.",
    image: "/step3.png",
  },
  {
    heading: "Eliminate the \"Spreadsheet Fatigue\"",
    subheading: "Don't let 800-row questionnaires stall your deal. Auto-populate spreadsheets with verified intelligence from your knowledge base, ensuring technical accuracy and consistency while freeing up your experts for strategic work.",
    image: "/step4.png",
  },
];

export default function SliderSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length);
  const next = () => setCurrent((c) => (c + 1) % SLIDES.length);

  const slide = SLIDES[current];

  return (
    <section className="py-20 bg-[#E8FDF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <AnimateOnScroll>
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-12">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-dark mb-4">
                Why Teams Switch to ProposalAI
              </h2>
              <p className="text-gray-500 text-lg max-w-xl">
                Go beyond simple storage. Experience the difference of a platform that understands your content, protects your data, and writes in your voice.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link href="/contact" className="btn-primary whitespace-nowrap">
                Book a Demo
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Slider */}
        <div className="relative rounded-3xl overflow-hidden" style={{ minHeight: 420 }}>

          {/* Image — left half */}
          <div className="absolute inset-0 w-1/2">
            <img
              src={slide.image}
              alt={slide.heading}
              className="w-full h-full object-cover"
              style={{ transition: "opacity 0.4s ease" }}
            />
          </div>

          {/* Dark panel — right half */}
          <div
            className="absolute inset-y-0 right-0 w-1/2 bg-[#0A0A0A] flex flex-col justify-end"
            style={{ padding: "48px 48px 56px" }}
          >
            {/* Slide counter top-right */}
            <div
              className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white flex items-center justify-center"
            >
              <svg className="w-5 h-5 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>

            <h3
              className="text-white font-display font-bold mb-4"
              style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", lineHeight: 1.2 }}
            >
              {slide.heading}
            </h3>
            <p className="text-white/70 text-base leading-relaxed">
              {slide.subheading}
            </p>
          </div>

          {/* Prev Arrow */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md transition-all"
            aria-label="Previous"
          >
            <svg className="w-5 h-5 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Arrow */}
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md transition-all"
            aria-label="Next"
          >
            <svg className="w-5 h-5 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all ${
                  i === current
                    ? "w-6 h-2 bg-white"
                    : "w-2 h-2 bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}