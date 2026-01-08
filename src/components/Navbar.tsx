import Link from "next/link"
import { Button1 } from "../components/button"

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#121212] backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-semibold text-white">
            AETHERIX.
          </span>
        </div>
        
        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-white">
          <Link href="#" className="transition-colors hover:text-[var(--color-accent-hover)]">Services</Link>
          <Link href="#" className="transition-colors hover:text-[var(--color-accent-hover)]">Works</Link>
          <Link href="#" className="transition-colors hover:text-[var(--color-accent-hover)]">Products</Link>
          <Link href="#" className="transition-colors hover:text-[var(--color-accent-hover)]">Contact</Link>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <Link href="#">
            <Button1>Start your project</Button1>
          </Link>
        </div>
      </div>
    </header>
  )
}
