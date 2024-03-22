import React from 'react';
import HeroBack from "./HeroBack.jsx";
import Header from "./Header.jsx";
import TravelInfo from "./Travelnfo.jsx";
import TicketNo from "./TicketNo.jsx";

const HeroSection = () => {
  return (
    <div>
      <HeroBack/>
      <Header/>
      <TravelInfo/>
      <TicketNo/>
    </div>
  )
}

export default HeroSection