"use client"

import React from "react"

export default function BentoGrid() {
  return (
    <section className="relative bg-[#121212] py-32">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[240px] gap-6">

          {/* ================= Row 1 — Bespoke (wide) ================= */}
          <Card className="md:col-span-2">
            <h3 className="text-3xl font-medium text-white">
              Bespoke,
              <br />
              <span className="text-gray-200">
                responsive-first design.
              </span>
            </h3>
          </Card>

          {/* ================= Row 1 — Secure (square) ================= */}
          <Card center>
            <div className="text-center">
              <p className="text-xl font-semibold text-white">S**iously</p>
              <p className="text-gray-200">Secure.</p>
            </div>
          </Card>

          {/* ================= Row 1 & 2 — Fast dev (tall) ================= */}
          <Card className="md:row-span-2">
            <h3 className="text-3xl font-medium text-white">
              Fast dev.
              <br />
              Fast loads.
            </h3>
          </Card>

          {/* ================= Row 2 — CMS (square) ================= */}
          <Card>
            <h3 className="text-xl font-medium text-white">
              Powerful CMS.
            </h3>
            <p className="mt-2 text-gray-200">
              Scalable & teachable.
            </p>
          </Card>

          {/* ================= Row 2 — Copy that sings (wide) ================= */}
          <Card className="md:col-span-2" center>
            <h3 className="text-2xl font-medium text-white">
              Copy that sings.
            </h3>
          </Card>

          

        </div>
      </div>
    </section>
  )
}

/* =========================================================
   Card Component (cursor glow logic here)
========================================================= */

function Card({
  children,
  className = "",
  center = false,
}: {
  children: React.ReactNode
  className?: string
  center?: boolean
}) {
  return (
    <div
      className={`
        group relative overflow-hidden rounded-3xl
        border border-white/10 bg-[#0e0e0e] p-8
        transition-all duration-300
        hover:border-white/20 hover:-translate-y-1
        ${center ? "flex items-center justify-center" : ""}
        ${className}
      `}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`)
        e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`)
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.setProperty("--x", "50%")
        e.currentTarget.style.setProperty("--y", "50%")
      }}
    >
      <Glow />
      <div className="relative z-10">{children}</div>
    </div>
  )
}

/* =========================================================
   Glow Layer (ambient + cursor torch)
========================================================= */

function Glow() {
  return (
    <>
      {/* Ambient glow */}
      <div
        className="
          absolute inset-0
          opacity-60
          transition-opacity duration-300
          group-hover:opacity-90
        "
        style={{
          background:
            "radial-gradient(circle at top left, rgba(122,94,214,0.35), transparent 60%)",
        }}
      />

      {/* Cursor-follow glow */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          opacity-0
          transition-opacity duration-200
          group-hover:opacity-100
        "
        style={{
          background: `
            radial-gradient(
              180px circle at var(--x) var(--y),
              rgba(122,94,214,0.45),
              transparent 70%
            )
          `,
        }}
      />
    </>
  )
}
