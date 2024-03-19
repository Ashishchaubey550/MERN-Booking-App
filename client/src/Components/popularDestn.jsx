import React from 'react';
import Card from "./popularDestnCard.jsx";
import "./popularDestn.scss";
import cardsData from "../Dummy Data/popularDestn.json";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const popularDestn = () => {
    // const renderCards = () => {
    //     return cardsData.map((card, index) => (
    //         <div key={index} className="pop-card-container">
    //             <Card
    //                 imageUrl={card.imageUrl}
    //                 name={card.name}
    //                 country={card.country}
    //                 price={card.price}
    //             />
    //         </div>
    //     ));
    // };

    const splitIntoRows = (cards, rowSize) => {
        const rows = [];
        for (let i = 0; i < cards.length; i += rowSize) {
            rows.push(cards.slice(i, i + rowSize));
        }
        return rows;
    };

    return (
        <div className="pop-container">
            <div className="pop-heading">
                <span>Find Popular<br/>Destination</span>
                <button>arrow</button>
                {/* <ArrowBackIos/>
                <ArrowForwardIos/> */}
                
            </div>
            {/* Render each row of cards */}
            {splitIntoRows(cardsData, 4).map((row, index) => (
                <div key={index} className="pop-card-row">
                    {row.map((card, cardIndex) => (
                        <div key={cardIndex} className="pop-card-item">
                            <Card
                                imageUrl={card.imageUrl}
                                name={card.name}
                                country={card.country}
                                price={card.price}
                            />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default popularDestn;
