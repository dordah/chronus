import React,{useState} from 'react'
import '../TradeRoom/search_component/search_table/user_card/CardUser.css'
import NavApp from '../NavApp/TopNavBar'


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
const [likeToShareState,setLikeToShare] = useState('')
const [linkToFacebookState,setLinkToFacebook] = useState('')

const submitHandler = () => {
    console.log('clicked');
    fetch('https://chronus-cda87.firebaseio.com/Profile.json',{
    method: 'POST',
    body: JSON.stringify({
        Image: imageState,
        FisrtName:fisrtNameState,
        LastName: lastNameState, 
        password: passwordState,
        Email: emailState,
        PhoneNumber: phoneNumberState,
        DateOfBirth: dateOfBitrhState,
        CardLikeToShare: cardLikeToShareState,
        LikeToExplore: likeToExploreState,
        LikeToShare: likeToShareState,
        LinkToFaceBook: linkToFacebookState
    }),
    headers: {'Content-Type': 'application/json'},
    }).then(response => {
        return response.json()
    }).then(responseData => {
        console.log(responseData.name);
    })
}

    return ( 
      <div>
          <NavApp></NavApp>
          <div>
          <img 
          className='picSize' 
          src ={`${imageState}`}
          />
          </div>
          <div>
          <input 
          placeholder="first name" 
          value={fisrtNameState}
          onChange={event => {setFisrtName(event.target.value)}}/>
          </div>
          <div>
          <input 
          placeholder="last name"
          value={lastNameState}
          onChange={event => {setLastName(event.target.value)}}/>
          </div>
          <div>
          <input 
          placeholder="password" 
          value={passwordState}
          onChange={event => {setPassword(event.target.value)}}/>
          </div>
          <div>
          <input 
          placeholder="email" 
          value={emailState}
          onChange={event => {setEmail(event.target.value)}}/>
          </div>
          <div>
          <input 
          placeholder="phone number" 
          value={phoneNumberState}
          onChange={event => {setPhoneNumber(event.target.value)}}/>
          </div>
          <div>
          <input 
          placeholder="date of birth" 
          value={dateOfBitrhState}
          onChange={event => {setDateOfBitrh(event.target.value)}}/>
          </div>
          <div>
          <textarea 
          placeholder="like to share card show" 
          value={cardLikeToShareState}
          onChange={event => {setCardLikeToShare(event.target.value)}}/>
          </div>
          <div>
          <textarea 
          placeholder="like to explore" 
          value={likeToExploreState}
          onChange={event => {setLikeToExplore(event.target.value)}}/>
          </div>
          <div>
          <textarea 
          placeholder="like to share" 
          value={likeToShareState}
          onChange={event => {setLikeToShare(event.target.value)}}/>
          </div>
          <div>
          <textarea 
          placeholder="link to facebook" 
          value={linkToFacebookState}
          onChange={event => {setLinkToFacebook(event.target.value)}}/>
          </div>
         <button onClick={submitHandler} >update profile</button>
      </div>
    )
}

export default MainPageProfile 