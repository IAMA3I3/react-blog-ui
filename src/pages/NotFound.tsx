import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/Button'

const NotFound = () => {
    return (
        <div className=' w-full min-h-[70vh] flex flex-col justify-center items-center text-center'>
            <h1 className=' text-6xl md:text-9xl font-thin text-gray-600'>404</h1>
            <p className=' text-2xl text-gray-600'>Page Not Found</p>
            <Link to={'/'} className=' mt-8'>
                <Button title='Go Back Home' variant='secondary' edges='rounded' />
            </Link>
        </div>
    )
}

export default NotFound
