'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaTimes } from 'react-icons/fa'
import { CiMenuFries } from 'react-icons/ci'
import { Button1 } from '../components/button'
import Image from 'next/image'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-md bg-white/10 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
<Link href="/" className="flex items-center gap-2">
  <Image
    src="/images/image.png"
    alt="Aetherix logo"
    width={40}
    height={40}
    priority
    className="object-contain"
  />
  <span className="text-2xl font-semibold text-white">
    AETHERIX.
  </span>
</Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-md font-bold text-white">
          <Link href="#services" className="hover:text-(--color-accent-hover) transition-colors">
            Services
          </Link>
          <Link href="#works" className="hover:text-(--color-accent-hover) transition-colors">
            Works
          </Link>
          <Link href="#contact" className="hover:text-(--color-accent-hover) transition-colors">
            Contact
          </Link>
        </nav>

        {/* CTA + Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <Link href="#contact" className="hidden md:block">
            <Button1>Start your project</Button1>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-3xl text-white transition-transform duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <CiMenuFries />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full backdrop-blur-md bg-white/30 text-black transition-all duration-500 ${
          menuOpen
            ? 'translate-y-0 opacity-100'
            : '-translate-y-10 opacity-0 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-8 text-lg font-semibold">
          <Link href="#services" onClick={() => setMenuOpen(false)}>
            Services
          </Link>
          <Link href="#works" onClick={() => setMenuOpen(false)}>
            Works
          </Link>
          <Link href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>

          <Link href="#contact" onClick={() => setMenuOpen(false)}>
            <Button1 >Start your project</Button1>
          </Link>
        </ul>
      </div>
    </header>
  )
}
