
import Image from "next/image";
import { notFound } from "next/navigation"; 

const PAGE_DATA = {
  "technology": {
    hero: {
      title: "Technology Companies & SaaS Providers: Respond Faster, Secure Trust, Sell More.",
       image: "/industry/top-sas.png",
      titleHighlight: "Your Challenge",
      subtitle: "Creating detailed, tailored proposals for complex enterprise RFPs, and meticulously completing lengthy security questionnaires or due diligence requests, takes too much time away from product development and sales. Quickly finding specific technical details, security controls, or past solution descriptions is a constant struggle.", 
      listHeadinfg:"Our Solution",
      list: [
        "Upload all your past proposals, technical documents, security documentation, compliance reports, and marketing collateral to create a unified knowledge base.",
        "Instantly query your knowledge base (like ChatGPT, but with your data) to find precise answers for RFPs, security questions, and due diligence inquiries.",
        "Automatically extract requirements from new RFPs and generate a branded first draft proposal using your best existing content, enriched by AI.",
        "Conduct deep market research on clients. Industries and competitors to best align your positioning.",
        "Validate your response and submit final polished documents with confidence every time.",
      ],
      list2Headinfg: "Impact",
      list2: [
        "Slash proposal and questionnaire completion time",
        "Ensure accuracy and brand consistency",
        "Free up expert and security teams",
        "Accelerate sales cycles and build client trust",
      ],
    },
   
  },
  "management-firms": {
    hero: {
      title: "Management & Strategy Consulting Firms: Craft Insightful Proposals, Convey Value, Capture Wins.",
       image: "/consult/b.png",
      titleHighlight: "Your Challenge",
      subtitle: "Each client RFP demands a unique, insightful proposal showcasing your firm’s methodology, relevant experience, and value. Manually collating this from past engagements and tailoring it under tight deadlines is a major drain.", 
      listHeadinfg:"Our Solution",
      list: [
        "Transform your library of past proposals, case studies, and methodology documents into a dynamic knowledge base.",
        "Ask your knowledge base to synthesize information for new bid sections or find the most relevant case studies instantly.",
        "Upload client RFPs to extract needs, then generate a branded first draft proposal using your firm's insights and AI enhancements.",
        "Conduct AI-assisted market research to sharpen your competitive edge.",
        "Create PowerPoint decks to present your proposed solution and value",
      ],
      list2Headinfg: "Impact",
      list2: [
       "Radically reduce time spent on proposal drafting",
       "Ensure high-quality, consistent messaging accuracy and brand consistency",
       "Enable consultants to focus on strategic thinking",
       "Produce tailored, impactful proposals at scale.",
      ],
    },
   
  },
  "re-insurance-brokers": {
    hero: {
      title: "Re-insurance Brokers: Master Complexity, Accelerate Placements, Win More Business.",
       image: "/content/re.png",
      titleHighlight: "Your Challenge",
      subtitle: "Responding effectively to complex and time-sensitive RFPs from major cedents is critical for winning and retaining key accounts. This requires rapidly synthesizing vast amounts of market intelligence, historical placement data, and internal expertise to craft highly tailored, compelling, and compliant proposals that clearly articulate your firm’s unique value proposition and proposed reinsurance structures.", 
      listHeadinfg:"Our Solution",
      list: [
        "Centralize your library of successful past RFP responses, market analyses, and proprietary structuring expertise into a dynamic, interactive knowledge base.",
        "Instantly query your knowledge base (like ChatGPT, but with your firm's data) to find the most relevant information, data points, and strategic insights needed to address specific RFP requirements.",
        "Upload RFP documents; let AI extract key requirements and rapidly generate customized, high-quality draft proposals, leveraging your firm's best-in-class content and historical successes.",
        "Utilize AI-assisted market research capabilities to quickly incorporate current market data and perspectives that strengthen your RFP responses.",
        "Validate your response and submit final polished documents with confidence every time.",
      ],
      list2Headinfg: "Impact",
      list2: [
        "Accelerate response times for complex RFPs",
        "Improve consistency and quality of all submissions",
        "Improve operational efficiency across global teams",
        "Strengthen your competitive edge and increase win rates",
      ],
    },
   
  },
};

export async function generateMetadata({ params }) {
  const data = PAGE_DATA[params.slug];
  if (!data) return {};
  return {
    title: `${data.hero.title} ${data.hero.titleHighlight} – ProposalAI`,
  };
}

export default function IndustryDetailPage({ params }) {
  const data = PAGE_DATA[params.slug];
  if (!data) notFound();

  const { hero, sections, cta, video } = data;

  return (
    <>
      <section className="pt-32 md:h-screen pb-20 flex flex-col md:flex-row md:items-center justify-center  bg-[url('/industry/bgimg.png')] bg-cover bg-center w-full ">

        <div className="flex justify-center">
          <h1 className="text-black/60 max-w-[80%] text-left text-2xl md:text-5xl ">{data.hero.title}</h1>
        </div>
        <div className="flex justify-center max-w-[1290px] min-width-[1290px] w-full ">
          <Image src={data.hero.image} width={600} height={400} alt="image" />
        </div>

      </section>

      <section className="py-8 px-12 mt-[20px] flex flex-col border border-gray bg-gray-200 mx-auto max-w-[1290px] min-width-[1290px]  rounded-[20px] gap-6">
        <h1 className="text-4xl font-bold text-[#3EC2F3] max-w-[789px]">Your Challenge</h1>
        <p className="font-normal text-base  ">Creating detailed, tailored proposals for complex enterprise RFPs, and meticulously completing lengthy security questionnaires or due diligence requests, takes too much time away from product development and sales. Quickly finding specific technical details, security controls, or past solution descriptions is a constant struggle.</p>
        <h1 className="text-4xl font-bold text-[#3EC2F3]">Our Solution
        </h1>
        <ul className="flex flex-col gap-4 text-base font-normal  list-disc pl-6">
          <li>Upload all your past proposals, technical documents, security documentation, compliance reports, and marketing collateral to create a unified knowledge base.</li>
          <li>Upload all your past proposals, technical documents, security documentation, compliance reports, and marketing collateral to create a unified knowledge base.</li>
          <li>Upload all your past proposals, technical documents, security documentation, compliance reports, and marketing collateral to create a unified knowledge base.</li>
          <li>Upload all your past proposals, technical documents, security documentation, compliance reports, and marketing collateral to create a unified knowledge base.</li>
        </ul>
      </section>
      <section className="py-8 px-12 mt-[20px] flex flex-col   mx-auto max-w-[1290px] min-width-[1290px]  rounded-[20px] gap-6">
        
        <h1 className="text-3xl font-bold text-[#3EC2F3]">Impact
        </h1>
        <ul className="flex flex-col gap-4 text-base font-normal  list-disc pl-6">
          <li>Upload all your past proposals, technical documents, security documentation, compliance reports, and marketing collateral to create a unified knowledge base.</li>
          <li>Upload all your past proposals, technical documents, security documentation, compliance reports, and marketing collateral to create a unified knowledge base.</li>
          <li>Upload all your past proposals, technical documents, security documentation, compliance reports, and marketing collateral to create a unified knowledge base.</li>
          <li>Upload all your past proposals, technical documents, security documentation, compliance reports, and marketing collateral to create a unified knowledge base.</li>
        </ul>
      </section>
    </>
  );
}