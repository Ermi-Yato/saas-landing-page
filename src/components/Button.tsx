import { ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority";

const buttonStyles = cva('px-6 rounded-full border font-medium', {
  variants: {
    btnType: {
      primary: 'bg-lime-400 text-neutral-950 border-lime-400 hover:border-white hover:bg-transparent transition-all duration-200 hover:text-white',
      secondary: 'border-white bg-transparent hover:border-lime-400 hover:bg-lime-400 transition-all duration-200 hover:text-neutral-950'
    },
    size: {
      sm: 'h-10',
      md: 'h-12'
    }
  }
})

export default function Button(props: { btnType: 'primary' | 'secondary', size?: 'sm' | 'md' } & ButtonHTMLAttributes<HTMLButtonElement>) {
  const { btnType, className, size, ...otherProps } = props
  return (
    <button
      className={buttonStyles({
        btnType,
        size,
        className,
      })}
      {...otherProps}
    />
  )
}
