import React from 'react'
import './profile.css'
import Posts from './posts/posts'
import ProfileInfo from './profile-info/profile-info'


function Profile(props) {
    return (
        <div className='profile'>
            <ProfileInfo userProfile={props.userProfile}/>
            <Posts userProfile={props.userProfile} newPostText={props.newPostText} OnPostChange={props.OnPostChange} postsItems={props.postsItems} addPost={props.addPost} />
        </div>
    )
}


export default Profile