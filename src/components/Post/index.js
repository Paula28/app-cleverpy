import React from 'react'
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux'


function Post({post}) {
    const history = useHistory();
    const loggedUser = useSelector((state) => state.posts.loggedUser)
    const users = useSelector((state) => state.posts.users)

    const handleEditClick = (e) => {
        e.stopPropagation();
        history.push(`/post/${post?.id}/edit`);

    }
    const handleDetailClick = (e) => {
        e.stopPropagation();
        history.push(`/post/${post?.id}`);

    }

    const findName = () => {
        return users.filter((user) => user?.id === post?.userId)[0].username
    }

    return (
    <div className='container-post'>
        <div className='post' onClick={handleDetailClick}>
            <span className='title-post'>
                {findName()}        
                {
                    loggedUser?.id === post?.userId && (
                        <>
                            <img className='icon-edit' src='/img/pencil.png' onClick={handleEditClick} />
                            {/* borrar aqui */}
                        </>
                    )
                }
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