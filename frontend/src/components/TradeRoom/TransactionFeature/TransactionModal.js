import React, {useState, useContext} from 'react';
import Button from 'react-bootstrap/Button'
import {Col,Modal,Container,Row} from 'react-bootstrap'
import {userInfoContext} from '../../Contexts/LoginContext/userInfoProvider'

const TransactionModal = (props) => {
  
const [Name] = useContext(userInfoContext)
const [fullNameState,setFullNameState] = Name
const [chatCardname,setChatCardname] = useState(props.chatCardname)
const [transactedAmount,setTransactedAmount] = useState('')
const [passwordState,setPasswordState] = useState('')

const transactionHandler = () => {
  console.log('clicked');
  fetch('https://chronus-cda87.firebaseio.com/Transactions.json',{
  method: 'POST',
  body: JSON.stringify({
    fullNameState,
    chatCardname,
    transactedAmount,
    passwordState
    }),
  headers: {'Content-Type': 'application/json'},
  }).then(response => {
      return response.json()
  }).then(responseData => {
      console.log(responseData.name);
  })
}

    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Please insert user information
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="show-grid">
            <Container>
              <Row>
              <Col sm={6}>
                <input 
                 placeholder="Amount"
                 value={transactedAmount}
                 onChange={event => {setTransactedAmount(event.target.value)}}/>
                </Col>
                <Col sm={6}>
                <input 
                 placeholder="password"
                 value={passwordState}
                 onChange={event => {setPasswordState(event.target.value)}}/>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button 
            onClick={() => 
              {transactionHandler();
              props.onHide();
            }}
            >Send</Button>
          </Modal.Footer>
        </Modal>
      );
    }
    
    export default TransactionModal