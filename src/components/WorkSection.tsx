"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button1 } from "../components/button"

gsap.registerPlugin(ScrollTrigger)

const works = [
  {
    title: "Precise Eats",
    description:
      "A modern dietitian platform focused on personalised nutrition, clean UI, and seamless appointment booking.",
    image: "/work/precise-eats.png",
    url: "https://www.preciseeats.in",
  },
  {
    title: "ESM Thambis",
    description:
      "A platform supporting veterans and their families with resources, updates, and community-driven content.",
    image: "/work/esm-thambis.png",
    url: "https://www.esmthambis.com",
  },
  {
    title: "Anna University – Regional Campus",
    description:
      "Official university website built for scalability, accessibility, and institutional credibility.",
    image: "/work/autmdu.png",
    url: "https://www.autmdu.in",
  },
  {
    title: "Attendance Management System",
    description:
      "A secure internal system for tracking attendance with role-based access and real-time updates.",
    image: "/work/attendance.png",
    url: "https://attendance.autmdu.in",
  },
  {
    title: "Awareness Academy",
    description:
      "An educational platform with course listings, blogs, and a soft, calming visual identity.",
    image: "/work/awareness.png",
    url: "https://awarenessacademy.in",
  },
]

export default function WorkSection() {
  /* ================= DESKTOP GSAP ================= */
  const auraLineRef = useRef<HTMLDivElement>(null)
  const coreLineRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    if (window.innerWidth < 768) return
    if (!auraLineRef.current || !coreLineRef.current) return

    gsap.set([auraLineRef.current, coreLineRef.current], {
      height: "0%",
      opacity: 0,
    })

    itemRefs.current.forEach((item, index) => {
      ScrollTrigger.create({
        trigger: item,
        start: "center center",
        onEnter: () => {
          const progress = ((index + 1) / works.length) * 100

          gsap.to([auraLineRef.current, coreLineRef.current], {
            height: `${progress}%`,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
          })

          gsap.fromTo(
            auraLineRef.current,
            { opacity: 0.6 },
            { opacity: 1, duration: 0.25, yoyo: true, repeat: 1 }
          )
        },
      })
    })

    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  return (
    <section id="works" className="relative bg-[#121212] py-32">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mt-4 text-4xl md:text-5xl font-medium text-white">
            Products we’ve shipped with pride
          </h2>
        </div>

        {/* ================= DESKTOP (VERTICAL) ================= */}
        <div className="relative hidden md:block">

          {/* Base Line */}
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/10" />

          {/* Glow Aura */}
          <div
            ref={auraLineRef}
            className="absolute left-1/2 top-0 -translate-x-1/2 w-[8px] rounded-full bg-[rgba(122,94,214,0.35)] blur-[24px] shadow-[0_0_80px_rgba(122,94,214,0.9)]"
          />

          {/* Core Line */}
          <div
            ref={coreLineRef}
            className="absolute left-1/2 top-0 -translate-x-1/2 w-[3px] rounded-full bg-gradient-to-b from-[rgba(122,94,214,1)] via-[rgba(122,94,214,0.9)] to-transparent"
          />

          <div className="space-y-32">
            {works.map((work, i) => (
              <div
                  key={work.title}
                  ref={(el) => {
                    if (el) itemRefs.current[i] = el
                  }}
                  className="relative grid grid-cols-2 items-center gap-12"
              >
                <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-accent)] shadow-[0_0_40px_rgba(122,94,214,1)]" />

                <div className="pr-24">
                  <Image
                    src={work.image}
                    alt={work.title}
                    width={900}
                    height={600}
                    className="rounded-2xl border border-white/10"
                  />
                </div>

                <div className="pl-24">
                  <h3 className="text-2xl font-medium text-white">
                    {work.title}
                  </h3>
                  <p className="mt-4 max-w-md text-gray-300">
                    {work.description}
                  </p>
                  <Link href={work.url} target="_blank" className="inline-block mt-6">
                    {/* <span className="rounded-full border border-white/15 px-6 py-3 text-sm text-white hover:text-[var(--color-accent)]">
                      Visit website →
                    </span> */}
                    <Button1>
                      Visit website →
                    </Button1>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= MOBILE (HORIZONTAL) ================= */}
        <div className="md:hidden">

          {/* Horizontal line */}
          <div className="relative mb-10">
            <div className="h-px bg-white/10" />
            <div className="absolute inset-y-0 left-0 h-px w-1/3 bg-[var(--color-accent)] shadow-[0_0_30px_rgba(122,94,214,0.9)]" />
          </div>

          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6">
            {works.map(work => (
              <div
                key={work.title}
                className="snap-center shrink-0 w-[85%] rounded-2xl border border-white/10 bg-[#0e0e0e]"
              >
                <Image
                  src={work.image}
                  alt={work.title}
                  width={900}
                  height={600}
                  className="rounded-t-2xl"
                />

                <div className="p-6">
                  <h3 className="text-xl font-medium text-white">
                    {work.title}
                  </h3>
                  <p className="mt-3 text-sm text-gray-300">
                    {work.description}
                  </p>
                  <Link href={work.url} target="_blank" className="inline-block mt-4">
                    {/* <span className="text-sm text-[var(--color-accent)]">
                      Visit website →
                    </span> */}
                    <Button1>
                      Visit website →
                    </Button1>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
