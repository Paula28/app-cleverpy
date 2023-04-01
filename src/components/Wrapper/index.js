import React from 'react'
import Navbar from '../Navbar'
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux'

function Wrapper({ children }) {
  const history = useHistory();
  console.log(children)
  const loggedUser = useSelector((state) => state.posts.loggedUser)
  
  if (!loggedUser)
    return history.push('/login')

  return (
    <div className='wrapper'>
        <Navbar />
        {children}
    </div>
  )
}

export default Wrapper