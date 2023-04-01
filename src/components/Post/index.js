import React from 'react'
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { deletePost } from '../../redux/actions/postsActions';

function Post({ post }) {
    const history = useHistory();
    const loggedUser = useSelector((state) => state.posts.loggedUser)
    const users = useSelector((state) => state.posts.users)
    const dispatch = useDispatch();

    const handleEditClick = (e) => {
        e.stopPropagation();
        history.push(`/post/${post?.id}/edit`);

    }
    const handleDeleteClick = (e) => {
        e.stopPropagation();
        const confirm = window?.confirm(`Are you sure you want to delete this post? ${post?.title}`)
        if (confirm)
            dispatch(deletePost(post?.id))
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
                                <div className='container-icon'>
                                    <img className='icon-edit' src='/img/pencil.png' onClick={handleEditClick} />
                                    <img className='icon-delete' src='/img/trash.png' onClick={handleDeleteClick} />
                                </div>
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