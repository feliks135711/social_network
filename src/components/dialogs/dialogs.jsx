import React from 'react'
import './dialogs.css'
import spiderman from '../../img/spidey.webp'
import DialogMessage from './dialogMessage/dialogMessage'
import DialogName from './dialogName/dialogName'


let dialogNames = [
    { name: 'Питер Паркер', id: '1' },
    { name: 'Тор Одинсон', id: '2' },
    { name: 'Клинт Бартлонт', id: '3' },
]

let dialogMessages = [
    { message: 'Lorem ipsum dolor sit amet.', id: '1' },
    { message: 'Lorem ipsum dolor sit amet.', id: '2' },
    { message: 'Lorem ipsum dolor sit amet.', id: '3' },
]

function Dialogs() {
    return (
        <div className='dialogs'>
            <div className='dialogs-left'>
                {dialogNames.map((e) =>
                    <DialogName name={e.name} id={e.id} />
                )}

            </div>
            <div className='dialogs-right'>
                {dialogMessages.map((e) =>
                    <DialogMessage message={e.message} id={e.id} />
                )}

            </div>


        </div>
    )
}


export default Dialogs