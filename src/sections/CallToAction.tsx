// ----------------------------------------------------
// CALLTOACTION SECTION
// ----------------------------------------------------

"use client"
import { motion } from "framer-motion"
import { useState } from "react"

export default function CallToAction() {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <section className="py-24">
      <div className="overflow-hidden p-4 flex hover:text-lime-400 transition duration-300 cursor-pointer">
        <motion.div
          className="flex flex-none gap-16 pr-16"
          animate={{ x: "-50%" }}
          transition={{
            duration: isHovered ? 50 : 20,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop"
          }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="flex items-center text-7xl md:text-8xl gap-12 font-medium">
              <span className="text-lime-400 text-7xl">&#10038;</span>
              <span>Try it for free</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
