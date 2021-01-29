import React, {useContext} from 'react'
import '../../App.css'
import NavApp from '../NavApp/TopNavBar'
import { userInfoContext } from "../Contexts/LoginContext/userInfoProvider";


const Home = () => {

const [Name,Password,Email,isLoggedInCheck,Viewer] = useContext(userInfoContext)

const [passwordState,setPassword] = Password
const [emailState,setEmail] = Email
const [fullNameState,setFullName] = Name
const [isLoggedIn, setIsLoggedIn] = isLoggedInCheck
const [viewer, setViewer] = Viewer

const textContextHandler = () => {
    console.log(" name " + fullNameState + " password " + passwordState + " email " + emailState +  " viewer " + viewer + " loggedIn " + isLoggedIn)
    //  fetch("/cookie", {
    //  method: "GET",
    //  headers: { "Content-Type": "application/json"},
    //   })
}
    return ( 
        <div >
            <NavApp></NavApp>
            <h2>Manifest</h2>
            <div >
            <button onClick={textContextHandler}> test context</button>
            </div>
            <div> some explanations about the manifest</div>
            <div>Here will be a Carosel image</div>
            
        </div>
    )
}

export default Home