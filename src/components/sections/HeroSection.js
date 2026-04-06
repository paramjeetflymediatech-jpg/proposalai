"use client";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  // const videoRef = useRef(null);
  // const [isVideoFinished, setIsVideoFinished] = useState(false);
  // const handleTimeUpdate = () => {
  //   if (videoRef.current && videoRef.current.currentTime >= 4) {
  //     videoRef.current.pause();
  //     setIsVideoFinished(true);
  //   }
  // };
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden bg-white pt-24 lg:pt-16">

      {/* ── Floater Animation ────────────────────────── */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-12 lg:py-20 lg:grid lg:grid-cols-2 lg:items-center gap-12 lg:gap-8 flex flex-col">

        {/* ── Title & Subtitle ──────────────────────── */}
        <div className="w-full text-center lg:text-left lg:col-start-1 lg:row-start-1">
          <h1 className="text-2xl sm:text-4xl lg:text-[2.5rem] font-medium text-gray-900  mb-5">
            Human-Led, AI-Driven<br />
            Proposals That Win More
          </h1>

          <p className="text-gray-400 text-[15px] font-light mb-10 mx-auto lg:mx-0 max-w-sm leading-[1.8] tracking-wide">
            Transform your manual efforts into a strategic advantage. Craft personalized, winning bids in a fraction of the time.
          </p>
        </div>

        {/* ── Right Side Animated Media ────────────────── */}
        <div className="w-full flex justify-center lg:justify-end lg:col-start-2 lg:row-span-2 order-2 lg:order-none">
          <div
            className="relative w-full max-w-[600px] h-[550px] aspect-video rounded-2xl overflow-hidden border-4 border-white shadow-2xl"
            style={{ boxShadow: '0 0 60px rgba(255, 255, 255, 1)' }}
          >
            {/* Video commented out — showing image only */}
            {/* <video
                ref={videoRef}
                src="/videos/Untitled video.mp4"
                autoPlay
                muted
                playsInline
                onTimeUpdate={handleTimeUpdate}
                className="w-full h-full object-cover"
              /> */}
            <div className="relative w-full h-full animate-float">
              <Image
                src="/paoploago-1-4.png"
                alt="ProposalAI Logo"
                fill
                className="object-contain"
                priority
              />
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-4/5 h-4 bg-dark/5 blur-xl rounded-[100%] scale-x-75 animate-pulse" />
            </div>
          </div>
        </div>

        {/* ── Button Container ───────────────────────── */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 lg:col-start-1 lg:row-start-2 order-3 lg:order-none">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-primary text-white font-semibold text-base px-8 py-4 rounded-full shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all duration-200 hover:-translate-y-0.5"
          >
            Request a Personalized Demo
            <span className="w-7 h-7 rounded-full bg-white/25 flex items-center justify-center font-light text-sm">
              →
            </span>
          </Link>
        </div>

      </div>

      {/* Background Decorative Element (Optional) */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[40%] h-[80%] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
    </section>
  );
}