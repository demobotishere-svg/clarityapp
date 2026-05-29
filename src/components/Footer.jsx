"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      data-testid="primary-footer"
      className="relative bg-[#111111] text-[#F4F4F0] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-5xl sm:text-6xl md:text-8xl lg:text-9xl leading-[0.95] tracking-tight"
        >
          Master the system.
        </motion.h2>

        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-white/10 pt-10">
          <div className="md:col-span-5">
            <div className="font-serif text-3xl">
              Clarity<span className="text-[#E63946]">.</span>
            </div>
            <p className="mt-3 text-sm text-[#F4F4F0]/60 max-w-sm">
              From AI clutter to AI clarity. AI is not your enemy. Boss it.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#F4F4F0]/40">
              Navigate
            </div>
            <ul className="mt-3 space-y-2 text-sm">
              {["Clarity", "Outcomes", "Testimonials", "About Me", "Enrol"].map(
                (l) => (
                  <li key={l}>
                    <a
                      href={`#${l.toLowerCase().replace(/\s/g, "-")}`}
                      className="text-[#F4F4F0]/80 hover:text-[#F4F4F0] transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#F4F4F0]/40">
              The promise
            </div>
            <p className="mt-3 text-sm text-[#F4F4F0]/70">
              One course. One price. No upsell. No funnel. Just the system, shipped
              to your WhatsApp the moment you enrol.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-white/10 pt-6 font-mono text-[10px] uppercase tracking-[0.25em] text-[#F4F4F0]/40">
          <div>© 2026 AI-Native Thinking.</div>
          <div>Crafted in clarity, not clutter.</div>
        </div>
      </div>
    </footer>
  );
}
