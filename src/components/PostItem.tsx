import React from 'react'
import { PostType } from '../types/post'
import { Card } from './Card'
import { Link } from 'react-router-dom'
import { Button } from './Button'

export const PostItem = ({ id, title, body }: PostType) => {
    return (
        <Card>
            <h2 className=' text-xl mb-2 truncate uppercase'>{title}</h2>
            <p className=' line-clamp-2'>{body}</p>
            <Link to={`/posts/${id}`} className=' inline-block mt-8'>
                <Button title='Read More' />
            </Link>
        </Card>
    )
}
