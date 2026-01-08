import { Button1 } from "../components/button"

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center bg-[#121212] pt-10"
    >
      <div className="mx-auto max-w-5xl px-6 text-center">

        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-gray-300">
          <span>Let's Build</span>
          <span className="text-[var(--color-accent)] font-semibold">→</span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-medium tracking-tight text-white">
          Turning Visions Into
          <br />
          <span className="text-[var(--color-accent-hover)]">
            Impactful Experiences
          </span>
        </h1>

        {/* Subtext */}
        <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300">
          Aetherix is a modern development studio committed to help businesses
          ship faster, scale smarter, and build products that last.
          From APIs to infrastructure everything just works.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex justify-center gap-4">
          <Button1>Explore our Works</Button1>
          <Button1 variant="secondary">Request a call</Button1>
        </div>
      </div>
    </section>
  )
}
