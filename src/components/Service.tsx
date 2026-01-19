"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";

type Service = {
  id: string;
  step: string;
  title: string;
  description: string;
};

const SERVICES: Service[] = [
  {
    id: "s1",
    step: "p01",
    title: "Discovery Workshop",
    description:
      "We begin by deeply understanding your business, users, and technical landscape. Through structured workshops and analysis, we align on goals, risks, and priorities—ensuring everyone moves forward with clarity and confidence."
  },
  {
    id: "s2",
    step: "p02",
    title: "Predictive Planning",
    description:
      "We translate insights into a clear execution plan. By defining milestones, dependencies, and technical decisions early, we reduce uncertainty and create a roadmap that supports both speed and long-term scalability."
  },
  {
    id: "s3",
    step: "p03",
    title: "IA & UX/UI Design",
    description:
      "We design experiences that feel intuitive and purposeful. Information architecture, user flows, and interfaces are crafted with real users in mind—balancing usability, aesthetics, and business objectives."
  },
  {
    id: "s4",
    step: "p04",
    title: "Development",
    description:
      "Our engineers build clean, maintainable, and scalable systems. We focus on performance, reliability, and code quality—so your product is robust today and adaptable for tomorrow."
  },
  {
    id: "s5",
    step: "p05",
    title: "Testing",
    description:
      "Quality is validated at every stage. Through functional, performance, and security testing, we ensure the product behaves as expected and is ready to perform in real-world conditions."
  },
  {
    id: "s6",
    step: "p06",
    title: "Maintenance",
    description:
      "We support your product beyond launch. Continuous monitoring, improvements, and technical care help keep your system stable, secure, and aligned with evolving business needs."
  },
];


export default function ServicesRail() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="bg-[#121212] py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* IMPORTANT: no gap */}
        <div className="flex flex-col md:flex-row overflow-hidden rounded-3xl border border-white/10">
          {SERVICES.map((service, index) => {
            const isActive = active === service.id;

            return (
              <motion.div
                key={service.id}
                layout
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1], // smoother, premium easing
                }}
                onMouseEnter={() => setActive(service.id)}
                onMouseLeave={() => setActive(null)}
                className={clsx(
                  "group relative cursor-pointer",
                  "bg-[#0e0e0e]",
                  "min-h-[260px]", // increased height
                  "border-r border-white/10",
                  "last:border-r-0",
                  isActive
                    ? "md:flex-[3] border-[#7D4CDB]/50"
                    : "md:flex-[1]"
                )}
              >
                {/* Ambient + hover glow */}
                <div
                  className="absolute inset-0 opacity-50 group-hover:opacity-90 transition-opacity duration-500"
                  style={{
                    background:
                      "radial-gradient(circle at top left, rgba(122,94,214,0.35), transparent 60%)",
                  }}
                />

                {/* Content */}
                <div className="relative z-10 h-full p-6 flex flex-col justify-between">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <span className="text-base font-bold text-white/60 tracking-wide">
                      {service.step}
                    </span>
                    
                  </div>

                  {/* Title */}
                  <motion.h3
                    layout
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className={clsx(
                      "font-bold text-white",
                      "text-xl md:text-2xl",
                      "origin-left transition-transform",
                       "mt-15",
                      !isActive &&
                        "md:[writing-mode:vertical-rl] md:rotate-180",
                      isActive &&
                        "md:writing-mode-horizontal-tb md:rotate-0"
                    )}
                  >
                    {service.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    initial={false}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      y: isActive ? 0 : 12,
                    }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="text-gray-300 text-sm leading-relaxed max-w-md"
                  >
                    {service.description}
                  </motion.p>
                  <span className="text-lg text-white/30">+</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
