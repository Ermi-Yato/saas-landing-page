import { twMerge } from "tailwind-merge"

export const FeatureCard = (props: { title: string, description: string, children?: React.ReactNode, className?: string }) => {
  const { title, description, children, className } = props
  return (
    <div className={twMerge("bg-neutral-900 border border-white/10 rounded-3xl p-6", className)}>
      <div className="aspect-video">
        {children}
      </div>
      <div className="mt-6">
        <h2 className="text-3xl">{title}</h2>
        <p className="text-white/50 mt-3">{description}</p>
      </div>
    </div>
  )
}
