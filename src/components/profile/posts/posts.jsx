import React from 'react'
import Post from './post/post'

let postText = React.createRef()



function Posts(props) {
    function addPost() {
        props.addPost(postText.current.value)
    }
    function OnPostChange() {
        props.OnPostChange(postText.current.value)
        // console.log(props)
    }
    return (

        <div className='posts'>
            <div className='enter-post'>

                <img className='enter-post-img' src={props.userProfile.map((e) => e.img)} alt="" />
                <div className='enter-post-content'>
                    <input value={props.newPostText} onChange={OnPostChange} ref={postText} type="text" placeholder='введите комментарий' />
                    <button onClick={addPost}>отправить</button>
                </div>
            </div>
            {props.postsItems.map((e) =>
                <Post name={e.name} photo={e.photo} text={e.text} id={e.id} likes={e.likes} />
            )}
        </div>

    )
}


export default Posts