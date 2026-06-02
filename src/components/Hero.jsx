"use client";

import React from "react";
import { motion } from "framer-motion";
import PricingCard from "./PricingCard";
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
      {/* Background Effects Container */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[40%] md:top-1/2 left-[50%] md:left-[30%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] max-w-[150vw] max-h-[150vw]">
          {/* Revolving Background Glows (Intensified) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 origin-center mix-blend-multiply"
              style={{ willChange: "transform" }}
            >
              <div className="absolute -top-16 -left-16 w-96 h-96 rounded-full" style={{ background: "radial-gradient(circle, rgba(21,96,78,0.2) 0%, rgba(21,96,78,0) 70%)" }} />
              <div className="absolute -bottom-16 -right-16 w-96 h-96 rounded-full" style={{ background: "radial-gradient(circle, rgba(244,162,97,0.2) 0%, rgba(244,162,97,0) 70%)" }} />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full" style={{ background: "radial-gradient(circle, rgba(26,25,22,0.05) 0%, rgba(26,25,22,0) 70%)" }} />
            </motion.div>
          </div>

          {/* Spinning Tech Ring */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0">
             <motion.div
               animate={{ rotate: -360 }}
               transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full border border-[#15604E]/15 border-dashed"
               style={{ willChange: "transform" }}
             />
             <motion.div
               animate={{ rotate: 360 }}
               transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full border border-[#F4A261]/10 border-dotted"
               style={{ willChange: "transform" }}
             />
          </div>

          {/* Orbiting Particles (More Noticeable) */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-10"
            style={{ willChange: "transform" }}
          >
            <motion.div 
               animate={{ rotate: -360 }} 
               transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
               className="absolute top-[5%] left-[25%] text-[#15604E]/60 drop-shadow-[0_0_10px_rgba(21,96,78,0.5)]"
            >
              <Sparkle size={32} />
            </motion.div>
            <motion.div 
               animate={{ rotate: -360 }} 
               transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
               className="absolute bottom-[15%] right-[15%] text-[#F4A261]/60 drop-shadow-[0_0_10px_rgba(244,162,97,0.5)]"
            >
              <Sparkle size={24} />
            </motion.div>
            <motion.div 
               animate={{ rotate: -360 }} 
               transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
               className="absolute top-[50%] right-[-10%] flex items-center justify-center"
            >
              <div className="w-4 h-4 rounded-full bg-[#15604E]/20 absolute shadow-[0_0_15px_#15604E]" />
              <div className="w-2 h-2 rounded-full bg-[#15604E] shadow-[0_0_15px_#15604E]" />
            </motion.div>
            <motion.div 
               animate={{ rotate: -360 }} 
               transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
               className="absolute bottom-[-5%] left-[10%] flex items-center justify-center"
            >
              <div className="w-3 h-3 rounded-full bg-[#F4A261]/20 absolute shadow-[0_0_20px_#F4A261]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#F4A261] shadow-[0_0_10px_#F4A261]" />
              <div className="w-6 h-6 rounded-full bg-[#F4A261]/30 absolute shadow-[0_0_20px_#F4A261]" />
              <div className="w-3 h-3 rounded-full bg-[#F4A261] shadow-[0_0_20px_#F4A261]" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mt-8 items-start">
          <div className="lg:col-span-7 relative z-10">
            <div className="animate-float-text">
              <motion.h1
              data-testid="hero-headline"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="font-serif text-[clamp(2.8rem,7.5vw,6.5rem)] leading-[0.92] tracking-tight relative z-10"
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
                          className="absolute left-0 -bottom-2 md:-bottom-3 h-[3px] md:h-[4px] w-full bg-[#15604E] block"
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
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.4 }}
              className="mt-8 max-w-xl pl-6 border-l-[3px] border-[#15604E] relative z-10"
            >
              <p className="text-xl md:text-2xl text-[#1A1916] leading-relaxed font-sans">
                AI is not your enemy. Don&apos;t fight it.{" "}
                <span className="font-bold text-[#15604E] text-xl md:text-2xl mx-1">
                  Boss it.
                </span>{" "}
                Design systems that execute repetitive work for you.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.6 }}
              className="mt-10 flex flex-wrap items-center gap-4 relative z-20"
            >
              <a
                href="#enrol"
                data-testid="hero-cta-primary"
                className="group inline-flex items-center gap-3 bg-[#15604E] text-white px-7 py-4 rounded-full text-sm md:text-base font-medium hover:bg-[#1B7560] transition-colors duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5"
              >
                Unlock the Blueprint
                <span className="inline-flex w-7 h-7 rounded-full bg-white/15 items-center justify-center group-hover:translate-x-1 transition-transform">
                  <Sparkle className="w-3.5 h-3.5" />
                </span>
              </a>
            </motion.div>


          </div>

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.1, ease, delay: 0.5 }}
            className="lg:col-span-5 lg:sticky lg:top-28 flex items-center justify-center lg:justify-end"
          >
            <PricingCard />
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
                    <span className="inline-block w-1 h-1 rounded-full bg-[#15604E]"></span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Removed Floating Workflows Accents to keep background clean */}

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[9px] font-mono tracking-[0.25em] text-[#666666]/60 uppercase hidden md:flex select-none">
        <span>scroll</span>
        <div className="w-[12px] h-[20px] rounded-full border border-[#DCDCCF] flex justify-center p-[2px]">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1 rounded-full bg-[#15604E]"
          />
        </div>
      </div>
    </section>
  );
}
