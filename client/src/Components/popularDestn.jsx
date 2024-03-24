import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from "./popularDestnCard.jsx";
import data from "../Dummy Data/popularDestn.json";
import "./popularDestn.scss";
import { PiCaretRight, PiCaretLeft } from "react-icons/pi";

const popularDestn = () => {
    const sliderRef = useRef(null);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
    };

    const handlePrev = () => {
        sliderRef.current.slickPrev();
    }
    const handleNext = () => {
        sliderRef.current.slickNext();
    }

    return (
        <div className='popular-destn-container'>
            <div className="destn-cont">
                <div className='popular-destn-heading'>
                    <h2 className="">Find Popular<br /> Destinations</h2>
                    <div className="arrow-icons">
                        <PiCaretLeft onClick={handlePrev} style={{ margin: '5px', fontSize: '40px', color: 'white', border: '1px solid white', borderRadius: '20px', padding: '4px', cursor: 'pointer' }} />
                        <PiCaretRight onClick={handleNext} style={{ margin: '5px', fontSize: '40px', color: 'white', padding: '4px', cursor: 'pointer' }} />
                    </div>
                </div>
                <div className='pop-card-container'>
                    <Slider ref={sliderRef} {...settings}>
                        {data.map((card, index) => (
                            <div key={index}>
                                <Card
                                    imageUrl={card.imageUrl}
                                    name={card.name}
                                    country={card.country}
                                    price={card.price}
                                />
                            </div>))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default popularDestn;