"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Calculator,
  Megaphone,
  PenTool,
  Rocket,
  Scale,
  TrendingUp,
  Truck,
  Users
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

const ROLES = [
  {
    icon: Megaphone,
    title: "Marketing & Brand",
    body: "Pipelines ingest briefs, auto-generate mood boards, and format assets for multiple platforms instantly."
  },
  {
    icon: TrendingUp,
    title: "Sales & BD",
    body: "Automate prospect qualification and calendar booking. Only talk to buyers ready to close."
  },
  {
    icon: Users,
    title: "HR & Recruiting",
    body: "Automate candidate screening, interview scheduling, and end-to-end employee onboarding."
  },
  {
    icon: Truck,
    title: "Operations & Logistics",
    body: "Extract data from unstructured emails, update inventory sheets, and generate daily reports."
  },
  {
    icon: Calculator,
    title: "Finance & Accounting",
    body: "Ingest hundreds of PDF invoices, reconcile against bank statements, and draft ledger entries."
  },
  {
    icon: PenTool,
    title: "Product & Design",
    body: "Generate PRDs from meeting notes, map requirement docs, and create predictive user flows."
  },
  {
    icon: Rocket,
    title: "Founders & Solopreneurs",
    body: "Backend systems handle multi-channel leads, product delivery, and support while you scale."
  },
  {
    icon: BriefcaseBusiness,
    title: "Consultants & Analysts",
    body: "System reads client requests, pulls files from databases, and hands you pre-drafted research."
  },
  {
    icon: Scale,
    title: "Legal & Compliance",
    body: "Agents review long contracts, flag missing clauses, and summarize risk profiles instantly."
  }
];

export default function Audience() {
  return (
    <section
      data-testid="audience-section"
      className="relative py-24 md:py-36 border-t border-[#DCDCCF] bg-[#F4F4F0]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end"
        >
          <div className="lg:col-span-7">
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-[#666666]">
              Who it is for
            </div>
            <h2 className="mt-3 font-serif text-4xl md:text-6xl lg:text-7xl leading-[1] tracking-tight">
              Any domain.{" "}
              <span className="italic text-[#666666]">Zero code required.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base md:text-lg text-[#666666] leading-relaxed">
              This isn&apos;t a developer course in disguise. If you read briefs,
              write documents, talk to customers, plan things, or make decisions for
              a living — you qualify.
              <br />
              <br />
              <span className="text-[#111111]">
                The only prerequisite: you can write a clear email and you have a
                real job with real problems.
              </span>
            </p>
          </div>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {ROLES.map(({ icon: Icon, title, body }, i) => (
            <motion.div
              key={title}
              data-testid="audience-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.05, ease }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden bg-white border border-[#DCDCCF]/80 rounded-2xl p-6 md:p-7 hover:border-[#111111] transition-all duration-500 hover:shadow-2xl"
            >
              {/* Dynamic Design Accent */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#E63946]/[0.02] to-[#2A9D8F]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#E63946] to-[#2A9D8F] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 pointer-events-none" />
              
              <div className="relative z-10 flex items-start justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#F4F4F0] border border-[#DCDCCF] flex items-center justify-center group-hover:bg-[#111111] group-hover:text-[#F4F4F0] group-hover:border-[#111111] transition-all">
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#111111]/30 group-hover:text-[#E63946] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </div>
              <h3 className="relative z-10 mt-6 font-serif text-2xl leading-tight">{title}</h3>
              <p className="relative z-10 mt-3 text-sm text-[#666666] leading-relaxed">{body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
