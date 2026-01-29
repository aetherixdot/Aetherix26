"use client"

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
      "We start by understanding your business, users, and goals. This phase helps us identify opportunities, reduce risks, and set a clear direction before we build anything.",
  },
  {
    id: "s2",
    step: "p02",
    title: "Predictive Planning",
    description:
      "We turn insights into a clear, actionable plan. Timelines, features, and technical decisions are defined early so the project stays focused and efficient.",
  },
  {
    id: "s3",
    step: "p03",
    title: "UX & UI Design",
    description:
      "We design simple, intuitive experiences that users love. Every screen is crafted to balance usability, aesthetics, and business impact.",
  },
  {
    id: "s4",
    step: "p04",
    title: "Development",
    description:
      "We build fast, reliable, and scalable products. Clean code, performance, and long-term maintainability are always our priority.",
  },
  {
    id: "s5",
    step: "p05",
    title: "Testing & QA",
    description:
      "We test across devices, browsers, and real-world scenarios. This ensures your product works smoothly and is ready for real users.",
  },
  {
    id: "s6",
    step: "p06",
    title: "Launch & Maintenance",
    description:
      "After launch, we stay with you. We monitor performance, fix issues, and continuously improve your product as your business grows.",
  },
]



export default function ServicesRail() {
  const [active, setActive] = useState<string | null>(null)

  return (
<section className="bg-[#121212] py-16 sm:py-20 lg:py-24">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row overflow-hidden rounded-3xl border border-white/10">

      {SERVICES.map((service) => {
        const isActive = active === service.id

        return (
          <div
            key={service.id}
            onMouseEnter={() => setActive(service.id)}
            onMouseLeave={() => setActive(null)}
            className={clsx(
              "relative bg-[#0e0e0e] flex flex-col overflow-hidden",

              // 🔒 Height only where hover/flexing exists
              "md:h-100",

              // 🔒 Flex behavior only on md+
              "md:flex-1 md:basis-0",

              "border-b md:border-b-0 md:border-r border-white/10 last:border-r-0",
              "transition-[flex,background-color] duration-700 ease-out",

              // 🔒 Expansion only on md+
              isActive && "md:flex-[2] bg-[#101010]"
            )}
          >
            {/* Content */}
            <div
              className={clsx(
                "relative z-10 flex h-full flex-col items-start",

                // 🔒 Padding scales safely
                "px-4 sm:px-6",
                "py-6 sm:py-8",

                // 🔒 Extra vertical space only when hover exists
                isActive ? "md:py-16" : "md:py-12"
              )}
            >
              {/* Step */}
              <span className="text-[11px] sm:text-xs font-semibold tracking-wide text-white/50 mb-2 sm:mb-3">
                {service.step}
              </span>

              {/* Title */}
              <div
                className={clsx(
                  "transition-[padding] duration-400 ease-out",

                  // 🔒 Padding shift only on md+
                  !isActive ? "md:pl-6" : "md:pl-0"
                )}
              >
                <h3
                  className={clsx(
                    "font-semibold text-white",

                    // 🔒 Responsive typography
                    "text-base sm:text-lg md:text-xl lg:text-2xl",

                    "whitespace-nowrap",
                    "transition-transform duration-500 ease-[0.22,1,0.36,1]",
                    "origin-left",

                    // 🔒 Rotation only where horizontal rail exists
                    !isActive && "md:rotate-90",
                    isActive && "md:rotate-0"
                  )}
                >
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <div className="mt-3 sm:mt-4 max-w-xs sm:max-w-sm lg:max-w-md">
                <p
                  className={clsx(
                    "text-gray-300 leading-relaxed",
                    "text-sm sm:text-base",

                    "transition-opacity duration-200 ease-out",

                    // ✅ Mobile: always visible
                    "opacity-100",

                    // ✅ md+: controlled by hover
                    !isActive && "md:opacity-0"
                  )}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        )
      })}

    </div>
  </div>
</section>

  )
}
