// ----------------------------------------------------
// FEATURES SECTION
// ----------------------------------------------------

import { Tag } from "@/components/Tag"
import { FeatureCard } from "@/components/FeatureCard"
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg"
import avatar2 from "@/assets/images/avatar-lula-meyers.jpg"
import avatar3 from "@/assets/images/avatar-ashwin-santiago.jpg"
import avatar4 from "@/assets/images/avatar-owen-garcia.jpg"
import Image from "next/image"
import { Avatar } from "@/components/Avatar"

const features = [
  "Asset Library",
  "Code Preview",
  "Flow Mode",
  "Smart Sync",
  "Auto Layout",
  "Fast Search",
  "Smart Guides",
];

export default function Features() {
  const arr = new Array(3).fill(0)
  return (
    <section className="py-24">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Features</Tag>
        </div>
        <h1 className="text-medium text-7xl text-center lg:max-w-2xl mx-auto">Where power meets <span className="text-lime-400">simplicity</span></h1>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
          <FeatureCard title="Real-time Collaboration" description="Work together seamlessly with conflict-free team editing" className="md:col-span-2 lg:col-span-1 group">
            <div className="aspect-video flex items-center justify-center">
              <Avatar className="border-blue-500 z-10">
                <Image src={avatar1} alt="avatar1" className="rounded-full" />
              </Avatar>
              <Avatar className="border-indigo-500 -ml-6 z-8">
                <Image src={avatar2} alt="avatar2" className="rounded-full" />
              </Avatar>
              <Avatar className="border-yellow-400 -ml-6 z-6">
                <Image src={avatar3} alt="avatar3" className="rounded-full" />
              </Avatar>
              <Avatar className="border-transparent group-hover:border-green-500 -ml-6 transition">
                <div className="size-full rounded-full bg-neutral-700 flex gap-1 items-center justify-center relative">
                  <Image src={avatar4} alt="avatar4" className="absolute rounded-full opacity-0 group-hover:opacity-100 transition" />
                  {arr.map((_, index) => (
                    <span key={index} className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  ))}
                </div>
              </Avatar>
            </div>
          </FeatureCard>

          <FeatureCard title="Interactive Prototyping" description="Engage your clients with prototypes that react to user actions" className="md:col-span-2 lg:col-span-1">
            <div className="aspect-video flex items-center justify-center">
              <h2 className="text-center font-bold text-4xl text-white/20">We&apos;ve achieved <span className="block w-fit text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mx-auto">incredible</span> growth this year</h2>
            </div>
          </FeatureCard>

          <FeatureCard title="Keyboard Quick Actions" description="Powerfull commands to help you create designs more quickly" className="md:col-span-2 md:col-start-2 lg:col-span-1 group">
            <div className="aspect-video flex gap-4 items-center justify-center font-medium">
              <div className="px-10 py-3 rounded-2xl bg-neutral-300 inline-flex text-neutral-950 outline-2 outline-offset-4 outline-transparent group-hover:outline-lime-400 transition-all duration-300 group-hover:translate-y-1"><span>shift</span></div>
              <div className="px-4 py-3 rounded-2xl bg-neutral-300 inline-flex text-neutral-950 outline-2 outline-offset-4 outline-transparent group-hover:outline-lime-400 transition-all duration-300 group-hover:translate-y-1 delay-75"><span>alt</span></div>
              <div className="px-6 py-3 rounded-2xl bg-neutral-300 inline-flex text-neutral-950 outline-2 outline-offset-4 outline-transparent group-hover:outline-lime-400 transition-all duration-300 group-hover:translate-y-1 delay-100"><span>C</span></div>
            </div>
          </FeatureCard>
        </div>

        <div className="mt-8 flex flex-wrap gap-3 justify-center lg:max-w-5xl lg:mx-auto">
          {features.map(feature => (
            <div key={feature} className="inline-flex items-center gap-2 bg-neutral-900 border border-white/10 px-3 md:px-5 py-1.5 md:py-2 rounded-2xl justify-self-start">
              <span className="text-neutral-950 bg-lime-400 rounded-full size-5 inline-flex items-center justify-center text-xl">&#10038;</span>
              <span className="font-medium md:text-lg">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
