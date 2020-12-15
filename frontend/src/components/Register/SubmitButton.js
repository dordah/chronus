import React from 'react'
import Ripples from 'react-ripples'
import '../../App.css'
const submitButton= (props) => {
    return ( 
        <div className="FormField">
            <Ripples>
                <button className="FormField__Button mr-20" onClick = {props.click} >{props.nameButton}</button>
            </Ripples> 
        </div>
    )
}

export default submitButton