import React from 'react'
import '../../App.css'

const infoInput = (props) => {
    return ( 
        <
        div className="FormField"> <label className="FormField__Label" htmlFor={props.htmlFor}>{props.labelname}</label>
         <textarea type={props.Inputtype} onChange={props.onchange} value={props.value} id={props.inputid} className="FormField__TextArea" placeholder={props.placeholder} name={props.Inputname}/>
 </div>
    )
}

export default infoInput
