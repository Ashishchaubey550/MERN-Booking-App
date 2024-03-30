import React from "react";
import "../styles/VacationRentalCard.scss";
import { FaBed, FaRegUser } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { LiaBathSolid, LiaBedSolid } from "react-icons/lia";
import { FaBath } from "react-icons/fa";
import { GiBed, GiSleepingBag } from "react-icons/gi";
import { GiNightSleep } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { MdOutlineReviews, MdReviews } from "react-icons/md";
import { LiaStreetViewSolid } from "react-icons/lia";
import { CiCalendar } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { Rate } from 'antd';
import { Button } from '@mui/material';

const VacationRentalCard = ({imageUrl, name, place, title, peoples, beds, baths, sleeps, views, reviews, home, star}) => {
  return (
    <div className="vac-rent-card">
      <img className="vac-image" src={imageUrl} alt="Destination" />
      <div className="vac-info">
        <div className="inq">
          <p><CiCalendar style={{marginRight:'5px', fontSize:'20px', fontWeight:'bold'}}/>Inquiry Online</p>
          <div className="num-peoples">
            <FaRegUser
              style={{
                fontSize: "large",
                color: "#7D7D7D",
              }}
            />
            <p>
              {peoples} People Going
            </p>
          </div>
        </div>
        <div className="titl">
          <h2>{title}</h2>
          <Rate value={star} allowHalf/>
        </div>
      </div>
      <div className="vac-place">
        <p>{name}</p>
        <p><IoLocationOutline style={{marginRight: '4px'}}/>{place}</p>
      </div>
      <div className="vac-details">
        <div className="cols">
            <div className="row">
                <FaBed style={{color:'#7D7D7D'}}/>
                <p>Beds:</p>
            </div>
            <div className="row">
                <FaBath style={{color:'#7D7D7D'}}/>
                <p>Baths:</p>
            </div>
            <div className="row">
                <GiNightSleep style={{color:'#7D7D7D'}}/>
                <p>Sleeps:</p>
            </div>
        </div>
        <div className="col">
            <div className="row">
                <span>{beds}</span>
            </div>
            <div className="row">
                <span>{baths}</span>
            </div>
            <div className="row">
                <span>{sleeps}</span>
            </div>
        </div>
        <div className="cols">
            <div className="row">
                <FaHome style={{color:'#7D7D7D'}}/>
                <p>Home:</p>
            </div>
            <div className="row">
                <MdOutlineReviews style={{color:'#7D7D7D'}}/>
                <p>Reviews:</p>
            </div>
            <div className="row">
                <LiaStreetViewSolid style={{color:'#7D7D7D'}}/>
                <p>Views:</p>
            </div>
        </div>
        <div className="col">
            <div className="row">
                <span>{home}</span>
            </div>
            <div className="row">
                <span>{reviews}</span>
            </div>
            <div className="row">
                <span>{views}</span>
            </div>
        </div>   
      </div>
      
      <Button variant="contained" startIcon={<CiSearch/>}>
        View Listing
      </Button>
    </div>
  );
};

export default VacationRentalCard;
