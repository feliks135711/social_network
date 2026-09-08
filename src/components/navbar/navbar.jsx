import React from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom'


function Navbar() {
    return (
        <div className='navbar'>
            <NavLink to="/profile" className='navbar-link'>Profile</NavLink>
            <NavLink to="/friends" className='navbar-link'>Friends</NavLink>
            <NavLink to="/dialogs" className='navbar-link'>Dialogs</NavLink>
            <NavLink to="/popular" className='navbar-link'>Popular</NavLink>
        </div>
    )
}


export default Navbar