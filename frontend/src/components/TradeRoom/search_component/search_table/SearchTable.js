import React from 'react';
import UserCard from './user_card/UserCard'
import JsonList from './TableTest.json'


const searchTable = (props) => {
  const removeCardHandler = (profession) => {

    props.removeCard(profession)
    }
  
  const cardlist = props.searchlist.map((card) =>
    <UserCard key={card.id}
    UserProffesion= {card.UserProffesion}
    UserProffesionExplanation={card.UserProffesionExplanation}
    Rating={card.Rating} 
    picture={card.Picture}
    setchatlist={props.setchatlist}
    chatlist={props.chatlist}
    firstname={card.firstName}
    lastname={card.lastName}
    image={card.Picture}
    usersLastRatings={card.UsersLastRatings}
    searchTerm={props.searchterm}
    removeCard={(key) => removeCardHandler(key)}
    />
  );
return (
<div >
  {cardlist}
</div> 
)
}
export default searchTable

