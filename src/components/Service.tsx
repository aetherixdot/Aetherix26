"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import clsx from "clsx"

type Service = {
  id: string
  step: string
  title: string
  description: string
}

const SERVICES: Service[] = [
  {
    id: "s1",
    step: "p01",
    title: "Discovery Workshop",
    description:
      "We begin by deeply understanding your business, users, and technical landscape. Through structured workshops and analysis, we align on goals, risks, and priorities—ensuring everyone moves forward with clarity and confidence.",
  },
  {
    id: "s2",
    step: "p02",
    title: "Predictive Planning",
    description:
      "We translate insights into a clear execution plan. By defining milestones, dependencies, and technical decisions early, we reduce uncertainty and create a roadmap that supports both speed and long-term scalability.",
  },
  {
    id: "s3",
    step: "p03",
    title: "IA & UX/UI Design",
    description:
      "We design experiences that feel intuitive and purposeful. Information architecture, user flows, and interfaces are crafted with real users in mind—balancing usability, aesthetics, and business objectives.",
  },
  {
    id: "s4",
    step: "p04",
    title: "Development",
    description:
      "Our engineers build clean, maintainable, and scalable systems. We focus on performance, reliability, and code quality—so your product is robust today and adaptable for tomorrow.",
  },
  {
    id: "s5",
    step: "p05",
    title: "Testing",
    description:
      "Quality is validated at every stage. Through functional, performance, and security testing, we ensure the product behaves as expected and is ready to perform in real-world conditions.",
  },
  {
    id: "s6",
    step: "p06",
    title: "Maintenance",
    description:
      "We support your product beyond launch. Continuous monitoring, improvements, and technical care help keep your system stable, secure, and aligned with evolving business needs.",
  },
]

export default function ServicesRail() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <section className="bg-[#121212] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row overflow-hidden rounded-3xl border border-white/10">
          {SERVICES.map((service) => {
            const isActive = active === service.id

            return (
              <motion.div
                key={service.id}
                layout="position" // ✅ prevents height animation
                transition={{
                  type: "spring",
                  stiffness: 110,
                  damping: 28,
                  mass: 0.9,
                }}
                onMouseEnter={() => setActive(service.id)}
                onMouseLeave={() => setActive(null)}
                className={clsx(
                  "relative bg-[#0e0e0e] ",
                  "h-100", // ✅ fixed height
                  "border-b md:border-b-0 md:border-r border-white/10 last:border-r-0",
                  isActive ? "md:flex-[2.5]" : "md:flex-1"
                )}
              >
                {/* Glow */}
                <div
                  className={clsx(
                    "absolute inset-0 transition-opacity duration-700",
                    isActive ? "opacity-80" : "opacity-30"
                  )}
                  style={{
                    background:
                      "radial-gradient(circle at top left, rgba(122,94,214,0.35), transparent 65%)",
                  }}
                />

                {/* Content */}
                <div className="relative z-10 flex h-full flex-col items-start px-6 py-6">
                  {/* Header block */}
                  <div className="flex flex-col items-start">

                    {/* Step */}
                    <span className="text-xs font-semibold tracking-wide text-white/50">
                      {service.step}
                    </span>

                    {/* Title */}
                    <motion.h3
                      layout="position"
                      transition={{
                        duration: 0.45,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className={clsx(
                        "mt-8 font-semibold text-white",
                        "text-xl md:text-2xl",
                        "transition-all duration-500 text-left",

                        // Desktop inactive = vertical
                        !isActive &&
                        "md:[writing-mode:vertical-rl] md:opacity-70 md:tracking-wide",

                        // Active OR mobile = horizontal
                        "md:[writing-mode:horizontal-tb]"
                      )}
                    >
                      {service.title}
                    </motion.h3>

                  </div>
                  <motion.p
                    animate={{
                      opacity: isActive ? 1 : 0,
                      y: isActive ? 0 : 6,
                    }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="
      mt-6
      max-w-md
      text-[16px]
      leading-relaxed
      text-gray-300
      md:block
      hidden
    "
                  >
                    {service.description}
                  </motion.p>

                  {/* Mobile description (always visible) */}
                  <p className="mt-5 text-[16px] leading-relaxed text-gray-300 md:hidden">
                    {service.description}
                  </p>

                  <div className="flex-1" />

                  {/* Indicator */}
                  <span
                    className={clsx(
                      "text-base transition-opacity duration-300",
                      isActive ? "opacity-30" : "opacity-10"
                    )}
                  >
                    +
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}