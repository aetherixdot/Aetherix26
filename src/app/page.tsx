import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import BentoGrid from "../components/BentoGrid"
import ToolsWeUse from "../components/ToolsWeUse"
import WorkSection from "../components/WorkSection"
import ContactCTA from "../components/ContactCTA"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <BentoGrid />
      <ToolsWeUse />
      <WorkSection />
      <ContactCTA />
      <Footer />
    </>
  )
}
