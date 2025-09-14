// ----------------------------------------------------
// FOOTER SECTION
// ----------------------------------------------------

import logo from "@/assets/images/logo.svg"
import Image from "next/image";

const footerLinks = [
  { href: "#", label: "Contact" },
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms & Conditions" },
];

export default function Footer() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="flex flex-col md:flex-row md:justify-between items-center justify-center gap-4">
          <div className="flex justify-center">
            <a href="#">
              <Image src={logo} alt="logo image" className="cursor-pointer" />
            </a>
          </div>
          <div>
            <nav className="inline-flex gap-6 justify-center">
              {footerLinks.map(link => (
                <a key={link.label} href={link.href} className="text-white/50 text-sm hover:text-lime-400 transition-colors">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </section>
  )
}
