"use client";
import { useEffect, useRef } from "react";
import AnimateOnScroll from "../ui/AnimateOnScroll";

// ── Map each row to the exact video timestamp (seconds) ──────────────────────
// Video breakdown (16s total):
//  0s  → single blue dot animating        → Row 1
//  4s  → customer events scatter plot     → Row 2
//  8s  → nodes / relationships network    → Row 3
//  12s → full stakeholder map with labels → Row 4
const FEATURE_ROWS = [
  {
    seekTo: 0,
    title: "Understand Your Audience at a Glance",
    desc: "ProposalAI maps every stakeholder, segment, and signal into a single intelligent view — so you always know who you're writing for and what they care about most.",
  },
  {
    seekTo: 4,
    title: "Identify Customer Events in Real Time",
    desc: "Track every touchpoint and trigger across your audience. Our AI surfaces the moments that matter — so your proposal lands at exactly the right time.",
  },
  {
    seekTo: 8,
    title: "Map Nodes and Relationships Across Every Deal",
    desc: "Visualize the full stakeholder network across any bid. Know who influences decisions, who signs off, and where your relationships are strongest.",
  },
  {
    seekTo: 10,
    title: "Build a Complete Stakeholder Profile",
    desc: "From location and device to interests and household income — ProposalAI compiles every signal into a single profile so you write to the right person every time.",
  },
];

export default function FeatureVideoSection() {
  const videoRef  = useRef(null);
  const rowRefs   = useRef([]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Start paused — we control playback ourselves
    video.pause();

    const observers = rowRefs.current.map((el, i) => {
      if (!el) return null;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // Seek to this row's timestamp then play
            video.currentTime = FEATURE_ROWS[i].seekTo;
            video.play().catch(() => {});
          }
        },
        { threshold: 0.4 }
      );

      obs.observe(el);
      return obs;
    });

    return () => observers.forEach((obs) => obs?.disconnect());
  }, []);

  return (
    <section className="bg-[#EDEAE4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* ── LEFT: scrolling text rows ──────────────────────────────── */}
          <div className="space-y-28">
            {FEATURE_ROWS.map((row, i) => (
              <div
                key={i}
                ref={(el) => (rowRefs.current[i] = el)}
                className="min-h-[50vh] flex flex-col justify-center"
              >
                <AnimateOnScroll>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-dark leading-tight mb-5">
                    {row.title}
                  </h2>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    {row.desc}
                  </p>
                </AnimateOnScroll>
              </div>
            ))}
          </div>

          {/* ── RIGHT: single sticky video ─────────────────────────────── */}
          <div className="sticky top-24 self-start">
            <video
              ref={videoRef}
              src="/videos/platform-video.mp4"
              muted
              playsInline
              preload="auto"
              className="w-full rounded-xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
}