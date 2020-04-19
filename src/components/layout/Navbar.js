import React from 'react'
import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
 

const Navbar =() =>{
    const links = localStorage.getItem('store') ? <SignedInLinks/> : <SignedOutLinks/>
    return(
        <nav>
            <div className="myNav container">
                <span><Link to = '/'>Cafe</Link></span>
                {links}
            </div>
        </nav>
        
    )
}

export default Navbar