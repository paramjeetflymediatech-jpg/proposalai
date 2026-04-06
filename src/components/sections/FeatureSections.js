"use client";
import { useEffect, useRef, useState } from "react";
import AnimateOnScroll from "../ui/AnimateOnScroll";

const FEATURES = [
  {
    preText: "Deep Research",
    preTextColor: "#00B4D8",
    highlight: "Intelligence That Sets You Apart",
    highlightColor: "#00B4D8",
    highlightCount: 3,
    body: "Generic pitches get ignored. ProposalAI automates the digging, finding the critical market trends and client details that make your response stand out. Write proposals backed by real research, not just templates.",
    video: "/videos/video1.mp4",
  },
  {
    preText: "Knowledge Library",
    preTextColor: "#10b981",
    highlight: "Your Corporate DNA",
    highlightColor: "#10b981",
    highlightCount: 2,
    body: "Stop digging through shared drives. We turn your documents into a smart knowledge base that reads and organizes your content. Ask a question, and our platform instantly pulls the right insights from your past wins.",
    video: "/videos/video2.mp4",
  },
  {
    preText: "AI Response Generation",
    preTextColor: "#00B4D8",
    highlight: 'The "Human-in-the-Loop"',
    highlightColor: "#00B4D8",
    highlightCount: 4,
    body: "Generate a strong first draft in minutes, not days, so your experts can focus on strategy. Every AI recommendation includes confidence scoring and sources.",
    video: "/videos/video3.mp4",
  },
];

export default function FeatureSections() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const observers = sectionRefs.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(index);
          }
        },
        { threshold: 0.6 }
      );
      if (ref.current) observer.observe(ref.current);
      return observer;
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [sectionRefs]);

  // Map each video index to its current position/style based on activeIndex
  const getVideoStyles = (videoIndex) => {
    // Spot mapping:
    // 0: Active (Large, Center/Top-Right)
    // 1: Next (Medium, Bottom-Left)
    // -1: Previous (Small, Bottom-Right)

    const diff = videoIndex - activeIndex;

    if (diff === 0) {
      // ACTIVE (Large, Center)
      return {
        width: 420,
        height: 420,
        top: "30%",
        right: 0,
        opacity: 1,
        zIndex: 30,
        scale: 1,
        translateY: "-50%",
        visibility: "visible",
      };
    } else if (diff === 1) {
      // NEXT (Medium, Below)
      return {
        width: 240,
        height: 240,
        top: "85%", // Positioned below Active
        left: "100px",
        opacity: 0.7,
        zIndex: 20,
        scale: 0.9,
        translateY: "-50%",
        visibility: "visible",
      };
    } else if (diff === -1) {
      // PREVIOUS (Medium, Above)
      return {
        width: 240,
        height: 240,
        top: "15%", // Positioned above Active
        left: "0px",
        opacity: 0.7,
        zIndex: 10,
        scale: 0.9,
        translateY: "-50%",
        visibility: "visible",
      };
    } else {
      // FAR AWAY (Hidden further up or down)
      return {
        width: 100,
        height: 100,
        top: diff > 0 ? "120%" : "-20%",
        right: "100px",
        opacity: 0,
        zIndex: 0,
        scale: 0.5,
        translateY: "-50%",
        visibility: "hidden",
      };
    }
  };

  return (
    <section className=" relative">
      {/* Intro Header */}
      <div className="pt-24 pb-12 text-center px-4">
        <AnimateOnScroll>
          <h2 className="font-display text-4xl sm:text-4xl md:text-5xl font-medium text-[#0A0A0A] leading-tight max-w-4xl mx-auto">
            Respond Smarter, Not Just Faster.
          </h2>
        </AnimateOnScroll>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">

          {/* Left Column: Scrolling Content */}
          <div className="flex-1 space-y-[40vh] lg:space-y-[60vh] pb-[40vh] lg:pb-[20vh]">
            {FEATURES.map((feat, i) => (
              <div
                key={i}
                ref={sectionRefs[i]}
                className="flex flex-col justify-center min-h-[40vh] lg:min-h-[50vh]"
              >
                <div className="max-w-xl">
                  <span className="block text-sm font-medium tracking-wider uppercase mb-4" style={{ color: feat.preTextColor }}>
                    {feat.preText}
                  </span>
                  <h3 className="font-display text-3xl sm:text-4xl md:text-3xl font-medium text-[#0A0A0A] leading-tight mb-6">
                    {feat.highlight}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {feat.body}
                  </p>
                </div>

                {/* Mobile-only visual (simplified single video) */}
                <div className="mt-10 lg:hidden rounded-[2rem] overflow-hidden shadow-xl border-4 border-white aspect-square">
                  <video
                    src={feat.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Sticky Visuals with Previews */}
          <div className="hidden lg:block flex-1 sticky top-[10vh] h-[80vh] flex items-start justify-center">
            <div className="relative w-full h-full max-w-[550px]" style={{ minHeight: 760 }}>

              {/* Video Spots */}
              {FEATURES.map((feat, i) => {
                const style = getVideoStyles(i);
                return (
                  <div
                    key={i}
                    className="absolute rounded-full overflow-hidden border-[6px] border-white shadow-2xl transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]"
                    style={{
                      width: style.width,
                      height: style.height,
                      top: style.top,
                      left: style.left !== undefined ? style.left : "auto",
                      right: style.right !== undefined ? style.right : "auto",
                      opacity: style.opacity,
                      zIndex: style.zIndex,
                      transform: `scale(${style.scale}) translateY(${style.translateY || "0"})`,
                      visibility: style.visibility,
                    }}
                  >
                    <video
                      src={feat.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                );
              })}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
