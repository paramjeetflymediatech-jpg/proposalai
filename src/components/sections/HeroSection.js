"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    setIsLoaded(true);

    let sequenceTimer;
    const startSequence = () => {
      // Piece 1
      setTimeout(() => setStep(1), 1000);
      // Piece 2
      setTimeout(() => setStep(2), 2000);
      // Piece 3
      setTimeout(() => setStep(3), 3000);

      // Restart after 5 seconds of showing all pieces
      sequenceTimer = setTimeout(() => {
        setStep(0);
        startSequence();
      }, 6000); // 3s (to get to all 3) + 5s (pause)
    };

    startSequence();
    return () => {
      clearTimeout(sequenceTimer);
    };
  }, []);

  return (
    <section className="relative flex flex-col items-center overflow-hidden bg-white pt-32 lg:pt-24 pb-12">

      {/* ── Background Decorative Elements ────────────────── */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50/50 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-50/50 blur-[100px] rounded-full -z-10" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col items-center">

        <div className="w-full lg:grid lg:grid-cols-12 lg:items-center gap-12 xl:gap-20 flex flex-col">

          {/* ── Left Column: Text & Desktop CTAs ──────────────────────── */}
          <div className="lg:col-span-6 text-left order-1">
            <h1 className={`text-[2rem] sm:text-[2.8rem] md:text-[3.2rem] lg:text-[3.6rem] xl:text-[4.2rem] font-semibold text-[#0A0A0A] leading-[1.05] mb-8 transition-all duration-1000 delay-100 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              Human-Led, AI-Driven <br className="hidden md:inline" /> <span className="text-primary">Proposals</span> <br className="hidden lg:inline" /> That Win More
            </h1>

            <p className={`text-[#4A4A4A] text-lg lg:text-xl font-normal max-w-lg leading-relaxed mb-10 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Transform your manual efforts into a strategic advantage. Craft personalized, winning bids in a fraction of the time with our precision architectural engine.
            </p>

            {/* Desktop-only CTAs (Grouped with text) */}
            <div className={`hidden lg:flex flex-col sm:flex-row items-center gap-6 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-primary text-white font-bold px-8 py-5 rounded-xl shadow-xl shadow-primary/20 hover:bg-primary/90 transition-all duration-300 hover:-translate-y-1 active:scale-[0.98]"
              >
                Request a Personalized Demo
              </Link>
              <Link
                href="/platform"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-[#0A0A0A] font-bold  hover:text-primary transition-all group"
              >
                Explore Platform
                <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>

          {/* ── Right Column: Interactive Visuals ────────── */}
          <div className="lg:col-span-6 relative perspective-1000 order-2">
            <div className={`relative w-full aspect-square transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>

              {/* Animation Container */}
              <div className="relative w-full h-full">

                {/* Individual Pieces */}
                {/* 3.png - Top Left */}
                <div className={`absolute top-[8%] left-[8%] w-[45%] h-[45%] transition-all duration-1000 ease-out 
                  ${step >= 1 && step < 4 ? 'opacity-100 translate-x-0 translate-y-0 scale-100' : 'opacity-0 -translate-x-10 -translate-y-10 scale-90'}`}>
                  <Image src="/logo/3.png" alt="Piece 3" fill className="object-contain" />
                </div>

                {/* 2.png - Top Right */}
                <div className={`absolute top-[8%] right-[8%] w-[45%] h-[45%] transition-all duration-1000 ease-out delay-300
                  ${step >= 2 && step < 4 ? 'opacity-100 translate-x-0 translate-y-0 scale-100' : 'opacity-0 translate-x-10 -translate-y-10 scale-90'}`}>
                  <Image src="/logo/2.png" alt="Piece 2" fill className="object-contain" />
                </div>

                {/* 1.png - Bottom */}
                <div className={`absolute bottom-[8%] left-[27.5%] w-[45%] h-[45%] transition-all duration-1000 ease-out delay-600
                  ${step >= 3 && step < 4 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-90'}`}>
                  <Image src="/logo/1.png" alt="Piece 1" fill className="object-contain" />
                </div>

                {/* Full Image */}
                <div className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out
                  ${step === 4 ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-95 rotate-3 pointer-events-none'}`}>
                  <div className={`relative w-full h-full bg-black/5 rounded-[3rem] overflow-hidden backdrop-blur-sm border border-white/20 shadow-2xl ${step === 4 ? 'animate-float' : ''}`}>
                    <Image src="/logo/full.png" alt="Full Proposal Platform" fill className="object-contain p-4" priority />

                    {/* Glowing effect for the full image */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent animate-pulse" />
                  </div>
                </div>

                {/* Decorative floating elements when full is shown */}
                <div className={`absolute -top-4 -right-4 w-24 h-24 bg-primary/10 blur-2xl rounded-full transition-opacity duration-1000 ${step === 4 ? 'opacity-100' : 'opacity-0'}`} />
                <div className={`absolute -bottom-8 -left-8 w-32 h-32 bg-blue-400/10 blur-3xl rounded-full transition-opacity duration-1000 ${step === 4 ? 'opacity-100' : 'opacity-0'}`} />

              </div>
            </div>
          </div>

          {/* ── Mobile-only CTA Buttons (Appears after image) ──────────────────────── */}
          <div className="lg:hidden order-3 mt-8 text-left w-full px-0">
            <div className={`flex flex-col sm:flex-row items-center gap-6 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-primary text-white font-bold px-8 py-5 rounded-xl shadow-xl shadow-primary/20 hover:bg-primary/90 transition-all duration-300 hover:-translate-y-1 active:scale-[0.98]"
              >
                Request a Personalized Demo
              </Link>
              <Link
                href="/platform"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-[#0A0A0A] font-bold  hover:text-primary transition-all group"
              >
                Explore Platform
                <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>

        </div>

      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(1deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(-1deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-10px) scale(1.02); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 7s ease-in-out infinite; }
        .perspective-1000 { perspective: 1000px; }
      `}</style>
    </section>
  );
}
