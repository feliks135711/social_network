import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Profile from './components/profile/profile';
import Dialogs from './components/dialogs/dialogs';
import Friends from './components/friends/friends';
import Popular from './components/popular/popular';
import { Route, Routes } from 'react-router-dom';


function App(props) {
  return (

    <div className='main-div'>
      <div className='main-container'>
        <input id='nav-toggle-checkbox' type='checkbox'/>
        <Header OnPostChange={props.OnPostChange} newPostText={props.data.newPostText}></Header>
        <Navbar></Navbar>
        <div className='main-wrapper'>
          <Routes>
            <Route exact path='/' element={<Profile userProfile={props.data.userProfile} postsItems={props.data.postsItems } OnPostChange={props.OnPostChange} newPostText={props.data.newPostText} addPost={props.addPost} />} />
            <Route exact path='/profile' element={<Profile userProfile={props.data.userProfile} postsItems={props.data.postsItems} OnPostChange={props.OnPostChange} newPostText={props.data.newPostText} addPost={props.addPost} />} />
            <Route exact path='/dialogs' element={<Dialogs dialogNames={props.data.dialogNames} dialogMessages={props.data.dialogMessages} />} />
            <Route exact path='/friends' element={<Friends friends={props.data.friends}/>} />
            <Route exact path='/popular' element={<Popular popular={props.data.popular}/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
