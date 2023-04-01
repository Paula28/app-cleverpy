import React from 'react'
import { useHistory } from "react-router-dom";

function Post({post}) {
    const history = useHistory();

    const handleClick = () => {
        // history.push(`/post/${post?.id}`);
        history.push(`/post/${post?.id}/edit`);

    }
    return (
    <div className='container-post'>
        <div className='post' onClick={handleClick}>
            <span>
                Username: {post?.userId}        
            </span>
            <span className='data-title'>
                {post?.title}
            </span>
            <span className='data-body'>
               {post?.body}        
            </span>
        </div>      
    </div>
  )
}

export default Post