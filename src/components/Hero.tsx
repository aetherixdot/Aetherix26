"use client"

import { useRef, useEffect, useState } from "react"
import {
  motion,
  useScroll,
  useTransform,
  type Variants,
  type Easing,
} from "framer-motion"
import Link from "next/link"
import clsx from "clsx"
import { Button1 } from "../components/button"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const [isMobile, setIsMobile] = useState(false)
  const [mounted, setMounted] = useState(false)

  /* ================= VIEWPORT CHECK ================= */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  /* ================= MOUNT ================= */
  useEffect(() => {
    setMounted(true)
  }, [])

  /* ================= SCROLL ================= */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end center"],
  })

  /* ================= MOTION VALUES ================= */
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0vh", isMobile ? "0vh" : "-25vh"]
  )

  const mediaY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0vh", isMobile ? "0vh" : "-30vh"]
  )
  const mediaX = useTransform(
    scrollYProgress,
    [0, 1],
    ["0px", isMobile ? "0px" : "200px"]
  )
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5],
    [1, isMobile ? 1 : 0.95]
  )

  /* ================= EASING ================= */
  const easeOutExpo: Easing = [0.22, 1, 0.36, 1]

const easeImpulse: Easing = [0.16, 1, 0.3, 1]
// ↑ asymmetrical easing → natural deceleration

const heroImpulse: Variants = {
  hidden: {
    opacity: 0,
    y: 32,        // slightly deeper entry
    scale: 0.965, // perceptible but not obvious
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 1.25,

      // Separate timing per property = more human
      opacity: {
        duration: 0.6,
        ease: "easeOut",
      },

      y: {
        duration: 1.25,
        ease: easeImpulse,
      },

      scale: {
        duration: 1.35,
        ease: easeImpulse,
      },
    },
  },
}


  return (
<section
  ref={sectionRef}
  className="relative bg-[#121212] overflow-hidden min-h-svh lg:min-h-screen"
>

      {/* ================= GRID CONTAINER ================= */}
<div
  className="
    relative mx-auto w-full max-w-7xl
    px-4 sm:px-6 lg:px-8
    grid grid-cols-1 lg:grid-cols-2
    gap-10 lg:gap-16
    items-stretch
    min-h-svh lg:min-h-screen
    py-16 sm:py-20 lg:py-0
    mt-10 sm:mt-0
  "
>
        {/* ================= LEFT CONTENT ================= */}
        <motion.div
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
          variants={heroImpulse}
          style={{ opacity: contentOpacity, y: contentY }}
          className={clsx(
            "relative z-20 w-full h-full",
            "flex flex-col justify-center",
            "max-w-xl lg:max-w-none",
            isMobile ? "text-center" : "text-left"
          )}
        >
          {/* Badge */}
          <div
            className={clsx(
              "mb-4 sm:mb-6 inline-flex items-center gap-2 rounded-full",
              "border border-white/10 bg-white/5",
              "px-3 sm:px-4 py-2 text-xs sm:text-sm text-gray-300",
              "w-fit self-start",
              isMobile && "mx-auto"
            )}
          >
            <span>Engineering with intent</span>
            <span className="text-(--color-accent)">→</span>
          </div>

          {/* Heading */}
          <h1
            className="
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl
              font-medium tracking-tight text-white leading-tight
            "
          >
            Turning Visions Into
            <br />
            <span className="text-(--color-accent-hover)">
              Impactful Experiences
            </span>
          </h1>

          {/* Copy */}
          <p
            className="
              mt-4 sm:mt-6
              max-w-md sm:max-w-lg
              mx-auto lg:mx-0
              text-base sm:text-lg
              text-gray-300
            "
          >
            We design and engineer scalable digital products
            with clarity, performance, and longevity at the core.
          </p>

          {/* CTA */}
          <div
            className="
              mt-8 sm:mt-10
              grid grid-cols-2 gap-3
              sm:flex sm:flex-row sm:gap-4
              sm:justify-start
            "
          >
            <Link href="#works" className="w-full sm:w-auto">
              <Button1 className="w-full sm:w-auto">
                Explore our work
              </Button1>
            </Link>

            <Link
              href="https://calendly.com/aetherixdot/30min"
              target="_blank"
              className="w-full sm:w-auto"
            >
              <Button1 variant="secondary" className="w-full sm:w-auto">
                Request a call
              </Button1>
            </Link>
          </div>
        </motion.div>

        {/* ================= MEDIA ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{
            opacity: mounted ? 1 : 0,
            scale: mounted ? 1 : 0.96,
          }}
          transition={{
            duration: 1.4,
            ease: easeOutExpo,
            delay: 0.2,
          }}
          style={{ y: mediaY, x: mediaX, scale }}
          className={clsx(
            "flex justify-center items-center pointer-events-none",
            "h-full w-full",
            "absolute inset-0 z-0",
            "md:relative md:inset-auto md:z-10 md:col-start-2"
          )}
        >
          <div
            className={clsx(
              "relative aspect-square h-full",
              "max-h-150",
              "max-w-[80vw] opacity-40",
              "md:max-w-md md:opacity-80",
              "lg:max-w-lg"
            )}
          >
            <DotLottieReact
              src="https://lottie.host/aa90b253-5c3d-44d6-ab93-8810cf812bd7/tcaq2sLKfl.lottie"
              loop
              autoplay
              className="w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
