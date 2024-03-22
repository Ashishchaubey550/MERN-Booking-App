import React from 'react';
import "./BestServices.scss";

const BestServices = () => {
  return (
    <div className='bestServices'>
      <span>CATEGORY</span>
      <h1>We Offer Best Services</h1>
      <div className="services-container">
        <div className="block1">
            <img src="img/guided-tours.png" alt="" />
            <h2>Guided Tours</h2>
            <p>Explore with confidence on our guided tours, led by knowledgeable experts.</p>
        </div>
        <div className="block2">
            <img src="img/flight.png" alt="" />
            <h2>Best Flight Options</h2>
            <p>Fly stress-free and on budget, with every detail taken care of for your ultimate convenience.</p>
        </div>
        <div className="block1">
            <img src="img/religious-tours.png" alt="" />
            <h2>Religious Tours</h2>
            <p>Explore sacred sites, connect with faith, and create lifelong memories.</p>
        </div>
        <div className="block1">
            <img src="img/medical-team.png" alt="" />
            <h2>Medical Tours</h2>
            <p>Stay covered, stay confident. Our medical insurance has you protected, always.</p>
        </div>
      </div>
    </div>
  )
}

export default BestServices
