"use client"

import Link from "next/link"
import { 
  FiInstagram, 
  FiLinkedin, 
  FiGithub 
} from "react-icons/fi"

export default function Footer() {
  return (
    <footer className="relative bg-[#121212] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">

        {/* ================= TOP ================= */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">

          {/* BRAND */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold text-white tracking-tight">
              AETHERIX.
            </h3>
            <p className="mt-4 max-w-md text-sm text-white/60 leading-relaxed">
              Aetherix is a modern development studio crafting fast,
              scalable, and thoughtfully designed digital products.
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest text-white/80 uppercase">
              Navigate
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-white/60">
              {[
                { label: "Home", href: "#hero" },
                { label: "Work", href: "#works" },
                { label: "Services", href: "#services" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 transition-all duration-300 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest text-white/80 uppercase">
              Connect
            </h4>

            <div className="mt-5 flex items-center gap-4">
              {[
                {
                  href: "https://www.instagram.com/aetherix.design/",
                  icon: FiInstagram,
                  label: "Instagram",
                },
                {
                  href: "https://www.linkedin.com/in/aetherixdot2024/",
                  icon: FiLinkedin,
                  label: "LinkedIn",
                },
                {
                  href: "https://github.com/aetherixdot",
                  icon: FiGithub,
                  label: "GitHub",
                },
              ].map(({ href, icon: Icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  aria-label={label}
                  className="
                    group
                    inline-flex items-center justify-center
                    w-9 h-9
                    rounded-full
                    border border-white/10
                    bg-white/5
                    transition-all duration-300
                    hover:border-white/20
                    hover:bg-white/10
                  "
                >
                  <Icon className="w-4 h-4 text-white/70 transition-colors group-hover:text-(--color-accent-hover)" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 md:flex-row">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Aetherix. All rights reserved.
          </p>

          <p className="text-xs text-white/50">
            Built with care ✦ Powered by modern web
          </p>
        </div>

      </div>
    </footer>
  )
}
