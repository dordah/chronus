import React from 'react'
import '../../App.css'
import {NavLink} from 'react-router-dom'

const sign_switcher = () => {
    return ( 
        <div>
        <div className="PageSwitcher">
        <NavLink to='/MainRegisterPage/' exact className="PageSwitcher__Item" activeClassName='PageSwitcher__Item--Active'>Sign In</NavLink>
        <NavLink to='/MainRegisterPage/sign-up' exact className="PageSwitcher__Item "activeClassName='PageSwitcher__Item--Active'>Sign Up</NavLink>
        </div>
        </div>
    )
}

export default sign_switcher




              