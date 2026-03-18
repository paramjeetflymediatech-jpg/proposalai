import Link from "next/link";
import AnimateOnScroll from "../ui/AnimateOnScroll";

const SERVICES = [
  {
    title: "RFP Response Automation",
    desc: "Generate comprehensive RFP responses in hours, not days. Our AI extracts requirements, matches your capabilities, and drafts compelling content automatically.",
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    bg: "bg-emerald-400",
    href: "/solution/rfp-responses",
  },
  {
    title: "Intelligent Bid Evaluation",
    desc: "Score and compare incoming proposals with consistent, objective AI evaluation. Eliminate bias and ensure every bid gets fair, thorough assessment.",
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    bg: "bg-pink-400",
    href: "/solution/rfp-evaluations",
  },
  {
    title: "Security Questionnaire Engine",
    desc: "Answer security questionnaires 10x faster. Build a knowledge base from past responses and let AI handle repetitive compliance documentation.",
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    bg: "bg-primary",
    href: "/solution/security",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <AnimateOnScroll>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-dark">
              Everything You Need to
              <br />
              <span className="text-primary">Win More Business</span>
            </h2>
            <p className="text-gray-500 text-lg mt-4 max-w-xl">
              A complete suite of AI-powered tools built for proposal teams that want to move faster and win more.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <Link href="/contact" className="btn-primary whitespace-nowrap">
              Book a Demo
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </AnimateOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <AnimateOnScroll key={i} delay={i * 120}>
              <Link href={service.href} className="group block">
                <div className={`${service.bg} rounded-3xl p-8 card-hover h-full`}>
                  <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{service.desc}</p>
                  <div className="mt-6 w-10 h-10 rounded-full bg-dark flex items-center justify-center group-hover:bg-white group-hover:shadow-lg transition-all duration-300">
                    <svg className="w-4 h-4 text-white group-hover:text-dark transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
