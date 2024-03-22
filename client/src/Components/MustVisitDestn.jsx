import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from "./MustVisitCard.jsx";
import data from "../Dummy Data/mustVisit.json";
import "./MustVisitDestn.scss";

const MustVisitDestn = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
    };
    return (
        <div className='must-visit-container'>
            <div className="must-content">
                <div className="heading">
                    <h5>Must Visit Destinations</h5>
                    <h1>Exploring the Most Popular Gems Around the Globe</h1>
                </div>
                <div className='must-card-container'>
                    <Slider {...settings}>
                        {data.map((card, index) => (
                            <div key={index}>
                                <Card
                                    imgUrl={card.imgUrl}
                                    name={card.name}
                                    place={card.place}
                                    price={card.price}
                                    quote={card.quote}
                                />
                            </div>))}
                    </Slider>
                </div>
            </div>


        </div>
    )
}

export default MustVisitDestn