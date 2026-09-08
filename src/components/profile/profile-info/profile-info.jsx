import React from 'react'
import toniStark from '../../../img/тони старк.jpg'



function ProfileInfo() {
    return (
        <div className='profile-data'>
            <div className='profile-data-left'>
                <img className='profile-data-img' src={toniStark} alt="" />
                <h1>Тони Старк</h1>
            </div>
            <div className='profile-data-right'>
                <p>Дата рождения: <span>20.08.2000</span></p>
                <p>Увлечения, хобби: <span>технологии, спортивный образ жизни</span></p>
                <p>Описание о себе: <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse odio autem nesciunt quaerat reiciendis beatae.</span></p>
            </div>
        </div>


    )
}


export default ProfileInfo