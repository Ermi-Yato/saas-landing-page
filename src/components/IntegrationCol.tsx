import { type integrationType } from "@/sections/Integrations"
import Image from "next/image"
import { twMerge } from "tailwind-merge"

export default function IntegrationCol(props: { integrations: integrationType, className?: string }) {
  const { integrations, className } = props
  return (
    <div className={twMerge("flex flex-col gap-4", className)}>
      {integrations.map(integration => (
        <div key={integration.name} className="flex flex-col justify-center items-center bg-neutral-900 border border-white/10 rounded-3xl p-6">
          <div className="size-24">
            <Image src={integration.icon} alt={`${integration.name} logo`} />
          </div>
          <h2 className="text-3xl mt-6">{integration.name}</h2>
          <p className="text-center text-white/50 mt-2">{integration.description}</p>
        </div>
      ))}
    </div>
  )
}
