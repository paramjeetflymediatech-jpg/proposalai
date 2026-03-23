// "use client";
// import { useEffect, useRef, useState } from "react";

// const STEPS = [
//   {
//     step: "01",
//     seekTo: 0,
//     title: "A Strategic RFP is Released",
//     desc: "A high-value opportunity lands on your desk. Upload the documents to ProposalAI to kickstart the process immediately.",
//   },
//   {
//     step: "02",
//     seekTo: 4,
//     title: "AI Agents Organize & Extract",
//     desc: "AI deconstructs the RFP to reveal core priorities and hidden requirements. We deliver an instant strategic brief, giving your team a clear roadmap to victory and a confident go/no-go decision.",
//   },
//   {
//     step: "03",
//     seekTo: 8,
//     title: "Context-Aware Drafting",
//     desc: "Agents generate a first draft where every answer is grounded against your secure Knowledge Base, ensuring content is accurate and brand-aligned.",
//   },
//   {
//     step: "04",
//     seekTo: 12,
//     title: "Collaborative Refinement & Final Export",
//     desc: "Your writing team and AI assistants develop, iterate, and polish the response entirely within the platform. Once validated, export your precision-crafted proposal — ready for final submission with total confidence.",
//   },
// ];

// export default function FeatureVideoSection() {
//   const [activeStep, setActiveStep] = useState(0);
//   const videoRef = useRef(null);
//   const rowRefs  = useRef([]);

//   // Seek video when active step changes
//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video) return;
//     video.currentTime = STEPS[activeStep].seekTo;
//     video.play().catch(() => {});
//   }, [activeStep]);

//   // IntersectionObserver to track which step is in view
//   useEffect(() => {
//     const observers = rowRefs.current.map((el, i) => {
//       if (!el) return null;
//       const obs = new IntersectionObserver(
//         ([entry]) => { if (entry.isIntersecting) setActiveStep(i); },
//         { threshold: 0.55 }
//       );
//       obs.observe(el);
//       return obs;
//     });
//     return () => observers.forEach((obs) => obs?.disconnect());
//   }, []);

//   return (
//     <section className="bg-[#EDEAE4]">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">

//         {/* ── Heading ──────────────────────────────────────── */}
//         <div className="text-center mb-16 md:mb-20">
//           <span className="inline-block text-primary text-xs font-light uppercase tracking-widest mb-3 bg-primary/10 px-3 py-1 rounded-full">
//             How It Works
//           </span>
//           <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-dark max-w-2xl mx-auto leading-tight mt-3">
//             From RFP to Winning Proposal —{" "}
//             <span className="text-primary">Automatically</span>
//           </h2>
//         </div>

//         {/* ── Two-column sticky layout ──────────────────────── */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

//           {/* LEFT — scrolling steps */}
//           <div>
//             {STEPS.map((s, i) => (
//               <div
//                 key={i}
//                 ref={(el) => (rowRefs.current[i] = el)}
//                 className="min-h-[55vh] flex flex-col justify-center py-6"
//               >
//                 <div className="flex items-start gap-5">
//                   {/* Number + connector line */}
//                   <div className="flex flex-col items-center flex-shrink-0 pt-1">
//                     <div className={`w-10 h-10 rounded-full flex items-center justify-center font-light text-sm
//                                     transition-all duration-500 ${
//                       activeStep === i
//                         ? "bg-primary text-white scale-110 shadow-lg shadow-primary/30"
//                         : "bg-white text-gray-400 border border-gray-200"
//                     }`}>
//                       {s.step}
//                     </div>
//                     {i < STEPS.length - 1 && (
//                       <div className={`w-0.5 h-28 mt-3 rounded-full transition-all duration-700 ${
//                         activeStep > i ? "bg-primary" : "bg-gray-200"
//                       }`} />
//                     )}
//                   </div>

//                   {/* Text content */}
//                   <div className={`transition-all duration-500 ${
//                     activeStep === i ? "opacity-100" : "opacity-35"
//                   }`}>
//                     <span className="text-primary text-xs font-semibold uppercase tracking-widest mb-2 block">
//                       Step {s.step}
//                     </span>
//                     <h3 className={`font-display font-light leading-tight mb-3 transition-all duration-300 ${
//                       activeStep === i ? "text-2xl md:text-3xl text-dark" : "text-xl text-gray-500"
//                     }`}>
//                       {s.title}
//                     </h3>
//                     <p className={`leading-relaxed text-base transition-all duration-300 ${
//                       activeStep === i ? "text-gray-600" : "text-gray-400 line-clamp-2"
//                     }`}>
//                       {s.desc}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* RIGHT — sticky video (plays like GIF, no controls) */}
//           <div className="sticky top-24 self-start">
//             <div className="rounded-2xl overflow-hidden bg-[#EDEAE4]">
//               <video
//                 ref={videoRef}
//                 src="/videos/platform-video.mp4"
//                 muted
//                 playsInline
//                 preload="auto"
//                 className="w-full h-auto"
//                 // No controls — plays silently like an animated illustration
//               />
//             </div>

//             {/* Step dots */}
//             <div className="flex items-center justify-center gap-2 mt-5">
//               {STEPS.map((_, i) => (
//                 <button
//                   key={i}
//                   onClick={() => {
//                     setActiveStep(i);
//                     rowRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" });
//                   }}
//                   className={`rounded-full transition-all duration-300 ${
//                     activeStep === i ? "bg-primary w-7 h-2" : "bg-primary/25 w-2 h-2 hover:bg-primary/50"
//                   }`}
//                 />
//               ))}
//             </div>
//             <p className="text-center text-xs text-gray-400 mt-2 font-medium tracking-wide">
//               Step {STEPS[activeStep].step} of {STEPS.length}
//             </p>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

































/////////////////////video version...................




"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

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
    image: null,
    title: "Final Export",
    desc: "Once validated, export your precision-crafted proposal in the required format, ready for final submission with total confidence.",
  },
];

export default function FeatureVideoSection() {
  const [activeStep, setActiveStep] = useState(0);
  const rowRefs = useRef([]);

  const isFinalStep = activeStep === STEPS.length - 1;

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
    <section className="bg-[#EDEAE4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">

        {/* Heading */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block text-primary text-xs font-light uppercase tracking-widest mb-3 bg-primary/10 px-3 py-1 rounded-full">
            How It Works
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-dark max-w-2xl mx-auto leading-tight mt-3">
            From RFP to Winning Proposal —{" "}
            <span className="text-primary">Automatically</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* LEFT — scrolling steps */}
          <div>
            {STEPS.map((s, i) => (
              <div
                key={i}
                ref={(el) => (rowRefs.current[i] = el)}
                className="min-h-[55vh] flex flex-col justify-center py-6"
              >
                <div className="flex items-start gap-5">
                  {/* Number + connector */}
                  <div className="flex flex-col items-center flex-shrink-0 pt-1">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-light text-sm
                                    transition-all duration-500 ${
                      activeStep === i
                        ? "bg-primary text-white scale-110 shadow-lg shadow-primary/30"
                        : "bg-white text-gray-400 border border-gray-200"
                    }`}>
                      {s.step}
                    </div>
                    {i < STEPS.length - 1 && (
                      <div className={`w-0.5 h-28 mt-3 rounded-full transition-all duration-700 ${
                        activeStep > i ? "bg-primary" : "bg-gray-200"
                      }`} />
                    )}
                  </div>

                  {/* Text */}
                  <div className={`transition-all duration-500 ${
                    activeStep === i ? "opacity-100" : "opacity-35"
                  }`}>
                    <span className="text-primary text-xs font-semibold uppercase tracking-widest mb-2 block">
                      Step {s.step}
                    </span>
                    <h3 className={`font-display font-light leading-tight mb-3 transition-all duration-300 ${
                      activeStep === i ? "text-2xl md:text-3xl text-dark" : "text-xl text-gray-500"
                    }`}>
                      {s.title}
                    </h3>
                    <p className={`leading-relaxed text-base transition-all duration-300 ${
                      activeStep === i ? "text-gray-600" : "text-gray-400 line-clamp-2"
                    }`}>
                      {s.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT — sticky panel (hidden entirely on step 5) */}
          {!isFinalStep && (
            <div className="sticky top-24 self-start">
              <div className="relative w-full aspect-[3/4]">
                {STEPS.slice(0, 4).map((s, i) => (
                  <div
                    key={i}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      activeStep === i
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-[0.97]"
                    }`}
                  >
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      className="object-contain"
                      priority={i === 0}
                    />
                  </div>
                ))}
              </div>

              {/* Dots */}
              <div className="flex items-center justify-center gap-2 mt-5">
                {STEPS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setActiveStep(i);
                      rowRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" });
                    }}
                    className={`rounded-full transition-all duration-300 ${
                      activeStep === i
                        ? "bg-primary w-7 h-2"
                        : "bg-primary/25 w-2 h-2 hover:bg-primary/50"
                    }`}
                  />
                ))}
              </div>
              <p className="text-center text-xs text-gray-400 mt-2 font-medium tracking-wide">
                Step {STEPS[activeStep].step} of {STEPS.length}
              </p>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}