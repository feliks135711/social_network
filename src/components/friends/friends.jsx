import React from 'react'
import './friends.css'
import FriendsCard from './friendsCard/friendsCard'




function Friends(props) {
    return (
        <div className='friends'>           
                {props.friends.map((e) =>
                    <FriendsCard name={e.name} id={e.id} img={e.img} online={e.online} />
                )}          
        </div>
    )
}


export default Friends