import React from 'react'
import { useHistory } from "react-router-dom";

function Post({post}) {
    const history = useHistory();

    const handleClick = () => {
        history.push(`/post/${post?.id}`);
    }
    return (
    <div className='container-post'>
        <div className='post' onClick={handleClick}>
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