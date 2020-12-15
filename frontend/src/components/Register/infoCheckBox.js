import React from 'react'
import '../../App.css'

const infoCheckBox = () => {
    return ( 
        <div className="FormField">
        <label className="FormField__CheckboxLabel">
            <input className="FormField__Checkbox" type="checkbox" name="hasAgreed"  /> I agree all statements in <a href="" className="FormField__TermsLink">terms of service</a>
        </label>
      </div>
    )
}

export default infoCheckBox