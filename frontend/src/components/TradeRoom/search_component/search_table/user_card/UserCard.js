import React from "react";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import Rating from "react-rating";
import UserModal from "./User_modal/Modal";
import { useState, useContext } from "react";
import "./CardUser.css";
import Highlighter from "react-highlight-words";
import searchTermContext from "../../Search_component";

const UserCard = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const term = useContext(searchTermContext);
  console.log(props.searchTerm);

  const removeCardHandler = (profession) => {
    props.removeCard(profession);
  };

  let UserProffesionExplanationCut =
    props.UserProffesionExplanation.slice(0, 50) + "...";

  return (
    <div>
      <Card
        style={{
          width: "52rem",
          marginTop: "10px",
          backgroundColor: "#b1a6cc",
        }}
      >
        <Card.Header>
          <Row>
            <Col sm={8}>
              <Nav variant="pills" defaultActiveKey="#first">
                <Nav.Item>
                  <Nav.Link href="#first">Details</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#link">Last Reviews</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={4}>
              <Rating initialRating={props.Rating} readonly></Rating>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body
          style={{ cursor: "pointer" }}
          onClick={() => setModalShow(true)}
        >
          <Row>
            <Col sm={2}>
              <img className="picSize" src={props.picture} />
            </Col>
            <Col sm={10}>
              <Card.Title>
                <Highlighter
                  searchWords={[props.searchTerm]}
                  textToHighlight={props.UserProffesion}
                ></Highlighter>
              </Card.Title>

              <Card.Text>
                <Row>
                  <Col sm={10}>{UserProffesionExplanationCut}</Col>
                  <Col sm={2}></Col>
                </Row>
              </Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <UserModal
        Profession={props.UserProffesion}
        userProffesionExplanation={props.UserProffesionExplanation}
        show={modalShow}
        onHide={() => setModalShow(false)}
        setchatlist={props.setchatlist}
        chatlist={props.chatlist}
        firstname={props.firstname}
        lastname={props.lastname}
        lastRatings={props.usersLastRatings}
        image={props.image}
        removeCard={(key) => removeCardHandler(key)}
      />
    </div>
  );
};
export default UserCard;
