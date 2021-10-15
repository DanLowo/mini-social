import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../store/user'

const Navbar = () => {
    const dispatch = useDispatch()
    const { name } = useSelector(state => state.user.user)
    const [openMenu, setOpenMenu] = useState(false)

    const handleLogout = () => {
        dispatch(logout())
    }

    const Menu = () => (
        <div id="menu">
            <div>
                <span className="material-icons">person</span>
                <span className="text">My Profile</span>
            </div>
            <div>
                <span className="material-icons">chat_bubble_outline</span>
                <span className="text">Group Chat</span>
            </div>
            <hr/>
            <div>
                <span className="material-icons">person</span>
                <span className="text" onClick={handleLogout}>Logout</span>
            </div>
        </div>
    )

    return (
        <nav>
            <header>{'</>DanLowo'}</header>
            <div>
                <span onClick={() => setOpenMenu(!openMenu)}>{name || 'Login'}</span>
                {openMenu && <Menu />}
                {/* <span className="material-icons">chevron_left</span> */}
            </div>
        </nav>
    )
}

export default Navbar
