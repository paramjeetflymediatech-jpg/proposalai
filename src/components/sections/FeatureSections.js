// src/components/sections/FeatureSections.js
"use client";
import { useEffect, useRef, useState } from "react";

const FEATURES = [
  {
    preText: "Human Led, AI powered",
    highlight: "\"Lorem ipsum dolor sit amet, consectetur\"",
    highlightColor: "#00B4D8", // Blue
    highlightCount: 3,
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    video: "/videos/video1.mp4",
  },
  {
    preText: "Collaborate Smarter",
    highlight: "Lorem ipsum dolor it amet, consectetur",
    highlightColor: "#10b981", // Green
    highlightCount: 1,
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    video: "/videos/video2.mp4",
  },
  {
    preText: "Win with Data",
    highlight: "Lorem ipsum dolor it amet, consectetur",
    highlightColor: "#f43f5e", // Red
    highlightCount: 1,
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    video: "/videos/video3.mp4",
  },
  {
    preText: "Security First",
    highlight: "Lorem ipsum dolorit amet, consectetur",
    highlightColor: "#a855f7", // Purple
    highlightCount: 1,
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
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

// Reusable circle component
function Circle({ video, size, top, right, scale, opacity, shadow, zIndex, origin }) {
  return (
    <div style={{
      position: "absolute", top, right,
      width: size, height: size,
      borderRadius: "50%", overflow: "hidden",
      border: "5px solid white",
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
        fontSize: "clamp(2.5rem, 4.5vw, 3.5rem)",
        fontWeight: 800, color: "#0A0A0A",
        lineHeight: 1.1, marginBottom: 24,
        letterSpacing: "-0.02em",
      }}>
        <span className="text-primary text-xl block font-bold mb-4">{feat.preText}</span>
        {feat.highlight.split(" ").map((word, wi, arr) => (
          <span key={wi} style={{ color: wi >= arr.length - feat.highlightCount ? feat.highlightColor : "inherit" }}>
            {word}{" "}
          </span>
        ))}
      </h2>
      <p style={{ color: "#4B5563", fontSize: 18, lineHeight: 1.8, maxWidth: 480 }}>
        {feat.body}
      </p>
    </div>
  );
}

// Section components with cascading circles
function Section1() {
  const ref = useRef(null);
  const prog = useScrollProgress(ref);
  const activeScale = 0.6 + prog * 0.4;
  return (
    <section ref={ref} style={sectionStyle}>
      <div style={innerStyle}>
        <TextBlock feat={FEATURES[0]} />
        <div style={{ position: "relative", height: 780, width: "100%" }}>
          <Circle video={FEATURES[0].video} size={360} top={0} right={0} scale={activeScale} opacity={1} shadow zIndex={20} origin="top right" />
          <Circle video={FEATURES[1].video} size={260} top={310} right={180} scale={0.9} opacity={0.7} zIndex={15} />
          <Circle video={FEATURES[2].video} size={210} top={540} right={30} scale={0.85} opacity={0.5} zIndex={10} />
          <Circle video={FEATURES[3].video} size={160} top={720} right={140} scale={0.8} opacity={0.3} zIndex={5} />
        </div>
      </div>
    </section>
  );
}

function Section2() {
  const ref = useRef(null);
  const prog = useScrollProgress(ref);
  const activeScale = 0.6 + prog * 0.4;
  return (
    <section ref={ref} style={sectionStyle}>
      <div style={innerStyle}>
        <TextBlock feat={FEATURES[1]} />
        <div style={{ position: "relative", height: 660, width: "100%" }}>
          <Circle video={FEATURES[1].video} size={360} top={0} right={0} scale={activeScale} opacity={1} shadow zIndex={20} origin="top right" />
          <Circle video={FEATURES[2].video} size={260} top={310} right={150} scale={0.9} opacity={0.7} zIndex={15} />
          <Circle video={FEATURES[3].video} size={200} top={540} right={20} scale={0.85} opacity={0.5} zIndex={10} />
        </div>
      </div>
    </section>
  );
}

function Section3() {
  const ref = useRef(null);
  const prog = useScrollProgress(ref);
  const activeScale = 0.6 + prog * 0.4;
  return (
    <section ref={ref} style={sectionStyle}>
      <div style={innerStyle}>
        <TextBlock feat={FEATURES[2]} />
        <div style={{ position: "relative", height: 580, width: "100%" }}>
          <Circle video={FEATURES[2].video} size={360} top={0} right={0} scale={activeScale} opacity={1} shadow zIndex={20} origin="top right" />
          <Circle video={FEATURES[3].video} size={240} top={320} right={30} scale={0.9} opacity={0.7} zIndex={15} />
        </div>
      </div>
    </section>
  );
}

function Section4() {
  const ref = useRef(null);
  const prog = useScrollProgress(ref);
  const activeScale = 0.6 + prog * 0.4;
  return (
    <section ref={ref} style={sectionStyle}>
      <div style={innerStyle}>
        <TextBlock feat={FEATURES[3]} />
        <div style={{ position: "relative", height: 420, width: "100%", display: "flex", justifyContent: "flex-end" }}>
          <div style={{
            width: 400, height: 400, borderRadius: "50%", overflow: "hidden", 
            border: "6px solid white", boxShadow: "0 30px 80px rgba(0,0,0,0.22)",
            transform: `scale(${activeScale})`, transformOrigin: "center right",
            transition: "transform 0.1s ease-out"
          }}>
            <video src={FEATURES[3].video} autoPlay muted loop playsInline style={{ width: "100%", height: "100%", objectFit: "cover" }} />
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
};

const innerStyle = {
  maxWidth: 1400,
  margin: "0 auto",
  width: "100%",
  display: "grid",
  gridTemplateColumns: "minmax(400px, 1fr) 1fr",
  gap: 80,
};

export default function FeatureSections() {
  return (
    <div className="bg-[#E8FDF5]">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />

      <style jsx global>{`
        @media (max-width: 1024px) {
          section { padding: 60px 20px !important; min-height: auto !important; }
          section > div { grid-template-columns: 1fr !important; gap: 40px !important; }
          section div:last-child { height: auto !important; display: block !important; }
        }
      `}</style>
    </div>
  );
}
