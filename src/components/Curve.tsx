"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Curve() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start center"],
  });

  // Subtle parallax
  const y = useTransform(scrollYProgress, [0, 1], ["8%", "0%"]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [0.3, 0.6, 0.4]);

  return (
    <div ref={ref} className="absolute inset-x-0 -top-[55vh] pointer-events-none">
      <motion.svg
        style={{ y }}
        viewBox="0 0 1600 600"
        preserveAspectRatio="none"
        className="w-[140%] h-[600px] mx-auto block"
      >
        {/* ===== SOFT OUTER GLOW ===== */}
        <motion.path
          style={{ opacity: glowOpacity }}
          d="M -800 600 A 1600 1600 0 0 1 2400 600"
          fill="none"
          stroke="rgba(138,92,255,0.25)"
          strokeWidth="140"
          filter="blur(60)"
        />

        {/* ===== INNER GLOW ===== */}
        <motion.path
          style={{ opacity: glowOpacity }}
          d="M -800 600 A 1600 1600 0 0 1 2400 600"
          fill="none"
          stroke="rgba(138,92,255,0.45)"
          strokeWidth="40"
          filter="blur(18)"
        />

        {/* ===== SOLID ARC ===== */}
        <path
          d="M -800 600 A 1600 1600 0 0 1 2400 600"
          fill="none"
          stroke="#0B0E14"
          strokeWidth="520"
        />
      </motion.svg>
    </div>
  );
}
