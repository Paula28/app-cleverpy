import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { useHistory } from "react-router-dom";
import { setLoggedUser } from '../../redux/actions/postsActions';

function Navbar() {
  const dispatch = useDispatch()
  const history = useHistory();
  const loggedUser = useSelector((state) => state.posts.loggedUser)

  const handleClick = () => {
    history.push(`/main`);
  }

  const logout = () => {
    dispatch(setLoggedUser(null))
    history.push('/login')
  }

  return (
    <div className="navbar">
      <div>
        <img src='/img/logo.png' onClick={handleClick} />
        {/* enlaces y loco */}
      </div>
      <div className='user-info'>
        <span>{loggedUser?.username} - {loggedUser?.email}</span>
        <img src='/img/logout.png' onClick={logout} />
      </div>
    </div>
  )
}

export default Navbar

