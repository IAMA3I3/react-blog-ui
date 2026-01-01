import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

type HeaderProps = {
    backButton?: boolean
}

export const Header = ({ backButton = false }: HeaderProps) => {
    const navigate = useNavigate()
    return (
        <nav className=' w-full py-2 bg-slate-800 text-white shadow'>
            <div className=" container flex items-center gap-8">
                {backButton && <button onClick={() => navigate(-1)} className=' text-3xl font-bold'>←</button>}
                <Link to={'/'} className=' text-3xl'>Blog</Link>
            </div>
        </nav>
    )
}
