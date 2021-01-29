import React, {useContext} from "react";
import "../../App.css";
import InfoInput from "./InfoInput";
import SubmitButton from "./SubmitButton";
import { useHistory } from "react-router-dom";
import { userInfoContext } from "../Contexts/LoginContext/userInfoProvider";

const SignIn = () => {

const history = useHistory();
const [Name,Password,Email,isLoggedInCheck,Viewer] = useContext(userInfoContext)

const [passwordState,setPassword] = Password
const [emailState,setEmail] = Email
const [fullNameState,setFullName] = Name
const [isLoggedIn, setIsLoggedIn] = isLoggedInCheck
const [viewer, setViewer] = Viewer

  const  submitHandler  = async () => {
    let response = null 
    let message = null
    try{
     response = await fetch("/login", {
      method: "POST",
      body: JSON.stringify({
        username: fullNameState,
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
      setFullName(json.userRes.name)
      setPassword("")
      setEmail(jsonParse.email)
      setIsLoggedIn(jsonParse.loggedIn)
      setViewer(jsonParse.viewer)
      history.push("/MainTradeRoom")   
  };


//   useEffect(() => {
//     console.log(" name " + fullNameState + " password " + passwordState + " email " + emailState +  " viewer " + viewer + " loggedIn " + isLoggedIn)
// }, [submitHandler] )

  return (
    <div>
      <InfoInput
        htmlFor="name"
        labelname="Full Name"
        Inputtype="text"
        inputid="name"
        placeholder="Enter your full name"
        Inputname="name"
        value={fullNameState}
        onchange={(event) => {
          setFullName(event.target.value);
        }}
      ></InfoInput>
      <InfoInput
        htmlFor="password"
        labelname="Password"
        Inputtype="password"
        inputid="password"
        placeholder="Enter your password"
        Inputname="password"
        value={passwordState}
        onchange={(event) => {
          setPassword(event.target.value);
        }}
      ></InfoInput>
      <SubmitButton click={submitHandler} nameButton="Sign In"></SubmitButton>
    </div>
  );
};
export default SignIn;
