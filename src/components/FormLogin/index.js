import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { setLoggedUser, setUsers } from '../../redux/actions/postsActions';
import { getAllUsers } from '../../services'

function FormLogin() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [user, setUser] = useState("")
    const [userList, setUserList] = useState([])
    const [loading, setLoading] = useState(false)
    const [showError, setShowError] = useState(false)

    useEffect(() => {
        if (!loading && userList.length === 0) {
            init()
        }
    }, [])

    const init = async () => {
        setLoading(true)
        const res = await getAllUsers();
        dispatch(setUsers(res?.data))
        setUserList(res?.data)
        setLoading(false)
    }

    const handleClick = () => {
        setLoading(true)
        setShowError(false)
        if (userList?.length > 0) {
            const userFound = userList.filter((userObj) => userObj.username.toLowerCase() === user || userObj.email.toLowerCase() === user)
            if (userFound.length > 0) {
                dispatch(setLoggedUser(userFound[0]))
                history.push('/main')
            } else {
                setShowError(true)
            }
        }
        setLoading(false)
    }

    const handleKeyPressed = (e) => {
        if (e.keyCode === 13) {
            handleClick()
        }
    }

    return (
        <div className='container-form-login'>
            <img src='img/logoWhite.png' />
            <span>Insert your mail or username</span>
            <input type="text" onKeyDown={handleKeyPressed} onChange={(e) => setUser(`${e.target.value || ""}`.trim().toLowerCase())} value={user} />
            {
                showError && <span className='login-error'>No match found.</span>
            }
            <button disabled={loading} onClick={handleClick}>Login</button>
        </div>
    )
}

export default FormLogin