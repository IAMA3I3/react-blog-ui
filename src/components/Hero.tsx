import React from 'react'

type HeroProps = {
    title?: string
    subtitle?: string
}

export const Hero = ({ title = "", subtitle = "" }: HeroProps) => {
    return (
        <div className=' w-full h-64 bg-gradient-to-r from-slate-700 to-slate-500 text-white'>
            <div className=" container h-full flex flex-col gap-2 justify-center items-center text-center">
                <h1 className=' text-4xl'>{title}</h1>
                <p className=' text-lg'>{subtitle}</p>
            </div>
        </div>
    )
}
