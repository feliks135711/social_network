import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Profile from './components/profile/profile';
import Dialogs from './components/dialogs/dialogs';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (

    <div className='main-div'>
      <div className='main-container'>
        <Header></Header>
        <Navbar></Navbar>
        <div className='main-wrapper'>
          <Routes>
            <Route exact path='/' Component={Profile}></Route>
            <Route exact path='/profile' Component={Profile}></Route>
            <Route exact path='/dialogs' Component={Dialogs}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
