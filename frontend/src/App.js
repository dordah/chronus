import React, {useState} from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import {Route} from 'react-router-dom'



// importing all components project 
import ProjectSwitcher from './ProjectSwitcher/ProjectSwitcher'
import MainTradeRoom from './components/TradeRoom/MainTradeRoom'
import RegisterPage from './components/Register/mainRegisterPage'
import ProfilePage from './components/Profile/mainPageProfile'
import Balance from './components/Balance/Balance'
import UserInfoProvider from './components/Contexts/LoginContext/userInfoProvider'
import Home from './components/Home/Home';

function App() {

 
  return (
    <div>
      <UserInfoProvider>
      <Route path='/' exact component={ProjectSwitcher}/>
      <Route path='/MainTradeRoom' exact component={MainTradeRoom}/>
      <Route path='/MainRegisterPage' component={RegisterPage}/>
      <Route path='/Profile'  component={ProfilePage}/>
      <Route path='/Balance'  component={Balance}/>
      <Route path='/Home'  component={Home}/>
      </UserInfoProvider>
    </div>
  );
}

export default App;
