import React from 'react';
import cardDetails from "../component/Card_details.js"
import Card from "./Card";

export default function DownMain() {
    const cardElements = cardDetails.map(card => {
        return (
            <Card
                key={card.id}

                card={card}

            />
        )
    })

    return (
        <nav className="down">
            {cardElements}
        </nav>
    )
}