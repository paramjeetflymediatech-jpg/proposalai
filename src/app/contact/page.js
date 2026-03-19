"use client";
import { useState } from "react";
import AnimateOnScroll from "../../components/ui/AnimateOnScroll";

/* ─── Data ─────────────────────────────────────────── */
const ROLES = [
  "Sales Representative",
  "Sales Manager / Director",
  "Business Development",
  "Marketing",
  "Operations",
  "C-Suite / Executive",
  "IT / Technical",
  "Other",
];

const HOW_CAN_WE_HELP = [
  "I want to book a product demo",
  "I have a question about pricing",
  "I need technical support",
  "I'm interested in an Enterprise plan",
  "I want to explore integrations",
  "I'm an existing customer with a query",
  "Other",
];

const FEATURES = [
  {
    icon: "⚡",
    title: "AI-Powered Proposals",
    desc: "Generate professional, client-ready proposals in minutes with our intelligent AI engine.",
  },
  {
    icon: "📊",
    title: "Smart Analytics",
    desc: "Track proposal performance and gain insights to improve your win rate continuously.",
  },
  {
    icon: "🔗",
    title: "Seamless Integrations",
    desc: "Connect with your existing CRM, email, and sales tools in just a few clicks.",
  },
  {
    icon: "🛡️",
    title: "Enterprise Security",
    desc: "Bank-grade encryption and compliance to keep your business data safe at all times.",
  },
  {
    icon: "🤝",
    title: "Collaboration Tools",
    desc: "Work together in real-time with your team on proposals, approvals, and feedback.",
  },
  {
    icon: "🚀",
    title: "Faster Deal Cycles",
    desc: "Cut proposal turnaround time by up to 80% and respond to RFPs with confidence.",
  },
];

const CONTACT_INFO = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Our Office",
    value: "123 Business Park, Ludhiana\nPunjab 141001, India",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Phone",
    value: "+91 99999 99999",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: "info@proposalai.com",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Business Hours",
    value: "Monday–Friday, 9 AM – 6 PM IST",
  },
];

/* ─── Page ──────────────────────────────────────────── */
export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    help: "",
    message: "",
    consent: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json();
        alert(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      alert("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ══════════════════════════════════════════════
          SECTION 1 — HERO
          Left: heading + contact info cards
          Right: image with video-tour badge (future state)
      ══════════════════════════════════════════════ */}
      <section className="pt-24 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left */}
            <AnimateOnScroll>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-dark leading-tight mb-6">
                Get in Touch With{" "}
                <span className="text-primary">ProposalAI</span>
              </h1>
              <p className="text-gray-500 text-lg leading-relaxed mb-10">
                Accelerate your sales success with AI-powered proposal software —
                close deals faster, impress clients, and boost your revenue today.
              </p>

              <div className="space-y-5">
                {CONTACT_INFO.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-dark">{item.label}</p>
                      <p className="text-sm text-gray-500 whitespace-pre-line">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>

            {/* Right — placeholder image (swap for video when ready) */}
            <AnimateOnScroll delay={150}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/15">
                {/* TODO: replace with actual image/video */}
                <img
                  src="/about-us-hero.png"
                  alt="ProposalAI Platform Tour"
                  className="w-full h-[400px] object-cover block"
                />
                <div className="absolute inset-0 bg-primary/10" />
                {/* Play badge — video tour (future state) */}
                <div className="absolute bottom-5 left-5 flex items-center gap-3 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2.5 shadow-lg">
                  <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white text-sm flex-shrink-0">
                    ▶
                  </div>
                  <div>
                    <p className="font-bold text-dark text-xs leading-tight">Watch Platform Tour</p>
                    <p className="text-xs text-gray-400">Video coming soon</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 2 — ABOUT / VIDEO SECTION
          Blue bg → white rounded card → title + image
      ══════════════════════════════════════════════ */}
      <section className="bg-primary py-2">
        <div className="bg-white rounded-3xl mx-6 md:mx-10 my-6 px-8 md:px-16 py-14 shadow-sm">
          <AnimateOnScroll>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-dark text-center mb-5">
              Why ProposalAI?
            </h2>
            <p className="text-gray-500 text-center text-base leading-relaxed max-w-2xl mx-auto mb-10">
              We help sales teams win more deals with intelligent proposal
              automation — from creation to tracking, all in one platform.
            </p>
          </AnimateOnScroll>

          {/* Image placeholder — swap with <video> tag when asset is ready */}
          <AnimateOnScroll delay={100}>
            <div className="rounded-2xl overflow-hidden shadow-lg max-w-3xl mx-auto">
              <img
                src="/platform-feature.jpg"
                alt="ProposalAI in action"
                className="w-full h-[360px] object-cover block"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 3 — FEATURES GRID  (3×2)
      ══════════════════════════════════════════════ */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-dark text-center mb-4">
              Everything You Need to Win
            </h2>
            <p className="text-gray-500 text-center text-base max-w-xl mx-auto mb-14">
              Powerful tools built for modern sales teams — so you can focus
              on closing, not formatting.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f, i) => (
              <AnimateOnScroll key={i} delay={i * 60}>
                <div className="bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-xl mb-5">
                    {f.icon}
                  </div>
                  <h3 className="font-display font-bold text-dark text-base mb-2">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 4 — CONTACT FORM
          Blue bg → white rounded card → 2-col layout
          Left: info + side image   Right: form
      ══════════════════════════════════════════════ */}
      <section className="bg-primary py-2" id="contact-form">
        <div className="bg-white rounded-3xl mx-6 md:mx-10 my-6 px-8 md:px-16 py-14 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left — contact info + side image */}
            <AnimateOnScroll className="lg:sticky lg:top-32">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full mb-6">
                Let's Talk
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-dark leading-tight mb-4">
                Get in Touch With{" "}
                <span className="text-primary">ProposalAI</span>
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-10">
                Fill in the form and our team will reach out within one business
                day. We're here to help you win more deals.
              </p>

              <div className="space-y-5 mb-10">
                {CONTACT_INFO.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-dark">{item.label}</p>
                      <p className="text-sm text-gray-500 whitespace-pre-line">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Side image (scientist / tech — matches reference) */}
              <div className="rounded-2xl overflow-hidden shadow-md">
                <img
                  src="/about-us-grid-2.jpg"
                  alt="Our team"
                  className="w-full h-56 object-cover block"
                />
              </div>
            </AnimateOnScroll>

            {/* Right — form */}
            <AnimateOnScroll delay={200}>
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display text-3xl font-bold text-dark mb-3">Message Sent!</h3>
                  <p className="text-gray-500 text-lg">
                    We'll reach out within one business day. Check your inbox!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">

                  {/* First + Last */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-dark mb-2">
                        First name <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text" required
                        value={form.firstName}
                        onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                        placeholder="John"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 text-dark placeholder-gray-400 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-dark mb-2">
                        Last name <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text" required
                        value={form.lastName}
                        onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                        placeholder="Doe"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 text-dark placeholder-gray-400 transition-all"
                      />
                    </div>
                  </div>

                  {/* Email + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-dark mb-2">
                        Work email <span className="text-primary">*</span>
                      </label>
                      <input
                        type="email" required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="john.doe@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 text-dark placeholder-gray-400 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-dark mb-2">
                        Phone number
                      </label>
                      <div className="flex gap-2">
                        <span className="flex items-center px-3 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-dark whitespace-nowrap">
                          🇮🇳 +91
                        </span>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="98765 43210"
                          className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 text-dark placeholder-gray-400 transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Company + Role */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-dark mb-2">
                        Company name <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text" required
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        placeholder="Acme Corp"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 text-dark placeholder-gray-400 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-dark mb-2">
                        Which best describes your role?{" "}
                        <span className="text-primary">*</span>
                      </label>
                      <select
                        required
                        value={form.role}
                        onChange={(e) => setForm({ ...form, role: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 text-dark bg-white transition-all"
                      >
                        <option value="">Please Select</option>
                        {ROLES.map((r) => <option key={r}>{r}</option>)}
                      </select>
                    </div>
                  </div>

                  {/* How can we help */}
                  <div>
                    <label className="block text-sm font-semibold text-dark mb-2">
                      How can we help? <span className="text-primary">*</span>
                    </label>
                    <select
                      required
                      value={form.help}
                      onChange={(e) => setForm({ ...form, help: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 text-dark bg-white transition-all"
                    >
                      <option value="">Please Select</option>
                      {HOW_CAN_WE_HELP.map((h) => <option key={h}>{h}</option>)}
                    </select>
                  </div>

                  {/* Question */}
                  <div>
                    <label className="block text-sm font-semibold text-dark mb-2">
                      What's your question for us?{" "}
                      <span className="text-primary">*</span>
                    </label>
                    <textarea
                      rows={4} required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us more about your needs, goals, or any specific questions…"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 text-dark placeholder-gray-400 resize-none transition-all"
                    />
                  </div>

                  {/* Consent */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox" id="consent" required
                      checked={form.consent}
                      onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                      className="mt-1 w-4 h-4 accent-primary cursor-pointer flex-shrink-0"
                    />
                    <label htmlFor="consent" className="text-xs text-gray-500 leading-relaxed cursor-pointer">
                      I agree to receive email communications from ProposalAI.
                      You may unsubscribe at any time.{" "}
                      <span className="text-primary">*</span>
                      <br />
                      For more information, please read our{" "}
                      <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
                    </label>
                  </div>

                  {/* Submit */}
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
                        Sending…
                      </>
                    ) : (
                      <>
                        Submit
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>

                </form>
              )}
            </AnimateOnScroll>

          </div>
        </div>
      </section>
    </>
  );
}