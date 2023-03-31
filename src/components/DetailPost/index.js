import React, { useEffect, useState } from 'react'
import { getDetailPost } from '../../services'
import { useParams } from 'react-router-dom';
import CommentsInPost from '../CommentsInPost';

function DetailPost() {
  const [dataPost, setDataPost] = useState(null)
  const { id } = useParams();

  const init = async () => {
    const dataPostId = await getDetailPost(id)
    setDataPost(dataPostId?.data)

}
  useEffect(() => {
    if (!dataPost) {
        init()
    }
    // eslint-disable-next-line
  }, [id])

  return (
    <div className='container-detail-post'>
      <div className='container-info'>
        <div className='title-detail'>
          <h2>{dataPost?.title}</h2>
        </div>
        <p className='body-detail'>
          {dataPost?.body}
        </p>
      </div>
      <CommentsInPost id={id}/>
    </div>
  )
}

export default DetailPost