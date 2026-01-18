"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button1 } from "../components/button"
import Link from "next/link"

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const purpleGlow = useRef<HTMLDivElement>(null)
  const whiteGlow = useRef<HTMLDivElement>(null)

  // scroll tied to HERO only
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  // parallax effects
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const contentY = useTransform(scrollYProgress, [0, 1], ["0vh", "-20vh"])
  const glowY = useTransform(scrollYProgress, [0, 1], ["0vh", "15vh"])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current || !purpleGlow.current || !whiteGlow.current) return

    const rect = sectionRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5

    purpleGlow.current.style.transform = `translate(${x * 80}px, ${y * 80}px)`
    whiteGlow.current.style.transform = `translate(${-x * 80}px, ${-y * 80}px)`
  }

  return (
    <section
      ref={sectionRef}
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen items-center justify-center bg-[#121212] pt-10 overflow-hidden"
    >
      {/* WHITE GLOW (parallax) */}
      <motion.div
        ref={whiteGlow}
        style={{
          y: glowY,
          background: `
            radial-gradient(
              circle,
              rgba(255,255,255,0.30) 0%,
              rgba(255,255,255,0.18) 35%,
              rgba(255,255,255,0.08) 55%,
              rgba(255,255,255,0.03) 70%,
              transparent 82%
            )
          `,
        }}
        className="pointer-events-none absolute left-[12%] top-[12%] h-[520px] w-[520px] rounded-full blur-[170px] opacity-70 transition-transform duration-200 ease-out"
      />

      {/* PURPLE GLOW (parallax) */}
      <motion.div
        ref={purpleGlow}
        style={{
          y: glowY,
          background: `
            radial-gradient(
              circle,
              rgba(122,94,214,0.55) 0%,
              rgba(122,94,214,0.35) 35%,
              rgba(122,94,214,0.18) 55%,
              rgba(122,94,214,0.06) 70%,
              transparent 82%
            )
          `,
        }}
        className="pointer-events-none absolute right-[10%] bottom-[12%] h-[620px] w-[620px] rounded-full blur-[160px] opacity-90 transition-transform duration-200 ease-out"
      />

      {/* DIFFUSION */}
      <div className="pointer-events-none absolute inset-0 backdrop-blur-[80px] opacity-40" />

      {/* CONTENT */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 mx-auto max-w-5xl px-6 text-center"
      >
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-gray-300">
          <span>Let's Build</span>
          <span className="text-[var(--color-accent)] font-semibold">→</span>
        </div>

        <h1 className="text-5xl md:text-6xl font-medium tracking-tight text-white">
          Turning Visions Into
          <br />
          <span className="text-[var(--color-accent-hover)]">
            Impactful Experiences
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300">
          Aetherix is a modern development studio committed to help businesses
          ship faster, scale smarter, and build products that last.
          From APIs to infrastructure everything just works.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link href="#works">
            <Button1>Explore our Works</Button1>
          </Link>
          <Link href="https://calendly.com/aetherixdot/30min" target="_blank">
            <Button1 variant="secondary">Request a call</Button1>
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
