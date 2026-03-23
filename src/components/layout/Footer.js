import Link from "next/link";
import Logo from "../ui/Logo";

const QUICK_LINKS = [
  { label: "Home",       href: "/" },
  { label: "About Us",   href: "/about" },
  { label: "Platform",   href: "/platform" },
  { label: "Resources",  href: "/resource" },
  { label: "Contact Us", href: "/contact" },
];

const LEGAL = [
  { label: "Privacy Policy",            href: "/privacy" },
  { label: "Master Services Agreement", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="bg-[#000000] text-gray-400">

      {/* ── Main area ─────────────────────────────────────────────── */}
      <div className="w-full px-8 sm:px-12 lg:px-16 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">

          {/* Left — logo + tagline */}
          <div className="max-w-xs">
            <div className="mb-4">
              <Logo light />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              ProposalAI is RFP response automation software that streamlines the proposal drafting process, helping your team build winning proposals.
            </p>
          </div>

          {/* Right — Quick Links */}
          <div className="flex flex-col sm:flex-row gap-10 sm:gap-16">
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2.5">
                {QUICK_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
                Legal
              </h4>
              <ul className="space-y-2.5">
                {LEGAL.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ────────────────────────────────────────────── */}
      <div className="border-t border-gray-800">
        <div className="w-full px-8 sm:px-12 lg:px-16 py-5
                        flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            Copyright © {new Date().getFullYear()} Proposal AI
          </p>
          <p className="text-xs text-gray-500">
            All Rights Reserved.
          </p>
        </div>
      </div>

    </footer>
  );
}