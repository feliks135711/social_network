import React from 'react'
import './header.css'
import headerLogo from '../../img/Untitled_logo_3_free-file-Photoroom (1).png'
import { NavLink } from 'react-router-dom'

let headerText = React.createRef()



function Header(props) {
    function OnPostChange() {
        props.OnPostChange(headerText.current.value)
        // console.log(props)
    }
    return (
        <div className='header'>
            <div className='header-container'>
                <a className='header-link' href="#">
                    <img src={headerLogo} alt="" />
                </a>
                <div className='header-center'>
                    <input ref={headerText} value={props.newPostText} onChange={OnPostChange} className='header-input' placeholder='поиск' type="text" />
                    <div className='header-search'>
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
                <div className='header-right'>
                    <NavLink to="/popular" className='header-right-link'><i class="fa-solid fa-compass"></i></NavLink>
                    <NavLink to="/friends" className='header-right-link'><i class="fa-solid fa-user-group"></i></NavLink>
                    <NavLink to="/dialogs" className='header-right-link'><i class="fa-solid fa-comment"></i></NavLink>
                    <NavLink to="/profile" className='header-right-link'><i class="fa-regular fa-circle-user"></i></NavLink>
                </div>

            </div>

        </div>
    )
}


export default Header