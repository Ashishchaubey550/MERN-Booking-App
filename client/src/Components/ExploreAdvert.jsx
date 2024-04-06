import React from 'react';
import "../styles/ExploreAdvert.scss";
import { FaPlayCircle } from "react-icons/fa";
import { Button } from '@mui/material';
import CustomButton1 from './CustomButton1';

const ExploreAdvert = () => {
  return (
    <div className='Advert-container'>
      <div className="content">
        <h1>Get Wonderful Experiences with Our <br/>Vacationa Rental Adventures!</h1>
        <p>Be a part of our vacationa rental adventures and get wonderful experiences<br/> throughout our journeys. Visit your dream places andget the maxamium<br/> satisfaction</p>
        <CustomButton1 content="Explore Now" variant='outlined' transform="capitalize" fontSize={16} padding="10px 10px" bgColor="#4aa5d2" textColor="white" borderRadius={5} hoverColor="white" hoverTextColor="#4aa5d2" hoverBorder="1px solid #4aa5d2"/>
      </div>
      <div className="video">
        <FaPlayCircle className='playButton' style={{fontSize:'40px', color:'#FFFFFF'}}/>
      </div>
    </div>
  )
}

export default ExploreAdvert
