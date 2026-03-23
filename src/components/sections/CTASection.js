import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "../ui/AnimateOnScroll";

export default function CTASection({ title, subtitle, btnLabel = "Book a Demo", btnHref = "/contact", secondBtn, image }) {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Wave top */}
      

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="bg-white rounded-3xl p-10 md:p-16 shadow-2xl">
          <div className={`grid grid-cols-1 ${image ? "lg:grid-cols-2" : "max-w-4xl mx-auto"} gap-12 items-center`}>
            <AnimateOnScroll>
              <h2 className="font-display text-4xl md:text-5xl font-light text-dark mb-5 leading-tight">
                {title || "Ready to Win More Proposals?"}
              </h2>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                {subtitle || "Join hundreds of companies already using ProposalAI to create better proposals in less time."}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href={btnHref} className="btn-primary text-base px-8 py-4 shadow-lg shadow-primary/25">
                  {btnLabel}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                {secondBtn && (
                  <Link href={secondBtn.href} className="btn-dark text-base px-8 py-4">
                    {secondBtn.label}
                  </Link>
                )}
              </div>
            </AnimateOnScroll>

            {image && (
              <AnimateOnScroll delay={200}>
                <div className="rounded-2xl overflow-hidden shadow-xl relative h-72">
                  <Image
                    src={image}
                    alt="Platform preview"
                    fill
                    className="object-cover"
                  />
                </div>
              </AnimateOnScroll>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
