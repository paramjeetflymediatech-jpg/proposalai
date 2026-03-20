// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import AnimateOnScroll from "../../components/ui/AnimateOnScroll";

// const CATEGORIES = [
//   { label: "All",          activeCls: "bg-gray-800 border-gray-800 text-white" },
//   { label: "Case Studies", activeCls: "bg-primary border-primary text-white" },
//   { label: "Blog",         activeCls: "bg-violet-600 border-violet-600 text-white" },
//   { label: "Insights",     activeCls: "bg-emerald-600 border-emerald-600 text-white" },
// ];

// const SaaSIcon = () => (
//   <svg viewBox="0 0 64 64" className="w-20 h-20" xmlns="http://www.w3.org/2000/svg">
//     <path d="m58.305 51.723c1.031-.917 1.695-2.238 1.695-3.723 0-2.414-1.721-4.434-4-4.899v-3.101c0-1.654-1.346-3-3-3h-8.787l1.064-1.064-1.48-2.49c.147-.317.281-.636.4-.956l2.803-.713v-2.777h2c4.411 0 8-3.589 8-8 0-4.084-3.076-7.463-7.034-7.942-.484-6.73-6.114-12.058-12.966-12.058-4.721 0-9.076 2.596-11.355 6.691-1.163-.459-2.385-.691-3.645-.691-5.514 0-10 4.486-10 10v.083c-2.834.478-5 2.949-5 5.917 0 3.309 2.691 6 6 6h4v2.777l2.802.713c.119.319.252.639.4.956l-1.48 2.49 1.065 1.064h-5.787c-1.654 0-3 1.346-3 3v1.051c-5.598.507-10 5.221-10 10.949 0 6.065 4.935 11 11 11s11-4.935 11-11c0-5.728-4.402-10.442-10-10.949v-1.051c0-.551.449-1 1-1h7.787l2.278 2.278 2.49-1.48c.317.147.636.281.956.4l.712 2.802h2.777v8h-4v12h14v-8h-4v-2h-4v-1-1-8h2.777l.713-2.802c.319-.119.639-.252.956-.4l2.49 1.48 2.277-2.278h10.787c.551 0 1 .449 1 1v3.101c-2.279.465-4 2.484-4 4.899 0 1.485.664 2.806 1.695 3.723-2.765 1.261-4.695 4.045-4.695 7.277v4h16v-4c0-3.232-1.93-6.016-4.695-7.277zm-37.305.277c0 4.962-4.038 9-9 9s-9-4.038-9-9 4.038-9 9-9 9 4.038 9 9zm10 9h-2v-8h2zm8-4v4h-2v-4zm-4-2v6h-2v-6zm-26-32c0-2.187 1.764-3.97 3.944-4l1.232.005-.123-1.11c-.032-.293-.053-.592-.053-.895 0-4.411 3.589-8 8-8 1.275 0 2.502.298 3.647.886l.929.477.437-.949c1.792-3.896 5.712-6.414 9.987-6.414 6.065 0 11 4.935 11 11v1h1c3.309 0 6 2.691 6 6s-2.691 6-6 6h-36c-2.206 0-4-1.794-4-4zm29.92 6c-.488 3.387-3.401 6-6.92 6s-6.432-2.613-6.92-6zm.701 9.764-2.095-1.246-.493.254c-.558.288-1.124.525-1.683.704l-.528.169-.599 2.355h-4.445l-.599-2.354-.528-.169c-.56-.179-1.125-.416-1.683-.704l-.493-.254-2.095 1.246-3.143-3.143 1.246-2.095-.254-.493c-.288-.558-.525-1.124-.704-1.683l-.169-.528-2.356-.6v-1.223h4.059c.5 4.493 4.317 8 8.941 8s8.441-3.507 8.941-8h4.059v1.223l-2.354.599-.169.528c-.179.56-.416 1.125-.704 1.683l-.254.493 1.246 2.095zm12.379 9.236c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3zm9 13h-12v-2c0-3.309 2.691-6 6-6s6 2.691 6 6z"/>
//   </svg>
// );

// const InsuranceIcon = () => (
//   <svg viewBox="0 0 64 64" className="w-20 h-20" xmlns="http://www.w3.org/2000/svg">
//     <path d="m30.8 45.27h-6.3v-1.92c1.81-1.58 3.19-3.9 3.9-6.2.54-1.11 4.47-9.57 1.25-12.51-.42-.38-.74-.76-.99-1.15-.97-1.54-4.08-5.09-12.02-5.09-.07 0-.14 0-.21 0-1.47.01-2.89.64-3.89 1.71-.92.99-1.42 2.24-1.44 3.57-.67.25-1.84.88-2.53 2.35-1.23 2.62-.36 6.6 2.59 11.81.74 2.03 2 4.06 3.64 5.5v1.93h-6.27c-3.77 0-6.84 3.07-6.84 6.84v10.05c0 .33.27.6.6.6h34.76c.33 0 .6-.27.6-.6v-10.05c0-3.77-3.07-6.84-6.85-6.84zm-11.57 9.08h.86l1.75 7.22h-4.36zm1.05-1.2h-1.22l-1.08-1.37 1.67-.74 1.7.76zm-7.97-15.64.41-7.6c.01-.26.15-.49.37-.62s.48-.15.72-.04c2.44 1.11 7.14 2.61 11.29.13.16-.09.34-.11.51-.03.16.07.27.21.31.38l1.31 7.16c-1.15 3.64-4.09 7.28-7.57 7.28-3.36 0-6.15-3.43-7.35-6.66zm7.35 7.86c1.3 0 2.52-.42 3.64-1.12v1.36l-3.65 3.89-3.65-3.89v-1.37c1.1.7 2.34 1.13 3.66 1.13zm-11.13 1.1h3.6l2.19 4.88c.31.7 1.01 1.12 1.73 1.12.26 0 .52-.05.76-.16l.03-.01 1.27 1.6-1.86 7.68h-6.95v-5.6c0-1.66-1.35-3-3-3h-3.41v-.86c0-3.12 2.53-5.65 5.64-5.65zm-5.64 7.7h3.41c.99 0 1.8.81 1.8 1.8v5.6h-5.21zm28.33 7.4v-5.6c0-.99.81-1.8 1.8-1.8h3.42v7.4zm5.22-8.6h-3.42c-1.66 0-3 1.35-3 3v5.6h-6.94l-1.86-7.68 1.26-1.59c.25.11.51.16.76.16.72 0 1.42-.42 1.73-1.12l2.19-4.88h3.64c3.11 0 5.64 2.53 5.64 5.64z"/>
//     <path d="m22.27 34.93h1.77c.33 0 .6-.27.6-.6s-.27-.6-.6-.6h-1.77c-.33 0-.6.27-.6.6s.26.6.6.6z"/>
//     <path d="m17.06 34.93c.33 0 .6-.27.6-.6s-.27-.6-.6-.6h-1.77c-.33 0-.6.27-.6.6s.27.6.6.6z"/>
//     <path d="m16.96 37.86c-.2.27-.14.64.12.84.84.63 1.71.94 2.58.94s1.73-.31 2.58-.94c.27-.2.32-.57.12-.84s-.57-.32-.84-.12c-1.27.95-2.45.95-3.72 0-.26-.2-.64-.15-.84.12z"/>
//     <path d="m50.44 36.33c-5.94 0-10.78 4.84-10.78 10.78s4.84 10.78 10.78 10.78 10.78-4.84 10.78-10.78-4.84-10.78-10.78-10.78zm0 20.36c-5.28 0-9.58-4.3-9.58-9.58s4.3-9.58 9.58-9.58 9.58 4.3 9.58 9.58-4.3 9.58-9.58 9.58z"/>
//     <path d="m50.44 40.34c-3.74 0-6.77 3.04-6.77 6.77s3.04 6.77 6.77 6.77 6.77-3.04 6.77-6.77-3.03-6.77-6.77-6.77zm0 6.17c1.21 0 2.2.99 2.2 2.2 0 1-.68 1.84-1.6 2.11v.22c0 .33-.27.6-.6.6s-.6-.27-.6-.6v-.22c-.92-.26-1.6-1.1-1.6-2.11 0-.33.27-.6.6-.6s.6.27.6.6c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1c-1.21 0-2.2-.99-2.2-2.2 0-1 .68-1.84 1.6-2.11v-.22c0-.33.27-.6.6-.6s.6.27.6.6v.22c.92.26 1.6 1.1 1.6 2.11 0 .33-.27.6-.6.6s-.6-.27-.6-.6c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1z"/>
//   </svg>
// );

// const ConsultingIcon = () => (
//   <svg viewBox="0 0 500 500" className="w-20 h-20" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd">
//     <path d="m130.117 412.916h-29.677v-27.931h29.677zm2.286-40.629h-34.249c-5.744 0-10.413 4.67-10.413 10.413v32.503c0 5.744 4.669 10.413 10.413 10.413h34.249c5.738 0 10.413-4.67 10.413-10.413v-32.503c0-5.744-4.675-10.413-10.413-10.413zm-2.286-50.274h-29.677v-27.937h29.677zm2.286-40.63h-34.249c-5.744 0-10.413 4.669-10.413 10.407v32.509c0 5.738 4.669 10.413 10.413 10.413h34.249c5.738 0 10.413-4.675 10.413-10.413v-32.509c0-5.738-4.675-10.407-10.413-10.407zm60.693 12.693h29.677v27.937h-29.677zm-2.286 40.636h34.249c5.738 0 10.413-4.675 10.413-10.413v-32.509c0-5.738-4.675-10.407-10.413-10.407h-34.249c-5.738 0-10.413 4.669-10.413 10.407v32.509c0 5.738 4.675 10.413 10.413 10.413zm-60.693-103.614h-29.677v-27.937h29.677zm2.286-40.636h-34.249c-5.744 0-10.413 4.675-10.413 10.413v32.509c0 5.744 4.669 10.413 10.413 10.413h34.249c5.738 0 10.413-4.67 10.413-10.413v-32.509c0-5.738-4.675-10.413-10.413-10.413zm60.693 12.699h29.677v27.937h-29.677zm-2.286 40.636h34.249c5.738 0 10.413-4.67 10.413-10.413v-32.509c0-5.738-4.675-10.413-10.413-10.413h-34.249c-5.738 0-10.413 4.675-10.413 10.413v32.509c0 5.743 4.675 10.413 10.413 10.413zm262.16 211.398c0 3.372-2.746 6.128-6.128 6.128h-134.74c.08-.626.132-1.258.132-1.913v-82.518c0-3.509-2.837-6.347-6.347-6.347h-17.007v-13.291c0-42.583 32.618-77.688 74.184-81.662l-26.432 128.409c-.448 2.223.31 4.515 2.005 6.025l28.075 24.95c2.407 2.136 6.034 2.137 8.431 0l28.08-24.95c1.694-1.51 2.458-3.802 1.993-6.025l-26.426-128.409c41.566 3.974 74.179 39.079 74.179 81.662v97.941zm-157.955 6.128c1.695 0 4.526.445 4.526-1.913v-59.032l-28.281 17.656c-9.305 5.809-16.836 4.899-27.064 4.899v3.515c0 3.515-2.849 6.352-6.352 6.352-3.509 0-6.347-2.837-6.347-6.352v-3.515c-10.227 0-17.771.909-27.069-4.899l-28.276-17.656v59.032c0 1.034.873 1.913 1.907 1.913zm-80.886-90.777 4.543-9.534c1.011-2.125 2.86-3.291 5.209-3.291h27.925c2.349 0 4.199 1.166 5.204 3.291l4.549 9.534zm85.412 14.865v-2.165h-123.389v2.165l35.001 21.86c3.285 2.05 6.479 2.964 10.35 2.964h9.994v-3.63c0-3.498 2.837-6.347 6.347-6.347 3.504 0 6.352 2.849 6.352 6.347v3.63h9.994c3.871 0 7.065-.913 10.35-2.964zm-252.516-219.945v295.858h116.566c-.08-.626-.138-1.258-.138-1.913v-82.518c0-3.509 2.843-6.347 6.352-6.347h30.263l7.139-15.002c3.096-6.484 9.477-10.522 16.673-10.522h27.925c7.191 0 13.578 4.038 16.668 10.522l7.151 15.002h.557v-205.08c0-5.904-4.796-10.7-10.689-10.7h-207.773c-5.893 0-10.694 4.796-10.694 10.7zm33.858-49.401h161.44v26.001h-161.44zm33.859-48.366h93.729v35.667h-93.729zm212.196 150.838c0-24.255 19.735-43.99 43.99-43.99 24.25 0 43.99 19.735 43.99 43.99 0 24.249-19.741 43.984-43.99 43.984-24.255 0-43.99-19.735-43.99-43.984zm65.115 184.432-21.125-102.603-21.113 102.603 21.113 18.776zm8.041-135.848c16.473-9.931 27.518-27.988 27.518-48.585 0-31.257-25.427-56.689-56.684-56.689s-56.683 25.433-56.683 56.689c0 20.596 11.045 38.654 27.523 48.585-22.446 7.277-41.25 22.71-52.887 42.801v-144.456c0-12.906-10.494-23.399-23.388-23.399h-10.471v-32.348c0-3.515-2.843-6.353-6.347-6.353h-27.505v-42.02c0-3.509-2.849-6.347-6.353-6.347h-46.862v-22.675c0-3.509-2.837-6.347-6.347-6.347-3.515 0-6.352 2.837-6.352 6.347v22.676h-46.862c-3.503 0-6.352 2.837-6.352 6.347v42.02h-27.505c-3.509 0-6.347 2.837-6.347 6.353v32.348h-10.471c-12.894 0-23.388 10.494-23.388 23.399v302.21c0 3.498 2.838 6.347 6.347 6.347h406.163c10.384 0 18.827-8.455 18.827-18.828v-97.939c.001-42.068-27.557-77.81-65.574-90.136z"/>
//   </svg>
// );

// const BlogIcon1 = () => (
//   <svg viewBox="0 0 64 64" fill="none" className="w-20 h-20" xmlns="http://www.w3.org/2000/svg">
//     <rect x="10" y="8" width="44" height="48" rx="3" stroke="#1a1a2e" strokeWidth="2.5"/>
//     <path d="M18 20h28M18 28h28M18 36h20M18 44h14" stroke="#1a1a2e" strokeWidth="2" strokeLinecap="round"/>
//     <circle cx="46" cy="46" r="8" fill="#1a1a2e"/>
//     <path d="M43 46h6M46 43v6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
//   </svg>
// );

// const BlogIcon2 = () => (
//   <svg viewBox="0 0 64 64" fill="none" className="w-20 h-20" xmlns="http://www.w3.org/2000/svg">
//     <rect x="8" y="10" width="48" height="44" rx="3" stroke="#1a1a2e" strokeWidth="2.5"/>
//     <path d="M8 20h48" stroke="#1a1a2e" strokeWidth="2"/>
//     <circle cx="16" cy="15" r="2" fill="#1a1a2e"/>
//     <circle cx="22" cy="15" r="2" fill="#1a1a2e"/>
//     <circle cx="28" cy="15" r="2" fill="#1a1a2e"/>
//     <path d="M16 30h32M16 37h24M16 44h20" stroke="#1a1a2e" strokeWidth="2" strokeLinecap="round"/>
//   </svg>
// );

// const InsightsIcon1 = () => (
//   <svg viewBox="0 0 64 64" fill="none" className="w-20 h-20" xmlns="http://www.w3.org/2000/svg">
//     <path d="M8 52 L20 36 L30 42 L42 24 L56 12" stroke="#1a1a2e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
//     <path d="M8 52h48M8 12v40" stroke="#1a1a2e" strokeWidth="2" strokeLinecap="round"/>
//     <circle cx="20" cy="36" r="3" fill="#1a1a2e"/>
//     <circle cx="30" cy="42" r="3" fill="#1a1a2e"/>
//     <circle cx="42" cy="24" r="3" fill="#1a1a2e"/>
//     <circle cx="56" cy="12" r="3" fill="#1a1a2e"/>
//   </svg>
// );

// const InsightsIcon2 = () => (
//   <svg viewBox="0 0 64 64" fill="none" className="w-20 h-20" xmlns="http://www.w3.org/2000/svg">
//     <circle cx="32" cy="28" r="18" stroke="#1a1a2e" strokeWidth="2.5"/>
//     <path d="M32 10v4M32 42v4M14 28h4M46 28h4" stroke="#1a1a2e" strokeWidth="2" strokeLinecap="round"/>
//     <path d="M32 20v10l6 6" stroke="#1a1a2e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
//     <path d="M24 52h16M28 56h8" stroke="#1a1a2e" strokeWidth="2" strokeLinecap="round"/>
//   </svg>
// );

// // ── href updated to match folder structure ──
// const POSTS = [
//   { category: "Case Studies", tag: "SaaS",       title: "Revolutionizing Responses for a Leading SaaS Provider",          excerpt: "A rapidly expanding SaaS provider slashed proposal completion time by 80% and freed 20+ expert hours per week without compromising quality.",           Icon: SaaSIcon,       date: "March 2026",    readTime: "5 min read",  bg: "bg-primary",      href: "/case-study/saas-provider" },
//   { category: "Case Studies", tag: "Insurance",  title: "Driving Wins for a Re-insurance Broker",                          excerpt: "A re-insurance broker renowned for structuring complex programs for large cedents used ProposalAI to scale volume without adding headcount.",        Icon: InsuranceIcon,  date: "February 2026", readTime: "6 min read",  bg: "bg-primary",      href: "/case-study/re-insurance-broker" },
//   { category: "Case Studies", tag: "Consulting", title: "Empowering a Strategic Management Consulting Firm",               excerpt: "A strategy consulting firm recognized for bespoke client solutions used ProposalAI to produce tailored proposals in a fraction of the time.",       Icon: ConsultingIcon, date: "January 2026",  readTime: "7 min read",  bg: "bg-primary",      href: "/case-study/consulting-firm" },
//   { category: "Blog",         tag: "AI & Strategy", title: "Beyond Keywords: The Power of Contextually Aware AI in Crafting Winning Proposals", excerpt: "Traditional automation fills blanks. Contextually aware AI understands your knowledge base, your client's RFP, and the nuanced interplay.", Icon: BlogIcon1, date: "March 15, 2026", readTime: "8 min read", bg: "bg-violet-600", href: "/blog/beyond-keywords" },
//   { category: "Blog",         tag: "Productivity",  title: "The Search Trap: Why Old Proposal Libraries Are Failing Your Team",                 excerpt: "Are your proposal experts stuck acting as librarians? Find out why searchable databases aren't enough anymore.",                               Icon: BlogIcon2, date: "March 1, 2026",  readTime: "6 min read", bg: "bg-violet-600", href: "/blog/search-trap" },
//   { category: "Insights",     tag: "Trends",    title: "2026 State of Proposal Management Report",                         excerpt: "Our annual survey of 500+ proposal professionals reveals how AI is reshaping the industry and what winning teams do differently.",                Icon: InsightsIcon1,  date: "January 20, 2026", readTime: "12 min read", bg: "bg-emerald-600", href: "/insights/proposal-management-report" },
//   { category: "Insights",     tag: "Strategy",  title: "The Human-AI Balance: When to Let AI Lead vs. Take Over",          excerpt: "Not everything should be automated. This guide helps proposal teams understand where AI adds the most value.",                                   Icon: InsightsIcon2,  date: "January 8, 2026",  readTime: "8 min read",  bg: "bg-emerald-600", href: "/insights/human-ai-balance" },
// ];

// export default function ResourcePage() {
//   const [activeCategory, setActiveCategory] = useState("All");
//   const filtered = activeCategory === "All" ? POSTS : POSTS.filter((p) => p.category === activeCategory);

//   return (
//     <>
//       {/* ── Hero ─────────────────────────────────────────────────────── */}
//       <section className="bg-white overflow-hidden" style={{ minHeight: "calc(100vh - 80px)" }}>
//         <div className="flex" style={{ minHeight: "calc(100vh - 80px)" }}>
//           <div className="w-1/2 flex flex-col justify-center px-10 lg:px-16 py-16">
//             <AnimateOnScroll>
//               <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-dark mb-6 leading-[1.05]">
//                 Master the Art<br />and Science{" "}
//                 <span className="text-primary">of Winning Proposals</span>
//               </h1>
//               <p className="text-gray-500 text-lg max-w-sm mb-10 leading-relaxed">
//                 Discover the strategies, success stories, and industry trends that help top teams stop chasing deadlines and start winning deals.
//               </p>
//               <button className="inline-flex items-center bg-dark text-white text-sm font-bold uppercase tracking-widest px-8 py-4 rounded-full hover:bg-gray-800 transition-all duration-200 w-fit">
//                 EXPLORE THE LIBRARY
//               </button>
//             </AnimateOnScroll>
//           </div>
//           <div className="w-1/2 flex flex-col" style={{ paddingTop: "180px", paddingBottom: "80px" }}>
//             <div className="flex-1 overflow-hidden" style={{ borderRadius: "40rem 0 0 40rem" }}>
//               <img src="/resources-hero-section.jpg" alt="Resource hero" className="w-full h-full object-cover object-top" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── Filter + Grid ─────────────────────────────────────────────── */}
//       <section className="py-12 md:py-20 bg-primary">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-10">
//             <AnimateOnScroll className="text-center mb-8 md:mb-10">
//               <h2 className="font-display text-2xl md:text-4xl font-bold text-dark mb-3">All Resources</h2>
//               <p className="text-gray-500 text-sm md:text-base">Browse case studies, blogs, and insights from the ProposalAI community.</p>
//               <div className="flex items-center justify-center gap-2 md:gap-3 mt-5 md:mt-6 flex-wrap">
//                 {CATEGORIES.map((cat) => {
//                   const isActive = activeCategory === cat.label;
//                   return (
//                     <button key={cat.label} onClick={() => setActiveCategory(cat.label)}
//                       className={`px-5 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 border-2 ${isActive ? `${cat.activeCls} shadow-md` : "bg-white text-gray-500 border-gray-200 hover:border-gray-400 hover:text-gray-700"}`}>
//                       {cat.label}
//                     </button>
//                   );
//                 })}
//               </div>
//               {activeCategory !== "All" && (
//                 <p className="text-xs text-gray-400 mt-3">
//                   Showing <span className="font-semibold text-gray-600">{filtered.length}</span> result{filtered.length !== 1 ? "s" : ""} for <span className="font-semibold text-gray-700">{activeCategory}</span>
//                 </p>
//               )}
//             </AnimateOnScroll>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
//               {filtered.map((post, i) => (
//                 <AnimateOnScroll key={`${post.title}-${i}`} delay={i * 70}>
//                   <Link href={post.href} className="group block rounded-xl md:rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
//                     <div className="bg-[#cce9f5] h-44 md:h-48 flex items-center justify-center">
//                       <post.Icon />
//                     </div>
//                     <div className={`${post.bg} p-5 md:p-6 relative`}>
//                       <div className="absolute top-4 right-4 w-8 h-8 md:w-9 md:h-9 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:shadow transition-all">
//                         <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-white group-hover:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                         </svg>
//                       </div>
//                       <span className="text-xs font-bold text-white/60 uppercase tracking-widest">{post.category}</span>
//                       <h3 className="text-white font-bold text-sm md:text-base mt-2 mb-3 pr-10 leading-snug">{post.title}</h3>
//                       <p className="text-white/70 text-xs leading-relaxed line-clamp-3">{post.excerpt}</p>
//                       <div className="flex items-center gap-3 mt-4 text-white/50 text-xs">
//                         <span>{post.date}</span><span>·</span><span>{post.readTime}</span>
//                       </div>
//                     </div>
//                   </Link>
//                 </AnimateOnScroll>
//               ))}
//             </div>
//             {filtered.length === 0 && <div className="text-center py-16 text-gray-400"><p className="text-lg font-medium">No posts found.</p></div>}
//           </div>
//         </div>
//       </section>





//       {/* ── CTA Section ── */}
//       <section className="bg-white py-16 md:py-24">
//         <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
//           <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-16">

//             {/* Left — text */}
//             <div className="flex-1">
//               <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-dark leading-[1.05] mb-6">
//                 Ready to Write {" "}
//                 <span className="text-primary">Your Own Success Story?</span>
//               </h2>
//               <p className="text-gray-500 text-base md:text-lg max-w-lg mb-8 leading-relaxed">
//                 Join the teams cutting response times by 80%. Book a demo to see ProposalAI in action.

//               </p>
//               <button className="inline-flex items-center bg-dark text-white text-sm font-bold uppercase tracking-widest px-8 py-4 rounded-full hover:bg-gray-800 transition-all duration-200">
//                 Book a Demo

//               </button>
//             </div>

//             {/* Right — image with top-left radius only */}
//             <div className="flex-1 flex justify-end">
//               <div
//                 className="w-full max-w-lg overflow-hidden"
//                 style={{ borderRadius: "0.75rem 0.75rem 0.75rem 0.75rem" }}
//               >
//                 <img
//                   src="/resources-hero-section.jpg"
//                   alt="Winning proposals team"
//                   className="w-full h-full object-cover"
               
//                 />
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>

  
//     </>
//   );
// }












"use client";
"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "../../components/ui/AnimateOnScroll";

const CATEGORIES = [
  { label: "All",          activeCls: "bg-gray-800 border-gray-800 text-white" },
  { label: "Case Studies", activeCls: "bg-primary border-primary text-white" },
  { label: "Blog",         activeCls: "bg-violet-600 border-violet-600 text-white" },
  { label: "Insights",     activeCls: "bg-emerald-600 border-emerald-600 text-white" },
];

const SaaSIcon = () => (
  <svg viewBox="0 0 64 64" className="w-20 h-20" xmlns="http://www.w3.org/2000/svg">
    <path d="m58.305 51.723c1.031-.917 1.695-2.238 1.695-3.723 0-2.414-1.721-4.434-4-4.899v-3.101c0-1.654-1.346-3-3-3h-8.787l1.064-1.064-1.48-2.49c.147-.317.281-.636.4-.956l2.803-.713v-2.777h2c4.411 0 8-3.589 8-8 0-4.084-3.076-7.463-7.034-7.942-.484-6.73-6.114-12.058-12.966-12.058-4.721 0-9.076 2.596-11.355 6.691-1.163-.459-2.385-.691-3.645-.691-5.514 0-10 4.486-10 10v.083c-2.834.478-5 2.949-5 5.917 0 3.309 2.691 6 6 6h4v2.777l2.802.713c.119.319.252.639.4.956l-1.48 2.49 1.065 1.064h-5.787c-1.654 0-3 1.346-3 3v1.051c-5.598.507-10 5.221-10 10.949 0 6.065 4.935 11 11 11s11-4.935 11-11c0-5.728-4.402-10.442-10-10.949v-1.051c0-.551.449-1 1-1h7.787l2.278 2.278 2.49-1.48c.317.147.636.281.956.4l.712 2.802h2.777v8h-4v12h14v-8h-4v-2h-4v-1-1-8h2.777l.713-2.802c.319-.119.639-.252.956-.4l2.49 1.48 2.277-2.278h10.787c.551 0 1 .449 1 1v3.101c-2.279.465-4 2.484-4 4.899 0 1.485.664 2.806 1.695 3.723-2.765 1.261-4.695 4.045-4.695 7.277v4h16v-4c0-3.232-1.93-6.016-4.695-7.277zm-37.305.277c0 4.962-4.038 9-9 9s-9-4.038-9-9 4.038-9 9-9 9 4.038 9 9zm10 9h-2v-8h2zm8-4v4h-2v-4zm-4-2v6h-2v-6zm-26-32c0-2.187 1.764-3.97 3.944-4l1.232.005-.123-1.11c-.032-.293-.053-.592-.053-.895 0-4.411 3.589-8 8-8 1.275 0 2.502.298 3.647.886l.929.477.437-.949c1.792-3.896 5.712-6.414 9.987-6.414 6.065 0 11 4.935 11 11v1h1c3.309 0 6 2.691 6 6s-2.691 6-6 6h-36c-2.206 0-4-1.794-4-4zm29.92 6c-.488 3.387-3.401 6-6.92 6s-6.432-2.613-6.92-6zm.701 9.764-2.095-1.246-.493.254c-.558.288-1.124.525-1.683.704l-.528.169-.599 2.355h-4.445l-.599-2.354-.528-.169c-.56-.179-1.125-.416-1.683-.704l-.493-.254-2.095 1.246-3.143-3.143 1.246-2.095-.254-.493c-.288-.558-.525-1.124-.704-1.683l-.169-.528-2.356-.6v-1.223h4.059c.5 4.493 4.317 8 8.941 8s8.441-3.507 8.941-8h4.059v1.223l-2.354.599-.169.528c-.179.56-.416 1.125-.704 1.683l-.254.493 1.246 2.095zm12.379 9.236c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3zm9 13h-12v-2c0-3.309 2.691-6 6-6s6 2.691 6 6z"/>
  </svg>
);

const InsuranceIcon = () => (
  <svg viewBox="0 0 64 64" className="w-20 h-20" xmlns="http://www.w3.org/2000/svg">
    <path d="m30.8 45.27h-6.3v-1.92c1.81-1.58 3.19-3.9 3.9-6.2.54-1.11 4.47-9.57 1.25-12.51-.42-.38-.74-.76-.99-1.15-.97-1.54-4.08-5.09-12.02-5.09-.07 0-.14 0-.21 0-1.47.01-2.89.64-3.89 1.71-.92.99-1.42 2.24-1.44 3.57-.67.25-1.84.88-2.53 2.35-1.23 2.62-.36 6.6 2.59 11.81.74 2.03 2 4.06 3.64 5.5v1.93h-6.27c-3.77 0-6.84 3.07-6.84 6.84v10.05c0 .33.27.6.6.6h34.76c.33 0 .6-.27.6-.6v-10.05c0-3.77-3.07-6.84-6.85-6.84zm-11.57 9.08h.86l1.75 7.22h-4.36zm1.05-1.2h-1.22l-1.08-1.37 1.67-.74 1.7.76zm-7.97-15.64.41-7.6c.01-.26.15-.49.37-.62s.48-.15.72-.04c2.44 1.11 7.14 2.61 11.29.13.16-.09.34-.11.51-.03.16.07.27.21.31.38l1.31 7.16c-1.15 3.64-4.09 7.28-7.57 7.28-3.36 0-6.15-3.43-7.35-6.66zm7.35 7.86c1.3 0 2.52-.42 3.64-1.12v1.36l-3.65 3.89-3.65-3.89v-1.37c1.1.7 2.34 1.13 3.66 1.13zm-11.13 1.1h3.6l2.19 4.88c.31.7 1.01 1.12 1.73 1.12.26 0 .52-.05.76-.16l.03-.01 1.27 1.6-1.86 7.68h-6.95v-5.6c0-1.66-1.35-3-3-3h-3.41v-.86c0-3.12 2.53-5.65 5.64-5.65zm-5.64 7.7h3.41c.99 0 1.8.81 1.8 1.8v5.6h-5.21zm28.33 7.4v-5.6c0-.99.81-1.8 1.8-1.8h3.42v7.4zm5.22-8.6h-3.42c-1.66 0-3 1.35-3 3v5.6h-6.94l-1.86-7.68 1.26-1.59c.25.11.51.16.76.16.72 0 1.42-.42 1.73-1.12l2.19-4.88h3.64c3.11 0 5.64 2.53 5.64 5.64z"/>
    <path d="m22.27 34.93h1.77c.33 0 .6-.27.6-.6s-.27-.6-.6-.6h-1.77c-.33 0-.6.27-.6.6s.26.6.6.6z"/>
    <path d="m17.06 34.93c.33 0 .6-.27.6-.6s-.27-.6-.6-.6h-1.77c-.33 0-.6.27-.6.6s.27.6.6.6z"/>
    <path d="m16.96 37.86c-.2.27-.14.64.12.84.84.63 1.71.94 2.58.94s1.73-.31 2.58-.94c.27-.2.32-.57.12-.84s-.57-.32-.84-.12c-1.27.95-2.45.95-3.72 0-.26-.2-.64-.15-.84.12z"/>
    <path d="m50.44 36.33c-5.94 0-10.78 4.84-10.78 10.78s4.84 10.78 10.78 10.78 10.78-4.84 10.78-10.78-4.84-10.78-10.78-10.78zm0 20.36c-5.28 0-9.58-4.3-9.58-9.58s4.3-9.58 9.58-9.58 9.58 4.3 9.58 9.58-4.3 9.58-9.58 9.58z"/>
    <path d="m50.44 40.34c-3.74 0-6.77 3.04-6.77 6.77s3.04 6.77 6.77 6.77 6.77-3.04 6.77-6.77-3.03-6.77-6.77-6.77zm0 6.17c1.21 0 2.2.99 2.2 2.2 0 1-.68 1.84-1.6 2.11v.22c0 .33-.27.6-.6.6s-.6-.27-.6-.6v-.22c-.92-.26-1.6-1.1-1.6-2.11 0-.33.27-.6.6-.6s.6.27.6.6c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1c-1.21 0-2.2-.99-2.2-2.2 0-1 .68-1.84 1.6-2.11v-.22c0-.33.27-.6.6-.6s.6.27.6.6v.22c.92.26 1.6 1.1 1.6 2.11 0 .33-.27.6-.6.6s-.6-.27-.6-.6c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1z"/>
  </svg>
);

const ConsultingIcon = () => (
  <svg viewBox="0 0 500 500" className="w-20 h-20" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd">
    <path d="m130.117 412.916h-29.677v-27.931h29.677zm2.286-40.629h-34.249c-5.744 0-10.413 4.67-10.413 10.413v32.503c0 5.744 4.669 10.413 10.413 10.413h34.249c5.738 0 10.413-4.67 10.413-10.413v-32.503c0-5.744-4.675-10.413-10.413-10.413zm-2.286-50.274h-29.677v-27.937h29.677zm2.286-40.63h-34.249c-5.744 0-10.413 4.669-10.413 10.407v32.509c0 5.738 4.669 10.413 10.413 10.413h34.249c5.738 0 10.413-4.675 10.413-10.413v-32.509c0-5.738-4.675-10.407-10.413-10.407zm60.693 12.693h29.677v27.937h-29.677zm-2.286 40.636h34.249c5.738 0 10.413-4.675 10.413-10.413v-32.509c0-5.738-4.675-10.407-10.413-10.407h-34.249c-5.738 0-10.413 4.669-10.413 10.407v32.509c0 5.738 4.675 10.413 10.413 10.413zm-60.693-103.614h-29.677v-27.937h29.677zm2.286-40.636h-34.249c-5.744 0-10.413 4.675-10.413 10.413v32.509c0 5.744 4.669 10.413 10.413 10.413h34.249c5.738 0 10.413-4.67 10.413-10.413v-32.509c0-5.738-4.675-10.413-10.413-10.413zm60.693 12.699h29.677v27.937h-29.677zm-2.286 40.636h34.249c5.738 0 10.413-4.67 10.413-10.413v-32.509c0-5.738-4.675-10.413-10.413-10.413h-34.249c-5.738 0-10.413 4.675-10.413 10.413v32.509c0 5.743 4.675 10.413 10.413 10.413zm262.16 211.398c0 3.372-2.746 6.128-6.128 6.128h-134.74c.08-.626.132-1.258.132-1.913v-82.518c0-3.509-2.837-6.347-6.347-6.347h-17.007v-13.291c0-42.583 32.618-77.688 74.184-81.662l-26.432 128.409c-.448 2.223.31 4.515 2.005 6.025l28.075 24.95c2.407 2.136 6.034 2.137 8.431 0l28.08-24.95c1.694-1.51 2.458-3.802 1.993-6.025l-26.426-128.409c41.566 3.974 74.179 39.079 74.179 81.662v97.941zm-157.955 6.128c1.695 0 4.526.445 4.526-1.913v-59.032l-28.281 17.656c-9.305 5.809-16.836 4.899-27.064 4.899v3.515c0 3.515-2.849 6.352-6.352 6.352-3.509 0-6.347-2.837-6.347-6.352v-3.515c-10.227 0-17.771.909-27.069-4.899l-28.276-17.656v59.032c0 1.034.873 1.913 1.907 1.913zm-80.886-90.777 4.543-9.534c1.011-2.125 2.86-3.291 5.209-3.291h27.925c2.349 0 4.199 1.166 5.204 3.291l4.549 9.534zm85.412 14.865v-2.165h-123.389v2.165l35.001 21.86c3.285 2.05 6.479 2.964 10.35 2.964h9.994v-3.63c0-3.498 2.837-6.347 6.347-6.347 3.504 0 6.352 2.849 6.352 6.347v3.63h9.994c3.871 0 7.065-.913 10.35-2.964zm-252.516-219.945v295.858h116.566c-.08-.626-.138-1.258-.138-1.913v-82.518c0-3.509 2.843-6.347 6.352-6.347h30.263l7.139-15.002c3.096-6.484 9.477-10.522 16.673-10.522h27.925c7.191 0 13.578 4.038 16.668 10.522l7.151 15.002h.557v-205.08c0-5.904-4.796-10.7-10.689-10.7h-207.773c-5.893 0-10.694 4.796-10.694 10.7zm33.858-49.401h161.44v26.001h-161.44zm33.859-48.366h93.729v35.667h-93.729zm212.196 150.838c0-24.255 19.735-43.99 43.99-43.99 24.25 0 43.99 19.735 43.99 43.99 0 24.249-19.741 43.984-43.99 43.984-24.255 0-43.99-19.735-43.99-43.984zm65.115 184.432-21.125-102.603-21.113 102.603 21.113 18.776zm8.041-135.848c16.473-9.931 27.518-27.988 27.518-48.585 0-31.257-25.427-56.689-56.684-56.689s-56.683 25.433-56.683 56.689c0 20.596 11.045 38.654 27.523 48.585-22.446 7.277-41.25 22.71-52.887 42.801v-144.456c0-12.906-10.494-23.399-23.388-23.399h-10.471v-32.348c0-3.515-2.843-6.353-6.347-6.353h-27.505v-42.02c0-3.509-2.849-6.347-6.353-6.347h-46.862v-22.675c0-3.509-2.837-6.347-6.347-6.347-3.515 0-6.352 2.837-6.352 6.347v22.676h-46.862c-3.503 0-6.352 2.837-6.352 6.347v42.02h-27.505c-3.509 0-6.347 2.837-6.347 6.353v32.348h-10.471c-12.894 0-23.388 10.494-23.388 23.399v302.21c0 3.498 2.838 6.347 6.347 6.347h406.163c10.384 0 18.827-8.455 18.827-18.828v-97.939c.001-42.068-27.557-77.81-65.574-90.136z"/>
  </svg>
);

const BlogIcon1 = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-20 h-20" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="8" width="44" height="48" rx="3" stroke="#1a1a2e" strokeWidth="2.5"/>
    <path d="M18 20h28M18 28h28M18 36h20M18 44h14" stroke="#1a1a2e" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="46" cy="46" r="8" fill="#1a1a2e"/>
    <path d="M43 46h6M46 43v6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const BlogIcon2 = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-20 h-20" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="10" width="48" height="44" rx="3" stroke="#1a1a2e" strokeWidth="2.5"/>
    <path d="M8 20h48" stroke="#1a1a2e" strokeWidth="2"/>
    <circle cx="16" cy="15" r="2" fill="#1a1a2e"/>
    <circle cx="22" cy="15" r="2" fill="#1a1a2e"/>
    <circle cx="28" cy="15" r="2" fill="#1a1a2e"/>
    <path d="M16 30h32M16 37h24M16 44h20" stroke="#1a1a2e" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const InsightsIcon1 = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-20 h-20" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 52 L20 36 L30 42 L42 24 L56 12" stroke="#1a1a2e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 52h48M8 12v40" stroke="#1a1a2e" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="20" cy="36" r="3" fill="#1a1a2e"/>
    <circle cx="30" cy="42" r="3" fill="#1a1a2e"/>
    <circle cx="42" cy="24" r="3" fill="#1a1a2e"/>
    <circle cx="56" cy="12" r="3" fill="#1a1a2e"/>
  </svg>
);

const InsightsIcon2 = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-20 h-20" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="28" r="18" stroke="#1a1a2e" strokeWidth="2.5"/>
    <path d="M32 10v4M32 42v4M14 28h4M46 28h4" stroke="#1a1a2e" strokeWidth="2" strokeLinecap="round"/>
    <path d="M32 20v10l6 6" stroke="#1a1a2e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M24 52h16M28 56h8" stroke="#1a1a2e" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const POSTS = [
  { category: "Case Studies", tag: "SaaS",       title: "Revolutionizing Responses for a Leading SaaS Provider",          excerpt: "A rapidly expanding SaaS provider slashed proposal completion time by 80% and freed 20+ expert hours per week without compromising quality.",           Icon: SaaSIcon,       date: "March 2026",    readTime: "5 min read",  bg: "bg-primary",      href: "/case-study/saas-provider" },
  { category: "Case Studies", tag: "Insurance",  title: "Driving Wins for a Re-insurance Broker",                          excerpt: "A re-insurance broker renowned for structuring complex programs for large cedents used ProposalAI to scale volume without adding headcount.",        Icon: InsuranceIcon,  date: "February 2026", readTime: "6 min read",  bg: "bg-primary",      href: "/case-study/re-insurance-broker" },
  { category: "Case Studies", tag: "Consulting", title: "Empowering a Strategic Management Consulting Firm",               excerpt: "A strategy consulting firm recognized for bespoke client solutions used ProposalAI to produce tailored proposals in a fraction of the time.",       Icon: ConsultingIcon, date: "January 2026",  readTime: "7 min read",  bg: "bg-primary",      href: "/case-study/consulting-firm" },
  { category: "Blog",         tag: "AI & Strategy", title: "Beyond Keywords: The Power of Contextually Aware AI in Crafting Winning Proposals", excerpt: "Traditional automation fills blanks. Contextually aware AI understands your knowledge base, your client's RFP, and the nuanced interplay.", Icon: BlogIcon1, date: "March 15, 2026", readTime: "8 min read", bg: "bg-violet-600", href: "/blog/beyond-keywords" },
  { category: "Blog",         tag: "Productivity",  title: "The Search Trap: Why Old Proposal Libraries Are Failing Your Team",                 excerpt: "Are your proposal experts stuck acting as librarians? Find out why searchable databases aren't enough anymore.",                               Icon: BlogIcon2, date: "March 1, 2026",  readTime: "6 min read", bg: "bg-violet-600", href: "/blog/search-trap" },
  { category: "Insights",     tag: "Trends",    title: "2026 State of Proposal Management Report",                         excerpt: "Our annual survey of 500+ proposal professionals reveals how AI is reshaping the industry and what winning teams do differently.",                Icon: InsightsIcon1,  date: "January 20, 2026", readTime: "12 min read", bg: "bg-emerald-600", href: "/insights/proposal-management-report" },
  { category: "Insights",     tag: "Strategy",  title: "The Human-AI Balance: When to Let AI Lead vs. Take Over",          excerpt: "Not everything should be automated. This guide helps proposal teams understand where AI adds the most value.",                                   Icon: InsightsIcon2,  date: "January 8, 2026",  readTime: "8 min read",  bg: "bg-emerald-600", href: "/insights/human-ai-balance" },
];

export default function ResourcePage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All" ? POSTS : POSTS.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="bg-white overflow-hidden" style={{ minHeight: "calc(100vh - 80px)" }}>
        <div className="flex h-full" style={{ minHeight: "calc(100vh - 80px)" }}>

          {/* Left — content: full width on mobile, half on desktop */}
          <div className="w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-24 md:py-16">
            <AnimateOnScroll>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-dark mb-6 leading-[1.05]">
                Master the Art<br />and Science{" "}
                <span className="text-primary">of Winning Proposals</span>
              </h1>
              <p className="text-gray-500 text-base sm:text-lg max-w-sm mb-10 leading-relaxed">
                Discover the strategies, success stories, and industry trends that help top teams stop chasing deadlines and start winning deals.
              </p>
              <button className="inline-flex items-center bg-dark text-white text-sm font-bold uppercase tracking-widest px-8 py-4 rounded-full hover:bg-gray-800 transition-all duration-200 w-fit">
                EXPLORE THE LIBRARY
              </button>
            </AnimateOnScroll>
          </div>

          {/* Right — image: hidden on mobile, visible on md+ */}
          <div className="hidden md:flex w-1/2 flex-col" style={{ paddingTop: "180px", paddingBottom: "80px" }}>
            <div className="flex-1 overflow-hidden relative" style={{ borderRadius: "40rem 0 0 40rem" }}>
              <Image 
                src="/resources-hero-section.jpg" 
                alt="Resource hero" 
                fill 
                className="object-cover object-top" 
              />
            </div>
          </div>

        </div>
      </section>

      {/* ── Filter + Grid ─────────────────────────────────────────────── */}
      <section className="py-12 md:py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-10">
            <AnimateOnScroll className="text-center mb-8 md:mb-10">
              <h2 className="font-display text-2xl md:text-4xl font-bold text-dark mb-3">All Resources</h2>
              <p className="text-gray-500 text-sm md:text-base">Browse case studies, blogs, and insights from the ProposalAI community.</p>
              <div className="flex items-center justify-center gap-2 md:gap-3 mt-5 md:mt-6 flex-wrap">
                {CATEGORIES.map((cat) => {
                  const isActive = activeCategory === cat.label;
                  return (
                    <button key={cat.label} onClick={() => setActiveCategory(cat.label)}
                      className={`px-5 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 border-2 ${isActive ? `${cat.activeCls} shadow-md` : "bg-white text-gray-500 border-gray-200 hover:border-gray-400 hover:text-gray-700"}`}>
                      {cat.label}
                    </button>
                  );
                })}
              </div>
              {activeCategory !== "All" && (
                <p className="text-xs text-gray-400 mt-3">
                  Showing <span className="font-semibold text-gray-600">{filtered.length}</span> result{filtered.length !== 1 ? "s" : ""} for <span className="font-semibold text-gray-700">{activeCategory}</span>
                </p>
              )}
            </AnimateOnScroll>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {filtered.map((post, i) => (
                <AnimateOnScroll key={`${post.title}-${i}`} delay={i * 70}>
                  <Link href={post.href} className="group block rounded-xl md:rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="bg-[#cce9f5] h-44 md:h-48 flex items-center justify-center">
                      <post.Icon />
                    </div>
                    <div className={`${post.bg} p-5 md:p-6 relative`}>
                      <div className="absolute top-4 right-4 w-8 h-8 md:w-9 md:h-9 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:shadow transition-all">
                        <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-white group-hover:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                      <span className="text-xs font-bold text-white/60 uppercase tracking-widest">{post.category}</span>
                      <h3 className="text-white font-bold text-sm md:text-base mt-2 mb-3 pr-10 leading-snug">{post.title}</h3>
                      <p className="text-white/70 text-xs leading-relaxed line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center gap-3 mt-4 text-white/50 text-xs">
                        <span>{post.date}</span><span>·</span><span>{post.readTime}</span>
                      </div>
                    </div>
                  </Link>
                </AnimateOnScroll>
              ))}
            </div>
            {filtered.length === 0 && <div className="text-center py-16 text-gray-400"><p className="text-lg font-medium">No posts found.</p></div>}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-16">

            {/* Left — text */}
            <div className="flex-1">
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-dark leading-[1.05] mb-6">
                Ready to Write{" "}
                <span className="text-primary">Your Own Success Story?</span>
              </h2>
              <p className="text-gray-500 text-base md:text-lg max-w-lg mb-8 leading-relaxed">
                Join the teams cutting response times by 80%. Book a demo to see ProposalAI in action.
              </p>
              <button className="inline-flex items-center bg-dark text-white text-sm font-bold uppercase tracking-widest px-8 py-4 rounded-full hover:bg-gray-800 transition-all duration-200">
                Book a Demo
              </button>
            </div>

            {/* Right — image: hidden on mobile */}
            <div className="hidden md:flex flex-1 justify-end">
              <div className="w-full max-w-lg overflow-hidden rounded-xl relative aspect-square">
                <Image
                  src="/resources-hero-section.jpg"
                  alt="Winning proposals team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}