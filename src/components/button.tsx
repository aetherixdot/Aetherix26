import * as React from "react"
import clsx from "clsx"

type ButtonVariant = "primary" | "secondary"

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
}

export function Button1({
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        baseStyles,
        variantStyles[variant],
        className
      )}
      {...props}
    />
  )
}

/* =========================
   Base Styles
========================= */
const baseStyles = `
  inline-flex items-center justify-center gap-2
  font-inherit text-[13px] font-medium uppercase tracking-[0.4px]
  rounded-full
  px-6 py-4
  transition-all duration-200 ease-out
  active:translate-y-[1px]
  focus:outline-none
`

/* =========================
   Variants (CSS → Tailwind)
========================= */
const variantStyles: Record<ButtonVariant, string> = {
  primary: `
    text-[#56657A]
    bg-[#e0e8ef]
    border-2 border-white/30

  hover:shadow-[-2px_-1px_8px_rgba(255,255,255,1),_2px_1px_8px_rgba(95,157,231,0.48)]

    hover:text-[#516d91]
    hover:bg-[#E5EDF5]
    hover:shadow-[-2px_-1px_8px_rgba(255,255,255,1),_2px_1px_8px_rgba(95,157,231,0.48)]

    active:shadow-none
  `,

  secondary: `
    text-white
    bg-neutral-900
    border border-white/10

    hover:bg-neutral-800
    hover:border-white/20
  `,
}
