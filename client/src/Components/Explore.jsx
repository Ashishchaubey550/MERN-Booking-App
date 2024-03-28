import React from 'react';
import '../styles/Explore.scss';
import { Button } from '@mui/material';

const Explore = () => {
  return (
    <div className='explore-container'>
      <div className='nature'>
        <div className='content'>
          <span>PROMOTION</span>
          <h2>Explore Nature</h2>
          <Button variant="contained">View Packages</Button>
        </div>
      </div>
      <div className='cities'>
        <div className='content'>
          <span>PROMOTION</span>
          <h2>Explore Cities</h2>
          <Button variant="contained">View Packages</Button>
        </div>
      </div>
    </div>
  )
}

export default Explore
