import { ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority";

const buttonStyles = cva('px-6 rounded-full border font-medium', {
  variants: {
    btnType: {
      primary: 'bg-lime-400 text-neutral-950 border-lime-400',
      secondary: 'border-white bg-transparent'
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
