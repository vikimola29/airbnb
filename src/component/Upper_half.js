import React from 'react';
import photo from "../assets/ph_grid.jpg"

export default function UpperMain() {
    return (
        <nav className="upper">
            <img alt="" src={photo} style={{borderRadius: '15px',}}/>

            <div className="upper-text">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </nav>
    )
}