import React from 'react'
import { useHistory } from "react-router-dom";

function Navbar() {
    const history = useHistory();

    const handleClick = () => {
        history.push(`/`);
    }
  return (
    <div className="navbar">
      <div>
        <img src='img/logo.png' onClick={handleClick}/>
        {/* enlaces y loco */}
      </div>
      <div>
        {/* user */}
      </div>
    </div>
  )
}

export default Navbar

