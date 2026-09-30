import { reRenderTree } from "../render"

let data = {
    postsItems :[
        { name: 'Брюс Беннер', photo: '../../../../img/брюс беннер.jpg', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, praesentium sint. Saepe expedita totam quos!', id: 1, likes: 7 },
        { name: 'Стив Роджерс', photo: '../../../../img/rodgers.jpg', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, praesentium sint.', id: 2, likes: 5 },
        { name: 'Питер Паркер', photo: '../../../../img/spidey.webp', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', id: 3, likes: 15 },
        { name: 'Тони Старк', photo: '../../../../img/тони старк.jpg', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', id: 4, likes: 21 },
    ],

    dialogNames :[
        { name: 'Питер Паркер', id: '1', img:'../../../../img/spidey.webp' },
        { name: 'Тор Одинсон', id: '2', img:'../../../../img/tor.webp' },
        { name: 'Клинт Бартлонт', id: '3', img:'../../../../img/barton.jpg' },
        { name: 'Локи', id: '4', img:'../../../../img/loki.jpeg' },
        { name: 'Стрендж', id: '5', img:'../../../../img/strendg.jpeg' },
    ],

    dialogMessages :[
        { message: 'Lorem ipsum dolor sit amet.', id: '1' },
        { message: 'Lorem ipsum dolor sit amet.', id: '2' },
        { message: 'Lorem ipsum dolor sit amet.', id: '3' },
        { message: 'Lorem ipsum dolor sit amet.', id: '4' },
        { message: 'Lorem ipsum dolor sit amet.', id: '5' },
    ],

    userProfile :[
        {name: 'Тони Старк', img:'../../../../img/тони старк.jpg', birthday:'20.08.2000', hobbi:'технологии, спортивный образ жизни',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse odio autem nesciunt quaerat reiciendis beatae.'
        }
    ],
    friends :[
        { name: 'Питер Паркер', id: '1', img:'../../../../img/spidey.webp',online:'2ч назад' },
        { name: 'Тор Одинсон', id: '2', img:'../../../../img/tor.webp',online:'1д назад' },
        { name: 'Клинт Бартлонт', id: '3', img:'../../../../img/barton.jpg',online:'35мин назад' },
        { name: 'Локи', id: '4', img:'../../../../img/loki.jpeg',online:'в сети' },
        { name: 'Стрендж', id: '5', img:'../../../../img/strendg.jpeg',online:'9ч назад' },
        { name: 'Брюс Беннер', id: '6', img:'../../../../img/брюс беннер.jpg',online:'11мин назад' },
        { name: 'Стив Роджерс', id: '7', img:'../../../../img/rodgers.jpg',online:'9д назад' },
    ],

    popular :[
        { name: 'Брюс Беннер', photo: '../../../../img/popular-doom.webp', text: 'Ожидается, что в противостоянии с Думом в фильме «Мстители: Судный день» потребуется участие многих могущественных сил.', id: 1, likes: 7, data:'2ч назад',title:'Кто сможет противостоять Доктору Думу в фильме «Мстители: Судный день»?' },
        { name: 'Стив Роджерс', photo: '../../../../img/news2.webp', text: 'Режиссер так и несостоявшегося кинокомикса "Блэйд" Бассам Тарик дал определение режиссеру, которого нанимает студия Marvel - "он лишь винтик в огромной машине".', id: 2, likes: 5, data:'15мин назад',title:'Режиссер "Блэйда" пролил свет на "конвейер" Marvel' },
        { name: 'Питер Паркер', photo: '../../../../img/news3.jpg', text: 'Президент Marvel Studios Кевин Файги поделился грандиозными планами на франшизу о Человеке-пауке, который является частью киновселенной Marvel.', id: 3, likes: 15, data:'5ч назад',title:'Marvel уже работает над 5 новыми проектами по «Человеку-пауку»' },
        { name: 'Тони Старк', photo: '../../../../img/news4.webp', text: 'Актёр Райан Гослинг присоединяется  киновселенной Marvel. Он сыграет Джонни Блейза — Призрачного Гонщика, каскадёра, который продал душу дьяволу.', id: 4, likes: 21, data:'1д назад',title:'Райан Гослинг в киновселенной Marvel и новый Чёрная Пантера: новости с Comic-Con' },
    ],

    newPostText:''
}





export default data
let idPostCounter= data.postsItems.length
export function addPost(postText){
    idPostCounter++
    let newPost = {
        name:'Стивен Стрендж',
        photo:'../../../../img/брюс беннер.jpg',
        text:postText,
        id:idPostCounter,      
        likes:0,
        
    }
    data.postsItems.unshift(newPost)
    reRenderTree(data)
    console.log(data)
}

export function OnPostChange(text){
    data.newPostText=text
    console.log(data)
    reRenderTree(data)
}
