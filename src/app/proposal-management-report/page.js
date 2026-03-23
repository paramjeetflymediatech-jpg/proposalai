"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

function AnimateOnScroll({ children, delay = 0 }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        transform: "translateY(28px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function ListIcon() {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 14, height: 14, flexShrink: 0, marginTop: 7, marginRight: 12 }}>
      <svg aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" style={{ width: 8, height: 8, fill: "#333" }}>
        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path>
      </svg>
    </span>
  );
}

export default function ProposalManagementReport() {
  const solutionItems = [
    "AI-Powered Knowledge Synthesis: Enabling consultants to instantly find relevant case studies or have the AI synthesize information for new bid sections.",
    "Automated RFP Processing & Draft Generation: Uploading client RFPs to extract key needs and generate branded first-draft proposals using the firm's collective insights.",
    "Enhanced Research Capabilities: Utilizing AI for market research and quick creation of PowerPoint decks."
  ];

  const resultItems = [
    "Radically reduced time spent on proposal drafting by over 70%, freeing up significant consultant capacity.",
    "Ensured high-quality, consistent messaging, leading to a 95% reduction in the use of outdated or off-brand content.",
    "Increased capacity to produce tailored, impactful proposals at scale, allowing the firm to confidently pursue more qualified opportunities."
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');` }} />
      <div
        className="relative overflow-hidden bg-white"
        style={{ paddingBottom: 60, fontFamily: "'Poppins', sans-serif" }}
      >
        {/* ── 3 blobs ── */}
        <div
          className="pointer-events-none absolute"
          style={{
            top: -60,
            left: -180,
            width: 520,
            height: 520,
            background: "rgba(0,0,0,0.045)",
            borderRadius: "50%",
            zIndex: 0,
          }}
        />
        <div
          className="pointer-events-none absolute"
          style={{
            top: -80,
            right: -100,
            width: 260,
            height: 260,
            background: "rgba(0,0,0,0.03)",
            borderRadius: "50%",
            zIndex: 0,
          }}
        />
        <div
          className="pointer-events-none absolute"
          style={{
            top: 320,
            right: 60,
            width: 200,
            height: 200,
            background: "rgba(0,0,0,0.03)",
            borderRadius: "50%",
            zIndex: 0,
          }}
        />

        <div className="relative z-10 mx-auto w-full" style={{ maxWidth: 1140, padding: "0 20px" }}>
          {/* ── HERO ── */}
          <AnimateOnScroll>
            <div
              className="flex flex-col md:flex-row md:items-center gap-8"
              style={{ minHeight: 480, paddingTop: 60, paddingBottom: 40 }}
            >
              <div className="w-full md:w-[55%] md:pr-8">
                <h2
                  style={{
                    fontSize: 40,
                    fontWeight: 500,
                    color: "#616161",
                    lineHeight: "1.2",
                    marginBottom: 24,
                    marginTop: 0
                  }}
                >
                  Empowering a Strategic Management Consulting Firm
                </h2>
                <div style={{ fontSize: 18, color: "#111", lineHeight: "1.6", margin: 0 }}>
                  <strong style={{ fontWeight: 700, color: "#000" }}>Client: </strong>A strategy consulting firm recognized for its insightful and bespoke client solutions.
                </div>
              </div>

              <div className="w-full md:w-[45%] relative" style={{ minHeight: 400 }}>
                <Image
                  src="/case-study-3.png"
                  alt="Empowering a Strategic Management Consulting Firm"
                  fill
                  style={{ objectFit: "contain", objectPosition: "center right" }}
                  priority
                />
              </div>
            </div>
          </AnimateOnScroll>

          {/* ── SECTIONS ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 60, paddingBottom: 20 }}>

            {/* The Challenge */}
            <AnimateOnScroll delay={100}>
              <div style={{ background: "#F5F5F5", borderRadius: 12, padding: "40px 50px" }}>
                <h2 style={{ fontSize: 32, fontWeight: 700, color: "#3EC2F3", marginBottom: 24, marginTop: 0 }}>
                  The Challenge
                </h2>
                <div style={{ fontSize: 16, lineHeight: "1.8", color: "#333", fontWeight: 400, margin: 0 }}>
                  The firm’s success depended on delivering unique, insightful proposals for each client RFP, effectively showcasing their tailored methodologies, relevant experience, and clear value. The highly manual and time-consuming process of collating information from past engagements, customizing it for new opportunities, and meeting stringent deadlines was a major drain on valuable consultant time, diverting them from critical client work and strategic analysis.
                </div>
              </div>
            </AnimateOnScroll>

            {/* Solution */}
            <AnimateOnScroll delay={200}>
              <div style={{ background: "#fff", padding: "0 50px" }}>
                <h2 style={{ fontSize: 32, fontWeight: 700, color: "#3EC2F3", marginBottom: 24, marginTop: 0 }}>
                  Solution
                </h2>
                <div style={{ fontSize: 16, lineHeight: "1.8", color: "#333", fontWeight: 400, marginBottom: 24, marginTop: 0 }}>
                  ProposalAI was deployed to create a dynamic, easily searchable knowledge base from the firm’s extensive library of past proposals, in-depth case studies, and proprietary methodology documents. Key uses include:
                </div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 16, margin: 0, paddingLeft: 0 }}>
                  {solutionItems.map((item, idx) => (
                    <li key={idx} style={{ display: "flex", alignItems: "flex-start", fontSize: 16, lineHeight: "1.8", color: "#333" }}>
                      <ListIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>

            {/* Results */}
            <AnimateOnScroll delay={300}>
              <div style={{ background: "#F5F5F5", borderRadius: 12, padding: "40px 50px" }}>
                <h2 style={{ fontSize: 32, fontWeight: 700, color: "#3EC2F3", marginBottom: 24, marginTop: 0 }}>
                  Results
                </h2>
                <div style={{ fontSize: 16, lineHeight: "1.8", color: "#333", fontWeight: 400, marginBottom: 40, marginTop: 0 }}>
                  The adoption of ProposalAI brought about a new level of efficiency and effectiveness:
                </div>

                <h2 style={{ fontSize: 32, fontWeight: 700, color: "#3EC2F3", marginBottom: 24, marginTop: 0 }}>
                  The Challenge
                </h2>

                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 16, margin: 0, paddingLeft: 0 }}>
                  {resultItems.map((item, idx) => (
                    <li key={idx} style={{ display: "flex", alignItems: "flex-start", fontSize: 16, lineHeight: "1.8", color: "#333" }}>
                      <ListIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div
                  className="flex flex-col md:flex-row md:items-center justify-between gap-6"
                  style={{ marginTop: 40, borderTop: "1px solid #E0E0E0", paddingTop: 40 }}
                >
                  <div style={{ flex: 1, paddingRight: 32 }}>
                    <h5
                      style={{
                        fontSize: 22,
                        fontWeight: 700,
                        color: "#616161",
                        lineHeight: "1.4",
                        margin: 0,
                      }}
                    >
                      <b>What could your consultants achieve with more time dedicated to strategy and client value?&nbsp;</b>
                    </h5>
                  </div>
                  <div style={{ flexShrink: 0 }}>
                    <Link
                      href="/contact-us/"
                      style={{
                        display: "inline-block",
                        background: "#000",
                        color: "#fff",
                        fontSize: 14,
                        fontWeight: 700,
                        padding: "16px 36px",
                        borderRadius: 999,
                        textDecoration: "none",
                        textTransform: "uppercase",
                        letterSpacing: "0.04em",
                        textAlign: "center"
                      }}
                    >
                      Let’s discuss how ProposalAI can help.
                    </Link>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

          </div>
        </div>
      </div>
    </>
  );
}