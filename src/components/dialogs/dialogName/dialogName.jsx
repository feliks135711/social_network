import React from 'react'

import { NavLink } from 'react-router-dom'

function DialogName(props) {
    return (
        <div className='dialogName'>
            <img className='dialog-img' src={props.img} alt="" />
            <NavLink className='dialog-name' to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}


export default DialogName