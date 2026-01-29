"use client"

import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import Loader from "../components/Loader"

export default function AppShell({
  children,
}: {
  children: React.ReactNode
}) {
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    // Fallback safety (in case video fails)
    const timeout = setTimeout(() => {
      setShowLoader(false)
    }, 7500)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <>
      <AnimatePresence>
        {showLoader && (
          <Loader
            isVisible={showLoader}
            onFinish={() => setShowLoader(false)}
          />
        )}
      </AnimatePresence>

      {/* Main App Content */}
      {!showLoader && children}
    </>
  )
}
