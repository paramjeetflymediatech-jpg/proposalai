import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export const metadata = {
  title: "Privacy Policy | ProposalAI",
  description: "Learn how ProposalAI collects, uses, and protects your information.",
};

export default function PrivacyPolicy() {
  const lastUpdated = "March 21, 2026";

  return (
    <div className="bg-white min-h-screen">
      {/* ── Banner/Header ─────────────────────────────────────────── */}
      <section className="bg-primary py-24 px-6 md:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateOnScroll>
            <h1 className="font-display text-4xl md:text-5xl font-medium text-white mb-6 mt-10">
              Privacy Policy
            </h1>
            <p className="text-white/80 text-lg">
              Last Updated: {lastUpdated}
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Content ───────────────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-10">
        <div className="max-w-4xl mx-auto prose prose-blue lg:prose-lg text-gray-600">
          
          <AnimateOnScroll delay={100}>
            <p className="text-xl mb-12">
              At <strong>ProposalAI</strong>, we take your privacy seriously. This policy explains how we collect, use, and handle your data when you use our services.
            </p>
          </AnimateOnScroll>

          <div className="space-y-12">
            
            <AnimateOnScroll delay={150}>
              <h2 className="text-2xl font-medium text-dark border-b border-gray-100 pb-4 mb-6">
                1. Information We Collect
              </h2>
              <p>
                We collect information that you voluntarily provide to us when you register on our platform, subscribe to our newsletter, or contact us. This may include:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Name, email address, and job title.</li>
                <li>Company information and RFP/Proposal data you upload for processing.</li>
                <li>Payment information (handled by secure third-party processors).</li>
                <li>Usage data and technical information about your device and browser.</li>
              </ul>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <h2 className="text-2xl font-medium text-dark border-b border-gray-100 pb-4 mb-6">
                2. How We Use Your Data
              </h2>
              <p>
                The information we collect is used to power our AI models and provide you with a superior proposal writing experience. Specifically, we use it to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Analyze RFP documents and generate draft responses.</li>
                <li>Maintain and improve our platform functionality.</li>
                <li>Communicate with you regarding updates, support, or marketing.</li>
                <li>Ensure the security and integrity of our services.</li>
              </ul>
            </AnimateOnScroll>

            <AnimateOnScroll delay={250}>
              <h2 className="text-2xl font-medium text-dark border-b border-gray-100 pb-4 mb-6">
                3. Data Security & Storage
              </h2>
              <p>
                Your data is stored securely using industry-standard encryption. We implement technical and organizational measures to prevent unauthorized access, loss, or disclosure.
              </p>
              <p className="mt-4">
                We do not sell your personal data to third parties. Your company data uploaded for proposal generation is processed securely and is only accessible by authorized personnel for maintenance or by you.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={300}>
              <h2 className="text-2xl font-medium text-dark border-b border-gray-100 pb-4 mb-6">
                4. Third-Party Services
              </h2>
              <p>
                We may use trusted third-party services for analytics, hosting, and payment processing. These providers only have access to the data necessary to perform their roles and are bound by strict privacy agreements.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={350}>
              <h2 className="text-2xl font-medium text-dark border-b border-gray-100 pb-4 mb-6">
                5. Your Rights
              </h2>
              <p>
                You have the right to access, correct, or delete your personal information at any time. If you wish to exercise these rights or have questions about your data, please contact us at info@proposalai.com.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={400}>
              <h2 className="text-2xl font-medium text-dark border-b border-gray-100 pb-4 mb-6">
                6. Updates to This Policy
              </h2>
              <p>
                We may update this policy periodically to reflect changes in our practices or legal requirements. We encourage you to review this page regularly.
              </p>
            </AnimateOnScroll>

          </div>
        </div>
      </section>
    </div>
  );
}
