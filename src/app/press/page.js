import Link from "next/link";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import CTASection from "@/components/sections/CTASection";

export const metadata = {
  title: "Press – ProposalAI",
  description: "Recent news, press releases, and media assets from ProposalAI.",
};

export default function PressPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <span className="inline-block text-xs font-light uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full mb-6">
              Press & News
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-light text-dark mb-6 leading-tight">
              Latest from
              <br />
              <span className="text-primary">ProposalAI HQ</span>
            </h1>
          </AnimateOnScroll>
        </div>
      </section>
      <CTASection />
    </>
  );
}
