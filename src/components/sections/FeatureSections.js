// src/components/sections/FeatureSections.js
"use client";
import { useEffect, useRef, useState } from "react";

const FEATURES = [
  {
    preText: '"Human Led, AI Enabled',
    highlight: "Proposals\nThat Win",
    highlightColor: "#00B4D8",
    body: "ProposalAI combines human expertise with intelligent automation. Our platform reads RFP requirements, searches your knowledge base, and generates compelling first drafts — ready for your team to refine and submit faster than ever before.",
    video: "/videos/video1.mp4",
  },
  {
    preText: '"Collaborate Smarter,',
    highlight: "Not Harder",
    highlightColor: "#00B4D8",
    body: "Real-time collaboration tools built for proposal teams. Assign sections, track contributions, leave inline comments, and merge inputs — all without email chains or version conflicts. Your whole team, always in sync.",
    video: "/videos/video2.mp4",
  },
  {
    preText: "Win with Data,",
    highlight: "Not Guesswork",
    highlightColor: "#a855f7",
    body: "Deep analytics reveal what evaluators focus on, which sections drive wins, and where proposals lose momentum. Continuously improve your win rate based on real outcome data.",
    video: "/videos/video3.mp4",
  },
  {
    preText: "Security Questionnaires,",
    highlight: "Done in Minutes",
    highlightColor: "#f43f5e",
    body: "Build a dynamic answer library from your past security questionnaires. ProposalAI auto-matches questions to approved answers — so your team never answers the same compliance question twice.",
    video: "/videos/video4.mp4",
  },
];

function useScrollProgress(ref) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const cy = rect.top + rect.height / 2;
      const dist = Math.abs(cy - vh / 2);
      setProgress(Math.max(0, Math.min(1, 1 - dist / (vh * 0.8))));
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);
  return progress;
}

// Section 1: 4 circles — big top-right, 3 smaller below in cascade
function Section1() {
  const ref = useRef(null);
  const prog = useScrollProgress(ref);
  const activeScale = 0.6 + prog * 0.4;

  return (
    <section ref={ref} style={sectionStyle}>
      <div style={innerStyle}>
        <TextBlock feat={FEATURES[0]} />
        <div style={{ position: "relative", height: 780, width: "100%" }}>
          {/* Big - top right */}
          <Circle video={FEATURES[0].video} size={340} top={0} right={0}
            scale={activeScale} opacity={1} shadow zIndex={20} origin="top right" />
          {/* Medium - below left */}
          <Circle video={FEATURES[1].video} size={250} top={290} right={170}
            scale={0.9} opacity={0.68} zIndex={15} origin="top center" />
          {/* Small - below right */}
          <Circle video={FEATURES[2].video} size={200} top={510} right={20}
            scale={0.85} opacity={0.5} zIndex={10} origin="top center" />
          {/* Tiny - bottom */}
          <Circle video={FEATURES[3].video} size={155} top={690} right={130}
            scale={0.8} opacity={0.32} zIndex={5} origin="top center" />
        </div>
      </div>
    </section>
  );
}

// Section 2: 3 circles — video2 big, video3+video4 below
function Section2() {
  const ref = useRef(null);
  const prog = useScrollProgress(ref);
  const activeScale = 0.6 + prog * 0.4;

  return (
    <section ref={ref} style={sectionStyle}>
      <div style={innerStyle}>
        <TextBlock feat={FEATURES[1]} />
        <div style={{ position: "relative", height: 660, width: "100%" }}>
          {/* Big - top right */}
          <Circle video={FEATURES[1].video} size={340} top={0} right={0}
            scale={activeScale} opacity={1} shadow zIndex={20} origin="top right" />
          {/* Medium - below left */}
          <Circle video={FEATURES[2].video} size={250} top={290} right={140}
            scale={0.9} opacity={0.68} zIndex={15} origin="top center" />
          {/* Small - below right */}
          <Circle video={FEATURES[3].video} size={190} top={510} right={10}
            scale={0.85} opacity={0.45} zIndex={10} origin="top center" />
        </div>
      </div>
    </section>
  );
}

// Section 3: 2 circles — video3 big, video4 below
function Section3() {
  const ref = useRef(null);
  const prog = useScrollProgress(ref);
  const activeScale = 0.6 + prog * 0.4;

  return (
    <section ref={ref} style={sectionStyle}>
      <div style={innerStyle}>
        <TextBlock feat={FEATURES[2]} />
        <div style={{ position: "relative", height: 560, width: "100%" }}>
          {/* Big - top right */}
          <Circle video={FEATURES[2].video} size={340} top={0} right={0}
            scale={activeScale} opacity={1} shadow zIndex={20} origin="top right" />
          {/* Medium - below right */}
          <Circle video={FEATURES[3].video} size={230} top={300} right={20}
            scale={0.88} opacity={0.6} zIndex={15} origin="top center" />
        </div>
      </div>
    </section>
  );
}

// Section 4: 1 circle only
function Section4() {
  const ref = useRef(null);
  const prog = useScrollProgress(ref);
  const activeScale = 0.6 + prog * 0.4;

  return (
    <section ref={ref} style={sectionStyle}>
      <div style={innerStyle}>
        <TextBlock feat={FEATURES[3]} />
        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", width: "100%" }}>
          <div style={{
            width: 380, height: 380, borderRadius: "50%", overflow: "hidden",
            border: "5px solid white", boxShadow: "0 30px 80px rgba(0,0,0,0.22)",
            transform: `scale(${activeScale})`, transformOrigin: "center right",
            transition: "transform 0.12s ease-out", willChange: "transform",
          }}>
            <video src={FEATURES[3].video} autoPlay muted loop playsInline
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
        </div>
      </div>
    </section>
  );
}

// Reusable circle component
function Circle({ video, size, top, right, scale, opacity, shadow, zIndex, origin }) {
  return (
    <div style={{
      position: "absolute", top, right,
      width: size, height: size,
      borderRadius: "50%", overflow: "hidden",
      border: "4px solid white",
      boxShadow: shadow ? "0 28px 70px rgba(0,0,0,0.20)" : "0 10px 30px rgba(0,0,0,0.12)",
      transform: `scale(${scale})`,
      transformOrigin: origin || "center center",
      transition: "transform 0.12s ease-out",
      opacity, zIndex,
      willChange: "transform",
    }}>
      <video src={video} autoPlay muted loop playsInline
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
    </div>
  );
}

function TextBlock({ feat }) {
  return (
    <div style={{ paddingTop: 20 }}>
      <h2 style={{
        fontFamily: "var(--font-syne, system-ui)",
        fontSize: "clamp(2.6rem, 5vw, 3.8rem)",
        fontWeight: 800, color: "#0A0A0A",
        lineHeight: 1.05, marginBottom: 28,
        letterSpacing: "-0.03em",
      }}>
        {feat.preText}
        <br />
        {feat.highlight.split("\n").map((line, li) => (
          <span key={li} style={{ color: feat.highlightColor, display: "block" }}>
            {line}
          </span>
        ))}
      </h2>
      <p style={{ color: "#4B5563", fontSize: 16, lineHeight: 1.85, maxWidth: 440 }}>
        {feat.body}
      </p>
    </div>
  );
}

const sectionStyle = {
  backgroundColor: "#E8FDF5",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  padding: "80px 60px",
};

const innerStyle = {
  maxWidth: 1280,
  margin: "0 auto",
  width: "100%",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 60,
  alignItems: "flex-start",
};

export default function FeatureSections() {
  return (
    <div style={{ backgroundColor: "#E8FDF5" }}>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />

      <style jsx global>{`
        @media (max-width: 900px) {
          section { padding: 60px 24px !important; min-height: auto !important; }
          section > div { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </div>
  );
}