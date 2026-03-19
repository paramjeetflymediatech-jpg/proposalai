"use client";
import Counter from "../ui/Counter";

// Counter data from client doc — exact copy
const STATS = [
  {
    value: 25,
    suffix: "%",
    label: "More Bids",
    desc: "Win more projects by reducing cycle times and responding to opportunities faster.",
  },
  {
    value: 80,
    suffix: "%",
    label: "Faster Drafting Time",
    desc: "Generate high quality, brand aligned and compliant responses in minutes rather than days.",
  },
  {
    value: 50,
    suffix: "%",
    label: "Time Reclaimed",
    desc: "Spend half the time searching and double the time strategizing.",
  },
  {
    value: 0,
    suffix: "",
    label: "Wasted Cycles",
    desc: "Instantly disqualify bad fits. Focus 100% of your expert capacity on the deals you could win.",
  },
  {
    value: 100,
    suffix: "%",
    label: "RFP Compliance",
    desc: "Automatically map every response to the required structure to ensure total alignment and accuracy.",
  },
];

export default function StatsSection() {
  return (
    /* Blue background section — rounded top corners matching reference */
    <section
      className="bg-primary py-14"
      style={{ borderRadius: "40px 40px 0 0", marginTop: "-2px" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
          {STATS.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">

              {/* Large counter — "+0" style matching reference */}
              <p className="font-display text-4xl md:text-5xl font-bold text-white mb-2 leading-none">
                +<Counter end={stat.value} prefix="" suffix={stat.suffix} duration={2000} />
              </p>

              {/* Label */}
              <p className="text-white font-semibold text-sm mb-3">
                {stat.label}
              </p>

              {/* Description */}
              <p className="text-white/70 text-xs leading-relaxed max-w-[180px]">
                {stat.desc}
              </p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}