"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "../ui/Logo";

const SOLUTION_MENU = {
  useCases: [
    { label: "RFP Responses", desc: "Win more bids faster.", href: "/solution/rfp-responses" },
    { label: "RFP Evaluations", desc: "Score bids consistently.", href: "/solution/rfp-evaluations" },
    { label: "Security Questionnaires", desc: "Answer SQs in minutes.", href: "/solution/security" },
  ],
  industries: ["Technology", "Re-Insurance Brokers", "Consulting Firms"],
  features: [
    "AI Content Library", "Smart Templates", "Collaboration Hub",
    "Analytics Dashboard", "Compliance Tracking", "Integration Suite",
    "Auto-Formatting", "Version Control", "E-Signature", "Export Tools",
  ],
};

const COMPANY_MENU = [
  { label: "About Us", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Press", href: "/press" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = (name) => setOpenMenu(openMenu === name ? null : name);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Logo />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              <Link href="/" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors rounded-lg hover:bg-gray-50">
                Home
              </Link>
              <Link href="/platform" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors rounded-lg hover:bg-gray-50">
                Platform
              </Link>

              {/* Solution dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleMenu("solution")}
                  className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                    openMenu === "solution" ? "text-primary bg-blue-50" : "text-gray-700 hover:text-primary hover:bg-gray-50"
                  }`}
                >
                  Solution
                  <svg className={`w-3.5 h-3.5 transition-transform ${openMenu === "solution" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              <Link href="/resource" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors rounded-lg hover:bg-gray-50">
                Resource
              </Link>

              {/* Company dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleMenu("company")}
                  className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                    openMenu === "company" ? "text-primary bg-blue-50" : "text-gray-700 hover:text-primary hover:bg-gray-50"
                  }`}
                >
                  Company
                  <svg className={`w-3.5 h-3.5 transition-transform ${openMenu === "company" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <Link href="/contact" className="btn-primary text-sm">
                Book a Demo
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

            {/* Mobile menu btn */}
            <button
              className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Solution Mega Menu */}
        {openMenu === "solution" && (
          <div className="absolute top-full left-0 right-0 bg-gray-900 shadow-2xl border-t border-gray-800 z-50 animate-fade-in">
            <div className="max-w-7xl mx-auto px-8 py-8 grid grid-cols-4 gap-8">
              {/* Use Cases */}
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Use Cases</h4>
                <ul className="space-y-3">
                  {SOLUTION_MENU.useCases.map((item) => (
                    <li key={item.label}>
                      <Link href={item.href} className="group flex items-start gap-3" onClick={() => setOpenMenu(null)}>
                        <div className="w-7 h-7 rounded-lg bg-gray-700 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary transition-colors">
                          <svg className="w-3.5 h-3.5 text-gray-300 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white group-hover:text-primary transition-colors">{item.label}</p>
                          <p className="text-xs text-gray-400 mt-0.5">{item.desc}</p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link href="/solution" className="inline-flex items-center gap-1 text-xs text-primary mt-5 font-semibold hover:gap-2 transition-all" onClick={() => setOpenMenu(null)}>
                  See All Solutions →
                </Link>
              </div>

              {/* Industries */}
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Industries</h4>
                <ul className="space-y-2">
                  {SOLUTION_MENU.industries.map((ind) => (
                    <li key={ind}>
                      <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors" onClick={() => setOpenMenu(null)}>{ind}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Features list */}
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Features</h4>
                <ul className="space-y-2">
                  {SOLUTION_MENU.features.slice(0, 5).map((f) => (
                    <li key={f}><Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors" onClick={() => setOpenMenu(null)}>{f}</Link></li>
                  ))}
                </ul>
              </div>
              <div className="pt-6">
                <ul className="space-y-2">
                  {SOLUTION_MENU.features.slice(5).map((f) => (
                    <li key={f}><Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors" onClick={() => setOpenMenu(null)}>{f}</Link></li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Featured card */}
            <div className="border-t border-gray-800">
              <div className="max-w-7xl mx-auto px-8 py-5 flex items-center gap-6">
                <div className="w-9 h-9 rounded-xl bg-primary/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-white">AI-Powered Proposal Engine</p>
                  <p className="text-xs text-gray-400 mt-0.5">Generate complete proposals in minutes with context-aware AI that learns your voice.</p>
                </div>
                <Link href="/platform" className="text-xs bg-primary/20 text-primary border border-primary/30 px-4 py-2 rounded-full font-semibold hover:bg-primary hover:text-white transition-colors" onClick={() => setOpenMenu(null)}>
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Company Dropdown */}
        {openMenu === "company" && (
          <div className="absolute top-full right-60 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 w-48 z-50 animate-fade-in">
            {COMPANY_MENU.map((item) => (
              <Link key={item.label} href={item.href} className="block px-4 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors" onClick={() => setOpenMenu(null)}>
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Backdrop */}
      {openMenu && (
        <div className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm" onClick={() => setOpenMenu(null)} />
      )}

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col pt-16 px-6 pb-8 overflow-y-auto">
          <button className="absolute top-4 right-4 p-2 rounded-lg text-gray-600 hover:bg-gray-100" onClick={() => setMobileOpen(false)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <nav className="space-y-1 mt-4">
            {[
              { label: "Home", href: "/" },
              { label: "Platform", href: "/platform" },
              { label: "Solution", href: "/solution" },
              { label: "Resource", href: "/resource" },
              { label: "Company", href: "/about" },
            ].map((item) => (
              <Link key={item.label} href={item.href} className="flex items-center gap-3 px-4 py-3 text-lg font-medium text-gray-800 hover:text-primary hover:bg-gray-50 rounded-xl transition-colors" onClick={() => setMobileOpen(false)}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto pt-8">
            <Link href="/contact" className="btn-primary w-full justify-center" onClick={() => setMobileOpen(false)}>
              Book a Demo
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
