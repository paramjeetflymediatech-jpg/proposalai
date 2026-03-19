"use client";

import { useState } from "react";

const FAQ_ITEMS = [
  {
    q: "1. What is ProposalAI and who is it designed for?",
    a: "ProposalAI creates a powerful, intelligent knowledge base by expertly extracting insights from your documents, enabling teams in sectors like Insurance, Technology and Consulting to generate highly contextually aware responses for RFPs and questionnaires much faster.",
  },
  {
    q: "2. Is the data and information I upload to ProposalAI secure?",
    a: "Yes, ProposalAI employs robust security measures to protect your uploaded data, ensuring its confidentiality and exclusive use within your private knowledge base.",
  },
  {
    q: "3. How is the AI in ProposalAI different from public AI models like ChatGPT?",
    a: "ProposalAI's AI delivers highly relevant and contextually accurate responses because it's trained exclusively on your company's specific documents and expertise, unlike broadly trained public AI models.",
  },
  {
    q: "4. How much time can our team expect to save using ProposalAI?",
    a: "Teams using ProposalAI typically achieve significant efficiency gains, often reducing time spent on proposals and questionnaires by up to 80%.",
  },
  {
    q: "5. Will ProposalAI replace our existing proposal writers or subject matter experts?",
    a: "No, ProposalAI empowers your experts by automating repetitive tasks, allowing them to focus on strategic, high-value work and final review.",
  },
  {
    q: "6. How does ProposalAI actually use my company's existing documents?",
    a: "ProposalAI intelligently processes your uploaded documents to build a secure, private knowledge base that its AI uses to help you generate accurate, company-specific responses.",
  },
];

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left text-dark font-medium text-base md:text-lg hover:text-primary transition-colors duration-200"
      >
        <span>{item.q}</span>
        <span className="flex-shrink-0">
          {isOpen ? (
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          )}
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100 pb-5" : "max-h-0 opacity-0"}`}>
        <p className="text-gray-500 text-sm md:text-base leading-relaxed">{item.a}</p>
      </div>
    </div>
  );
}

export default function FaqAccordion() {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i);

  return (
    <div>
      {FAQ_ITEMS.map((item, i) => (
        <FaqItem key={i} item={item} isOpen={openFaq === i} onToggle={() => toggleFaq(i)} />
      ))}
    </div>
  );
}