import React,{useState, useContext} from 'react'
import Card from 'react-bootstrap/Card'
import {Row,Col} from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import TransactionModal from '../../../TransactionFeature/TransactionModal'
import {userInfoContext} from '../../../../Contexts/LoginContext/userInfoProvider'


const ChatCard = (props) => {

const [Name,Password,Email,isLoggedInCheck,Viewer] = useContext(userInfoContext)
const [viewer, setViewer] = Viewer

const [modalShow, setModalShow] = useState(false)

    return ( 
        <div >
          <Card>
              <Row>
                  <Col sm={3}>
                      <Image style={{marginTop: "15px", marginLeft: "10px", width: "70px", height: "75px"}} src= {props.Image} roundedCircle></Image>
                  </Col>
                  <Col sm={7}>
                      <Card.Body>
                          <Card.Title>
                              {props.profesison}
                          </Card.Title>
                          {props.name}
                       </Card.Body> 
                  </Col>
                  <Col sm={2}>
                  <DropdownButton  disabled={viewer == 0 || viewer == 1} style={{marginTop: "30px"}} id="dropdown-basic-button" title="">
                  <Dropdown.Item  href="#/action-1" onClick={props.removeCard} > Remove from list</Dropdown.Item>
                  <Dropdown.Item href="#/action-2" onClick={() => setModalShow(true)}>Transact money</Dropdown.Item>
                  </DropdownButton>     
                  </Col>
              </Row>
              <TransactionModal
               chatCardname = {props.name}
               show={modalShow}
               onHide={() => setModalShow(false)}/>  
          </Card>
        </div>
    )
}

export default ChatCard