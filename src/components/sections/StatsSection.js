"use client";
import Counter from "../ui/Counter";
import AnimateOnScroll from "../ui/AnimateOnScroll";

const STATS = [
  {
    value: 25,
    suffix: "%",
    label: "More Bids",
    desc: "Win more projects by reducing cycle times and responding faster.",
    color: "from-[#1A9CDA] to-[#00B4D8]"
  },
  {
    value: 80,
    suffix: "%",
    label: "Faster Drafting",
    desc: "Generate brand-aligned responses in minutes instead of days.",
    color: "from-[#1A9CDA] to-[#00B4D8]"
  },
  {
    value: 50,
    suffix: "%",
    label: "Time Reclaimed",
    desc: "Spend half the time searching and double the time strategizing.",
    color: "from-[#1A9CDA] to-[#00B4D8]"
  },
  {
    value: 0,
    start: 100,
    suffix: "",
    label: "Wasted Cycles",
    desc: "Instantly disqualify bad fits. Focus 100% on deals you could win.",
    color: "from-[#1A9CDA] to-[#00B4D8]"
  },
  {
    value: 100,
    suffix: "%",
    label: "RFP Compliance",
    desc: "Automatically map responses to required structure for accuracy.",
    color: "from-[#1A9CDA] to-[#00B4D8]"
  },
];

export default function StatsSection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-primary">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-secondary/5 blur-[150px] rounded-full translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4">
          {STATS.map((stat, i) => (
            <AnimateOnScroll key={i} delay={i * 100} className="h-full">
              <div className="group relative h-full p-8 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2">
             
                
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <p className={`text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r ${stat.color} bg-clip-text text-transparent  text-center`}>
                      <Counter 
                        end={stat.value} 
                        start={stat.start ?? 0}
                        prefix={stat.suffix === "%" && stat.value > 0 ? "+" : ""}
                        suffix={stat.suffix} 
                        duration={2500} 
                      />
                    </p>
                  </div>
                  
                  <div className="flex flex-col flex-grow">
                    <h4 className="text-lg font-bold text-[#0A0A0A] mb-3 group-hover:text-primary transition-colors duration-300">
                      {stat.label}
                    </h4>
                    <p className="text-sm text-gray-500 leading-relaxed font-medium">
                      {stat.desc}
                    </p>
                  </div>
                </div>

                {/* Subtle Card Glow */}
                <div className={`absolute inset-0 rounded-[2.5rem] bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500 pointer-events-none`} />
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
