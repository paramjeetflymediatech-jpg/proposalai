"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import AnimateOnScroll from "../ui/AnimateOnScroll";

const STEPS = [
  {
    step: "01",
    image: "/step1.png",
    title: "A Strategic RFP is Released",
    desc: "A high-value opportunity lands on your desk. Upload the documents to ProposalAI to kickstart the process immediately.",
  },
  {
    step: "02",
    image: "/step2.png",
    title: "AI Agents Organize & Extract",
    desc: "AI deconstructs the RFP to reveal core priorities and hidden requirements. We deliver an instant strategic brief, giving your team a clear roadmap to victory and a confident go/no-go decision.",
  },
  {
    step: "03",
    image: "/step3.png",
    title: "Context-Aware Drafting",
    desc: "Agents generate a first draft where every answer is grounded against your secure Knowledge Base, ensuring content is accurate and brand-aligned.",
  },
  {
    step: "04",
    image: "/step4.png",
    title: "Collaborative Refinement",
    desc: "Your writing team and AI assistants develop, iterate, and polish the response entirely within the platform, focusing on strategy.",
  },
  {
    step: "05",
    image: "/step5.png",
    title: "Final Export",
    desc: "Once validated, export your precision-crafted proposal in the required format, ready for final submission with total confidence.",
  },
];

export default function FeatureVideoSection() {
  const [activeStep, setActiveStep] = useState(0);
  const rowRefs = useRef([]);

  useEffect(() => {
    const observers = rowRefs.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveStep(i); },
        { threshold: 0.55 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((obs) => obs?.disconnect());
  }, []);

  return (
    <section className="bg-white border-y border-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24 lg:py-32">

        {/* Heading */}
        <div className="text-center mb-20">
          <AnimateOnScroll>
            <span className="inline-block text-primary text-xs font-bold uppercase tracking-widest mb-4 bg-primary/5 px-4 py-1.5 rounded-full">
              The Workflow
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-dark max-w-3xl mx-auto leading-tight">
              From RFP to Winning Proposal — <br />
              <span className="text-primary italic">Entirely Automated</span>
            </h2>
          </AnimateOnScroll>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* LEFT — scrolling steps */}
          <div className="space-y-4">
            {STEPS.map((s, i) => (
              <div
                key={i}
                ref={(el) => (rowRefs.current[i] = el)}
                className="min-h-[50vh] flex flex-col justify-center py-10"
              >
                <div className="flex items-start gap-8">
                  {/* Number + connector */}
                  <div className="flex flex-col items-center flex-shrink-0 pt-1">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-medium text-lg
                                    transition-all duration-500 transform ${
                      activeStep === i
                        ? "bg-dark text-white scale-110 shadow-xl"
                        : "bg-gray-50 text-gray-300 border border-gray-100"
                    }`}>
                      {s.step}
                    </div>
                    {i < STEPS.length - 1 && (
                      <div className={`w-[2px] h-32 mt-4 rounded-full transition-all duration-700 ${
                        activeStep > i ? "bg-primary" : "bg-gray-100"
                      }`} />
                    )}
                  </div>

                  {/* Text */}
                  <div className={`transition-all duration-700 ${
                    activeStep === i ? "opacity-100 translate-x-0" : "opacity-30 -translate-x-2"
                  }`}>
                    <h3 className={`font-display font-medium leading-tight mb-4 transition-all duration-500 ${
                      activeStep === i ? "text-3xl text-dark" : "text-2xl text-gray-400"
                    }`}>
                      {s.title}
                    </h3>
                    <p className={`leading-relaxed text-lg transition-all duration-500 ${
                      activeStep === i ? "text-gray-600 font-normal" : "text-gray-400"
                    }`}>
                      {s.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT — sticky panel */}
          <div className="sticky top-32 self-start hidden lg:block">
            <div className="relative w-full max-w-[500px] mx-auto aspect-square glass-effect rounded-[40px] shadow-2xl p-8 overflow-hidden group">
              {/* Animated accent gradient in background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-primary/10 opacity-50 group-hover:scale-110 transition-transform duration-1000" />
              
              <div className="relative w-full h-full">
                {STEPS.map((s, i) => (
                  <div
                    key={i}
                    className={`absolute inset-0 transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${
                      activeStep === i
                        ? "opacity-100 scale-100 rotate-0"
                        : "opacity-0 scale-95 rotate-1"
                    }`}
                  >
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      className="object-contain drop-shadow-2xl"
                      priority={i === 0}
                    />
                  </div>
                ))}
              </div>

              {/* Step indicator */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2">
                {STEPS.map((_, i) => (
                  <div
                    key={i}
                    className={`rounded-full transition-all duration-500 ${
                      activeStep === i
                        ? "bg-dark w-8 h-1.5"
                        : "bg-dark/10 w-1.5 h-1.5"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}