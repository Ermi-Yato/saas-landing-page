import Button from "@/components/Button"
import designExampleOne from "@/assets/images/design-example-1.png"
import designExampleTwo from "@/assets/images/design-example-2.png"
import Image from "next/image"
import { Pointer } from "@/components/Pointer"

export default function Hero() {
  return (
    <section className="py-24 overflow-x-clip">
      <div className="container relative">

        <div className="absolute -left-32 top-16 hidden lg:block">
          <Image src={designExampleOne} alt="design example one" />
        </div>
        <div className="absolute -right-64 -top-16 hidden lg:block">
          <Image src={designExampleTwo} alt="design example two" />
        </div>

        <div className="absolute left-56 top-96">
          <Pointer name="Andrea" bgColor="lightBlue" />
        </div>
        <div className="absolute right-[500px] -top-4">
          <Pointer name="Bryan" bgColor="lightRed" />
        </div>

        <div className="flex justify-center items-center">
          <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full font-semibold text-neutral-950">
            ✨ $7.5M see round raised
          </div>
        </div>
        <h1 className="font-medium text-6xl md:text-7xl lg:text-8xl text-center mt-6 lg:max-w-4xl mx-auto">Impactful design, created effortlessly</h1>
        <p className="text-white/50 text-center text-xl mt-8 md:max-w-2xl mx-auto">Design tools shouldn&apos;t slow you down. Layers combines powerful features with an intuitive
          interface that keeps you in your creative flow.</p>
        <form className="grid grid-cols-3 border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
          <input type="email" placeholder="Enter your email" className="col-span-2 outline-none bg-transparent px-4" />
          <Button type="submit" btnType="primary" size="sm" className="whitespace-nowrap col-span-1 justify-self-end">Sign Up</Button>
        </form>

      </div>
    </section>
  )
}
