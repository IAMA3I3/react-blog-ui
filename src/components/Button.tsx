import React from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary"
    edges?: "normal" | "rounded"
    title: string
}

export const Button = ({ variant = "primary", edges = "normal", title, ...rest }: ButtonProps) => {
    return (
        <button {...rest} className={`${variant === "primary" ? " bg-blue-900 hover:bg-blue-500" : "bg-slate-800 hover:bg-gray-600"} ${edges === "rounded" ? " rounded-full" : " rounded-lg"} font-semibold px-6 py-2 text-white text-sm`}>{title}</button>
    )
}
