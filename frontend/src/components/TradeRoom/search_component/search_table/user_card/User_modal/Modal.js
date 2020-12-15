import React,{useContext} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import {Container} from 'react-bootstrap';
import ChatCard from '../../../../Chat/ChatList/ChatCard/ChatCard'
import {userInfoContext} from '../../../../../Contexts/LoginContext/userInfoProvider'

const Modal1 = (props) => {
const [Name,Password,Email,isAuthenticated,Viewer] = useContext(userInfoContext)
const [viewer, setViewer] = Viewer
 

  const removeCardHandler = (profession) => {
    props.removeCard(profession);
    
    }

 const AddToListHandler = () => {

   let flagAddtoList = true

   props.chatlist.forEach((element) => {
    if(element.key == props.Profession){
     flagAddtoList = false
    }
   });

  if(flagAddtoList == true) {
  const newCard = 
  <ChatCard key={props.Profession}
  profesison={props.Profession}
  name={props.firstname + " " + props.lastname}
  Image={props.image}
  removeCard = {() => removeCardHandler(props.Profession)}
  />

  // adding keys to array of keys
  

  if(props.chatlist != null) {
  const newList = props.chatlist.concat(newCard)
  props.setchatlist(newList)
  }
  else {
    const newList = [newCard]
    props.setchatlist(newList)
    // console.log(newList) 
  }
 }
}
//  console.log(props.chatlist) 
return (
    <Modal {...props} size={"lg"}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
            User Full Name -  {props.Profession}   
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
            {props.MainInfo}
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={(viewer != 2) ?"secondary":"primary"}
        disabled={viewer == 0 || viewer == 1}
         onClick={() => 
          {AddToListHandler();
          props.onHide();
        }}
         
         >Add to my chat List</Button>
      </Modal.Footer>
    </Modal>
  );
}

 export default Modal1