import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "ProposalAI – Human Led, AI Enabled Proposals",
  description:
    "ProposalAI helps teams create winning proposals faster with AI-powered tools for RFP responses, evaluations, and security questionnaires.",
  keywords: "proposal AI, RFP software, AI proposals, bid management",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={poppins.variable}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
