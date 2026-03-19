"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const TYPED_WORDS = ["Win More", "Stand Out", "Save Time"];

// Right-side triangle cycles: Purple → Pink → Green (matches reference video exactly)
const TRIANGLE_COLORS = ["#7C3AED", "#EC4899", "#22C55E"];

export default function HeroSection() {
  /* ── Typewriter ────────────────────────────────────── */
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = TYPED_WORDS[wordIndex];
    let t;
    if (!deleting && displayed.length < word.length)
      t = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 100);
    else if (!deleting && displayed.length === word.length)
      t = setTimeout(() => setDeleting(true), 2000);
    else if (deleting && displayed.length > 0)
      t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 60);
    else {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % TYPED_WORDS.length);
    }
    return () => clearTimeout(t);
  }, [displayed, deleting, wordIndex]);

  /* ── Triangle color cycle ──────────────────────────── */
  const [triIdx, setTriIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTriIdx((i) => (i + 1) % TRIANGLE_COLORS.length), 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-16">

      {/* ── Keyframe: slow seamless upward pan ─────────── */}
      {/*
        imaghsa.png already contains 2 copies of the image stacked
        (upright top-half + same image bottom-half) so:
        translateY(0 → -50%) = seamless infinite loop
        Duration 18s = very slow, barely noticeable — matches reference
      */}
      <style jsx>{`
        @keyframes slowPanUp {
          0%   { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
      `}</style>

      {/* ── Color-cycling triangle — right edge ────────── */}
      {/*
        CSS triangle trick. Sits bottom-right.
        borderWidth: "0 0 H W" = bottom H px, left W px
        Creates a right-angle triangle with point at top-left
      */}
      <div
        className="absolute right-0 bottom-0 pointer-events-none"
        style={{
          zIndex: 5,
          width: 0,
          height: 0,
          borderStyle: "solid",
          borderWidth: "0 0 440px 250px",
          borderColor: `transparent transparent ${TRIANGLE_COLORS[triIdx]} transparent`,
          transition: "border-color 0.7s ease-in-out",
        }}
      />

      {/* ── Hero image — top-right, slow upward pan ─────── */}
      {/*
        The PNG (imaghsa.png / hero-image-loop.png) has:
          - Built-in clip shape (transparent background)
          - 2× height: top = woman upright, bottom = same image
        Container:
          - overflow:hidden to clip the scrolling strip
          - height: 200vh so both copies fit
          - Animated div inside scrolls up by 50% (= 1 image height) → seamless
        No CSS clip-path needed — PNG transparency handles the shape.
      */}
      <div
        className="absolute top-0 right-0 pointer-events-none select-none"
        style={{
          zIndex: 4,
          width: "clamp(320px, 42vw, 560px)",
          height: "100vh",       /* visible window */
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "200%",      /* fits both PNG copies */
            position: "relative",
            animation: "slowPanUp 18s linear infinite",
          }}
        >
          <Image
            src="/hero.png"   /* = imaghsa.png renamed */
            alt="ProposalAI — Human Led AI Enabled"
            fill
            className="object-contain object-top"
            priority
          />
        </div>
      </div>

      {/* ── Left: H1 + CTA ─────────────────────────────── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
        <div className="max-w-xl">

          <h1 className="font-display text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-dark leading-[1.15] mb-10">
            Human Led, AI
            <br />
            enabled proposals
            <br />
            that for{" "}
            <span className="text-primary">
              {displayed}
              <span className="animate-pulse font-thin">|</span>
            </span>
          </h1>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-primary text-white font-semibold text-base px-7 py-4 rounded-full shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all duration-200 hover:-translate-y-0.5"
          >
            Book a Demo
            <span className="w-7 h-7 rounded-full bg-white/25 flex items-center justify-center font-bold text-sm">
              →
            </span>
          </Link>

        </div>
      </div>

    </section>
  );
}