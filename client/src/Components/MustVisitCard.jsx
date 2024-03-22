import React from 'react';
import "./MustVisitCard.scss";
import { IoLocationOutline } from "react-icons/io5";
import { Rate } from 'antd';

const MustVisitCard = ({ name, place, imgUrl, price, quote, star }) => {
  return (
    <div className='must-visit-card-container'>
        <img src={imgUrl} alt="destination" />
        <div className="place">
            <IoLocationOutline style={{color:'#4AA5D2'}}/><span>{place}</span>
        </div>
        <h6>{name}</h6>
        <Rate disabled value={star}/>
        <p>{price}</p>
        <div className="quote">
            <span>{quote}</span>
        </div>
        
    </div>
  )
}

export default MustVisitCard