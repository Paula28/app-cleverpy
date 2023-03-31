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
  console.log({comments})
  
  return (
    <div>
      {comments?.length > 0 && comments.map((comment) => 
      <div>
        <div>
          <label className='label-title'>User Id </label> <span>{comment?.userId}</span>
        </div>
        <div>
          <label className='label-title'>Id Comment </label> <span>{comment?.id}</span>
        </div>
        <div>
          <label className='label-title'>Name </label> <span>{comment?.name}</span>
        </div>
        <div>
          <label className='label-title'>Email </label> <span>{comment?.email}</span>
        </div>
        <div>
          <label className='label-title'>Body </label> <span>{comment?.body}</span>
        </div>
      </div>
      )}
    </div>
  )
}

export default CommentsInPost