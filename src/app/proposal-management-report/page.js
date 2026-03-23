"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

/* ─────────────────────────────────────────
   Animate on scroll wrapper (JS Version)
───────────────────────────────────────── */
function AnimateOnScroll({
  children,
  delay = 0,
}) {
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

/* ─────────────────────────────────────────
   Bullet dot
───────────────────────────────────────── */
function Dot() {
  return (
    <span
      className="mt-2 flex-shrink-0 rounded-full"
      style={{ width: 10, height: 10, minWidth: 10, background: "#6EC1E4", display: "inline-block" }}
    />
  );
}

/* ─────────────────────────────────────────
   Main page component
───────────────────────────────────────── */
export default function ProposalManagementReport() {
  const solutionItems = [
    {
      title: "AI-Powered Knowledge Synthesis.",
      body: "Enabling consultants to instantly find relevant case studies or have the AI synthesize information for new bid sections.",
    },
    {
      title: "Automated RFP Processing & Draft Generation.",
      body: "Uploading client RFPs to extract key needs and generate branded first-draft proposals using the firm's collective insights.",
    },
    {
      title: "Enhanced Research Capabilities.",
      body: "Utilizing AI for market research and quick creation of PowerPoint decks.",
    },
  ];

  const resultItems = [
    "Radically reduced time spent on proposal drafting by over 70%, freeing up significant consultant capacity.",
    "Ensured high-quality, consistent messaging, leading to a 95% reduction in the use of outdated or off-brand content.",
    "Increased capacity to produce tailored, impactful proposals at scale, allowing the firm to confidently pursue more qualified opportunities.",
  ];

  return (
    <div
      className="relative overflow-hidden bg-white"
      style={{ paddingTop: 60, paddingBottom: 60, fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Background decorative circles */}
      <div
        className="pointer-events-none absolute"
        style={{
          top: -220, left: -220,
          width: 600, height: 600,
          background: "rgba(62,194,243,0.06)",
          borderRadius: "50%",
          zIndex: 0,
        }}
      />
      <div
        className="pointer-events-none absolute"
        style={{
          top: -120, right: -130,
          width: 400, height: 400,
          background: "rgba(62,194,243,0.06)",
          borderRadius: "50%",
          zIndex: 0,
        }}
      />

      {/* Container */}
      <div
        className="relative mx-auto px-6 sm:px-10"
        style={{ maxWidth: 1140, zIndex: 1 }}
      >
        {/* ── HERO ── */}
        <AnimateOnScroll>
          <div
            className="flex flex-col lg:flex-row items-center gap-10"
            style={{ minHeight: 400, paddingTop: 60, paddingBottom: 60 }}
          >
            {/* Left */}
            <div className="lg:w-1/2 text-left">
              <h1
                style={{
                  fontSize: 40,
                  fontWeight: 500,
                  color: "#616161",
                  lineHeight: "50px",
                  marginBottom: 32,
                }}
              >
                Empowering a Strategic Management Consulting Firm
              </h1>
              <p style={{ fontSize: 18, fontWeight: 700, color: "#000" }}>
                Client:{" "}
                <span style={{ fontWeight: 400, color: "#555" }}>
                  A strategy consulting firm recognized for its insightful and bespoke client solutions.
                </span>
              </p>
            </div>

            {/* Right */}
            <div className="lg:w-1/2 flex items-center justify-center w-full relative aspect-[4/3]">
              <Image
                src="/hero_illustration_exact.png"
                alt="Empowering a Strategic Management Consulting Firm"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </AnimateOnScroll>

        {/* ── SECTIONS ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 60 }}>

          {/* The Challenge */}
          <AnimateOnScroll delay={100}>
            <div
              style={{
                background: "#F5F5F5",
                borderRadius: 12,
                padding: "30px",
              }}
            >
              <h2
                style={{
                  fontSize: 38,
                  fontWeight: 600,
                  color: "#3EC2F3",
                  marginBottom: 32,
                }}
              >
                The Challenge
              </h2>
              <p style={{ fontSize: 16, lineHeight: "26px", color: "#000", fontWeight: 400 }}>
                The firm's success depended on delivering unique, insightful proposals for each
                client RFP, effectively showcasing their tailored methodologies, relevant
                experience, and clear value. The highly manual and time-consuming process of
                collating information from past engagements, customizing it for new opportunities,
                and meeting stringent deadlines was a major drain on valuable consultant time,
                diverting them from critical client work and strategic analysis.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Solution */}
          <AnimateOnScroll delay={200}>
            <div style={{ background: "#fff", padding: "30px" }}>
              <h2
                style={{
                  fontSize: 38,
                  fontWeight: 600,
                  color: "#3EC2F3",
                  marginBottom: 32,
                }}
              >
                Solution
              </h2>
              <p style={{ fontSize: 16, lineHeight: "26px", color: "#000", fontWeight: 400 }}>
                ProposalAI was deployed to create a dynamic, easily searchable knowledge base from
                the firm's extensive library of past proposals, in-depth case studies, and
                proprietary methodology documents. Key uses include:
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 24, marginTop: 32, padding: 0 }}>
                {solutionItems.map((item, idx) => (
                  <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                    <Dot />
                    <p style={{ fontSize: 16, lineHeight: "26px", color: "#000", fontWeight: 400 }}>
                      <strong style={{ fontWeight: 700 }}>{item.title}</strong> {item.body}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          {/* Results Card with CTA Inside */}
          <AnimateOnScroll delay={300}>
            <div
              style={{
                background: "#F5F5F5",
                borderRadius: 12,
                padding: "30px 30px 60px 30px",
              }}
            >
              <h2
                style={{
                  fontSize: 38,
                  fontWeight: 600,
                  color: "#3EC2F3",
                  marginBottom: 32,
                }}
              >
                Results
              </h2>
              <p style={{ fontSize: 16, lineHeight: "26px", color: "#000", fontWeight: 400 }}>
                The adoption of ProposalAI brought about a new level of efficiency and effectiveness:
              </p>

              {/* Intentional duplicate heading — matches live site exactly */}
              <h3
                style={{
                  fontSize: 38,
                  fontWeight: 600,
                  color: "#3EC2F3",
                  marginTop: 32,
                  marginBottom: 24,
                }}
              >
                The Challenge
              </h3>

              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 24, padding: 0 }}>
                {resultItems.map((item, idx) => (
                  <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                    <Dot />
                    <span style={{ fontSize: 16, lineHeight: "26px", color: "#000", fontWeight: 700 }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* ── CTA ── */}
              <div
                style={{
                  marginTop: 64,
                  textAlign: "center",
                  borderTop: "1px solid #e0e0e0",
                  paddingTop: 48,
                }}
              >
                <h3
                  style={{
                    fontSize: "clamp(26px, 3.5vw, 36px)",
                    fontWeight: 700,
                    color: "#111",
                    marginBottom: 40,
                    letterSpacing: "-0.5px",
                    textTransform: "uppercase",
                  }}
                >
                  Ready to Scale Your Proposal Process?
                </h3>
                <Link
                  href="/contact"
                  style={{
                    display: "inline-block",
                    background: "#000",
                    color: "#fff",
                    fontSize: 18,
                    fontWeight: 700,
                    padding: "20px 48px",
                    borderRadius: 999,
                    textDecoration: "none",
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.18)",
                    transition: "background 0.25s, transform 0.25s",
                  }}
                >
                  Let&apos;s Discuss How ProposalAI Can Help
                </Link>
              </div>

            </div>
          </AnimateOnScroll>

        </div>

      </div>
    </div>
  );
}