"use client";

import React, { useEffect } from "react";

export default function MouseGlow() {
  useEffect(() => {
    // Avoid running on mobile/touch interfaces
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let frameId = null;
    const handleMouseMove = (e) => {
      if (frameId) return;
      frameId = requestAnimationFrame(() => {
        document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
        document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
        frameId = null;
      });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      const interactive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.tagName === "INPUT" ||
        target.tagName === "SELECT" ||
        target.tagName === "TEXTAREA" ||
        target.getAttribute("role") === "button";

      if (interactive) {
        document.documentElement.style.setProperty("--glow-color", "rgba(42, 157, 143, 0.07)");
      } else {
        document.documentElement.style.setProperty("--glow-color", "rgba(230, 57, 70, 0.035)");
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return <div className="mouse-spotlight" />;
}
