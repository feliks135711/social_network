import React from 'react'




function ProfileInfo(props) {
    return (
        <div className='profile-data'>
            <div className='profile-data-left'>
                <img className='profile-data-img' src={props.userProfile.map((e)=>e.img )} alt="" />
                <h1>{props.userProfile.map((e)=>e.name )}</h1>
            </div>
            <div className='profile-data-right'>
                <p>Дата рождения: <span>{props.userProfile.map((e)=>e.birthday )}</span></p>
                <p>Увлечения, хобби: <span>{props.userProfile.map((e)=>e.hobbi )}</span></p>
                <p>Описание о себе: <span>{props.userProfile.map((e)=>e.description )}</span></p>
            </div>
        </div>


    )
}


export default ProfileInfo