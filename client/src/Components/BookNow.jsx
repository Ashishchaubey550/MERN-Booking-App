import React from 'react';
import Card from "../Components/BookNowCard";
import "./BookNow.scss";
import data from "../Dummy Data/bookNow.json";
import { FaArrowRightLong } from "react-icons/fa6";

const BookNow = () => {
    const splitIntoRows = (cards, rowSize) => {
        const rows = [];
        for (let i = 0; i < cards.length; i += rowSize) {
            rows.push(cards.slice(i, i + rowSize));
        }
        return rows;
    };
    return (
        <div className='book-main text-center pt-36'>
            <h1 className='font-semibold mb-2 mt-14 text-[40px]'>Top Book Now</h1>
            <div className="book-card-container">
            {splitIntoRows(data, 4).map((row, index) => (
                <div key={index} className="vac-card-row">
                    {row.map((card, cardIndex) => (
                        <div key={cardIndex} className="vac-card-item">
                            <Card
                                name={card.name}
                                place={card.place}
                                price={card.price}
                                star={card.star}
                                img1={card.img1} 
                                img2={card.img2}
                                img3={card.img3}
                            />
                        </div>
                    ))}{" "}
                </div>
            ))}{" "}
            </div>
            <button>See all <FaArrowRightLong style={{marginLeft:'8px', marginBottom:'10px'}}/></button>
        </div>
    )
}

export default BookNow;
