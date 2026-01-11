"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SpinBubbleLoader } from "react-custom-spinner";

export default function About() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start center"],
  });

  const slideY = useTransform(scrollYProgress, [0, 1], ["10vh", "0vh"]);
  const curveY = useTransform(scrollYProgress, [0, 0.5], ["15%", "0%"]);
  const glowOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5],
    [0, 0.8, 1]
  );

  // loader fade-in synced with glow
  const loaderOpacity = useTransform(scrollYProgress, [0.25, 0.55], [0, 1]);

  // subtle top → bottom motion
  const loaderY = useTransform(scrollYProgress, [0.25, 0.55], ["-10px", "20px"]);

  return (
    <section ref={ref} className="relative z-20">
      <div className="h-screen" />

      <motion.div
        style={{ y: slideY }}
        className="relative min-h-screen bg-[#121212]"
      >
        {/* CURVE + GLOW (UNCHANGED) */}
        <div className="absolute inset-x-0 -top-[25vh] h-[40vh] overflow-hidden pointer-events-none z-10">
          <motion.div
            style={{ y: curveY, opacity: glowOpacity }}
            className="absolute left-0 right-0 mx-auto w-full"
          >
            <div
              className="absolute w-full"
              style={{
                height: "700px",
                bottom: "-850px",
                borderRadius: "50%",
                background: "transparent",
                boxShadow: "0 -35px 120px rgba(138,92,255,0.5)",
              }}
            />
          </motion.div>
        </div>

        {/* 🔥 TOP → BOTTOM LOADER (below glow) */}
        <motion.div
          style={{ opacity: loaderOpacity, y: loaderY }}
          className="absolute left-1/2 top-[18vh] z-20 -translate-x-1/2 pointer-events-none"
        >
          <SpinBubbleLoader
            size="40px"     // ✅ string
            speed={0.8}     // ✅ number
            color="#8A5CFF"
            loading={true}
          />
        </motion.div>

        {/* CONTENT */}
        <div className="relative z-40 bg-[#121212] pt-[5vh] pb-20">
          <div className="max-w-3xl mx-auto px-6 text-center">

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[#50C8B4] text-sm tracking-[0.2em] uppercase mb-8"
            >
              [ WHY WORK WITH AETHERIX ]
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8"
            >
              Painless team augmentation.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto"
            >
              Aetherix is a modern development studio committed to help businesses
              ship faster, scale smarter, and build products that last.
              From APIs to infrastructure everything just works.
            </motion.p>

          </div>
        </div>
      </motion.div>
    </section>
  );
}
