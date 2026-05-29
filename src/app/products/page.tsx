import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

export default function ProductsPage() {
  return (
    <main className="relative min-h-screen bg-[#121212] text-white">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-40 pb-24">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/50">
          Products
        </p>
        <h1 className="mt-4 text-4xl font-semibold sm:text-5xl md:text-6xl">
          Product Showcase
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
          We are preparing this page with our own products. It will be updated
          soon with complete product details.
        </p>
      </section>

      <Footer />
    </main>
  )
}
