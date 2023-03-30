import React from 'react'

function Post({post}) {

    return (
    <div className='container-post'>
        <div className='post'>
            <span>
                <b>User Id: </b>{post?.userId}        
            </span>
            <span>
                <b>Title: </b>{post?.title}        
            </span>
            <span>
                <b>Body: </b>{post?.body}        
            </span>
        </div>      
    </div>
  )
}

export default Post