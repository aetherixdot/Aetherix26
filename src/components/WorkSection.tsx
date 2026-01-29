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
function WorkLinkButton({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="
        inline-flex items-center gap-2
        px-4 py-2
        text-sm font-medium
        rounded-full

        bg-white/5
        border border-white/10
        text-(--color-accent-hover)

        backdrop-blur-sm
        transition-all duration-300 ease-out

        hover:bg-white/10
        hover:border-white/20
        hover:text-white
        hover:gap-3
        hover:shadow-[0_0_24px_rgba(122,94,214,0.35)]

        after:content-['→']
        after:transition-transform after:duration-300
        hover:after:translate-x-1
      "
    >
      {children}
    </span>
  )
}
export default function WorkSection() {
  const timelineRef = useRef<HTMLDivElement>(null)
  const auraLineRef = useRef<HTMLDivElement>(null)
  const coreLineRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<HTMLDivElement[]>([])

  /* ================= DESKTOP: VERTICAL TRACK ================= */
  useEffect(() => {
    if (window.innerWidth < 768) return
    if (!timelineRef.current || !auraLineRef.current || !coreLineRef.current)
      return

    const container = timelineRef.current
    const aura = auraLineRef.current
    const core = coreLineRef.current

    const totalHeight = container.offsetHeight

    gsap.set([aura, core], { height: 0, opacity: 1 })

    const mainTrigger = ScrollTrigger.create({
      trigger: container,
      start: "top center",
      end: "bottom center",
      scrub: 0.6,
      onUpdate: (self) => {
        gsap.to([aura, core], {
          height: totalHeight * self.progress,
          ease: "none",
          overwrite: "auto",
        })
      },
    })

    itemRefs.current.forEach((item) => {
      ScrollTrigger.create({
        trigger: item,
        start: "center center",
        onEnter: pulse,
        onEnterBack: pulse,
      })
    })

    function pulse() {
      gsap.fromTo(
        aura,
        { opacity: 0.6 },
        {
          opacity: 1,
          duration: 0.25,
          yoyo: true,
          repeat: 1,
          ease: "power2.out",
        }
      )
    }

    return () => {
      mainTrigger.kill()
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  /* ================= MOBILE: HORIZONTAL TRACK ================= */
  const mobileTrackRef = useRef<HTMLDivElement>(null)
  const mobileLineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.innerWidth >= 768) return
    if (!mobileTrackRef.current || !mobileLineRef.current) return

    const container = mobileTrackRef.current
    const line = mobileLineRef.current

    let rafId: number | null = null

    const update = () => {
      const maxScroll =
        container.scrollWidth - container.clientWidth

      const progress =
        maxScroll > 0 ? container.scrollLeft / maxScroll : 0

      line.style.width = `${progress * 100}%`
      rafId = null
    }

    const onScroll = () => {
      if (rafId === null) {
        rafId = requestAnimationFrame(update)
      }
    }

    container.addEventListener("scroll", onScroll, { passive: true })

    // Initial sync
    update()

    return () => {
      container.removeEventListener("scroll", onScroll)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])


  return (
    <section id="works" className="relative bg-[#121212] py-32">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-medium text-white">
            Products we’ve shipped with pride
          </h2>
        </div>

        {/* ================= DESKTOP ================= */}
        <div className="relative hidden md:block" ref={timelineRef}>

          {/* Base Line */}
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/10" />

          {/* Aura */}
          <div
            ref={auraLineRef}
            className="absolute left-1/2 top-0 -translate-x-1/2 w-2 rounded-full bg-[rgba(122,94,214,0.35)] blur-xl shadow-[0_0_80px_rgba(122,94,214,0.9)]"
          />

          {/* Core */}
          <div
            ref={coreLineRef}
            className="absolute left-1/2 top-0 -translate-x-1/2 w-0.75 rounded-full bg-linear-to-b from-[rgba(122,94,214,1)] via-[rgba(122,94,214,0.9)] to-transparent"
          />

          <div className="space-y-32">
            {works.map((work, i) => {
              const isEven = i % 2 === 0

              return (
                <div
                  key={work.title}
                  ref={(el) => {
                    if (el) itemRefs.current[i] = el
                  }}

                  className="relative grid grid-cols-2 items-center gap-12"
                >
                  {/* Center Dot */}
                  <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-(--color-accent) shadow-[0_0_40px_rgba(122,94,214,1)]" />

                  {/* IMAGE */}
                  <div className={isEven ? "order-1 pr-24" : "order-2 pl-24"}>
                    <Image
                      src={work.image}
                      alt={work.title}
                      width={900}
                      height={600}
                      className="rounded-2xl border border-white/10"
                    />
                  </div>

                  {/* CONTENT */}
                  <div
                    className={`flex flex-col ${isEven
                        ? "order-2 pl-24 text-left items-start"
                        : "order-1 pr-24 text-right items-end"
                      }`}
                  >
                    <h3 className="text-2xl font-medium text-white">
                      {work.title}
                    </h3>

                    <p className="mt-4 max-w-md text-gray-300">
                      {work.description}
                    </p>

<Link href={work.url} target="_blank" className="mt-6 inline-block">
  <WorkLinkButton>Visit website</WorkLinkButton>
</Link>

                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* ================= MOBILE ================= */}

        <div className="md:hidden">

          {/* TRACK WRAPPER */}
          <div className="relative mb-10">

            {/* Base line */}
            <div className="h-px bg-white/10" />

            {/* Progress line */}
            <div
              ref={mobileLineRef}
              className="absolute left-0 top-0 h-px w-0 bg-(--color-accent) shadow-[0_0_30px_rgba(122,94,214,0.9)]"
            />
          </div>

          {/* SCROLL CONTAINER */}
          <div
            ref={mobileTrackRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6"
          >
            {works.map((work) => (
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
<Link href={work.url} target="_blank" className="mt-4 inline-block">
  <WorkLinkButton>Visit website</WorkLinkButton>
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