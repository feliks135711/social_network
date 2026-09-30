import React from 'react'
import brusBenner from '../../../../img/брюс беннер.jpg'


function Post(props) {
    return (

        <div className='post'>
            <div className='post-comment'>
                <img className='post-comment-img' src={props.photo} alt="" />
                <div className='post-comment-content'>
                    <p className='post-comment-name'>{props.name}</p>
                    <p className='post-comment-text'>{props.text}</p>
                </div>
                <p>
                    <i class="fa-solid fa-thumbs-up"></i>
                    {props.likes}
                </p>
                
            </div>
        </div>

    )
}


export default Post