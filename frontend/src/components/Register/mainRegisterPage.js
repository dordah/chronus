import React from 'react';
import SignUp from './sign_up'
import SignIn from './sign_in'
import Sign_Switcher from './sign_switcher'
import {Route} from 'react-router-dom'
import picture from "../../images/picture.jpg"
const main_register_page = () => {
return (
    <div className="App">
      <div className="google-sign-in-side future">
        <img src={picture}
        style={{width: "650px", height: "609px" }}
        />   
      </div>
    <div className="Register-side">
    <Sign_Switcher/>
    <Route path='/MainRegisterPage/' exact component={SignIn}/>
    <Route path='/MainRegisterPage/sign-up' exact component={SignUp}/>
    </div>
    </div>
)
}

export default main_register_page