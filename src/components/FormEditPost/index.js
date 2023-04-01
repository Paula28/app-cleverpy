import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getDetailPost, putEditPost } from '../../services';
import { useHistory } from "react-router-dom";

function FormEditForm() {
    const [post, setPost] = useState(null);
    const { id } = useParams();
    const history = useHistory();

   
    const init = async () => {
        const dataPostId = await getDetailPost(id)
        setPost(dataPostId?.data)
    }
    const handleChange = (field, value) => {
        const newPost = {
            ...post,
            [field]: value
        }
        setPost(newPost)
    }
    useEffect(() => {
        if (!post) {
            init()
        }
        // eslint-disable-next-line
    }, [id])
    const handleSaveClick = () => {
        if (post?.title?.length > 0 && post?.body?.length > 0) {
            putEditPost(post)
            history.push(`/post/${post?.id}/`);
        }
    }
    const handleCancelClick = () => {
        history.push(`/main`);
    }

    return (
        <div className='container-form-edit'>
            <div className='form'>
                <span>Title:</span>
                <input type="text" onChange={(e) => handleChange('title', `${e.target.value}`)} name="title" value={post?.title} />
                <span>Post:</span>
                <textarea  onChange={(e) => handleChange('body', `${e.target.value}`)} name="post" value={post?.body} />
                <div className='button-container'>
                    <button onClick={handleCancelClick}>Cancel</button>
                    <button onClick={handleSaveClick}>Save</button>
                </div>

            </div>
        </div>
    )
}

export default FormEditForm