import React from 'react'
import './header.css'
import headerLogo from '../../img/Untitled_logo_3_free-file-Photoroom (1).png'

function Header() {
    return (
        <div className='header'>
            <div className='header-container'>
                <a className='header-link' href="#">

                    <img src={headerLogo} alt="" />
                </a>


            </div>

        </div>
    )
}


export default Header