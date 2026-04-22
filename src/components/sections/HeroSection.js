"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative flex flex-col items-center overflow-hidden bg-white pt-32 lg:pt-24 pb-12">

      {/* ── Background Decorative Elements ────────────────── */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50/50 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-50/50 blur-[100px] rounded-full -z-10" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col items-center">

        {/* ── Top Badge ───────────────────────────────────── */}
        {/* <div className={`mb-8 transform transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFF5F2] border border-[#FFE4DC] shadow-sm">
            <span className="text-lg">✨</span>
            <span className="text-[13px] font-bold tracking-wider uppercase text-[#8B4D3B]">
              Next-Gen Proposal Engineering
            </span>
          </div>
        </div> */}

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
            <div className={`relative w-full aspect-[1.1/1] transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              
              {/* Main Media Core */}
              <div className="w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border-2 border-white/50 relative">
                <Image
                  src="/hero-modern-office1.png"
                  alt="AI Proposal Platform Interface"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-black/5 mix-blend-overlay pointer-events-none" />
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
