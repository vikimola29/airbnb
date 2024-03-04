import React from 'react';


export default function Card(props) {
    let badgeText
    if (props.card.openSpots === 0) {badgeText="Sold Out"}
    else if (props.card.country === "Online") { badgeText="Online"}
    return (
        <div className="card">

            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img className="card-img1" alt="" src={props.card.img_bg}/>
            <div className="card-rating">
                <img className="card-img2" alt="" src={props.card.img}/>
                <span>{props.card.rating}</span>
                <span>{props.card.rating_db}</span>
                <span> * </span>
                <span>{props.card.country}</span>
            </div>

            <p className="card-title">{props.card.title}</p>
            <p><span>From ${props.card.price}</span> / person</p>


        </div>
    )
}