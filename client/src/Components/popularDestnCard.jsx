import React from 'react';
import "../styles/popularDestnCard.scss";
import { Button } from '@mui/material';

const popularDestnCard = ({ imageUrl, name, country, price }) => {
    return (
        <div className="destn-card">
            <img className="destination-image" src={imageUrl} alt="Destination" />
            <div className="destination-info">
                <h2>{name}</h2>
                <p>{country}</p>
            </div>
            <div className="bottom-section">
                <div className="price">
                    <p><span>{price}</span>/Person</p>
                </div>
                <Button variant='contained' className="book-now">Book Now</Button>
            </div>
        </div>
    );
}

export default popularDestnCard;