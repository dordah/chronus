import React, { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import ChatCard from "../../../../Chat/ChatList/ChatCard/ChatCard";
import { userInfoContext } from "../../../../../Contexts/LoginContext/userInfoProvider";

const Modal1 = (props) => {
  const [Name, Password, Email, isLoggedInCheck, Viewer] = useContext(
    userInfoContext
  );
  const [viewer, setViewer] = Viewer;

  const removeCardHandler = (profession) => {
    props.removeCard(profession);
  };

  const AddToListHandler = () => {
    let flagAddtoList = false;

    props.chatlist.forEach((element) => {
      if (element.key == props.Profession) {
        flagAddtoList = false;
      }
    });

    if (flagAddtoList == true) {
      const newCard = (
        <ChatCard
          key={props.Profession}
          profesison={props.Profession}
          name={props.firstname + " " + props.lastname}
          Image={props.image}
          removeCard={() => removeCardHandler(props.Profession)}
        />
      );

      // adding keys to array of keys

      if (props.chatlist != null) {
        const newList = props.chatlist.concat(newCard);
        props.setchatlist(newList);
      } else {
        const newList = [newCard];
        props.setchatlist(newList);
        // console.log(newList)
      }
    }
  };


  //  console.log(props.chatlist)
  return (
    <Modal {...props} size={"lg"}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.firstname + " " + props.lastname} - {props.Profession}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <h6>User Review:</h6>
          {props.userProffesionExplanation}
          <h6></h6>
          <h6>User Last Ratings:</h6>
          {`"` +  props.lastRatings !== undefined ? props.lastRatings :"No ratings" + `"`}
          <h6>Pictures:</h6>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant={viewer != true ? "secondary" : "primary"}
          disabled={viewer == false}
          onClick={() => {
            AddToListHandler();
            props.onHide();
          }}
        >
          Add to my chat List
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Modal1;
