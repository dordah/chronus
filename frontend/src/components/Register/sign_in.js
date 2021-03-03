import React, { useContext } from "react";
import "../../App.css";
import InfoInput from "./InfoInput";
import SubmitButton from "./SubmitButton";
import { useHistory } from "react-router-dom";
import { userInfoContext } from "../Contexts/LoginContext/userInfoProvider";
import { validationInput } from "./validations";

const SignIn = () => {
  const history = useHistory();
  const [
    FirstName,
    LastName,
    Password,
    Email,
    isLoggedInCheck,
    Viewer,
  ] = useContext(userInfoContext);

  const [fisrtNameState, setfisrtNameState] = FirstName;
  const [lastNameState, setlastNameState] = LastName;
  const [passwordState, setPassword] = Password;
  const [emailState, setEmail] = Email;
  const [isLoggedIn, setIsLoggedIn] = isLoggedInCheck;
  const [viewer, setViewer] = Viewer;

  const submitHandler = async () => {
    let response = null;
    let message = null;

    if (validationInput(emailState, passwordState)) {
      try {
        //http://localhost:9000/users/signin/post
        response = await fetch("/users/signin/post", {
          method: "POST",
          body: JSON.stringify({
            email: emailState,
            password: passwordState,
          }),
          headers: { "Content-Type": "application/json" },
        });
      } catch (err) {
        message.innerHTML = "Error: " + err + ".";
      }
      const json = await response.json();
      const jsonParse = json.userRes;
      console.log(jsonParse);
      setfisrtNameState(jsonParse.first_name);
      setlastNameState(jsonParse.last_name);
      setPassword("");
      setEmail(jsonParse.email);
      setIsLoggedIn(jsonParse.logged_In);
      setViewer(jsonParse.has_profile);
      history.push("/MainTradeRoom");
    }
  };

  //   useEffect(() => {
  //     console.log(" name " + fullNameState + " password " + passwordState + " email " + emailState +  " viewer " + viewer + " loggedIn " + isLoggedIn)
  // }, [submitHandler] )

  return (
    <div>
      <InfoInput
        htmlFor="name"
        labelname="Email"
        Inputtype="text"
        inputid="name"
        placeholder="Enter your email"
        Inputname="name"
        value={emailState}
        onchange={(event) => {
          setEmail(event.target.value);
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
