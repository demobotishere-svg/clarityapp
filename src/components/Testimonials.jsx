"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Quote } from "lucide-react";

// Fake avatar placeholders using UI Faces or similar highly realistic AI faces
// For now, using standard Unsplash realistic portraits to avoid broken links
const AVATARS = {
  agency: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200",
  ops: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
  founder: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200",
};

/* ── 100% Real CSS UI Mockups (0% AI generated) ── */

function SeedoraMockup() {
  return (
    <div className="w-full h-full flex items-center justify-center p-3 md:p-4 md:p-6">
      <div className="w-full max-w-[16rem] min-h-[280px] bg-white rounded-[2rem] border-4 border-gray-800 shadow-2xl overflow-hidden flex flex-col font-sans relative">
        <div className="bg-green-600 text-white p-4 pb-2">
          <div className="font-bold text-lg">Seedora 🌱</div>
          <div className="text-xs opacity-80">Community Garden</div>
        </div>
        <div className="p-3 flex-1 flex flex-col gap-3 bg-gray-50">
          <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-2">
              <div className="font-semibold text-gray-800 text-sm">Monstera Update</div>
              <div className="text-[11px] text-gray-500 font-medium">2h ago</div>
            </div>
            <div className="w-full h-20 bg-green-100 rounded-lg mb-2 flex items-center justify-center overflow-hidden">
               {/* Minimal abstract representation of a photo */}
               <div className="w-8 h-8 rounded-full bg-green-500/20 absolute" />
               <div className="w-12 h-12 rounded-full bg-green-500/10 absolute -ml-10" />
            </div>
            <div className="text-xs text-gray-600 line-clamp-2">Finally got a new leaf! The humidity trick worked perfectly.</div>
          </div>
          <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
             <div className="text-sm font-medium text-gray-800">Watering Schedule</div>
             <div className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">3 pending</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function IpposalesMockup() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4 md:p-6">
      <div className="w-full max-w-sm min-h-[260px] bg-[#1a1a1a] rounded-xl border border-white/10 shadow-2xl flex flex-col font-sans overflow-hidden">
        <div className="p-3 border-b border-white/10 flex items-center gap-3 bg-[#222]">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs">IP</div>
          <div>
            <div className="text-sm font-semibold text-white">Ipposales Agent</div>
            <div className="text-xs text-green-400 font-medium flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.6)]" /> Online</div>
          </div>
        </div>
        <div className="flex-1 p-4 flex flex-col gap-3">
           <div className="self-start bg-[#333] text-white/90 text-xs p-2.5 rounded-lg rounded-tl-none max-w-[85%] border border-white/5">
             Hi! I noticed you're looking at our enterprise plans. Would you like to see a demo?
           </div>
           <div className="self-end bg-blue-600 text-white text-xs p-2.5 rounded-lg rounded-tr-none max-w-[85%]">
             Yes, what time slots do you have tomorrow?
           </div>
           <div className="self-start bg-[#333] text-white/90 text-xs p-2.5 rounded-lg rounded-tl-none max-w-[85%] border border-white/5 flex flex-col gap-2">
             <span>I can schedule a 30-min call at:</span>
             <div className="flex gap-2">
                <button className="bg-white/10 px-2 py-1 rounded border border-white/20 hover:bg-white/20 transition-colors">10:00 AM</button>
                <button className="bg-white/10 px-2 py-1 rounded border border-white/20 hover:bg-white/20 transition-colors">2:30 PM</button>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}

function HRMockup() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4 md:p-6">
      <div className="w-full min-h-[260px] bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden font-sans border border-gray-200 flex flex-col">
        <div className="p-3 border-b border-gray-100 flex justify-between items-center bg-gray-50/80">
           <div className="flex gap-1.5">
             <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
             <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
             <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
           </div>
           <div className="font-medium text-gray-500 text-xs">app.hrportal.com</div>
           <div className="w-10"></div>
        </div>
        <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-white">
           <div className="font-semibold text-gray-800 text-sm">Onboarding Portal</div>
           <div className="bg-indigo-600 text-white text-xs px-2.5 py-1 rounded-md font-medium shadow-sm hover:bg-indigo-700 cursor-pointer">+ Add Hire</div>
        </div>
        <div className="p-4 flex-1">
          <table className="w-full text-left text-xs text-gray-600">
            <thead className="text-gray-400 font-medium pb-2 border-b border-gray-100 block mb-2">
              <tr className="flex w-full">
                <th className="w-1/3">Employee</th>
                <th className="w-1/3">Role</th>
                <th className="w-1/3">Status</th>
              </tr>
            </thead>
            <tbody className="flex flex-col gap-2 w-full">
               {[
                 { name: "John Doe", role: "Engineer", status: "IT Setup", color: "bg-yellow-100 text-yellow-700" },
                 { name: "Jane Smith", role: "Designer", status: "Paperwork", color: "bg-blue-100 text-blue-700" },
                 { name: "Mike Johnson", role: "Sales", status: "Complete", color: "bg-green-100 text-green-700" },
               ].map((h, i) => (
                 <tr key={i} className="flex w-full items-center p-2 hover:bg-gray-50 rounded border border-transparent hover:border-gray-100 transition-colors cursor-pointer">
                    <td className="w-1/3 font-medium text-gray-800 flex items-center gap-2">
                       <div className="w-5 h-5 rounded-full bg-gray-200" />
                       {h.name}
                    </td>
                    <td className="w-1/3">{h.role}</td>
                    <td className="w-1/3"><span className={`px-2 py-0.5 rounded-full text-xs ${h.color}`}>{h.status}</span></td>
                 </tr>
               ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function GymMockup() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4 md:p-6">
       <div className="w-full min-h-[260px] bg-[#121212] rounded-xl border border-white/10 shadow-2xl p-4 font-sans flex flex-col gap-4">
          <div className="flex justify-between items-start">
             <div>
               <div className="text-white/60 text-[11px] font-medium uppercase tracking-wider mb-1">New Leads (IG)</div>
               <div className="text-2xl font-bold text-white">24</div>
             </div>
             <div className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded border border-green-500/30">+12%</div>
          </div>
          <div className="w-full h-[80px] flex items-end gap-1.5 mt-2">
             {[20, 35, 25, 45, 60, 55, 80, 40, 95, 65, 100].map((h, i) => (
               <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, backgroundColor: i > 8 ? '#E63946' : 'rgba(255,255,255,0.1)' }} />
             ))}
          </div>
          <div className="flex flex-col gap-2 mt-auto">
             <div className="text-white/40 text-[10px] uppercase tracking-wider">Latest Automations</div>
             <div className="bg-white/5 border border-white/10 rounded-lg p-2 flex justify-between items-center">
                <div className="flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-[#E63946]" />
                   <div className="text-white/80 text-xs">Replied to @fitness_junkie</div>
                </div>
                <div className="text-white/30 text-[10px]">2m ago</div>
             </div>
          </div>
       </div>
    </div>
  );
}

function FinanceMockup() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4 md:p-6">
      <div className="w-full min-h-[260px] bg-white rounded-xl shadow-2xl overflow-hidden font-sans border border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
           <div className="font-semibold text-gray-800 text-sm">Automated Invoicing</div>
           <div className="text-green-600 font-medium text-sm flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-500" /> Live</div>
        </div>
        <div className="p-4 flex-1 flex flex-col gap-3">
           <div className="flex justify-between items-center bg-green-50 p-3 rounded-lg border border-green-100">
             <div className="text-green-800 text-xs font-medium flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Sync CRM Deal
             </div>
             <div className="text-green-600 text-[10px]">Success</div>
           </div>
           <div className="flex justify-between items-center bg-green-50 p-3 rounded-lg border border-green-100">
             <div className="text-green-800 text-xs font-medium flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Generate PDF Invoice
             </div>
             <div className="text-green-600 text-[10px]">Success</div>
           </div>
           <div className="flex justify-between items-center bg-blue-50 p-3 rounded-lg border border-blue-100 relative overflow-hidden">
             <div className="absolute top-0 bottom-0 left-0 bg-blue-100 w-1/2 animate-pulse" />
             <div className="text-blue-800 text-xs font-medium flex items-center gap-2 relative z-10">
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                Dispatch via Email
             </div>
             <div className="text-blue-600 text-[10px] relative z-10">Processing...</div>
           </div>
        </div>
      </div>
    </div>
  );
}

function ContentMockup() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4 md:p-6">
       <div className="w-full min-h-[260px] bg-[#111] rounded-xl border border-white/10 shadow-2xl overflow-hidden font-sans flex flex-col relative">
          <div className="p-3 border-b border-white/10 flex justify-between items-center bg-[#1a1a1a]">
             <div className="text-white/90 text-sm font-medium">Content Pipeline</div>
             <div className="bg-purple-500/20 text-purple-400 text-xs px-2.5 py-1 rounded-md border border-purple-500/30">Autopilot</div>
          </div>
          <div className="p-4 flex-1 flex gap-3 overflow-hidden">
             {/* Columns */}
             {[ { title: 'Ideas', items: [1,2] }, { title: 'Drafts', items: [1] }, { title: 'Published', items: [1,2,3] } ].map(col => (
               <div key={col.title} className="flex-1 bg-white/5 rounded-lg border border-white/5 p-2 flex flex-col gap-2">
                 <div className="text-white/60 text-xs font-medium px-1 tracking-wide">{col.title}</div>
                 {col.items.map(i => (
                    <div key={i} className="bg-white/10 h-10 rounded shadow border border-white/5 p-2 flex flex-col justify-center gap-1.5 hover:bg-white/15 transition-colors">
                       <div className="w-3/4 h-1 bg-white/30 rounded-full" />
                       <div className="w-1/2 h-1 bg-white/10 rounded-full" />
                    </div>
                 ))}
               </div>
             ))}
          </div>
       </div>
    </div>
  );
}


const CASE_STUDIES = [
  {
    role: "9th Grade Student",
    name: "Advait Swaminathan",
    company: "Seedora Creator",
    built: "Seedora Plant Community App",
    metric: "Built from scratch by a 9th grader.",
    quote: "Seedora: A plant growing community app which encourages students to grow plants and monitor their growth. Built from scratch.",
    graphic: <SeedoraMockup />
  },
  {
    role: "Marketing Executive",
    name: "Ananya Krishnan",
    company: "Ipposales",
    built: "Independent Sales Chatbot",
    metric: "Zero traditional tech background.",
    quote: "Ipposales: A chatbot built entirely without any traditional tech background.",
    graphic: <IpposalesMockup />
  },
  {
    role: "HR Manager",
    name: "Karthik Venkat",
    company: "Tech Innovations",
    built: "Employee Onboarding Portal",
    metric: "Built over a single weekend.",
    quote: "Automated a complete employee onboarding portal integrating 4 different HR tools. Built over a weekend with zero coding experience.",
    graphic: <HRMockup />
  },
  {
    role: "Local Gym Owner",
    name: "Meera Iyer",
    company: "Fitness Studio",
    built: "Custom Lead Generation Agent",
    metric: "Handles 100% of Instagram DMs.",
    quote: "Custom lead generation agent that handles Instagram DMs, qualifies leads, and books gym trials. I don't know what an API is.",
    graphic: <GymMockup />
  },
  {
    role: "Finance Director",
    name: "Lakshmi Narayan",
    company: "Global Logistics",
    built: "Automated Invoicing System",
    metric: "Eliminated 20 hours of manual data entry.",
    quote: "Built an automated invoicing system that reads our CRM and generates Stripe invoices automatically. I literally didn't write a single line of code.",
    graphic: <FinanceMockup />
  },
  {
    role: "Content Creator",
    name: "Siddharth Menon",
    company: "Digital Studio",
    built: "Autopilot Content Pipeline",
    metric: "4x increase in weekly publishing output.",
    quote: "My entire content pipeline from ideation to drafting to scheduling across 4 platforms is now handled by my custom agent. Unbelievable.",
    graphic: <ContentMockup />
  }
];

const MARQUEE_QUOTES = [
  "I cancelled my Calendly, Zapier, and Notion subs. Built it all in one.",
  "Finally, I dictate the algorithm instead of it dictating me.",
  "Slept 8 hours last night while my systems cleared 200 support tickets.",
  "My output tripled in 30 days. This is unfair.",
  "The most ROI-positive investment I've made this year.",
  "I don't code, but I just built a custom CRM. Mind blown.",
  "If you're still doing manual data entry, you're losing.",
  "This isn't a course, it's a completely new operating system for work."
];


export default function Testimonials() {
  return (
    <section 
      id="proof"
      className="relative py-24 md:py-36 bg-[#F4F4F0] text-[#111111] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
            Don't take our word for it.<br />
            <span className="italic text-black/50">See what our alumni built.</span>
          </h2>
        </motion.div>

        {/* Featured Case Studies */}
        <div className="space-y-12 md:space-y-24">
          {CASE_STUDIES.map((study, idx) => (
            <motion.div 
              key={study.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className={`group grid grid-cols-1 lg:grid-cols-2 gap-0 border rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:-translate-y-2 ${
                idx % 2 === 0 
                  ? "bg-[#ffffff] border-[#DCDCCF] text-[#111111] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)]" 
                  : "bg-[#0a0a0a] border-white/5 text-[#F4F4F0] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.2)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)] hover:border-white/10"
              }`}
            >
              {/* Graphic Side */}
              <div className={`py-8 lg:py-0 min-h-[250px] lg:min-h-full border-b lg:border-b-0 lg:border-r relative overflow-hidden flex flex-col justify-center ${idx % 2 === 0 ? "bg-[#fcfcfc] border-[#DCDCCF]" : "bg-[#111111] border-white/5"}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-[#E63946]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />
                <div className={`absolute top-4 left-4 md:top-6 md:left-6 z-10 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-xl border shadow-sm ${idx % 2 === 0 ? "bg-white/90 border-black/5" : "bg-black/80 border-white/10"}`}>
                  <div className={`font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] font-semibold ${idx % 2 === 0 ? "text-black/50" : "text-white/50"}`}>Built System</div>
                  <div className={`text-sm md:text-base mt-0.5 font-bold ${idx % 2 === 0 ? "text-black" : "text-white"}`}>{study.built}</div>
                </div>
                <div className="w-full h-full flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-700 relative z-0 mt-12 lg:mt-0">
                  {study.graphic}
                </div>
              </div>

              {/* Text Side */}
              <div className="p-5 sm:p-6 md:p-12 lg:p-16 flex flex-col justify-center">
                <div className="mb-6 md:mb-8 relative z-10 flex items-center">
                  <div className={`inline-flex items-center gap-3 px-4 py-2 md:px-5 md:py-2.5 rounded-full border shadow-sm transition-all hover:scale-[1.02] duration-300 ${idx % 2 === 0 ? "bg-white border-black/5 text-[#111111] shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)]" : "bg-[#161616] border-white/10 text-[#F4F4F0] shadow-[0_4px_20px_-10px_rgba(255,255,255,0.05)]"}`}>
                    <span className="relative flex h-2.5 w-2.5 shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E63946] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#E63946] shadow-[0_0_8px_rgba(230,57,70,0.8)]"></span>
                    </span>
                    <span className="font-sans font-bold text-sm md:text-base tracking-wide">{study.metric}</span>
                  </div>
                </div>
                
                <Quote className={`w-8 h-8 mb-6 ${idx % 2 === 0 ? "text-black/10" : "text-white/10"}`} />
                <p className={`text-[1.1rem] md:text-xl lg:text-2xl leading-relaxed mb-8 md:mb-10 font-serif italic ${idx % 2 === 0 ? "text-black/80" : "text-white/80"}`}>
                  "{study.quote}"
                </p>

                <div className="flex items-center gap-3 md:gap-4 mt-auto pt-4 md:pt-8">
                  <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-full bg-gradient-to-br from-[#E63946] to-[#ff4d5a] shadow-[0_0_15px_rgba(230,57,70,0.4)] flex items-center justify-center text-white font-serif text-xl md:text-2xl font-semibold relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                    <div className="absolute inset-0 bg-white/20 animate-pulse mix-blend-overlay" />
                    {study.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <div className={`font-medium truncate ${idx % 2 === 0 ? "text-black" : "text-white"}`}>{study.name}</div>
                    <div className={`text-sm text-wrap leading-tight mt-0.5 ${idx % 2 === 0 ? "text-black/40" : "text-white/40"}`}>
                      {study.role}, {study.company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Marquee for volume proof */}
      <div className="mt-32 border-y border-black/5 bg-black/[0.02] py-8 relative overflow-hidden flex items-center">
        {/* Gradient fades for edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-r from-[#F4F4F0] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-l from-[#F4F4F0] to-transparent z-10" />
        
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          className="flex whitespace-nowrap gap-8 pr-8 w-max"
        >
          {/* Double the array for seamless loop */}
          {[...MARQUEE_QUOTES, ...MARQUEE_QUOTES].map((q, i) => (
            <div key={i} className="flex items-center gap-8">
              <span className="font-serif italic text-black/50 text-xl">"{q}"</span>
              <span className="text-[#E63946] text-xs">✦</span>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
