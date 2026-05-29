"use client";

import React from "react";
import { motion } from "framer-motion";
import AIFlowWidget from "./AIFlowWidget";
import { ArrowDown, Sparkle } from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  const sentence = "From AI clutter to AI clarity.";
  const words = sentence.split(" ");

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 15, filter: "blur(3px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section
      id="clarity"
      data-testid="hero-section"
      className="relative pt-32 md:pt-40 pb-20 md:pb-28 grain"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">


        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mt-8 items-start">
          <div className="lg:col-span-7">
            <motion.h1
              data-testid="hero-headline"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="font-serif text-[clamp(2.8rem,7.5vw,6.5rem)] leading-[0.92] tracking-tight"
            >
              {words.map((word, idx) => {
                const isClutter = word.toLowerCase().includes("clutter");
                const isClarity = word.toLowerCase().includes("clarity");
                
                return (
                  <motion.span
                    key={idx}
                    variants={wordVariants}
                    className="inline-block mr-[0.25em]"
                  >
                    {isClutter ? (
                      <span className="italic text-[#666666]">{word}</span>
                    ) : isClarity ? (
                      <span className="relative inline-block">
                        clarity
                        <motion.span
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 1.2 }}
                          style={{ transformOrigin: "left" }}
                          className="absolute left-0 -bottom-2 md:-bottom-3 h-[3px] md:h-[4px] w-full bg-[#E63946] block"
                        ></motion.span>
                      </span>
                    ) : (
                      word
                    )}
                  </motion.span>
                );
              })}
              .
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.4 }}
              className="mt-8 max-w-xl pl-6 border-l-[3px] border-[#E63946]"
            >
              <p className="text-xl md:text-2xl text-[#111111] leading-relaxed font-serif italic">
                AI is not your enemy. Don&apos;t fight it.{" "}
                <span className="font-bold text-[#E63946] not-italic font-sans text-xl md:text-2xl mx-1">
                  Boss it.
                </span>{" "}
                Design systems that execute repetitive work for you — <span className="font-semibold text-[#E63946] not-italic font-sans text-lg md:text-xl">no code, no prompt-tinkering, no caffeine debt.</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.6 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#enrol"
                data-testid="hero-cta-primary"
                className="group inline-flex items-center gap-3 bg-[#111111] text-[#F4F4F0] px-7 py-4 rounded-full text-sm md:text-base font-medium hover:bg-[#E63946] transition-colors duration-300 button-sweep-effect"
              >
                Unlock the Blueprint
                <span className="inline-flex w-7 h-7 rounded-full bg-[#F4F4F0]/15 items-center justify-center group-hover:translate-x-1 transition-transform">
                  <Sparkle className="w-3.5 h-3.5" />
                </span>
              </a>
              <a
                href="#outcomes"
                data-testid="hero-cta-secondary"
                className="inline-flex items-center gap-2 text-sm md:text-base font-medium text-[#111111]/80 hover:text-[#111111] transition-colors"
              >
                See the system
                <ArrowDown className="w-4 h-4" />
              </a>
            </motion.div>


          </div>

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.1, ease, delay: 0.5 }}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            <AIFlowWidget />
          </motion.div>
        </div>
      </div>

      <div className="mt-20 md:mt-28 border-y border-[#DCDCCF] overflow-hidden">
        <div className="marquee-pause">
          <div className="marquee-track flex whitespace-nowrap py-5">
            {Array.from({ length: 2 }).map((_, i) => (
              <div
                key={i}
                className="flex items-center gap-10 px-6 font-mono text-xs uppercase tracking-[0.25em] text-[#666666]"
              >
                {[
                  "Boss the machine",
                  "Design, don't execute",
                  "1 person + AI = powerhouse",
                  "No code required",
                  "Architect your workflow",
                  "From clutter to clarity"
                ].map((t) => (
                  <span key={t} className="flex items-center gap-10">
                    {t}
                    <span className="inline-block w-1 h-1 rounded-full bg-[#E63946]"></span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Workflows Accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Tech Connector Line */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block z-0 opacity-40" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M 150 220 Q 300 480, 520 340 T 780 480"
            fill="none"
            stroke="url(#tech-gradient)"
            strokeWidth="2"
            strokeDasharray="6, 6"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
          />
          <defs>
            <linearGradient id="tech-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E63946" />
              <stop offset="50%" stopColor="#F4A261" />
              <stop offset="100%" stopColor="#2A9D8F" />
            </linearGradient>
          </defs>
        </svg>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[9px] font-mono tracking-[0.25em] text-[#666666]/60 uppercase hidden md:flex select-none">
        <span>scroll</span>
        <div className="w-[12px] h-[20px] rounded-full border border-[#DCDCCF] flex justify-center p-[2px]">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1 rounded-full bg-[#E63946]"
          />
        </div>
      </div>
    </section>
  );
}
