import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PostType } from '../types/post'
import axios from 'axios'
import { Hero } from '../components/Hero'

const Post = () => {
    const { id } = useParams()
    const [post, setPost] = useState<PostType | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        axios.get<PostType>(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => setPost(res.data))
            .catch(err => setError(err instanceof Error ? err.message : "An error occured"))
            .finally(() => setIsLoading(false))
    }, [id])

    if (isLoading) return <div className=" my-60 text-2xl font-semibold text-gray-600 animate-pulse text-center">Loading Post ...</div>

    if (error) return <div className=" my-60 text-red-500 text-2xl text-center">{error}</div>

    return (
        <>
            <Hero subtitle={post?.title} />
            <div className=" mt-8 container">
                {post?.body}
            </div>
        </>
    )
}

export default Post
