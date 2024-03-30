import React from 'react';
import "../styles/HeroSectionBrowse.scss";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { IoCalendarOutline } from "react-icons/io5";


const HeroSectionBrowse = () => {
  return (
    <div className='browse-hero'>
      <div className="good-morning">
        <h1>Good Morning</h1>
        <span>Explore beautiful places in the world with LifeVista Vacation</span>
        <div className="check-button-grp">
          <button className="border-r-2">
            <IoLocationOutline className='check-icon-style'/>
            <div className='check-horiz'>
              <span>Location</span>
              <p>Add Destination</p>
            </div>
          </button>
          <button className="border-r-2">
            <IoCalendarOutline className='check-icon-style'/>
            <div className="check-horiz">
              <span>Check in</span>
              <p>Add dates</p>
            </div>
          </button>
          <button className="border-r-2">
            <IoCalendarOutline className='check-icon-style'/>
            <div className="check-horiz">
              <span>Check out</span>
              <p>Add dates</p>
            </div>
          </button>
          <button>
            <IoIosPeople className='check-icon-style'/>
            <div className="check-horiz">
              <span>Guests</span>
              <p>Add guests</p>
            </div>
          </button>
          <button style={{backgroundColor:'#4AA5D2', margin:'10px 8px 10px 20px',padding:'10px', borderRadius:'60px'}}>
            <IoIosSearch style={{color:'white', fontSize:'25px'}}/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroSectionBrowse
