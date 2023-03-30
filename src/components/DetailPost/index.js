import React, { useEffect, useState } from 'react'
import { getDetailPost } from '../../services'
import { useParams } from 'react-router-dom';

function DetailPost() {
  const [dataPost, setDataPost] = useState(null)
  const { id } = useParams();
  console.log(id)
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
        <div>
          <label className='label-title'>User ID </label> <span>{dataPost?.userId}</span>
        </div>
        <div>
          <label className='label-title'>ID </label> <span>{dataPost?.id}</span>
        </div>
        <div>
          <label className='label-title'>Title </label> <span>{dataPost?.title}</span>
        </div>
        <div>
          <label className='label-title'>Body </label> <span>{dataPost?.body}</span>
        </div>
      </div>
    </div>
  )
}

export default DetailPost