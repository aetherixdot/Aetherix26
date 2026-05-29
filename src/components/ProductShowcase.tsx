import Image from "next/image"
import Link from "next/link"

const PRODUCT_OFFERINGS = [
  {
    title: "Anna University - Regional Campus",
    year: "2024",
    blurb: "Official university platform built for institutional scale and trust.",
    image: "/work/autmdu.png",
    url: "https://www.autmdu.in",
  },
  {
    title: "Attendance Management System",
    year: "2024",
    blurb: "Role-based internal product for accurate, real-time attendance workflows.",
    image: "/work/attendance.png",
    url: "https://attendance.autmdu.in",
  },
  {
    title: "ESM Thambis",
    year: "2024",
    blurb: "Community-first product supporting veterans and their families.",
    image: "/work/esm-thambis.png",
    url: "https://www.esmthambis.com",
  },
  {
    title: "Precise Eats",
    year: "2025",
    blurb: "Personalized nutrition product with a modern booking experience.",
    image: "/work/precise-eats.png",
    url: "https://www.preciseeats.in",
  },
]

export default function ProductShowcase() {
  return (
    <section className="relative bg-[#0f0f10] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/50">
            Product Showcase
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
            Products we designed, built, and launched
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70">
            A focused portfolio of real products delivered by Aetherix from concept to production.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {PRODUCT_OFFERINGS.map((item) => (
            <article
              key={item.title}
              className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20"
            >
              <div className="mb-5 overflow-hidden rounded-xl border border-white/10">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={900}
                  height={560}
                  className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <div className="mb-2 flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-xs font-semibold text-white/80">
                  {item.year}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{item.blurb}</p>
              <Link
                href={item.url}
                target="_blank"
                className="mt-4 inline-flex text-sm font-semibold text-(--color-accent-hover) transition-colors hover:text-white"
              >
                View product
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
