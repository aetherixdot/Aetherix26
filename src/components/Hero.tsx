"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { Button1 } from "../components/button"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import { useEffect, useState } from "react"

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end center"],
  })

  // Enhanced parallax transformations
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const contentY = useTransform(scrollYProgress, [0, 1], ["0vh", isMobile ? "0vh" : "-25vh"])
  const mediaY = useTransform(scrollYProgress, [0, 1], ["0vh", isMobile ? "0vh" : "-30vh"])
  const mediaX = useTransform(scrollYProgress, [0, 1], ["0px", isMobile ? "0px" : "200px"])
  
  // Additional parallax layers for depth
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, isMobile ? 1 : 0.95])
  const titleY = useTransform(scrollYProgress, [0, 0.6], ["0px", isMobile ? "0px" : "-80px"])
  const descriptionY = useTransform(scrollYProgress, [0, 0.6], ["0px", isMobile ? "0px" : "-50px"])
  const buttonsY = useTransform(scrollYProgress, [0, 0.6], ["0px", isMobile ? "0px" : "-30px"])

  return (
    <section
      ref={sectionRef}
      className={`relative min-h-screen lg:min-h-screen bg-[#121212] overflow-hidden ${
        isMobile ? "flex flex-col justify-center items-center" : ""
      }`}
    >
      {/* Glow remains exactly as you designed */}

      {/* ================= GRID ================= */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center lg:items-center min-h-screen lg:min-h-screen py-0 lg:py-0">

        {/* ================= LEFT CONTENT ================= */}
        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className={`text-left order-1 lg:order-1 w-full ${
            isMobile ? "text-center" : ""
          }`}
        >
          <div className={`mb-4 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 sm:px-4 py-2 text-xs sm:text-sm text-gray-300 ${
            isMobile ? "mx-auto" : ""
          }`}>
            <span>Engineering with intent</span>
            <span className="text-(--color-accent)">→</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-medium tracking-tight text-white leading-tight">
            Turning Visions Into
            <br />
            <span className="text-(--color-accent-hover)">
              Impactful Experiences
            </span>
          </h1>

          <p className="mt-4 sm:mt-6 max-w-xl text-base sm:text-lg text-gray-300">
            We design and engineer scalable digital products —
            with clarity, performance, and longevity at the core.
          </p>

          <div className={`mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 ${
            isMobile ? "justify-center" : ""
          }`}>
            <Link href="#works" className="w-full sm:w-auto">
              <Button1 className="w-full sm:w-auto">Explore our work</Button1>
            </Link>
            <Link
              href="https://calendly.com/aetherixdot/30min"
              target="_blank"
              className="w-full sm:w-auto"
            >
              <Button1 variant="secondary" className="w-full sm:w-auto">Request a call</Button1>
            </Link>
          </div>
        </motion.div>

        {/* ================= RIGHT MOTION ================= */}
        <motion.div
          style={{ y: mediaY, x: mediaX, scale }}
          className={`relative flex justify-center items-center order-2 lg:order-2 w-full ${
            isMobile ? "h-125" : "h-64 sm:h-96 md:h-125 lg:h-screen"
          }`}
        >
          <div className="relative w-full h-full max-w-md lg:max-w-lg">
            {/* Soft frame */}
            <div className="absolute inset-0 rounded-2xl lg:rounded-3xl" />

            {/* Lottie Animation */}
            <DotLottieReact
              src="https://lottie.host/aa90b253-5c3d-44d6-ab93-8810cf812bd7/tcaq2sLKfl.lottie"
              loop
              autoplay
              className={`relative z-10 rounded-2xl lg:rounded-3xl w-full h-full ${
                isMobile ? "opacity-50" : "opacity-80"
              }`}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
