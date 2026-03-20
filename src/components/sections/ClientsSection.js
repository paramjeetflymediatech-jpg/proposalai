import Image from "next/image";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const BRANDS = [
  { name: "Brand 1",  img: "/brand-1.png" },
  { name: "Brand 2",  img: "/brand-2.png" },
  { name: "Brand 3",  img: "/brand-3.png" },
  { name: "Brand 4",  img: "/brand-4.png" },
  { name: "Brand 5",  img: "/brand-5.png" },
  { name: "Brand 6",  img: "/brand-6.png" },
  { name: "Brand 7",  img: "/brand-7.png" },
  { name: "Brand 8",  img: "/brand-8.png" },
  { name: "Brand 9",  img: "/brand-9.png" },
  { name: "Brand 10", img: "/brand-10.png" },
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
                className="flex-shrink-0 flex items-center justify-center w-40 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 relative h-12"
              >
                <Image
                  src={brand.img}
                  alt={brand.name}
                  fill
                  className="object-contain"
                />
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
