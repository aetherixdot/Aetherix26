"use client"

import { motion, AnimatePresence } from "framer-motion"

type LoaderProps = {
  isVisible: boolean
  onFinish: () => void
}

export default function Loader({ isVisible, onFinish }: LoaderProps) {
  return (
    <AnimatePresence>
      {isVisible && (
<motion.div
  className="fixed inset-0 z-[9999] bg-[#121212] flex items-center justify-center"
  initial={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.6, ease: "easeInOut" }}
>
  <video
    src="/loader/loader.mp4"
    autoPlay
    muted
    playsInline
    onEnded={onFinish}
    className="w-screen h-screen object-contain"
  />
</motion.div>

      )}
    </AnimatePresence>
  )
}
