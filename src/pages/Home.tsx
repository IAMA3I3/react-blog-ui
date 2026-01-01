import React, { useEffect, useState } from 'react'
import { Hero } from '../components/Hero'
import { GridList } from '../components/GridList'
import { PostType } from '../types/post'
import axios from 'axios'
import { PostItem } from '../components/PostItem'
import { Button } from '../components/Button'

const Home = () => {
    const [posts, setPosts] = useState<PostType[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState("")

    const [filteredPosts, setFilteredPosts] = useState<PostType[]>([])
    const [searchText, setSearchText] = useState("")

    const [page, setPage] = useState(1)
    const limit = 12

    const totalPages = Math.ceil(posts.length / limit)
    const start = (page - 1) * limit
    const end = page * limit

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value)
        const tempPost = searchText ? posts.filter(post => post.title.includes(searchText)) : posts
        setFilteredPosts(tempPost)
    }


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
        <div className=' flex-1'>
            <Hero title='POSTS' subtitle='Simple React Blog UI' />
            <div className=" container mt-4 flex justify-end">
                <input type="text" value={searchText} onChange={onInputChange} className=' py-2 px-4 w-96 border-2 border-slate-500 rounded-full focus:border-slate-700' placeholder='Search post' />
            </div>
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
                                        posts.slice(start, end).map(post => (
                                            <PostItem key={post.id} id={post.id} title={post.title} body={post.body} />
                                        ))
                                    }
                                </GridList>

                }
            </div>
            <div className=" mt-4 container flex justify-end items-center gap-4">
                <Button title='<' disabled={page === 1} onClick={() => setPage(prev => prev - 1)} />
                <p className=" text-sm font-semibold text-gray-600 text-center">Showing {start + 1} to {Math.min(end, posts.length)} of {posts.length} posts</p>
                <Button title='>' disabled={page === totalPages || totalPages === 0} onClick={() => setPage(prev => prev + 1)} />
            </div>
        </div>
    )
}

export default Home
