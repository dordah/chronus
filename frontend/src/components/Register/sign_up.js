import React, {useContext} from 'react';
import '../../App.css'
import InfoInput from './InfoInput'
import InfoCheckBox from './infoCheckBox'
import SubmitButton from './SubmitButton'
import {userInfoContext} from '../Contexts/LoginContext/userInfoProvider'
import {useHistory} from 'react-router-dom'


const SignUp = () => { 
const history = useHistory();
const [Name,Password,Email,isAuthenticated,Viewer] = useContext(userInfoContext)
const [passwordState,setPassword] = Password
const [emailState,setEmail] = Email
const [fullNameState,setFullName] = Name
const [isAuth, SetisAuth] = isAuthenticated
const [viewer, setViewer] = Viewer


const submitHandler = () => {
    console.log('clicked');
    fetch('https://chronus-cda87.firebaseio.com/sign-up.json',{
    method: 'POST',
    body: JSON.stringify({FullName:fullNameState, password: passwordState, email: emailState}),
    headers: {'Content-Type': 'application/json'},
    }).then(response => {
        return response.json()
    }).then(responseData => {
        console.log(responseData.name);
    }).then(SetisAuth(true),setViewer(1)).then(history.push('/MainTradeRoom'))
}
    return (
        <div>
        <InfoInput 
            htmlFor='name' labelname='Full Name' 
            Inputtype='text' inputid='name' 
            placeholder='Enter your full name' Inputname='name'
            value={fullNameState} 
            onchange={event => {setFullName(event.target.value)}}>    
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