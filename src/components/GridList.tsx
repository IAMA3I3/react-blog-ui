import React from 'react'

type GridListProps = {
    children: React.ReactNode
}

export const GridList = ({ children }: GridListProps) => {
    return (
        <div className=' grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {children}
        </div>
    )
}
