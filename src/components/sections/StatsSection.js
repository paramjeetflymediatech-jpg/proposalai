import Counter from "../ui/Counter";

const STATS = [
  { value: 500, prefix: "+", suffix: "", label: "Companies Trust Us", desc: "From startups to Fortune 500 enterprises worldwide." },
  { value: 98, prefix: "", suffix: "%", label: "Win Rate Improvement", desc: "Average improvement in proposal win rates for our clients." },
  { value: 10, prefix: "", suffix: "x", label: "Faster Proposals", desc: "Reduce proposal creation time from days to hours." },
  { value: 50, prefix: "+", suffix: "M", label: "Proposals Generated", desc: "Successful proposals created using our AI platform." },
  { value: 40, prefix: "+", suffix: "%", label: "Revenue Growth", desc: "Average revenue increase reported by our customers." },
];

export default function StatsSection() {
  return (
    <section className="bg-primary py-16 relative overflow-hidden">
      {/* Subtle wave top */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 40L1440 40L1440 20C1200 0 800 40 720 20C640 0 240 40 0 20V40Z" fill="white" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {STATS.map((stat, i) => (
            <div key={i} className="text-center text-white">
              <div className="text-4xl md:text-5xl font-display font-extrabold mb-2">
                <Counter end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <h3 className="font-bold text-base mb-1">{stat.label}</h3>
              <p className="text-xs text-white/70 leading-relaxed hidden md:block">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L1440 0L1440 40C1200 60 800 20 720 40C640 60 240 20 0 40V0Z" fill="#E8FDF5" />
        </svg>
      </div>
    </section>
  );
}
