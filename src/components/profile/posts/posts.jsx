import React from 'react'
import brusBenner from '../../../img/брюс беннер.jpg'
import Post from './post/post'



let postsItems=[
    {name:'Брюс Беннер', photo:'../../../../img/брюс беннер.jpg', text:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, praesentium sint. Saepe expedita totam quos!', id:1},
    {name:'Стив Роджерс', photo:'../../../../img/брюс беннер.jpg', text:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, praesentium sint.', id:2},
    {name:'Питер Паркер', photo:'../../../../img/брюс беннер.jpg', text:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', id:3},
    {name:'Тони Старк', photo:'../../../../img/брюс беннер.jpg', text:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', id:4},
]

function Posts() {
    return (

        <div className='posts'>
            <div className='enter-post'>
                <img className='enter-post-img' src={brusBenner} alt="" />
                <div className='enter-post-content'>
                    <input type="text" placeholder='введите комментарий' />
                    <button>отправить</button>
                </div>
            </div>
            {postsItems.map((e)=>
            <Post name={e.name} photo={e.photo} text={e.text} id={e.id}/>
            )}
        </div>

    )
}


export default Posts