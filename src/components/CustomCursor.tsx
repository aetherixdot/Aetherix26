"use client"

import { useEffect, useRef } from "react"

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    let mouseX = 0
    let mouseY = 0
    let currentX = 0
    let currentY = 0

    const move = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animate = () => {
      currentX += (mouseX - currentX) * 0.12
      currentY += (mouseY - currentY) * 0.12

      // center the cursor
      cursor.style.transform = `
        translate3d(${currentX - 10}px, ${currentY - 10}px, 0)
      `

      requestAnimationFrame(animate)
    }

    document.addEventListener("mousemove", move)
    animate()

    return () => {
      document.removeEventListener("mousemove", move)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="
        pointer-events-none
        fixed left-0 top-0
        z-9999
        h-5 w-5 rounded-full
        bg-white
        opacity-80
        hidden md:block
      "
    />
  )
}
