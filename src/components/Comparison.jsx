"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

const LOOP = [
  "Ask ChatGPT a question",
  "Copy generated text",
  "Paste into email / doc",
  "Back to the manual grind"
];

const PAIRS = [
  {
    old: "Typing meeting summaries",
    next: "System joins the call, transcribes, extracts action items, logs tasks to your project board."
  },
  {
    old: "Digging for data",
    next: "System reads requests, pulls files from your database, hands you a pre-drafted response."
  },
  {
    old: "Manual scheduling",
    next: "System cross-references calendars, qualifies requests, books deep-work blocks — zero back-and-forth."
  }
];

export default function Comparison() {
  return (
    <section
      id="outcomes"
      data-testid="comparison-section"
      className="relative py-24 md:py-36 border-t border-[#DCDCCF]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
        >
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-[#666666]">
            Industry insight
          </div>
          <h2 className="mt-3 font-serif text-4xl md:text-6xl lg:text-7xl leading-[1] tracking-tight max-w-4xl">
            The new math:{" "}
            <span className="italic text-[#666666]">1 person + AI</span> ={" "}
            <span className="relative inline-block">
              total powerhouse
              <span className="absolute left-0 -bottom-2 h-[3px] w-full bg-[#E63946]" />
            </span>
            .
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 mt-16">

          {/* ── YOU NOW card ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease }}
            whileHover={{ scale: 1.01, y: -2, transition: { duration: 0.3, ease } }}
            data-testid="exhausting-loop-card"
            className="relative rounded-3xl p-8 md:p-10 bg-[#EAEAE6] border border-[#DCDCCF] transition-shadow hover:shadow-md cursor-default overflow-hidden"
          >
            {/* Frustrated man image — right half, faded in from the left */}
            <div
              className="absolute inset-y-0 right-0 w-1/2 hidden md:block pointer-events-none"
              aria-hidden="true"
            >
              {/* Left-edge gradient fade so image blends into card bg */}
              <div
                className="absolute inset-0 z-10"
                style={{
                  background: "linear-gradient(to right, #EAEAE6 0%, #EAEAE6 10%, transparent 55%)"
                }}
              />
              <img
                src="/frustrated_pro.png"
                alt=""
                className="w-full h-full object-cover object-center grayscale mix-blend-multiply"
                style={{ opacity: 0.15 }}
              />
            </div>

            {/* Text content — left half, always on top */}
            <div className="relative z-10">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#666666]">
                The exhausting loop{" "}
                <span className="inline-flex items-center ml-1 px-2 py-0.5 rounded bg-[#111111]/8 text-[#111111] font-semibold">
                  you now
                </span>
              </div>
              <h3 className="mt-3 font-serif text-3xl md:text-4xl text-[#666666] line-through decoration-[#E63946]/60">
                Copy. Paste. Repeat.
              </h3>
              <ol className="mt-10 space-y-5">
                {LOOP.map((s, i) => (
                  <motion.li
                    key={s}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1, ease }}
                    className="flex items-center gap-4"
                  >
                    <span className="font-mono text-xs text-[#999] w-8 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base md:text-lg text-[#666666]">{s}</span>
                  </motion.li>
                ))}
              </ol>
              <div className="mt-10 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-[#666666]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#999]" />
                Output: tired you
              </div>
            </div>
          </motion.div>

          {/* ── WHAT YOU BECOME card ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease, delay: 0.15 }}
            whileHover={{ scale: 1.02, y: -4, transition: { duration: 0.3, ease } }}
            data-testid="ai-native-card"
            className="relative rounded-3xl p-8 md:p-10 bg-white border border-[#E63946]/20 ring-glow shimmer-border overflow-hidden cursor-default transition-shadow duration-300 hover:shadow-[0_25px_60px_-20px_rgba(230,57,70,0.12)]"
          >
            {/* Happy man image — right half, faded in from left */}
            <div
              className="absolute inset-y-0 right-0 w-1/2 hidden md:block pointer-events-none"
              aria-hidden="true"
            >
              <div
                className="absolute inset-0 z-10"
                style={{
                  background: "linear-gradient(to right, #ffffff 0%, #ffffff 10%, transparent 55%)"
                }}
              />
              <img
                src="/confident_pro.png"
                alt=""
                className="w-full h-full object-cover object-center"
                style={{ opacity: 0.2 }}
              />
            </div>

            {/* Text content */}
            <div className="relative z-10">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#E63946]">
                The AI-Native System{" "}
                <span className="inline-flex items-center ml-1 px-2 py-0.5 rounded bg-[#E63946]/10 text-[#E63946] font-semibold">
                  what you become
                </span>
              </div>
              <h3 className="mt-3 font-serif text-3xl md:text-4xl">
                Design once. <span className="italic">Run forever.</span>
              </h3>
              <div className="mt-8 space-y-5">
                {PAIRS.map((p, i) => (
                  <motion.div
                    key={p.old}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.12, ease }}
                    data-testid="ai-native-row"
                    className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-5 border-t border-[#DCDCCF] pt-5"
                  >
                    <div className="md:col-span-4">
                      <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#666666]">
                        Old way
                      </div>
                      <div className="text-[#666666] line-through decoration-[#666666]/30 mt-1">
                        {p.old}
                      </div>
                    </div>
                    <div className="md:col-span-1 flex md:justify-center md:items-center">
                      <ArrowRight className="w-4 h-4 text-[#E63946]" />
                    </div>
                    <div className="md:col-span-7">
                      <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#E63946]">
                        AI-native system
                      </div>
                      <div className="mt-1 text-[#111111]">{p.next}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-10 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-[#E63946]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E63946] pulse-dot" />
                Output: rested you, scaled
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="mt-16 relative overflow-hidden rounded-2xl bg-[#111111] text-[#F4F4F0] p-8 md:p-12 shadow-2xl flex flex-col lg:flex-row lg:items-center justify-between gap-10"
        >
          {/* Animated top edge shine */}
          <motion.div 
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 4, ease: "linear", repeat: Infinity }}
            className="absolute top-0 left-0 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-[#E63946] to-transparent opacity-80" 
          />
          
          <div className="relative z-10">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#E63946] mb-5 flex items-center gap-2">
               <span className="w-1.5 h-1.5 rounded-full bg-[#E63946] pulse-dot" /> The shift
            </div>
            <p className="font-serif italic text-2xl md:text-4xl text-white/90 leading-tight max-w-3xl">
              Stop functioning like a machine.<br className="hidden md:block" />
              <span className="relative inline-block mt-3">
                <span className="relative z-10 text-white font-normal not-italic px-2">Start directing them.</span>
                <motion.span 
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                  className="absolute inset-0 bg-[#E63946] origin-left -skew-x-12 rounded-sm"
                />
              </span>
            </p>
          </div>

          <div className="relative z-10 flex items-center justify-center w-full lg:w-[320px] shrink-0 h-48 lg:h-auto mt-8 lg:mt-0">
             <div className="relative w-40 h-40 flex items-center justify-center">
                
                {/* Glowing Core (The Director) */}
                <motion.div 
                  animate={{ scale: [1, 1.15, 1], boxShadow: ["0 0 20px rgba(230,57,70,0.5)", "0 0 50px rgba(230,57,70,0.8)", "0 0 20px rgba(230,57,70,0.5)"] }} 
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="w-12 h-12 bg-[#E63946] rounded-full z-20 relative flex items-center justify-center"
                >
                  <div className="w-4 h-4 bg-white rounded-full opacity-80" />
                </motion.div>
                
                {/* Emitting Waves (The Instructions) */}
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 1, opacity: 0.8 }}
                    animate={{ scale: 3.5, opacity: 0 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: i * 1 }}
                    className="absolute inset-0 m-auto w-12 h-12 border-[1.5px] border-[#E63946] rounded-full z-10"
                  />
                ))}

                {/* Orbiting Elements (The Machines) */}
                <motion.div
                   animate={{ rotate: 360 }}
                   transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                   className="absolute inset-[-40px] rounded-full border border-white/10"
                >
                   {/* Machine 1 */}
                   <div className="absolute top-0 left-1/2 w-3 h-3 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
                   {/* Machine 2 */}
                   <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-white rounded-full -translate-x-1/2 translate-y-1/2 shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
                   {/* Machine 3 */}
                   <div className="absolute top-1/2 left-0 w-3 h-3 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
                </motion.div>

                {/* Secondary inner orbit */}
                <motion.div
                   animate={{ rotate: -360 }}
                   transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                   className="absolute inset-[-10px] rounded-full border border-white/5 border-dashed"
                >
                   <div className="absolute top-[15%] left-[85%] w-1.5 h-1.5 bg-gray-400 rounded-full" />
                   <div className="absolute top-[85%] left-[15%] w-1.5 h-1.5 bg-gray-400 rounded-full" />
                </motion.div>
                
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
