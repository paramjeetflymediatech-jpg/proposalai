// src/components/sections/FeatureSections.js
"use client";
import { useEffect, useRef, useState } from "react";

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
    body: "Stop digging through shared drives. We turn your documents into a smart knowledge base that \"reads\" and organizes your content. Ask a question, and our platform instantly pulls the right insights from your past wins to fuel your new proposal.",
    video: "/videos/video2.mp4",
  },
  {
    preText: "AI Response Generation",
    preTextColor: "#00B4D8",
    highlight: "The \"Human-in-the-Loop\"",
    highlightColor: "#00B4D8",
    highlightCount: 4,
    body: "Generate a strong first draft in minutes, not days, so your experts can focus on high-value strategy. Every AI recommendation includes confidence scoring and direct source links.",
    video: "/videos/video3.mp4",
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
      setProgress(Math.max(0, Math.min(1, 1 - dist / (vh * 0.75))));
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);
  return progress;
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

function TextBlock({ feat }) {
  return (
    <div>
      <h2 style={{
        fontFamily: "var(--font-syne, system-ui)",
        fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
        fontWeight: 800,
        color: "#0A0A0A",
        lineHeight: 1.1,
        marginBottom: 20,
        letterSpacing: "-0.02em",
      }}>
        <span style={{
          color: feat.preTextColor,
          fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
          display: "block",
          fontWeight: 700,
          marginBottom: 12,
        }}>
          {feat.preText}
        </span>
        {feat.highlight.split(" ").map((word, wi, arr) => (
          <span key={wi} style={{
            color: wi >= arr.length - feat.highlightCount ? feat.highlightColor : "inherit"
          }}>
            {word}{" "}
          </span>
        ))}
      </h2>
      <p style={{ color: "#4B5563", fontSize: "clamp(15px, 1.8vw, 18px)", lineHeight: 1.8, maxWidth: 480 }}>
        {feat.body}
      </p>
    </div>
  );
}

// Mobile: single circle below text
function MobileSection({ feat }) {
  return (
    <div style={{ backgroundColor: "#E8FDF5", padding: "60px 20px" }}>
      <TextBlock feat={feat} />
      <div style={{ marginTop: 32, display: "flex", justifyContent: "center" }}>
        <div style={{
          width: 260, height: 260, borderRadius: "50%", overflow: "hidden",
          border: "5px solid white", boxShadow: "0 16px 40px rgba(0,0,0,0.15)",
        }}>
          <video src={feat.video} autoPlay muted loop playsInline
            style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      </div>
    </div>
  );
}

// ─── SECTION 1 ─── large + medium-left + small-center + ghost-corner
function Section1Desktop() {
  const ref = useRef(null);
  const prog = useScrollProgress(ref);
  const aOp = prog;
  const aScale = 0.7 + prog * 0.3;
  const sOp = Math.min(prog * 1.5, 0.82);

  return (
    <section ref={ref} style={sectionStyle}>
      <div style={innerStyle}>
        <TextBlock feat={FEATURES[0]} />
        <div style={{ position: "relative", height: 760, width: "100%" }}>

          {/* ACTIVE */}
          <div style={{
            position: "absolute", top: 0, right: 0,
            width: 420, height: 420, borderRadius: "50%", overflow: "hidden",
            border: "5px solid white", boxShadow: "0 28px 70px rgba(0,0,0,0.18)",
            transform: `scale(${aScale})`, transformOrigin: "top right",
            opacity: aOp, transition: "transform 0.1s ease-out, opacity 0.1s ease-out", zIndex: 20,
          }}>
            <video src={FEATURES[0].video} autoPlay muted loop playsInline
              style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>

          {/* MEDIUM bottom-left */}
          <div style={{
            position: "absolute", top: 420, left: 20,
            width: 260, height: 260, borderRadius: "50%", overflow: "hidden",
            border: "5px solid white", boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
            opacity: sOp * 0.85, zIndex: 15,
          }}>
            <video src={FEATURES[1].video} autoPlay muted loop playsInline
              style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>

          {/* SMALL bottom-center */}
          <div style={{
            position: "absolute", top: 550, left: 210,
            width: 195, height: 195, borderRadius: "50%", overflow: "hidden",
            border: "5px solid white", boxShadow: "0 8px 22px rgba(0,0,0,0.10)",
            opacity: sOp * 0.58, zIndex: 10,
          }}>
            <video src={FEATURES[2].video} autoPlay muted loop playsInline
              style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── SECTION 2 ─── large + medium-left
function Section2Desktop() {
  const ref = useRef(null);
  const prog = useScrollProgress(ref);
  const aOp = prog;
  const aScale = 0.7 + prog * 0.3;
  const sOp = Math.min(prog * 1.5, 0.82);

  return (
    <section ref={ref} style={sectionStyle}>
      <div style={innerStyle}>
        <TextBlock feat={FEATURES[1]} />
        <div style={{ position: "relative", height: 680, width: "100%" }}>

          {/* ACTIVE */}
          <div style={{
            position: "absolute", top: 0, right: 0,
            width: 420, height: 420, borderRadius: "50%", overflow: "hidden",
            border: "5px solid white", boxShadow: "0 28px 70px rgba(0,0,0,0.18)",
            transform: `scale(${aScale})`, transformOrigin: "top right",
            opacity: aOp, transition: "transform 0.1s ease-out, opacity 0.1s ease-out", zIndex: 20,
          }}>
            <video src={FEATURES[1].video} autoPlay muted loop playsInline
              style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>

          {/* MEDIUM bottom-left */}
          <div style={{
            position: "absolute", top: 420, left: 20,
            width: 255, height: 255, borderRadius: "50%", overflow: "hidden",
            border: "5px solid white", boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
            opacity: sOp * 0.85, zIndex: 15,
          }}>
            <video src={FEATURES[2].video} autoPlay muted loop playsInline
              style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── SECTION 3 ─── large SOLO (last section, no next video)
function Section3Desktop() {
  const ref = useRef(null);
  const prog = useScrollProgress(ref);
  const aOp = prog;
  const aScale = 0.7 + prog * 0.3;

  return (
    <section ref={ref} style={sectionStyle}>
      <div style={innerStyle}>
        <TextBlock feat={FEATURES[2]} />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", minHeight: 440 }}>
          <div style={{
            width: 420, height: 420, borderRadius: "50%", overflow: "hidden",
            border: "5px solid white", boxShadow: "0 28px 80px rgba(0,0,0,0.18)",
            transform: `scale(${aScale})`, transformOrigin: "center right",
            opacity: aOp, transition: "transform 0.1s ease-out, opacity 0.1s ease-out",
          }}>
            <video src={FEATURES[2].video} autoPlay muted loop playsInline
              style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        </div>
      </div>
    </section>
  );
}

const sectionStyle = {
  backgroundColor: "#E8FDF5",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  padding: "80px 4%",
  overflow: "hidden",
};

const innerStyle = {
  maxWidth: 1400,
  margin: "0 auto",
  width: "100%",
  display: "grid",
  gridTemplateColumns: "minmax(400px, 1fr) 1fr",
  gap: 60,
  alignItems: "start",
};

export default function FeatureSections() {
  const isMobile = useIsMobile();

  return (
    <div style={{ backgroundColor: "#E8FDF5" }}>

      {/* Intro Heading */}
      <div style={{ textAlign: "center", padding: isMobile ? "60px 20px 10px" : "100px 4% 20px" }}>
        <h2 style={{
          fontFamily: "var(--font-syne, system-ui)",
          fontSize: isMobile ? "clamp(2rem, 8vw, 3rem)" : "clamp(3rem, 6vw, 5rem)",
          fontWeight: 800, color: "#0A0A0A",
          lineHeight: 1.08, letterSpacing: "-0.03em",
          maxWidth: 900, margin: "0 auto",
        }}>
          Respond Smarter,{" "}
          <span style={{ color: "#00B4D8" }}>Not Just Faster.</span>
        </h2>
      </div>

      {/* Sections */}
      {isMobile ? (
        FEATURES.map((feat, i) => <MobileSection key={i} feat={feat} />)
      ) : (
        <>
          <Section1Desktop />
          <Section2Desktop />
          <Section3Desktop />
        </>
      )}


    </div>
  );
}