import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export const metadata = {
  title: "ProposalAI – Human Led, AI Enabled Proposals",
  description:
    "ProposalAI helps teams create winning proposals faster with AI-powered tools for RFP responses, evaluations, and security questionnaires.",
  keywords: "proposal AI, RFP software, AI proposals, bid management",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
