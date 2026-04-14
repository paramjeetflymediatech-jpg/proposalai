import Image from "next/image";

export default function Logo({ height = 36, className = "", light = false }) {
  return (
    <div className={`inline-flex items-center transition-all duration-300 hover:scale-[1.02] ${className}`}>
      <div className="relative group">
        <Image
          src={light ? "/WHITE-LOGFOI.png" : "/logo.png"}
          alt="ProposalAI"
          height={height}
          width={0}
          sizes="(max-width: 768px) 120px, 160px"
          style={{ width: "auto", height: `${height}px` }}
          priority
          unoptimized
          quality={100}
          className="relative z-10"
        />
        {/* Subtle highlight glow */}
        <div className="absolute -inset-2 bg-primary/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  );
}