"use client";
import { useState } from "react";
import AnimateOnScroll from "../../components/ui/AnimateOnScroll";

const BENEFITS = [
  "30-minute personalized walkthrough",
  "Custom demo based on your use case",
  "Pricing tailored to your team size",
  "Q&A with a proposal expert",
  "Free trial access after the call",
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", company: "", role: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <>
      <section className="min-h-screen pt-24 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <AnimateOnScroll className="lg:sticky lg:top-32">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full mb-6">
                Book a Demo
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
                See ProposalAI
                <br />
                <span className="text-primary">in Action</span>
              </h1>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                Schedule a personalized demo and discover how ProposalAI can transform your proposal process within the first week.
              </p>

              <ul className="space-y-3 mb-10">
                {BENEFITS.map((b, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {b}
                  </li>
                ))}
              </ul>

              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-dark text-sm">Sarah Chen</p>
                    <p className="text-xs text-gray-400">Head of Customer Success</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 italic">"I personally walk through every demo to ensure it's tailored to your specific proposal challenges."</p>
              </div>
            </AnimateOnScroll>

            {/* Form */}
            <AnimateOnScroll delay={200}>
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h2 className="font-display text-3xl font-bold text-dark mb-3">You're Booked!</h2>
                    <p className="text-gray-500 text-lg">We'll reach out within 24 hours to confirm your demo time. Check your inbox!</p>
                  </div>
                ) : (
                  <>
                    <h2 className="font-display text-2xl font-bold text-dark mb-2">Book Your Free Demo</h2>
                    <p className="text-gray-500 text-sm mb-8">Fill in the form and we'll get back to you within one business day.</p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-dark mb-2">Full Name *</label>
                          <input
                            type="text"
                            required
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            placeholder="Jane Smith"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 text-dark placeholder-gray-400 transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-dark mb-2">Work Email *</label>
                          <input
                            type="email"
                            required
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            placeholder="jane@company.com"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 text-dark placeholder-gray-400 transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-dark mb-2">Company *</label>
                          <input
                            type="text"
                            required
                            value={form.company}
                            onChange={(e) => setForm({ ...form, company: e.target.value })}
                            placeholder="Acme Corp"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 text-dark placeholder-gray-400 transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-dark mb-2">Your Role</label>
                          <select
                            value={form.role}
                            onChange={(e) => setForm({ ...form, role: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 text-dark bg-white transition-all"
                          >
                            <option value="">Select role</option>
                            <option>Proposal Manager</option>
                            <option>Sales Director</option>
                            <option>CEO / Founder</option>
                            <option>Operations Manager</option>
                            <option>Other</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-dark mb-2">What challenge can we help with?</label>
                        <textarea
                          rows={4}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          placeholder="Tell us about your current proposal process and what you'd like to improve..."
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 text-dark placeholder-gray-400 resize-none transition-all"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full btn-primary justify-center text-base py-4 shadow-lg shadow-primary/25 disabled:opacity-70"
                      >
                        {loading ? (
                          <>
                            <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            Booking...
                          </>
                        ) : (
                          <>
                            Book My Free Demo
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </>
                        )}
                      </button>

                      <p className="text-center text-xs text-gray-400">
                        By submitting, you agree to our{" "}
                        <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
                        No spam, ever.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
