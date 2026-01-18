import Link from "next/link"

export default function Footer() {
  return (
    <footer className="relative bg-[#121212] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-20">

        {/* Top section */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">

          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold text-white">
              AETHERIX.
            </h3>
            <p className="mt-4 max-w-md text-sm text-gray-400 leading-relaxed">
              Aetherix is a modern development studio crafting fast, scalable,
              and thoughtfully designed digital products.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide text-white">
              Navigate
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              <li>
                <Link href="#hero" className="hover:text-[var(--color-accent)] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#work" className="hover:text-[var(--color-accent)] transition">
                  Work
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-[var(--color-accent)] transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide text-white">
              Connect
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              <li>
                <Link href="https://www.instagram.com/aetherix.design/" target="_blank" className="hover:text-[var(--color-accent)] transition">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/in/aetherixdot2024/"  target="_blank" className="hover:text-[var(--color-accent)] transition">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="https://github.com/aetherixdot" target="_blank" className="hover:text-[var(--color-accent)] transition">
                  GitHub
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs text-gray-200">
            © {new Date().getFullYear()} Aetherix. All rights reserved.
          </p>

          <p className="text-xs text-gray-200">
            Built with care ✦ Powered by modern web
          </p>
        </div>
      </div>

    </footer>
  )
}
