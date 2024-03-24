import React from 'react';
import "./FeatureNewsCard.scss";
import { PiCaretCircleRightThin } from "react-icons/pi";
import { LuCalendarDays } from "react-icons/lu";

const FeatureNewsCard = ({ imgUrl, date, place, quote }) => {
  return (
    <div className="featureNews-cont">
      <img src={imgUrl} alt="" />
      <div className="info">
        <div className="date">
          <LuCalendarDays style={{marginRight:'6px'}}/>
          <span>{date}</span>
        </div>
        <h2>{place}</h2>
        <p>{quote}</p>
        <button><PiCaretCircleRightThin style={{marginRight:'6px', fontSize:'20px'}}/>See More</button>
      </div>
      
    </div>
  )
}

export default FeatureNewsCard;
