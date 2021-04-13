import React, { useEffect, useState, useContext } from "react";
import SearchComponent from "./search_component/Search_component";
import TopNavBar from "../NavApp/TopNavBar";
import { Row, Col } from "react-bootstrap";
import JsonList from "./search_component/search_table/TableTest.json";
import ChatCard from "./Chat/ChatList/ChatCard/ChatCard";
import ChatList from "./Chat/ChatList/ChatList";
import { userInfoContext } from "../Contexts/LoginContext/userInfoProvider";

//http://localhost:9000/traderoom
const MainUserPage = () => {
  const [ChatList1, SetChatList1] = useState([]);
  const [JsonList12, SetJsonList12] = useState([]);
  const [deletedItem, SetDeletedItem] = useState("");

  const [
    FirstName,
    LastName,
    Password,
    Email,
    isLoggedInCheck,
    Viewer,
  ] = useContext(userInfoContext);

  const [emailState, setEmail] = Email;

  useEffect(() => {
    const newList = ChatList1;
    console.log(deletedItem);

    const updatedList = newList.filter((Item) => {
      return Item.key !== deletedItem;
    });
    SetChatList1(updatedList);
  }, [deletedItem]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch("/traderoom", {
  //       method: "GET",
  //       headers: { "Content-Type": "application/json" },
  //     });

  //     const json = await response.json();
  //     //SetJsonList12(json);
  //     console.log("json state before filter: " + json[0].email);
  //     console.log("emailState : " + emailState);
  //     const userChatListFilter = json.filter((obj) => {
  //       return obj.email == emailState;
  //     });
  //     //console.log( "state json: " + JsonList12)
  //     console.log("userchatlistfilter: " + userChatListFilter);
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    const init = JsonList.map((card) => (
      <ChatCard
        key={card.UserProffesion}
        profesison={card.UserProffesion}
        name={card.firstName + " " + card.lastName}
        Image={card.Picture}
        lastRatings={card.UsersLastRatings}
        removeCard={() => removeCardHandler(card.UserProffesion)}
      />
    ));
    SetChatList1(init);
  }, []);

  const removeCardHandler = (profession) => {
    console.log("yes");
    SetDeletedItem(profession);
  };

  return (
    <div className="AppBackround" style={{ height: "100vh" }}>
      <TopNavBar />
      <Row>
        <Col></Col>
        <Col></Col>
      </Row>
      <Row></Row>
      <Row>
        <Col sm={8} style={{ marginLeft: "10px" }}>
          <SearchComponent
            setchatlist={SetChatList1}
            chatlist={ChatList1}
            removeCard={(key) => removeCardHandler(key)}
          />
        </Col>
        <Col>
          <h3 style={{ textAlign: "center" }}>your chat List </h3>
          <ChatList chatlist={ChatList1} setchatlist={SetChatList1} />
        </Col>
      </Row>
    </div>
  );
};

export default MainUserPage;
