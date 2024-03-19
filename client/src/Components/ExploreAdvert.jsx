import React from 'react';
import "./ExploreAdvert.scss";
import { FaPlayCircle } from "react-icons/fa";

const ExploreAdvert = () => {
  return (
    <div className='Advert-container'>
      <div className="content">
        <h1>Get Wonderful Experiences with Our <br/>Vacationa Rental Adventures!</h1>
        <p>Be a part of our vacationa rental adventures and get wonderful experiences<br/> throughout our journeys. Visit your dream places andget the maxamium<br/> satisfaction</p>
        <button>Explore Now</button>
      </div>
      <div className="video">
        <FaPlayCircle className='playButton' style={{fontSize:'40px', color:'#FFFFFF'}}/>
      </div>
    </div>
  )
}

export default ExploreAdvert
