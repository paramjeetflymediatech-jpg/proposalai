import AnimateOnScroll from "../ui/AnimateOnScroll";

const BRANDS = [
  { name: "Chevrolet", abbr: "Chevrolet" },
  { name: "Dodge", abbr: "Dodge" },
  { name: "Ford", abbr: "Ford" },
  { name: "Honda", abbr: "Honda" },
  { name: "Hyundai", abbr: "Hyundai" },
  { name: "Jeep", abbr: "Jeep" },
  { name: "BMW", abbr: "BMW" },
  { name: "Audi", abbr: "Audi" },
  { name: "Wagoneer", abbr: "Wagoneer" },
  { name: "Kia", abbr: "KIA" },
];

export default function ClientsSection() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <AnimateOnScroll>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mb-3">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-500">Join hundreds of companies already winning with ProposalAI</p>
        </AnimateOnScroll>
      </div>

      {/* Marquee */}
      <div className="relative">
        <div className="flex overflow-hidden gap-0">
          <div className="flex animate-marquee gap-16 whitespace-nowrap items-center">
            {[...BRANDS, ...BRANDS].map((brand, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center justify-center w-32 grayscale hover:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100"
              >
                <span className="font-display font-black text-xl text-dark tracking-tight">{brand.abbr}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}
