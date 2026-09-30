import React from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom'


function Navbar() {
    return (
        <div className='navbar'>
            <label htmlFor="nav-toggle-checkbox" className='nav-toggle'>
                <i className='fas fa-bars fa-2x'></i>
            </label>
            <NavLink to="/profile" className='navbar-link'><i class="fa-solid fa-compass"></i><span>Profile</span></NavLink>
            <NavLink to="/friends" className='navbar-link'><i class="fa-solid fa-user-group"></i><span>Friends</span></NavLink>
            <NavLink to="/dialogs" className='navbar-link'><i class="fa-solid fa-comment"></i><span>Dialogs</span></NavLink>
            <NavLink to="/popular" className='navbar-link'><i class="fa-regular fa-circle-user"></i><span>Popular</span></NavLink>
        </div>
    )
}


export default Navbar