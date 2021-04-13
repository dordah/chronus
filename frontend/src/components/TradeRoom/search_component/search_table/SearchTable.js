import React, { useEffect, useState } from "react";
import UserCard from "./user_card/UserCard";
import JsonList from "./TableTest.json";

const SearchTable = (props) => {
  const removeCardHandler = (profession) => {
    props.removeCard(profession);
  };

  const cardlist =
    props.searchlist &&
    props.searchlist.map((card) => (
      <UserCard
        key={card.userid}
        UserProffesion={card.description_profession}
        UserProffesionExplanation={card.description_card}
        Rating={card.rate}
        picture={
          "https://res.cloudinary.com/practicaldev/image/fetch/s--_HBZhuhF--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/nweeqf97l2md3tlqkjyt.jpg"
        }
        setchatlist={props.setchatlist}
        chatlist={props.chatlist}
        firstname={card.first_name}
        lastname={card.last_name}
        image={
          "https://res.cloudinary.com/practicaldev/image/fetch/s--_HBZhuhF--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/nweeqf97l2md3tlqkjyt.jpg"
        }
        usersLastRatings={card.text}
        searchTerm={props.searchterm}
        removeCard={(key) => removeCardHandler(key)}
      />
    ));

  return <div>{cardlist}</div>;
};

export default SearchTable;
