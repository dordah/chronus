import React, {useContext} from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import {NavLink} from 'react-router-dom'
import {userInfoContext} from '../Contexts/LoginContext/userInfoProvider'

const TopNavBar= () => {
  const [FirstName, LastName, Password,Email,isLoggedInCheck,Viewer] = useContext(userInfoContext)

  const [fisrtNameState,setfisrtNameState] = FirstName
  const [lastNameState,setlastNameState] = LastName
  const [passwordState,setPassword] = Password
  const [emailState,setEmail] = Email
  const [isLoggedIn, setIsLoggedIn] = isLoggedInCheck
  const [viewer, setViewer] = Viewer


const signHandler = () =>{
if(isLoggedIn === true){
  fetch("/signout",{
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
  setfisrtNameState("")
  setlastNameState("")
  setEmail('')
  setPassword('')
  setIsLoggedIn(false)
  setViewer(0)
}
}

return (
<div>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Chronus - The Bank Of Time</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Nav className="mr-auto">
      <Nav.Link as={NavLink} to="/Home">Home</Nav.Link>
      <Nav.Link as={NavLink} to="/MainTradeRoom">Trade Room</Nav.Link>
      <Nav.Link as={NavLink} disabled={isLoggedIn===false} to="/Profile">Profile</Nav.Link>
      <Nav.Link as={NavLink} disabled={isLoggedIn===false} to={"/Balance"}>Balance</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link as={NavLink} to="/AboutOurTeam">About Our Team</Nav.Link>
<Nav.Link onClick={signHandler} as={NavLink} eventKey={2} to={isLoggedIn?'/Home':"/MainRegisterPage"}> {isLoggedIn? `Sign-out`:'Sign-in'} </Nav.Link>
    </Nav>
</Navbar>
</div>
)
}

export default TopNavBar