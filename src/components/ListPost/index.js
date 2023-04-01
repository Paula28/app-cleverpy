import React from 'react'
import { useSelector } from 'react-redux'
import Post from '../Post'

export default function ListPost() {
  const posts = useSelector((state) => state.posts.posts)
  return (
    <div className='container-list-post'>
        {posts?.length > 0 && posts.map((post) => 
            <Post post={post}/>
        )}
    </div>
  )
}



