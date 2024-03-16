import React from 'react';
import "./Explore.scss";

const Explore = () => {
  return (
    <div className="explore-container">
        <div className="nature">
        <div className="content">
                <span>PROMOTION</span>
                <h2>Explore Nature</h2>
                <button>View Packages</button>
            </div>
        </div>
        <div className="cities">
            <div className="content">
                <span>PROMOTION</span>
                <h2>Explore Cities</h2>
                <button>View Packages</button>
            </div>
        </div>
    </div>
  )
}

export default Explore
