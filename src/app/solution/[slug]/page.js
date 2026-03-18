import Link from "next/link";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import CTASection from "@/components/sections/CTASection";
import { notFound } from "next/navigation";

export default function SolutionDetailPage({ params }) {
  return (
    <>
      <section className="pt-32 pb-20 bg-white text-center">
        <h1 className="text-4xl font-bold">Solution: {params.slug}</h1>
        <p className="text-gray-500 mt-4">Details about {params.slug} coming soon.</p>
        <div className="mt-8">
          <Link href="/" className="btn-primary">Back Home</Link>
        </div>
      </section>
      <CTASection />
    </>
  );
}
