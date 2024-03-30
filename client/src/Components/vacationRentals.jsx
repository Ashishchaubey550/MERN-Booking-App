import React from "react";
import Card from "./VacationRentalCard.jsx";
import "../styles/VacationRentals.scss";
import cardsData from "../Dummy Data/vacationRentals.json";

const VacationRentals = ({title}) => {

    const splitIntoRows = (cards, rowSize) => {
        const rows = [];
        for (let i = 0; i < cards.length; i += rowSize) {
            rows.push(cards.slice(i, i + rowSize));
        }
        return rows;
    };

    return (
        <div className="vacation-rentals-container">
            <h1>{title}</h1>
            {splitIntoRows(cardsData, 3).map((row, index) => (
                <div key={index} className="vac-card-row">
                    {row.map((card, cardIndex) => (
                        <div key={cardIndex} className="vac-card-item">
                            <Card
                                imageUrl={card.imageUrl}
                                title={card.title}
                                name={card.name}
                                place={card.place}
                                peoples={card.peoples}
                                beds={card.beds}
                                baths={card.baths}
                                sleeps={card.sleeps}
                                home={card.home}
                                reviews={card.reviews}
                                views={card.views}
                                star={card.star}
                            />
                        </div>
                    ))}{" "}
                </div>
            ))}{" "}
        </div>
    );
};

export default VacationRentals;
