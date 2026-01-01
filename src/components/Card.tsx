import React from 'react'

type CardProps = {
    children: React.ReactNode
}

export const Card = ({ children }: CardProps) => {
    return (
        <div className=' w-full p-4 border bg-white shadow hover:shadow-xl rounded-lg'>
            {children}
        </div>
    )
}
