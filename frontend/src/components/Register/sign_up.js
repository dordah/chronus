import React, {useContext} from 'react';
import '../../App.css'
import InfoInput from './InfoInput'
import InfoCheckBox from './infoCheckBox'
import SubmitButton from './SubmitButton'
import {userInfoContext} from '../Contexts/LoginContext/userInfoProvider'
import {useHistory} from 'react-router-dom'
import {validationInput} from "./validations"

const SignUp = () => { 
const history = useHistory();
const [FirstName, LastName, Password,Email,isLoggedInCheck,Viewer] = useContext(userInfoContext)

const [fisrtNameState,setfisrtNameState] = FirstName
const [lastNameState,setlastNameState] = LastName
const [passwordState,setPassword] = Password
const [emailState,setEmail] = Email
const [isLoggedIn, setIsLoggedIn] = isLoggedInCheck
const [viewer, setViewer] = Viewer


const  submitHandler  = async () => {
    let response = null 
    let message = null

    if (validationInput(emailState,passwordState)) {
    try{
     response = await fetch("/signup", {
      method: "POST",
      body: JSON.stringify({
        firs_tname: fisrtNameState,
        last_name: lastNameState,
        email: emailState,
        password: passwordState,
      }),
      headers: { "Content-Type": "application/json" },
    })
  }
  catch(err) {
    message.innerHTML = "Error: " + err + ".";
  }
     const json = await response.json()
     const jsonParse = json.userRes
      setfisrtNameState(jsonParse.firstname)
      setlastNameState(jsonParse.lastname)
      setPassword("")
      setEmail(jsonParse.email)
      setIsLoggedIn(jsonParse.loggedIn)
      setViewer(jsonParse.has_profile)
      history.push("/MainTradeRoom")   
   }
  };

    return (
        <div>
        <InfoInput 
            htmlFor='fisrtname' labelname='First Name' 
            Inputtype='text' inputid='name' 
            placeholder='Enter your First name' Inputname='name'
            value={fisrtNameState} 
            onchange={event => {setfisrtNameState(event.target.value)}}>    
        </InfoInput>
        <InfoInput 
            htmlFor='name' labelname='Last name' 
            Inputtype='text' inputid='name' 
            placeholder='Enter your Last name ' Inputname='name'
            value={lastNameState} 
            onchange={event => {setlastNameState(event.target.value)}}>    
        </InfoInput>
        <InfoInput 
            htmlFor='password' labelname='Password' 
            Inputtype='password' inputid='password' 
            placeholder='Enter your password' Inputname='password'
            value={passwordState} 
            onchange={event => {setPassword(event.target.value)}}> 
        </InfoInput>
        <InfoInput 
            htmlFor='email' labelname='E-mail Address' 
            Inputtype='email' inputid='email' 
            placeholder='Enter your email' Inputname='email'
            value={emailState} 
            onchange={event => {setEmail(event.target.value)}}>     
        </InfoInput>
       <InfoCheckBox></InfoCheckBox>  
       <SubmitButton click={submitHandler} nameButton ='Sign Up'></SubmitButton>
        </div>   
    )

}
    export default SignUp 