import React,{useState} from 'react'
import '../TradeRoom/search_component/search_table/user_card/CardUser.css'
import NavApp from '../NavApp/TopNavBar'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import {Row,Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { First } from 'react-bootstrap/esm/PageItem'

const MainPageProfile = () => {
const [imageState,setImage] = useState('') //[varible,function]
const [fisrtNameState,setFisrtName] = useState('')
const [lastNameState,setLastName] = useState('')
const [passwordState,setPassword] = useState('')
const [emailState,setEmail] = useState('')
const [phoneNumberState,setPhoneNumber] = useState('')
const [dateOfBitrhState,setDateOfBitrh] = useState('')
const [cardLikeToShareState,setCardLikeToShare] = useState('')
const [likeToExploreState,setLikeToExplore] = useState('')
const [likeToShareDropDownState,setLikeToDropDownShare] = useState('')
const [likeToShareState,setLikeToShare] = useState('') //cleaning lady

const dropDownArr = ['Sport', 'Finance', 'Health', 'Tech', 'House jobs']

const dropDownSetter = () => {
    return  dropDownArr.map((subject) => {
                    return <option key={subject}> {subject} </option>
            })
    }

const submitcheker = () => {
    console.log("first name: " + fisrtNameState);
    console.log("last name: " + lastNameState);
    console.log("password: " + passwordState);
    console.log("email: " + emailState);
    console.log("phone: " + phoneNumberState);
    console.log("date of birth: " + dateOfBitrhState);
    console.log("description of profeesion: " + cardLikeToShareState);
    console.log("Like to Explore drop down: " + likeToExploreState);
    console.log("profession drop down: " + likeToShareDropDownState);
    console.log("profession: " + likeToShareState);
}

// const submitHandler = () => {
//     console.log('clicked');
//     fetch('https://chronus-cda87.firebaseio.com/Profile.json',{
//     method: 'POST',
//     body: JSON.stringify({
//         Image: imageState,
//         first_name:fisrtNameState,
//         last_name: lastNameState, 
//         password: passwordState,
//         email: emailState,
//         phone: phoneNumberState,
//         birth_date: dateOfBitrhState,
//         demand: likeToExploreState, // drop down (what cleaning lady is interested in)
//         description_card: cardLikeToShareState, // up to 250 (explanation about cleaning lady)
//         proffession: likeToShareDropDownState, // drop down (house-jobs)
//         description_proffesion: likeToShareState // up to 15 (cleaning lady)

//     }),
//     headers: {'Content-Type': 'application/json'},
//     }).then(response => {
//         return response.json()
//     }).then(responseData => {
//         console.log(responseData.name);
//     })
// }

return ( 
<div style={{backgroundColor: " #b1a6cc"}}>

<Col sm={8}>
   <Row style={{marginBottom: "25px"}}>
    <h3>Welcome to your Profile</h3>
  </Row>
  <Row style={{marginBottom: "40px"}}>
      <span>if you would like to make a card and start exploring and sharing time our bank
            you most have all fields in your profile up to date. 

      </span>
  </Row>
  <Form style={{backgroundColor: " #b1a6cc"}}>
    <Form.Row>
      <Form.Group as={Col} controlId="First Name">
        <Form.Label>First Name</Form.Label>
        <Form.Control  placeholder="Enter First Name"
          value={fisrtNameState}
          onChange={event => {setFisrtName(event.target.value)}}
        />
      </Form.Group>

    <Form.Group as={Col} controlId="Last Name">
      <Form.Label>Last Name</Form.Label>
      <Form.Control  placeholder="Enter Last Name"
        value={lastNameState}
        onChange={event => {setLastName(event.target.value)}}
      />
    </Form.Group>

    <Form.Group as={Col} controlId="Password">
      <Form.Label>Password</Form.Label>
      <Form.Control  placeholder="Enter Password"
        value={passwordState}
        onChange={event => {setPassword(event.target.value)}}
      />
    </Form.Group>
  </Form.Row>

  <Form.Row>
  <Form.Group as={Col} controlId="Email">
    <Form.Label>Email</Form.Label>
    <Form.Control  
    type="email" placeholder="Enter Email"
    value={emailState}
    onChange={event => {setEmail(event.target.value)}}
    />
  </Form.Group>

  <Form.Group as={Col} controlId="Phone">
    <Form.Label>Phone</Form.Label>
    <Form.Control type="phone" placeholder="Enter Phone Number"
        value={phoneNumberState}
        onChange={event => {setPhoneNumber(event.target.value)}}
    />
  </Form.Group>

  <Form.Group as={Col} controlId="Date Of Birth">
      <Form.Label>Date Of Birth</Form.Label>
      <Form.Control placeholder="Enter Date Of Birth"
        value={dateOfBitrhState}
        onChange={event => {setDateOfBitrh(event.target.value)}}
      />
    </Form.Group>
</Form.Row>

  <Form.Row>
  <Form.Group as={Col} controlId="Profession description"> 
      <Form.Label>Profession Description</Form.Label> 
      <Form.Control
       placeholder="Enter your profession" // cleaning lady
       value={likeToShareState}
       onChange={event => {setLikeToShare(event.target.value)}}
       />
    </Form.Group>

  <Form.Group as={Col} controlId="Like To Share Drop Down">
      <Form.Label>Like To Share</Form.Label>
      <Form.Control as="select" 
        value={likeToShareDropDownState}
        onChange={event => {setLikeToDropDownShare(event.target.value)}}
        >
        {dropDownSetter()}
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="Like To Explore Drop Down">
      <Form.Label>Like To Explore</Form.Label>
      <Form.Control as="select" 
        value={likeToExploreState}
        onChange={event => {setLikeToExplore(event.target.value)}}
        >
       {dropDownSetter()}
      </Form.Control>
    </Form.Group>
  </Form.Row>

  <Form.Row style={{marginBottom: "30px"}}> 
    <Form.Group  as={Col} controlId="Profession Card Description">
      <Form.Label>Profession Card Description</Form.Label>
      <Form.Control as="textarea"  placeholder="Enter Profession Card Description"
        value={cardLikeToShareState} // up to 250 - like to share some info 
        onChange={event => {setCardLikeToShare(event.target.value)}}
      />
    </Form.Group>
  </Form.Row>
  <Button
   variant="primary" 
   type="Submit"
   onClick={submitcheker}>
    Submit Profile
  </Button>
</Form>
</Col>
</div>
    )
}

export default MainPageProfile 