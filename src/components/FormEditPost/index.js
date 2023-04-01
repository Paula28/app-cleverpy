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
    const handleClick = () => {
        if (post?.title?.length > 0 && post?.body?.length > 0) {
            putEditPost(post)
            history.push(`/post/${post?.id}/`);
        }
    }

    return (
        <div className='container-form-edit'>
            <p>Title: <input type="text" onChange={(e) => handleChange('title', `${e.target.value}`)} name="title" value={post?.title} /></p>
            <p>Post: <input type="text" onChange={(e) => handleChange('body', `${e.target.value}`)} name="post" value={post?.body} /></p>
            <button onClick={handleClick}>Save</button>
        </div>
    )
}

export default FormEditForm