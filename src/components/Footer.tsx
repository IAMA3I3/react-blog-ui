import React from 'react'

export const Footer = () => {
  return (
    <footer className=' mt-8 w-full py-2 bg-slate-500 text-white'>
        <div className=" container">
            <p className=' font-semibold'>© <a href="https://abdulazeezsalamiportfolio.onrender.com/" target="_blank" rel="noopener noreferrer" className=' hover:underline'>Aziz</a> {new Date().getFullYear()}</p>
        </div>
    </footer>
  )
}
