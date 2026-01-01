import React, { useEffect, useState } from 'react'
import { Hero } from '../components/Hero'
import { GridList } from '../components/GridList'
import { PostType } from '../types/post'
import axios from 'axios'
import { PostItem } from '../components/PostItem'

const Home = () => {
    const [posts, setPosts] = useState<PostType[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        axios.get<PostType[]>("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                setPosts(res.data)
            })
            .catch(err => {
                setError(err instanceof Error ? err.message : "An error occured")
            })
            .finally(() => setIsLoading(false))
    }, [])

    return (
        <>
            <Hero title='POSTS' subtitle='Simple React Blog UI' />
            <div className=" mt-8 container">
                {
                    isLoading ?
                        <div className=" text-2xl font-semibold text-gray-600 animate-pulse text-center">Loading Posts ...</div>
                        :
                        error ?
                            <div className=" text-red-500 text-2xl text-center">{error}</div>
                            :
                            posts.length === 0 ?
                                <div className=" text-2xl font-semibold text-gray-600 text-center">No Post Yet</div>
                                :
                                <GridList>
                                    {
                                        posts.map(post => (
                                            <PostItem key={post.id} id={post.id} title={post.title} body={post.body} />
                                        ))
                                    }
                                </GridList>

                }
            </div>
        </>
    )
}

export default Home
