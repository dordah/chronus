import React from 'react';
import {NavLink} from 'react-router-dom'

const project_Switcher = () => {
    return (
        <div>
            <li>     
             <NavLink to='/MainRegisterPage' exact >Register</NavLink>         
            </li> 
            <li> 
            <NavLink to='/MainTradeRoom' exact >Trade Room</NavLink>
            </li> 
            <li>     
             <NavLink to='/Profile' exact >Profile</NavLink>         
            </li> 
            <li> 
            <NavLink to='/AboutOurTeam' exact >About our team</NavLink>
            </li>   
            <li> 
            <NavLink to='/Home' exact >Home</NavLink>
            </li>
            <li> 
            <NavLink to='/Balance' exact >Balance</NavLink>
            </li>   
        </div>
    )
}

export default project_Switcher