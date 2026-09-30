import React from 'react'
import './dialogs.css'
import DialogMessage from './dialogMessage/dialogMessage'
import DialogName from './dialogName/dialogName'




function Dialogs(props) {
    return (
        <div className='dialogs'>
            <div className='dialogs-left'>
                {props.dialogNames.map((e) =>
                    <DialogName name={e.name} id={e.id} img={e.img} />
                )}

            </div>
            <div className='dialogs-right'>
                {props.dialogMessages.map((e) =>
                    <DialogMessage message={e.message} id={e.id} />
                )}

            </div>


        </div>
    )
}


export default Dialogs