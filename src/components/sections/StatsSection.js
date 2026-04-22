"use client";
import Counter from "../ui/Counter";

// Stat data from the improved mockup
const STATS = [
  {
    value: 75,
    prefix: "+",
    suffix: "%",
    label: "Faster Delivery",
  },
  {
    value: 12,
    prefix: "+",
    suffix: "k+",
    label: "Bids Optimized",
  },
  {
    value: 5,
    prefix: "+",
    suffix: "/5",
    label: "Success Rate",
  },
];

export default function StatsSection() {
  return (
    <section className="bg-white py-16 lg:py-14 border-b border-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-3 gap-2 md:gap-0 md:divide-x divide-gray-100">
          {STATS.map((stat, i) => (
            <div 
              key={i} 
              className={`flex flex-col items-center text-center px-2 md:px-12`}
            >
              <p className="text-[1.5rem] sm:text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] text-[#0A0A0A] leading-none mb-2 sm:mb-4 flex items-baseline">
                <Counter 
                  end={stat.value} 
                  prefix={stat.prefix}
                  suffix={stat.suffix} 
                  duration={2500} 
                />
              </p>
              <p className="text-[#6B7280] text-[10px] sm:text-xs md:text-lg lg:text-xl font-medium tracking-tight uppercase sm:normal-case">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
