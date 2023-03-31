import React, { useEffect, useState } from 'react'
import { getCommentsInPost } from '../../services'

function CommentsInPost({id}) {
  const [comments, setComments] = useState([])
  
  const init = async () => {
    const dataComments = await getCommentsInPost(id)
    console.log(dataComments)
    setComments(dataComments?.data)
}
  useEffect(() => {
    if (comments.length === 0) {
        init()
    }
    // eslint-disable-next-line
  }, [id])
  
  return (
    <div className='container-comments'>
      <h2>Comments</h2>
      <span className='line-separator' />
      {comments?.length > 0 && comments.map((comment) => 
      <div className='comment'>
        <small>{comment?.name} - {comment?.email}</small>
        <p>{comment?.body}</p>
      </div>
      )}
    </div>
  )
}

export default CommentsInPost