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
   Base Styles (Supabase-like)
========================= */
const baseStyles = `
  relative inline-flex items-center justify-center
  h-[38px] px-4 py-2
  text-sm font-normal
  rounded-md
  cursor-pointer
  transition-colors duration-200 ease-out
  outline-none
  focus-visible:outline
  focus-visible:outline-4
  focus-visible:outline-offset-1
  active:translate-y-[1px]
`

/* =========================
   Variants
========================= */
const variantStyles: Record<ButtonVariant, string> = {
  primary: `
    bg-[#7A5ED6]
    text-white
    border border-[#6A4FC4]/80

    hover:bg-[#8B74E6]
    hover:border-[#6A4FC4]

    focus-visible:outline-[#5B3FB0]
  `,
  secondary: `
    bg-neutral-900
    text-white
    border border-white/10
    hover:bg-neutral-800
    hover:border-white/20
    focus-visible:outline-neutral-700
  `,
}
