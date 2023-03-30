import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ListPost from '../../components/ListPost'
import { setPosts } from '../../redux/actions/postsActions'
import { getAllPosts } from '../../services'

export default function Main() {
  const posts = useSelector((state) => state.posts.posts)
  const dispatch = useDispatch();

  const init = async() => {
    const posts = await getAllPosts()
    dispatch(setPosts(posts?.data))
  }

  useEffect(() => {
    if (!posts || posts.length === 0)
      init()
  }, []) 

  return (
    <div>
      <ListPost />
    </div>
  )
}
