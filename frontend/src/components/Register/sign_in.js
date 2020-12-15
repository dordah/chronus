import React, {useContext} from 'react';
import '../../App.css'
import InfoInput from './InfoInput'
import SubmitButton from './SubmitButton'
import {useHistory} from 'react-router-dom'
import {userInfoContext} from '../Contexts/LoginContext/userInfoProvider'

const SignIn = () => { 
const history = useHistory();
const [Name,Password,,isAuthenticated,Viewer] = useContext(userInfoContext)
const [passwordState,setPassword] = Password
const [fullNameState,setFullName] = Name
const [isAuth, SetisAuth] = isAuthenticated
const [viewer, setViewer] = Viewer

 
const submitHandler = () => {
    console.log('clicked');
    fetch('https://chronus-cda87.firebaseio.com/sign-in.json',{
    method: 'POST',
    body: JSON.stringify({FullName:fullNameState, password: passwordState}),
    headers: {'Content-Type': 'application/json'},
    }).then(response => {
        return response.json()
    }).then(responseData => {
        console.log(responseData.name);
    }).then(SetisAuth(true),setViewer(2)).then(history.push('/MainTradeRoom'))
       
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
            onchange={event => {setPassword(event.target.value)} }> 
        </InfoInput>
       <SubmitButton click={submitHandler} nameButton ='Sign In'></SubmitButton>
    </div>   
    )

}
    export default SignIn