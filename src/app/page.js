"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LeadForm from "@/components/LeadForm";
import Comparison from "@/components/Comparison";
import Architect from "@/components/Architect";
import Audience from "@/components/Audience";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import PillChoice from "@/components/PillChoice";
import Footer from "@/components/Footer";
import MouseGlow from "@/components/MouseGlow";
import ScrollProgress from "@/components/ScrollProgress";
import GridBackground from "@/components/GridBackground";
import ScrollReveal from "@/components/ScrollReveal";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <MouseGlow />
      <Navbar />

      <motion.div
        initial={{ opacity: 0, scale: 0.99, filter: "blur(6px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        data-testid="landing-page"
        className="relative overflow-x-hidden"
      >
        <GridBackground />
        <Hero />
        
        <section id="enrol" data-testid="lead-section-1" className="border-t border-[#DCDCCF] bg-[#FAF8F3]">
          <LeadForm 
            variant="primary" 
            testIdSuffix="1" 
            layout="split-reverse"
            preTitle="15 MINUTES TO PARADIGM SHIFT"
            title="15 minutes of pure"
            titleHighlight="signal."
            description="Forget generic courses. Get the exact architectural blueprint to build an AI-Native system in a 15-minute high-density breakdown."
            features={["15-min tactical breakdown", "Deployable architecture", "Instant WhatsApp access"]}
            buttonText="Send me the 15-min blueprint"
          />
        </section>

        <ScrollReveal>
          <Comparison />
        </ScrollReveal>

        <ScrollReveal>
          <Architect />
        </ScrollReveal>

        <section data-testid="lead-section-2" className="border-t border-[#white/10] bg-[#1A1916]">
          <LeadForm 
            variant="secondary" 
            testIdSuffix="2" 
            layout="centered"
            preTitle="THE 15-MINUTE SYSTEM BUILDER"
            title="Give us 15 minutes."
            titleHighlight="We'll give you a system."
            description="Watch the exact blueprint our students used to reclaim 20+ hours a week. No fluff, just practical execution."
            features={["No coding required", "100% practical workflows", "Step-by-step guidance"]}
            buttonText="Unlock the system builder"
          />
        </section>

        <ScrollReveal>
          <Audience />
        </ScrollReveal>

        <ScrollReveal>
          <About />
        </ScrollReveal>

        <section data-testid="lead-section-3" className="border-t border-[#DCDCCF] bg-[#FAF8F3]">
          <LeadForm 
            variant="primary" 
            testIdSuffix="3" 
            layout="standard"
            preTitle="PURE SIGNAL. ZERO NOISE."
            title="15 minutes can"
            titleHighlight="transform you."
            description="We compressed 6 years of AI production experience into a 15-minute tactical breakdown. You will leave with a deployable architecture."
            features={["6 years of experience", "Zero fluff allowed", "Actionable right away"]}
            buttonText="Start your transformation"
          />
        </section>

        <ScrollReveal>
          <Testimonials />
        </ScrollReveal>

        <section data-testid="lead-section-4" className="border-t border-[#white/10] bg-[#1A1916]">
          <LeadForm 
            variant="secondary" 
            testIdSuffix="4" 
            layout="split-reverse"
            preTitle="YOUR 15-MINUTE TRANSFORMATION"
            title="Stop wasting time."
            titleHighlight="See the blueprint."
            description="Most people spend weeks trying to learn AI. You just need 15 minutes to see how to actually build and deploy autonomous workflows."
            features={["Skip the learning curve", "Build autonomous workflows", "Direct to WhatsApp"]}
            buttonText="Get the 15-min blueprint"
          />
        </section>

        <ScrollReveal>
          <PillChoice />
        </ScrollReveal>

        <FinalCTA />

        <Footer />
      </motion.div>
    </>
  );
}
