"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../ui/Logo";

// No themed routes for now - keeping it pure white


const SOLUTION_MENU = {
  useCases: [
    { label: "RFP Responses",          desc: "Win more bids faster.",    href: "/solution/rfp-responses" },
    { label: "RFP Evaluations",        desc: "Score bids consistently.", href: "/solution/grant-writing" },
    { label: "Security Questionnaires",desc: "Answer SQs in minutes.",   href: "/solution/security" },
  ],
  industries: ["Technology", "Re-Insurance Brokers", "Consulting Firms"],
  features: [
    "AI Content Library", "Smart Templates",    "Collaboration Hub",
    "Analytics Dashboard","Compliance Tracking","Integration Suite",
    "Auto-Formatting",    "Version Control",    "E-Signature", "Export Tools",
  ],
};

const COMPANY_MENU = [
  { label: "About Us", href: "/about" },
  { label: "Careers",  href: "/careers" },
  { label: "Press",    href: "/press" },
  { label: "Contact",  href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled]           = useState(false);
  const [openMenu, setOpenMenu]           = useState(null);
  const [mobileOpen, setMobileOpen]       = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);



  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
    setScrolled(false);
  }, [pathname]);

  let headerBg, headerShadow;
  const isPlatformPage = pathname === "/platform";

  if (scrolled) {
    headerBg     = "#ffffff";
    headerShadow = "0 4px 20px -5px rgba(0,0,0,0.10)";
  } else if (isPlatformPage) {
    headerBg     = "#E8E0D0";
    headerShadow = "none";
  } else {
    headerBg     = "#ffffff";
    headerShadow = "none";
  }

  const linkColor = "#374151";
  const toggleMenu = (name) => setOpenMenu(openMenu === name ? null : name);

  return (
    <>
      <header
        style={{
          backgroundColor: headerBg,
          boxShadow: headerShadow,
          transition: "background-color 0.4s ease, box-shadow 0.4s ease",
        }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="w-full px-6 lg:px-10">
          <div className="flex items-center justify-between h-[72px] lg:h-[80px]">

            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Logo height={30} />
            </Link>

            {/* Desktop nav — only show on lg+ */}
            <nav className="hidden lg:flex items-center gap-0">
              {[
                { label: "Home",     href: "/" },
                { label: "Platform", href: "/platform" },
              ].map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  style={{ color: linkColor }}
                  className="px-5 py-2 text-base font-medium hover:opacity-70 transition-opacity"
                >
                  {l.label}
                </Link>
              ))}

              {/* Solution dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleMenu("solution")}
                  style={{ color: openMenu === "solution" ? undefined : linkColor }}
                  className={`flex items-center gap-1 px-5 py-2 text-base font-medium transition-colors ${
                    openMenu === "solution" ? "text-primary" : "hover:opacity-70"
                  }`}
                >
                  Solution
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${openMenu === "solution" ? "rotate-180" : ""}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              <Link
                href="/resource"
                style={{ color: linkColor }}
                className="px-5 py-2 text-base font-medium hover:opacity-70 transition-opacity"
              >
                Resource
              </Link>

              {/* Company dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleMenu("company")}
                  style={{ color: openMenu === "company" ? undefined : linkColor }}
                  className={`flex items-center gap-1 px-5 py-2 text-base font-medium transition-colors ${
                    openMenu === "company" ? "text-primary" : "hover:opacity-70"
                  }`}
                >
                  Company
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${openMenu === "company" ? "rotate-180" : ""}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </nav>

            {/* CTA — desktop only */}
            <div className="hidden lg:flex items-center flex-shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 bg-primary text-white text-base font-semibold
                           pl-6 pr-1.5 py-1.5 rounded-full shadow-lg shadow-primary/25
                           hover:bg-primary/90 transition-all duration-200 whitespace-nowrap"
              >
                Request a Personalized Demo
                <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </Link>
            </div>

            {/* Mobile hamburger — show below lg */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-black/10 transition-colors"
              style={{ color: linkColor }}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
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

        {/* Solution mega-menu */}
        {openMenu === "solution" && (
          <div className="absolute top-full left-0 right-0 bg-gray-900 shadow-2xl border-t border-gray-800 z-50">
            <div className="max-w-7xl mx-auto px-8 py-8 grid grid-cols-4 gap-8">

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

              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Features</h4>
                <ul className="space-y-2">
                  {SOLUTION_MENU.features.slice(0, 5).map((f) => (
                    <li key={f}>
                      <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors" onClick={() => setOpenMenu(null)}>{f}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6">
                <ul className="space-y-2">
                  {SOLUTION_MENU.features.slice(5).map((f) => (
                    <li key={f}>
                      <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors" onClick={() => setOpenMenu(null)}>{f}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800">
              <div className="max-w-7xl mx-auto px-8 py-5 flex items-center gap-6">
                <div className="w-9 h-9 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-white">AI-Powered Proposal Engine</p>
                  <p className="text-xs text-gray-400 mt-0.5">Generate complete proposals in minutes with context-aware AI that learns your voice.</p>
                </div>
                <Link href="/platform" className="text-xs bg-primary/20 text-primary border border-primary/30 px-4 py-2 rounded-full font-semibold hover:bg-primary hover:text-white transition-colors whitespace-nowrap" onClick={() => setOpenMenu(null)}>
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Company dropdown */}
        {openMenu === "company" && (
          <div className="absolute top-full right-10 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 w-48 z-50">
            {COMPANY_MENU.map((item) => (
              <Link key={item.label} href={item.href}
                className="block px-4 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors"
                onClick={() => setOpenMenu(null)}>
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

      {/* Mobile full-screen menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col pt-20 px-6 pb-8 overflow-y-auto">
          <button
            className="absolute top-6 right-6 p-2 rounded-full bg-gray-50 text-gray-900 border border-gray-100"
            onClick={() => setMobileOpen(false)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <nav className="flex flex-col gap-2">
            {[
              { label: "Home",     href: "/" },
              { label: "Platform", href: "/platform" },
              { label: "Resource", href: "/resource" },
            ].map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="px-4 py-4 text-xl font-bold text-gray-900 border-b border-gray-50 flex items-center justify-between"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
                <svg className="w-5 h-5 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}

            {/* Solution accordion */}
            <div className="border-b border-gray-50">
              <button
                onClick={() => setMobileDropdown(mobileDropdown === "solution" ? null : "solution")}
                className="w-full px-4 py-4 text-xl font-bold text-gray-900 flex items-center justify-between"
              >
                Solution
                <svg className={`w-5 h-5 transition-transform ${mobileDropdown === "solution" ? "rotate-90 text-primary" : "opacity-30"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              {mobileDropdown === "solution" && (
                <div className="bg-gray-50/50 rounded-2xl p-4 mb-4">
                  {SOLUTION_MENU.useCases.map((item) => (
                    <Link key={item.label} href={item.href} className="flex flex-col gap-1 p-2" onClick={() => setMobileOpen(false)}>
                      <span className="text-base font-bold text-gray-900">{item.label}</span>
                      <span className="text-xs text-gray-500">{item.desc}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Company accordion */}
            <div className="border-b border-gray-50">
              <button
                onClick={() => setMobileDropdown(mobileDropdown === "company" ? null : "company")}
                className="w-full px-4 py-4 text-xl font-bold text-gray-900 flex items-center justify-between"
              >
                Company
                <svg className={`w-5 h-5 transition-transform ${mobileDropdown === "company" ? "rotate-90 text-primary" : "opacity-30"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              {mobileDropdown === "company" && (
                <div className="bg-gray-50/50 rounded-2xl p-4 mb-4">
                  {COMPANY_MENU.map((item) => (
                    <Link key={item.label} href={item.href} className="block text-base font-bold text-gray-900 p-2" onClick={() => setMobileOpen(false)}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 w-full bg-primary text-white text-lg font-semibold pl-6 pr-2 py-3 rounded-full shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all duration-200"
              onClick={() => setMobileOpen(false)}
            >
              Request a Personalized Demo
              <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}