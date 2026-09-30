import React from 'react'

import { NavLink } from 'react-router-dom'

function PopularCard(props) {
    return (
        <div className='popularCard'>
            <h2 className='popular-title'>{props.title}</h2>
            <img className='popular-photo' src={props.photo} alt="" />
            <p className='popular-text'>{props.text}</p>
            <div className='popularCardBox'>
                <p className='popular-name'>{props.name}</p>
                <p className='popular-data'>{props.data}</p>
                <p>
                    <i class="fa-solid fa-thumbs-up"></i>
                    {props.likes}
                </p>
            </div>

        </div>


    )
}


export default PopularCard