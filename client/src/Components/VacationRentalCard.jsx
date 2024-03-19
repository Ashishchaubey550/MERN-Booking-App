import React from "react";
import "./VacationRentalCard.scss";
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

const VacationRentalCard = ({imageUrl, name, place, title, peoples, beds, baths, sleeps, views, reviews, home}) => {
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
              {peoples}
              People Going
            </p>
          </div>
        </div>
        <div className="titl">
          <h2>{title}</h2>
          <span>⭐⭐⭐⭐⭐</span>
        </div>
      </div>
      <div className="vac-place">
        <p>{name}</p>
        <p><IoLocationOutline style={{marginRight: '4px'}}/>{place}</p>
      </div>
      <div className="vac-details">
        <vac className="cols">
            <vac className="row">
                <FaBed style={{color:'#7D7D7D'}}/>
                <p>Beds:</p>
            </vac>
            <vac className="row">
                <FaBath style={{color:'#7D7D7D'}}/>
                <p>Baths:</p>
            </vac>
            <vac className="row">
                <GiNightSleep style={{color:'#7D7D7D'}}/>
                <p>Sleeps:</p>
            </vac>
        </vac>
        <vac className="col">
            <vac className="row">
                <span>{beds}</span>
            </vac>
            <vac className="row">
                <span>{baths}</span>
            </vac>
            <vac className="row">
                <span>{sleeps}</span>
            </vac>
        </vac>
        <vac className="cols">
            <vac className="row">
                <FaHome style={{color:'#7D7D7D'}}/>
                <p>Home:</p>
            </vac>
            <vac className="row">
                <MdOutlineReviews style={{color:'#7D7D7D'}}/>
                <p>Reviews:</p>
            </vac>
            <vac className="row">
                <LiaStreetViewSolid style={{color:'#7D7D7D'}}/>
                <p>Views:</p>
            </vac>
        </vac>
        <vac className="col">
            <vac className="row">
                <span>{home}</span>
            </vac>
            <vac className="row">
                <span>{reviews}</span>
            </vac>
            <vac className="row">
                <span>{views}</span>
            </vac>
        </vac>   
      </div>
      <button>
        <CiSearch style={{ marginRight: "5px" }} />
        View Listing
      </button>
    </div>
  );
};

export default VacationRentalCard;
