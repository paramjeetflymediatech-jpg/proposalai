"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const TYPED_WORDS = ["Win", "Impress", "Convert", "Deliver", "Scale"];

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = TYPED_WORDS[wordIndex];
    let timeout;

    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 100);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 60);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % TYPED_WORDS.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIndex]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-16">

      {/* ── Background grid ─────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.04]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#0096C7" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Decorative nodes */}
        {[[10, 20], [85, 15], [5, 70], [90, 75], [50, 90], [30, 45]].map(([x, y], i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/30"
            style={{ left: `${x}%`, top: `${y}%` }}
          />
        ))}

        {/* Connecting lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.07]">
          <line x1="10%" y1="20%" x2="50%" y2="90%" stroke="#00B4D8" strokeWidth="1" />
          <line x1="85%" y1="15%" x2="50%" y2="90%" stroke="#00B4D8" strokeWidth="1" />
          <line x1="10%" y1="20%" x2="85%" y2="15%" stroke="#00B4D8" strokeWidth="1" />
          <line x1="10%" y1="20%" x2="30%" y2="45%" stroke="#00B4D8" strokeWidth="1" />
          <line x1="85%" y1="15%" x2="90%" y2="75%" stroke="#00B4D8" strokeWidth="1" />
        </svg>
      </div>

      {/* ── Left hero image ──────────────────────────────── */}
      <div
        className="absolute left-[2%] top-1/2 -translate-y-1/2 w-52 h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 select-none pointer-events-none"
        style={{ animation: "heroFloat 6s ease-in-out infinite" }}
      >
        <Image
          src="/hero-left-image.png"
          alt=""
          fill
          className="object-contain drop-shadow-2xl"
          priority
        />
      </div>

      {/* ── Right hero image ─────────────────────────────── */}
      <div
        className="absolute right-[2%] top-1/2 -translate-y-1/2 w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 select-none pointer-events-none"
        style={{ animation: "heroFloat 8s ease-in-out infinite reverse" }}
      >
        <Image
          src="/hero-right-image.png"
          alt=""
          fill
          className="object-contain drop-shadow-2xl"
          priority
        />
      </div>

      {/* ── Float keyframes ──────────────────────────────── */}
      <style jsx>{`
        @keyframes heroFloat {
          0%, 100% { transform: translateY(-50%) translateY(0px)  rotate(0deg); }
          50%       { transform: translateY(-50%) translateY(-18px) rotate(4deg); }
        }
      `}</style>

      {/* ── Centre content ───────────────────────────────── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary text-sm font-medium px-4 py-2 rounded-full mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          AI-Powered Proposal Intelligence
        </div>

        {/* Headline */}
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-dark leading-[1.1] tracking-tight mb-6 animate-fade-up">
          Human Led, AI enabled
          <br />
          proposals that{" "}
          <span className="text-primary">
            {displayed}
            <span className="animate-pulse">|</span>
          </span>
        </h1>

        {/* Sub-text */}
        <p
          className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Transform how your team creates, manages, and wins proposals. ProposalAI
          combines human expertise with intelligent automation to deliver results faster.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <Link
            href="/contact"
            className="btn-primary text-base px-8 py-4 shadow-lg shadow-primary/25"
          >
            Book a Demo
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
          <Link href="/platform" className="btn-dark text-base px-8 py-4">
            Contact Us
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        {/* Trust bar */}
        <div
          className="mt-16 flex items-center justify-center gap-8 animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          {["SOC 2 Compliant", "GDPR Ready", "Enterprise Grade"].map((badge) => (
            <div key={badge} className="flex items-center gap-2 text-sm text-gray-400">
              <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}