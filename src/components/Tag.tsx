import { HTMLAttributes } from "react"

export const Tag = (props: HTMLAttributes<HTMLDivElement>) => {
  const { className, children, ...otherProps } = props
  return (
    <div className="bg-transparent text-lime-400 border border-lime-400 rounded-full inline-flex gap-2 px-3 py-1 uppercase items-center"
      {...otherProps}>
      <span>&#10038;</span>
      <span>{children}</span>
    </div>
  )
}
