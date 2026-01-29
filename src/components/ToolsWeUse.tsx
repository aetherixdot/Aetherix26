"use client"

import { useState } from "react"
import Image from "next/image"

const TOOLS = [
  { name: "Figma", icon: "/tools/figma.png" },
  { name: "Webflow", icon: "/tools/webfloww.png" },
  { name: "React", icon: "/tools/react.png" },
  { name: "Next.js", icon: "/tools/nextjs.png" },
  { name: "Tailwind CSS", icon: "/tools/tailwind.png" },
  { name: "MongoDB", icon: "/tools/mongodb.png" },
  { name: "Supabase", icon: "/tools/supabase.png" },
]

export default function ToolsWeUse() {
  const [active, setActive] = useState(0)

  return (
    <section  className="bg-[#121212] py-24     scroll-mt-20
    md:scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12">

          {/* LEFT TEXT */}
          <h2 className="text-4xl md:text-5xl font-medium text-gray-300">
            Tools we use <br />{" "}
            <span className="text-(--color-accent-hover) transition-colors duration-300">
              {TOOLS[active].name}
            </span>
          </h2>

          {/* ICON ROW */}
          <div className="flex flex-wrap items-center gap-6">
            {TOOLS.map((tool, index) => {
              const isActive = active === index

              return (
                <button
                  key={tool.name}
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  className="group"
                >
                  <div
                    className={`
                      flex h-20 w-20 items-center justify-center
                      rounded-lg
                      transition-all duration-300 hover:border border-(--color-accent-border)
                      ${
                        isActive
                          ? "bg-white/10"
                          : "bg-white/5 group-hover:bg-white/10"
                      }
                    `}
                  >
                    <Image
                      src={tool.icon}
                      alt={tool.name}
                      width={24}
                      height={24}
                      className={`
                        transition-opacity duration-300
                        ${isActive ? "opacity-100" : "opacity-40 group-hover:opacity-70"}
                      `}
                    />
                  </div>
                </button>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
