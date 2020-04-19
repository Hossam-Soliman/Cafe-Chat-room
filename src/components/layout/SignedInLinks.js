import React from 'react'
import {NavLink} from 'react-router-dom'
 

const SignedInLinks =() =>{
    return(
        <div className="SignedInLinks">
            <ul> 
                <li><NavLink to = '/profile'  className="pink">{localStorage.getItem('name').replace(/ .*/, '')}</NavLink></li>
                <li onClick = {(event)=> {window.location.href = '/home'}}><NavLink to = '/home'>Home</NavLink> </li>
                <li><NavLink to = '/create'>Create</NavLink> </li>
                <li onClick = {(event)=> {localStorage.clear('store');  window.location.href = '/'}}><NavLink to = '/'>Log Out</NavLink></li>    
            </ul>
        
        </div>
    )
}

export default SignedInLinks