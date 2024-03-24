import React from 'react';
import HeroBack from "./HeroBack.jsx";
import Header from "./Header.jsx";
import TravelInfo from "./Travelnfo.jsx";
import TicketNo from "./TicketNo.jsx";
import Holiday from "../assets/Holiday.mp4"

const HeroSection = () => {
  return (
    <div>
      <HeroBack videoSource={Holiday}
      />
      <Header/>
      <TravelInfo/>
      <TicketNo/>
    </div>  
  )
}

export default HeroSection