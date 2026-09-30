import React from 'react'

import { NavLink } from 'react-router-dom'

function FriendsCard(props) {
    return (


        <NavLink className='friends-card' to={`/friends/${props.id}`}>
            <img className='friends-img' src={props.img} alt="" />
            <p className='friends-name'>{props.name}</p>
            <p className='friends-online'>{props.online}</p>
        </NavLink>

    )
}


export default FriendsCard