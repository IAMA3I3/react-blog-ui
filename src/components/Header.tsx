import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <nav className=' w-full py-2 bg-slate-800 text-white shadow'>
            <div className=" container">
                <Link to={'/'} className=' text-3xl'>Blog</Link>
            </div>
        </nav>
    )
}
