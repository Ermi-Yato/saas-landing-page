// ----------------------------------------------------
// NAVIGATION BAR SECTION
// ----------------------------------------------------
"use client"

import logoImage from "@/assets/images/logo.svg"
import Image from "next/image"
import Button from "@/components/Button"
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  {
    label: "Home",
    href: "#"
  },
  {
    label: "Features",
    href: "#features"
  },
  {
    label: "Integrations",
    href: "#integrations"
  },
  {
    label: "FAQs",
    href: "#faqs"
  },
];

export default function Navbar() {
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <section className="py-4 lg:py-8 fixed w-full top-0 z-50" id="#">
        <div className="container max-w-5xl">
          <div className="border border-white/15 rounded-[27px] md:rounded-full bg-neutral-950/60 backdrop-blur-lg">
            <div className="grid grid-cols-2 lg:grid-cols-3 p-2 items-center px-4 md:pr-2">
              <div>
                <Image src={logoImage} alt="logo image" className="h-9 md:h-auto  w-auto" />
              </div>

              <div className="lg:flex items-center justify-center hidden">
                <nav className="flex gap-4 font-medium">
                  {navLinks.map((link) => (
                    <a href={link.href} key={link.label} className="hover:text-lime-400 transition-colors">{link.label}</a>
                  ))}
                </nav>
              </div>

              <div className="flex justify-end gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu md:hidden" onClick={() => setToggle(!toggle)}>
                  <line x1="3" y1="6" x2="21" y2="6" className={twMerge("origin-left transition", toggle && "rotate-45 -translate-y-1")}></line>
                  <line x1="3" y1="12" x2="21" y2="12" className={twMerge(toggle && "opacity-0")}></line>
                  <line x1="3" y1="18" x2="21" y2="18" className={twMerge("origin-left transition", toggle && "-rotate-45 translate-y-1")}></line>
                </svg>

                <Button btnType="secondary" size="md" className="hidden md:inline-flex md:items-center">Log In</Button>
                <Button btnType="primary" size="md" className="hidden md:inline-flex md:items-center">Sign In</Button>
              </div>
            </div>

            <AnimatePresence initial={false}>
              {toggle && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="overflow-hidden">
                  <nav className="flex flex-col justify-center items-center gap-4 py-4">
                    {navLinks.map(link => (
                      <a key={link.label} href={link.href} className="font-medium">{link.label}</a>
                    ))}

                    <Button btnType="secondary" size="md">Log In</Button>
                    <Button btnType="primary" size="md">Sign In</Button>
                  </nav>

                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>
      </section>
      <div className="pb-[86px] md:pb-[98px] lg:pb-[100px]"></div>
    </>
  )
}
