import React from 'react';
import {InputGroup,FormControl} from 'react-bootstrap';
import {Row,Col} from 'react-bootstrap';

const Search_bar= (props) => {

const changeHandler = (event) => {
  props.setSearchTerm(event.target.value)
}

return (
<div>
<Row style={{marginBottom: "25px", marginLeft: "5px"}} >
  <Col sm={8}>
<InputGroup >
    <FormControl
      placeholder="Search For a Candidate"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
      value={props.searchTerm}
      onChange={changeHandler}
    />
  </InputGroup>
    </Col>
  </Row>
</div>
)
}
export default Search_bar