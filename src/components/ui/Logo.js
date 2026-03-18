import Image from "next/image";

export default function Logo({ height = 36, className = "" }) {
  return (
    <div className={`inline-flex items-center ${className}`}>
      <Image
        src="/logo.png"
        alt="ProposalAI"
        height={height}
        width={0}
        sizes="(max-width: 768px) 120px, 160px"
        style={{ width: "auto", height: `${height}px` }}
        priority
      />
    </div>
  );
}