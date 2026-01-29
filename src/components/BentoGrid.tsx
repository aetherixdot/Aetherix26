"use client"

import React from "react"

export default function BentoGrid() {
  return (
    <section className="relative bg-[#121212] py-38">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[260px] gap-6">

          {/* ================= Row 1 — Human-centered (wide) ================= */}
          <Card className="md:col-span-2 p-6 justify-center">
            <div className="grid grid-cols-[auto_1fr] items-center gap-6">
              <div className="flex items-center justify-center">
                <img
                  src="/design.svg"
                  alt="Design"
                  className="w-38 h-38 object-contain opacity-30"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  Human-centered
                  <br />
                  <span className="text-gray-200">
                    digital experiences.
                  </span>
                </h3>

                <p className="mt-2 text-sm text-gray-300">
                  Every pixel designed with intention. Every interaction, purposeful.
                </p>
              </div>
            </div>
          </Card>


          {/* ================= Row 1 — Security (square) ================= */}
          <Card center className="flex flex-col items-center justify-center gap-6">
            <img
              src="/shield.svg"
              alt="Shield"
              className="w-30 h-30 mb-2.5  object-contain opacity-30"
            />
            <div className="text-center">
              <p className="text-xl font-semibold text-white">Security</p>
              <p className="text-gray-200">is a responsibility.</p>
            </div>
          </Card>

          {/* ================= Row 1 & 2 — Performance (tall) ================= */}
          <Card className="md:row-span-2 flex flex-col items-start justify-start gap-6">
            <div className="w-full h-64 flex items-center justify-center">
              <img
                src="/thunder.svg"
                alt="Thunder"
                className="w-64 h-64 object-contain opacity-30"
              />
            </div>
            <div className="relative z-10 w-full">
              <h3 className="text-3xl font-medium text-white">
                Performance
                <br />
                <span className="text-gray-200">is respect for time.</span>
              </h3>
              <p className="mt-6 text-sm text-gray-300">Lightning-fast delivery. Optimized at every layer. Your users will feel the difference.</p>
            </div>
          </Card>

          {/* ================= Row 2 — Scalability (square) ================= */}
          <Card className="flex flex-col items-center justify-center gap-4">
            <div className="w-full h-30 flex items-center justify-center">
              <img
                src="/growth.svg"
                alt="Growth"
                className="w-30 h-30 object-contain opacity-30 color-white"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">
                Built to Scale.
              </h3>
              <p className="mt-2 text-gray-200">
                Systems that grow with you without losing integrity.
              </p>
            </div>
          </Card>

          {/* ================= Row 2 — Partnership (wide) ================= */}
          <Card className="md:col-span-2" center>

            <div className="text-center relative z-10">
              <h3 className="text-2xl font-medium text-white">
                We amplify your team.
              </h3>
              <p className="mt-3 text-gray-300">Painless augmentation. Seamless integration. Shared purpose.</p>
            </div>
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