import React from 'react';
import "./MustVisitCard.scss";
import { IoLocationOutline } from "react-icons/io5";

const MustVisitCard = ({ name, place, imgUrl, price, quote }) => {
  return (
    <div className='must-visit-card-container'>
        <img src={imgUrl} alt="destination" />
        <div className="place">
            <IoLocationOutline style={{color:'#4AA5D2'}}/><span>{place}</span>
        </div>
        <h6>{name}</h6>
        <span>⭐⭐⭐⭐⭐</span>
        <p>{price}</p>
        <div className="quote">
            <span>{quote}</span>
        </div>
        
    </div>
  )
}

export default MustVisitCard