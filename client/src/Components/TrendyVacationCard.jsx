import React from 'react';
import "./TrendyVacationCard.scss";
import { FaRegUser } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";

const TrendyVacationCard = ({ city, country, imgUrl, price, discount, quote, days, peoples }) => {
    return (
        <div className='trend-vac-card-container'>
            <img src={imgUrl} alt="destination" />
            <div className="days-peoples">
                <div className="days">
                    <CiCalendar style={{fontSize: "25px",color: "#7D7D7D", marginRight:'3px'}}/>
                    <p>{days} Days</p>
                </div>
                <div className="num-peoples">
                    <FaRegUser style={{fontSize: "20px",color: "#7D7D7D", marginRight:'3px'}}/>
                    <p>{peoples} People Going </p>
                </div>
            </div>
            <div className="place">
                <div className="location">
                    <h2>{city}</h2>
                    <div className="country">
                    <IoLocationOutline style={{ color: '#4AA5D2', fontSize:'25px' }} /><span>{country}</span>
                    </div>
                </div>
                <span>⭐⭐⭐⭐⭐</span>
            </div>
            <div className="price">
                <div className="correct">
                    <span>{price}</span>
                </div>
                <div className="wrong">
                    <span><del>{discount}</del></span>
                </div>
            </div>
            <div className="quote">
                <span>{quote}</span>
            </div>
            <button>Explore Now</button>

        </div>
    )
}

export default TrendyVacationCard;