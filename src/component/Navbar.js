import React from 'react';
import abb_logo from "../assets/abb.png"

export default function Navbar(){
    return(
        <nav className="navbar">
            <img alt="" src={abb_logo}/>
            Airbnb
        </nav>
    )
}