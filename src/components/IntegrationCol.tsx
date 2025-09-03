// ----------------------------------------------------
// INTEGRATIONS COL COMPONENT
// ----------------------------------------------------

"use client"

import { type integrationType } from "@/sections/Integrations"
import Image from "next/image"
import { twMerge } from "tailwind-merge"
import { motion } from "framer-motion"
import { Fragment } from "react"

export default function IntegrationCol(props: { integrations: integrationType, className?: string, isReversed?: boolean }) {
  const { integrations, className, isReversed } = props
  return (
    <motion.div
      initial={{ y: isReversed ? "-50%" : "0" }}
      animate={{ y: isReversed ? "0%" : "-50%" }}
      transition={{
        duration: 20,
        ease: "linear",
        repeat: Infinity
      }}
      className={twMerge("flex flex-col gap-4 pb-4", className)}>
      {Array.from({ length: 3 }).map((_, index) => (
        <Fragment key={index}>
          {integrations.map(integration => (
            <div key={integration.name} className="flex flex-col justify-center items-center bg-neutral-900 border border-white/10 rounded-3xl p-6">
              <div className="size-24">
                <Image src={integration.icon} alt={`${integration.name} logo`} />
              </div>
              <h2 className="text-3xl mt-6">{integration.name}</h2>
              <p className="text-center text-white/50 mt-2">{integration.description}</p>
            </div>
          ))}
        </Fragment>
      ))}

    </motion.div>
  )
}
