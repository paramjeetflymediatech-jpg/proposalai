import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export const metadata = {
  title: "Terms and Conditions | ProposalAI",
  description: "Read the Terms and Conditions for using ProposalAI's services.",
};

export default function TermsAndConditions() {
  const lastUpdated = "March 21, 2026";

  return (
    <div className="bg-white min-h-screen">
      {/* ── Banner/Header ─────────────────────────────────────────── */}
      <section className="bg-primary py-24 px-6 md:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateOnScroll>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Terms & Conditions
            </h1>
            <p className="text-white/80 text-lg">
              Master Services Agreement | Last Updated: {lastUpdated}
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Content ───────────────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-10">
        <div className="max-w-4xl mx-auto prose prose-blue lg:prose-lg text-gray-600">
          
          <AnimateOnScroll delay={100}>
            <p className="text-xl mb-12">
              Welcome to <strong>ProposalAI</strong>. By accessing or using our platform, you agree to be bound by these Terms and Conditions. Please read them carefully.
            </p>
          </AnimateOnScroll>

          <div className="space-y-12">
            
            <AnimateOnScroll delay={150}>
              <h2 className="text-2xl font-bold text-dark border-b border-gray-100 pb-4 mb-6">
                1. Acceptance of Terms
              </h2>
              <p>
                By using the ProposalAI website and services, you signify your agreement to these Terms and Conditions and our Privacy Policy. If you do not agree to any of these terms, you must not use our services.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <h2 className="text-2xl font-bold text-dark border-b border-gray-100 pb-4 mb-6">
                2. Use of Services
              </h2>
              <p>
                ProposalAI provides AI-powered tools for RFP response and proposal generation. You agree to use these services only for lawful purposes and in accordance with these terms.
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>You are responsible for the accuracy and legality of the data you upload.</li>
                <li>You may not use our platform to generate fraudulent or harmful content.</li>
                <li>Commercial use of our services is subject to the specific subscription plan you have chosen.</li>
              </ul>
            </AnimateOnScroll>

            <AnimateOnScroll delay={250}>
              <h2 className="text-2xl font-bold text-dark border-b border-gray-100 pb-4 mb-6">
                3. Intellectual Property
              </h2>
              <p>
                The ProposalAI platform, including its software, AI models, design, and content, is the exclusive property of ProposalAI and is protected by copyright and other intellectual property laws.
              </p>
              <p className="mt-4">
                Your uploaded content remains your property. However, by using the platform, you grant ProposalAI a license to process your content for the purpose of providing the services.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={300}>
              <h2 className="text-2xl font-bold text-dark border-b border-gray-100 pb-4 mb-6">
                4. Limitation of Liability
              </h2>
              <p>
                ProposalAI provides its services "as is" and "as available." We do not warrant that the AI-generated content will be error-free or meet your specific business requirements. We are not liable for any indirect, incidental, or consequential damages resulting from your use of the platform.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={350}>
              <h2 className="text-2xl font-bold text-dark border-b border-gray-100 pb-4 mb-6">
                5. Termination
              </h2>
              <p>
                We reserve the right to suspend or terminate your access to the platform at our discretion, without notice, for conduct that we believe violates these terms or is harmful to other users or our business interests.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={400}>
              <h2 className="text-2xl font-bold text-dark border-b border-gray-100 pb-4 mb-6">
                6. Governing Law
              </h2>
              <p>
                These terms are governed by and construed in accordance with the laws of the jurisdiction in which ProposalAI operates, without regard to its conflict of law principles.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={450}>
              <h2 className="text-2xl font-bold text-dark border-b border-gray-100 pb-4 mb-6">
                7. Contact Us
              </h2>
              <p>
                If you have any questions about these Terms and Conditions, please contact us at info@proposalai.com.
              </p>
            </AnimateOnScroll>

          </div>
        </div>
      </section>
    </div>
  );
}
