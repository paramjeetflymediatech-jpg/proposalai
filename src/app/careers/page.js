import Link from "next/link";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import CTASection from "@/components/sections/CTASection";

export const metadata = {
  title: "Careers – ProposalAI",
  description: "Join the team building the future of proposal management.",
};

const OPEN_ROLES = [
  { title: "Senior AI Engineer", team: "Engineering", location: "Remote / New York", type: "Full-time" },
  { title: "Product Designer", team: "Product", location: "Remote / London", type: "Full-time" },
  { title: "Account Executive", team: "Sales", location: "Remote", type: "Full-time" },
  { title: "Customer Success Manager", team: "Success", location: "Remote / New York", type: "Full-time" },
];

export default function CareersPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full mb-6">
              Careers
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-dark mb-6 leading-tight">
              Build the Future of
              <br />
              <span className="text-primary">Winning Business</span>
            </h1>
            <p className="text-gray-500 text-xl leading-relaxed max-w-2xl mx-auto">
              We're a team of proposal experts and AI enthusiasts on a mission to level the playing field for every company. Join us.
            </p>
          </AnimateOnScroll>
        </div>
      </section>
      <CTASection />
    </>
  );
}
