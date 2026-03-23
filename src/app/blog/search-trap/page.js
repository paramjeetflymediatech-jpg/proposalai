import Link from "next/link";
import AnimateOnScroll from "../../../components/ui/AnimateOnScroll";

export const metadata = {
  title: "The Search Trap: Why Old Proposal Libraries Are Failing Your Team – ProposalAI Blog",
  description: "Are your proposal experts stuck acting as librarians? Find out why searchable databases aren't enough anymore and how to shift from finding answers to creating them.",
};

export default function BlogSearchTrapPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-white pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <AnimateOnScroll>
            <Link href="/resource" className="inline-flex items-center gap-2 text-primary text-sm font-semibold mb-8 hover:gap-3 transition-all">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              Back to Resources
            </Link>
            <div className="flex items-center gap-3 mb-5">
              <span className="bg-violet-100 text-violet-700 text-xs font-medium uppercase tracking-widest px-3 py-1.5 rounded-full">Blog</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1.5 rounded-full">Productivity</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium text-dark mb-6 leading-[1.08]">
              The Search Trap: Why Old Proposal Libraries Are Failing Your Team
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-400 mb-10">
              <span>March 1, 2026</span>
              <span>·</span>
              <span>6 min read</span>
              <span>·</span>
              <span>ProposalAI Team</span>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Article body ── */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <AnimateOnScroll>
          <div className="prose prose-lg max-w-none text-gray-700">

            <p className="text-xl text-gray-600 leading-relaxed mb-8 font-medium">
              Are your proposal experts stuck acting as librarians? Find out why searchable databases aren&apos;t enough anymore and how to shift from finding answers to creating them.
            </p>

            <h2 className="font-display text-2xl font-medium text-dark mt-8 mb-4">The Search Trap: Stop Searching, Start Finishing</h2>

            <p>We&apos;ve all been there. A strategic RFP lands on your desk. The questions look familiar. You know your team has answered this exact security question or described this specific methodology before.</p>

            <p>So, you open your proposal software. You type in a keyword. And then... you wait.</p>

            <p>You find 50 results. Some are from 2019. Some are from a failed bid. Some contradict each other. You spend the next hour reading, comparing, copying, pasting, and rewriting.</p>

            {/* Callout box */}
            <div className="bg-dark text-white rounded-2xl p-8 my-10 text-center">
              <p className="text-lg font-medium mb-2">This is the &quot;Search Trap.&quot;</p>
              <p className="text-white/70">For enterprise teams trying to move fast, it is the single biggest thing slowing you down.</p>
            </div>

            <h2 className="font-display text-2xl font-medium text-dark mt-12 mb-4">The Broken Promise of Old Libraries</h2>

            <p>For the last decade, the proposal software market has sold a single promise: <strong>Centralized Content.</strong> The logic seemed simple. If we put all our answers in one searchable database, we will be faster.</p>

            <p>But there is a flaw in that logic. Traditional tools are essentially just better search engines, not writers. They are passive. They place the burden of work entirely on you. You still have to:</p>

            <ul className="space-y-2 my-6">
              {[
                "Search for the right snippet in a sea of documents.",
                "Select the best version from conflicting data.",
                "Tailor the generic answer to fit this specific client.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-gray-400 mt-2.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p>That isn&apos;t automation. It&apos;s just digital filing. It turns your highly paid proposal leads into librarians doing maintenance, when they should be strategists focused on production.</p>

            <h2 className="font-display text-2xl font-medium text-dark mt-12 mb-4">Moving From &quot;Retrieval&quot; to &quot;Creation&quot;</h2>

            <p>To win in today&apos;s market, you need a tool that offers both high speed and high control. You need to stop just storing answers and start generating them.</p>

            <p>This is where ProposalAI is different. We don&apos;t just help you find an answer; we help you <strong>finish the response.</strong></p>

            <div className="space-y-5 my-8">
              {[
                { title: "Context, Not Just Keywords", body: "Old tools look for matching words. We use Contextual Intelligence to understand what is actually being asked. By using your company&apos;s own data &mdash; your past wins, specs, and brand voice &mdash; our system synthesizes your collective intelligence. It recommends content that answers the specific question in front of you, not just the one you answered three years ago." },
                { title: "Intelligent Knowledge Base", body: "We ingest your documents so you can simply 'chat' with them and get accurate answers based on your own data." },
                { title: "Auto-Drafting", body: "We extract requirements from the RFP and build a branded first draft in minutes. This approach allows teams to stop searching and start finishing." },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6 border-l-4 border-primary">
                  <h3 className="font-medium text-dark mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>

            <h2 className="font-display text-2xl font-medium text-dark mt-12 mb-4">The Human Advantage</h2>

            <p>The goal of AI isn&apos;t to replace your experts. It is to <strong>free them up.</strong></p>

            <p>When you are stuck in the Search Trap, your subject matter experts are wasting billable hours on &quot;proposal plumbing&quot; &mdash; formatting slides and hunting for case studies.</p>

            <p>ProposalAI handles the repetitive, heavy lifting. It hands you a high-quality draft that is mostly done. This lets your human experts step in for the final strategic polish that actually wins the deal.</p>

            <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6 my-8 text-center">
              <p className="font-display text-xl font-medium text-dark">AI writes the draft. You own the win.</p>
            </div>

            <h2 className="font-display text-2xl font-medium text-dark mt-12 mb-4">Stop Searching. Start Winning.</h2>

            <p>If your team spends more time searching for content than refining strategy, you are caught in an outdated workflow. Moving from manual searching to intelligent drafting is reclaiming millions in billable time for consulting firms and speeding up sales cycles for tech leaders.</p>

            <p>Don&apos;t settle for a better search bar. Get a solution that helps you <strong>finish.</strong></p>

          </div>

          {/* CTA block */}
          <div className="mt-14 bg-dark rounded-2xl p-8 md:p-10 text-center">
            <h3 className="font-display text-2xl font-medium text-white mb-3">Ready to break out of the Search Trap?</h3>
            <p className="text-white/60 mb-6">See how ProposalAI can turn your documents into a winning advantage.</p>
            <Link href="/contact"
              className="inline-flex items-center gap-2.5 bg-primary text-white text-sm font-semibold pl-6 pr-1.5 py-1.5 rounded-full shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all duration-200">
              Book a 15-Minute Demo
              <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </span>
            </Link>
          </div>
        </AnimateOnScroll>
      </article>
    </>
  );
}