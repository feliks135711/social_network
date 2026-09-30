import React from 'react'
import './popular.css'
import PopularCard from './popularCard/popularCard'




function Popular(props) {
    return (
        <div className='popular'>           
                {props.popular.map((e) =>
                    <PopularCard name={e.name} id={e.id} photo={e.photo} title={e.title} likes={e.likes} data={e.data} text={e.text} />
                )}          
        </div>
    )
}


export default Popular