import React from 'react'
import './profile.css'
import Posts from './posts/posts'
import ProfileInfo from './profile-info/profile-info'


function Profile() {
    return (
        <div className='profile'>
            <ProfileInfo/>
            <Posts />
        </div>
    )
}


export default Profile