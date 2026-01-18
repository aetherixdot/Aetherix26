"use client"

import { useState } from "react"
import Image from "next/image"

export default function ContactCTA() {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        setSuccess(true)
        form.reset()
      }
    } catch (error) {
      console.error("Contact form error:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* ================= CTA CARD ================= */}
      <section id="contact" className="relative bg-[#121212] py-32">
        <div className="mx-auto max-w-4xl px-6">
          <div
            className="
              relative overflow-hidden rounded-3xl
              border border-white/10
              bg-gradient-to-br from-[#1a1033] via-[#120b24] to-[#0b0714]
              px-8 py-20 text-center
              shadow-[0_0_120px_rgba(122,94,214,0.35)]
            "
          >
            {/* Soft radial glow */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(122,94,214,0.28),transparent_65%)]" />

            {/* Decorative planes */}
            <span className="absolute left-6 top-8 text-white/20">✈</span>
            <span className="absolute right-10 bottom-12 text-white/20">✈</span>

            {/* Avatar */}
            <div className="relative mx-auto mb-6 h-20 w-20">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 blur-xl opacity-70" />
              <div className="relative h-full w-full overflow-hidden rounded-full border border-white/20">
                <Image
                  src="/avatar.png"   // put image in /public/avatar.png
                  alt="Aetherix"
                  width={80}
                  height={80}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-medium text-white">
              Project Request
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-gray-300 leading-relaxed">
              Thanks for your interest in working with us. This short form helps
              us understand your idea, scope, and expectations before we begin.
            </p>

            <p className="mt-4 text-sm text-gray-400">
              Please be as clear and detailed as possible.
            </p>

            {/* Response time pill */}
            <div className="mx-auto mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-gray-300">
              ⏱ We’ll get back to you within 48 hours
            </div>

            <div className="mt-12">
              <button
                onClick={() => {
                  setOpen(true)
                  setSuccess(false)
                }}
                className="
                  rounded-full px-10 py-4
                  text-sm font-medium text-white
                  bg-gradient-to-r from-purple-500 to-indigo-500
                  shadow-[0_0_40px_rgba(122,94,214,0.6)]
                  transition hover:opacity-90
                "
              >
                Contact Us →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MODAL (UNCHANGED LOGIC) ================= */}
      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur"
            onClick={() => setOpen(false)}
          />

          <div className="relative z-10 w-full max-w-lg rounded-2xl border border-white/10 bg-[#0e0e0e] p-8">
            <h3 className="text-2xl font-medium text-white">
              Contact Aetherix
            </h3>

            {success ? (
              <div className="mt-6 text-center">
                <p className="text-green-400">
                  Thanks! We’ll get back to you shortly.
                </p>

                <button
                  onClick={() => setOpen(false)}
                  className="mt-6 text-sm text-[var(--color-accent)] hover:underline"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <input
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-white outline-none focus:border-[var(--color-accent)]"
                />

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your email"
                  className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-white outline-none focus:border-[var(--color-accent)]"
                />

                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us about your project"
                  className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-white outline-none focus:border-[var(--color-accent)]"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-full py-3 text-sm font-medium text-white bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] transition disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send message"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}
