import Image from "next/image";

export default function Logo({ height = 36, className = "", light = false }) {
  return (
    <div className={`inline-flex items-center ${className}`}>
      <Image
        src={light ? "/WHITE-LOGFOI.png" : "/paoploago.png"}
        alt="ProposalAI"
        height={height}
        width={0}
        sizes="(max-width: 768px) 120px, 160px"
        style={{ width: "auto", height: `${height}px` }}
        priority
        unoptimized
        quality={100}
      />
    </div>
  );
}